"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ProductSummary } from "@/types/product";

export interface CartItem {
  product: ProductSummary;
  quantity: number;
}

export interface Toast {
  id: number;
  message: string;
  tone: "info" | "error" | "success";
}

interface ShopContextType {
  cart: CartItem[];
  favorites: string[];
  compareList: ProductSummary[];
  isCartOpen: boolean;
  quickViewProduct: ProductSummary | null;
  toasts: Toast[];
  addToCart: (product: ProductSummary, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleFavorite: (productId: string) => void;
  addToCompare: (product: ProductSummary) => void;
  removeFromCompare: (productId: string) => void;
  clearCompare: () => void;
  setIsCartOpen: (open: boolean) => void;
  setQuickViewProduct: (product: ProductSummary | null) => void;
  showToast: (message: string, tone?: Toast["tone"]) => void;
  dismissToast: (id: number) => void;
  totalCartCount: number;
  totalCartPrice: number;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

const CART_KEY = "astroman_cart_v2";
const FAVS_KEY = "astroman_favs";
const MAX_COMPARE = 4;

// localStorage can throw (private mode, blocked storage) — never let it break the shop
function readStorage<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* ignore */
  }
}

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [compareList, setCompareList] = useState<ProductSummary[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] =
    useState<ProductSummary | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Load saved cart & favorites once on the client
  useEffect(() => {
    setCart(readStorage<CartItem[]>(CART_KEY, []));
    setFavorites(readStorage<string[]>(FAVS_KEY, []));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) writeStorage(CART_KEY, cart);
  }, [cart, hydrated]);

  useEffect(() => {
    if (hydrated) writeStorage(FAVS_KEY, favorites);
  }, [favorites, hydrated]);

  const dismissToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    (message: string, tone: Toast["tone"] = "info") => {
      const id = Date.now() + Math.random();
      setToasts((prev) => [...prev, { id, message, tone }]);
      setTimeout(() => dismissToast(id), 3500);
    },
    [dismissToast],
  );

  const addToCart = useCallback((product: ProductSummary, quantity = 1) => {
    setCart((prev) => {
      const exists = prev.some((i) => i.product.id === product.id);
      return exists
        ? prev.map((i) =>
            i.product.id === product.id
              ? { ...i, quantity: i.quantity + quantity }
              : i,
          )
        : [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCart((prev) => prev.filter((i) => i.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setCart((prev) =>
      quantity <= 0
        ? prev.filter((i) => i.product.id !== productId)
        : prev.map((i) =>
            i.product.id === productId ? { ...i, quantity } : i,
          ),
    );
  }, []);

  const toggleFavorite = useCallback((productId: string) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  }, []);

  // Compare works only within one category, max 4 items
  const addToCompare = useCallback(
    (product: ProductSummary) => {
      if (compareList.some((p) => p.id === product.id)) return;
      if (
        compareList.length > 0 &&
        compareList[0].categorySlug !== product.categorySlug
      ) {
        showToast(
          `შედარება შესაძლებელია მხოლოდ ერთი კატეგორიის ნივთებს შორის (${compareList[0].categoryName}).`,
          "error",
        );
        return;
      }
      if (compareList.length >= MAX_COMPARE) {
        showToast(`შესადარებლად შეგიძლიათ აირჩიოთ მაქსიმუმ ${MAX_COMPARE} პროდუქტი.`, "error");
        return;
      }
      setCompareList((prev) => [...prev, product]);
      showToast("დაემატა შედარებაში", "success");
    },
    [compareList, showToast],
  );

  const removeFromCompare = useCallback((productId: string) => {
    setCompareList((prev) => prev.filter((p) => p.id !== productId));
  }, []);

  const clearCompare = useCallback(() => setCompareList([]), []);

  const value = useMemo<ShopContextType>(
    () => ({
      cart,
      favorites,
      compareList,
      isCartOpen,
      quickViewProduct,
      toasts,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleFavorite,
      addToCompare,
      removeFromCompare,
      clearCompare,
      setIsCartOpen,
      setQuickViewProduct,
      showToast,
      dismissToast,
      totalCartCount: cart.reduce((acc, i) => acc + i.quantity, 0),
      totalCartPrice: cart.reduce(
        (acc, i) => acc + i.product.price * i.quantity,
        0,
      ),
    }),
    [
      cart,
      favorites,
      compareList,
      isCartOpen,
      quickViewProduct,
      toasts,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleFavorite,
      addToCompare,
      removeFromCompare,
      clearCompare,
      showToast,
      dismissToast,
    ],
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) throw new Error("useShop must be used within ShopProvider");
  return context;
}

"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, ALL_PRODUCTS } from "@/data/products";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface ShopContextType {
  cart: CartItem[];
  favorites: string[];
  compareList: Product[];
  isCartOpen: boolean;
  quickViewProduct: Product | null;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleFavorite: (productId: string) => void;
  addToCompare: (product: Product) => void;
  removeFromCompare: (productId: string) => void;
  clearCompare: () => void;
  setIsCartOpen: (open: boolean) => void;
  setQuickViewProduct: (product: Product | null) => void;
  totalCartCount: number;
  totalCartPrice: number;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [compareList, setCompareList] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(
    null,
  );

  // localStorage-დან ჩატვირთვა
  useEffect(() => {
    const savedFavs = localStorage.getItem("astroman_favs");
    if (savedFavs) {
      try {
        setFavorites(JSON.parse(savedFavs));
      } catch (e) {}
    }

    const savedCart = localStorage.getItem("astroman_cart");
    if (savedCart) {
      try {
        const rawCart: { id: string; quantity: number }[] =
          JSON.parse(savedCart);
        const hydrated = rawCart
          .map((item) => {
            const product = ALL_PRODUCTS.find((p) => p.id === item.id);
            return product ? { product, quantity: item.quantity } : null;
          })
          .filter(Boolean) as CartItem[];
        setCart(hydrated);
      } catch (e) {}
    }
  }, []);

  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    const serialized = newCart.map((i) => ({
      id: i.product.id,
      quantity: i.quantity,
    }));
    localStorage.setItem("astroman_cart", JSON.stringify(serialized));
  };

  const addToCart = (product: Product, quantity = 1) => {
    let updated: CartItem[];
    const exists = cart.find((i) => i.product.id === product.id);
    if (exists) {
      updated = cart.map((i) =>
        i.product.id === product.id
          ? { ...i, quantity: i.quantity + quantity }
          : i,
      );
    } else {
      updated = [...cart, { product, quantity }];
    }
    saveCart(updated);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    saveCart(cart.filter((i) => i.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    saveCart(
      cart.map((i) => (i.product.id === productId ? { ...i, quantity } : i)),
    );
  };

  const toggleFavorite = (productId: string) => {
    setFavorites((prev) => {
      const updated = prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId];
      localStorage.setItem("astroman_favs", JSON.stringify(updated));
      return updated;
    });
  };

  // შედარება მხოლოდ ერთი და იგივე კატეგორიის ნივთებზე (მაქსიმუმ 4)
  const addToCompare = (product: Product) => {
    setCompareList((prev) => {
      if (prev.find((p) => p.id === product.id)) return prev;
      if (prev.length > 0 && prev[0].categorySlug !== product.categorySlug) {
        alert(
          `შედარება შესაძლებელია მხოლოდ ერთი და იგივე კატეგორიის ნივთებს შორის (${prev[0].categoryName}).`,
        );
        return prev;
      }
      if (prev.length >= 4) {
        alert("შესადარებლად შეგიძლიათ აირჩიოთ მაქსიმუმ 4 პროდუქტი.");
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeFromCompare = (productId: string) => {
    setCompareList((prev) => prev.filter((p) => p.id !== productId));
  };

  const clearCompare = () => setCompareList([]);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalCartPrice = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0,
  );

  return (
    <ShopContext.Provider
      value={{
        cart,
        favorites,
        compareList,
        isCartOpen,
        quickViewProduct,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleFavorite,
        addToCompare,
        removeFromCompare,
        clearCompare,
        setIsCartOpen,
        setQuickViewProduct,
        totalCartCount,
        totalCartPrice,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) throw new Error("useShop must be used within ShopProvider");
  return context;
};

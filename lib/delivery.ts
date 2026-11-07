/** Delivery prices — same as astroman.ge (product page "მიწოდების პირობები") */
export const DELIVERY_ZONES = {
  tbilisi: { label: "თბილისი", price: 7, days: "2 სამუშაო დღე" },
  regions: { label: "რეგიონები", price: 10, days: "2–5 სამუშაო დღე" },
} as const;

export type DeliveryZone = keyof typeof DELIVERY_ZONES;

export const FREE_DELIVERY_FROM = 250;

export function deliveryPrice(zone: DeliveryZone, subtotal: number): number {
  return subtotal >= FREE_DELIVERY_FROM ? 0 : DELIVERY_ZONES[zone].price;
}

export const PAYMENT_METHODS = {
  // online card payment needs a bank (TBC / BOG) merchant account — not connected yet
  card: { label: "ბარათით ონლაინ", note: "მალე", available: false },
  transfer: { label: "საბანკო გადარიცხვა", note: "რეკვიზიტებს ოპერატორი გამოგიგზავნით", available: true },
  installment: { label: "განვადება", note: "ოპერატორი დაგეხმარებათ გაფორმებაში", available: true },
  cash: { label: "ნაღდი ანგარიშსწორება", note: "მიტანისას (გამონაკლის შემთხვევაში)", available: true },
} as const;

export type PaymentMethod = keyof typeof PAYMENT_METHODS;

/** Georgian phone → "5XX XX XX XX", or null if it doesn't look valid */
export function normalizePhone(raw: string): string | null {
  let digits = raw.replace(/\D/g, "");
  if (digits.startsWith("995")) digits = digits.slice(3);
  if (digits.length !== 9) return null;
  return digits.replace(/(\d{3})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4");
}

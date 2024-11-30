export const COUPON_CODES = {
    BLAKFRI1292: "BLAKFRI1292",
    BFRIDAY: "BFRIDAY",
    XMAS2021: "XMAS2021",
    NY2023: "NY2023" 
} as const;

export type CouponCode = keyof typeof COUPON_CODES;
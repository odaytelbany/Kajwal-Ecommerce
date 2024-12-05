import { COUPON_CODES } from "@/sanity/lib/sales/couponCodes";
import { getActiveSaleByCouponCode } from "@/sanity/lib/sales/getActiveSaleByCouponCode";

async function BlackFridayBanner() {
    const sale = await getActiveSaleByCouponCode(COUPON_CODES.WHITEFRI123);
    if (!sale?.isActive) { 
        return null;
    }
    return (
        <div className="bg-gradient-to-r from-black to-red-600 text-white px-4 py-6 sm:px-6 sm:py-8 mx-4 mt-2 rounded-lg shadow-lg">
            <div className="container mx-auto flex flex-col items-end justify-between rtl">
                <div className="flex-1 flex-col mb-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-right mb-4">
                        {sale?.title}
                    </h2>
                    <p className="text-right text-lg sm:text-xl md:text-2xl font-semibold mb-6">
                        {sale?.description}
                    </p>
                    <div className="flex justify-end">
                        <div className="flex bg-white text-black py-3 px-5 rounded-full shadow-md transform hover:scale-105 transition duration-300">
                            <span className="font-bold text-sm sm:text-base md:text-lg text-right">
                                <span className="text-red-600">{sale?.couponCode}</span>
                                إستخدم الكود لتحصل على خصم 
                                <span className="ml-2 font-bold text-lg sm:text-xl md:text-2xl text-right">
                                    {`%${sale?.discountAmount}`}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlackFridayBanner;

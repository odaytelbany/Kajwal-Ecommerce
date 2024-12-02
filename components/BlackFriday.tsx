import { COUPON_CODES } from "@/sanity/lib/sales/couponCodes";
import { getActiveSaleByCouponCode } from "@/sanity/lib/sales/getActiveSaleByCouponCode";

async function BlackFridayBanner() {
    const sale = await getActiveSaleByCouponCode(COUPON_CODES.WHITEFRI123);
    if (!sale?.isActive) { 
        return null;
    }
    return <div className="bg-gradient-to-r from-black to-red-600 text-white px-6 py-10 mx-4 mt-2  rounded-lg shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
            <div className="flex-1 flex-col">
                <h2 className="text-3xl sm:text-5xl font-extrabold text-right mb-4 rtl">
                    {sale.title}
                </h2>
                <p className="text-right text-xl sm:text-3xl font-semibold mb-6 ">
                    {sale.description}
                </p>
                <div className="flex self-end place-self-end">
                    <div className="self-start flex bg-white text-black py-4 px-6 rounded-full shadow-md transform hover:scale-105 transtion duration-300">
                        <span className="font-bold text-base sm:text-sm text-right">
                            <span className="text-red-600">{sale.couponCode}</span>
                            إستخدم الكود لتحصل على خصم { <span className="ml-2 font-bold text-base sm:text-xl text-right">
                             {`%${sale.discountAmount}`}
                            </span>}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default BlackFridayBanner;
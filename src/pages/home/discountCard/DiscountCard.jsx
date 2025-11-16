import grabCard from "../../../assets/banners/grabBanner.gif";
import couponCard from "../../../assets/banners/couponCard.png";
import saleLogo from "../../../assets/banners/11saleLogo.png";

function DiscountCard() {
    return (
        <div className="bg-primary p-4 ">
            <div className="flex justify-between items-center container mx-auto">
                <div>
                    <h1 className="text-2xl mb-2 text-white font-semibold">
                        Sales Ends: Nov 20, 13:59 (GMT+6)
                    </h1>
                    <img className="mb-2" src={grabCard} alt="" />
                    <img src={couponCard} alt="" />
                </div>
                <div>
                    <img className="mx-auto" src={saleLogo} alt="" />
                </div>
            </div>
        </div>
    );
}

export default DiscountCard;

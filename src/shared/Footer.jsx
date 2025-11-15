import unionpay from "../assets/icons/unionpay.png";
import mastercard from "../assets/icons/mastercard.png";
import jcb from "../assets/icons/jcb.png";
import amex from "../assets/icons/amex.png";
import visa from "../assets/icons/visa.png";
import {
    FaFacebookMessenger,
    FaFacebookSquare,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
function Footer() {
    return (
        <div className="bg-[#e8e8e8]">
            <footer className="footer sm:footer-horizontal bg-[#e8e8e8] p-10">
                <nav>
                    <h6 className="text-black font-semibold text-[16px] mb-2">
                        Customer Service
                    </h6>
                    <a className="link link-hover">Help Center</a>
                    <a className="link link-hover">Transaction Service</a>
                    <a className="link link-hover">
                        Agreement for non EU/Uk Consumers
                    </a>
                    <a className="link link-hover">
                        Terms and Conditions for EU/EEA/UK Consumers
                        (Transactions)
                    </a>
                    <a className="link link-hover">Take our feedback survey</a>
                </nav>
                <nav>
                    <h6 className="text-black font-semibold text-[16px] mb-2">
                        Shopping with us
                    </h6>
                    <a className="link link-hover">Making Payments</a>
                    <a className="link link-hover">Delivery Options</a>
                    <a className="link link-hover">Buyer Protection</a>
                </nav>
                <nav>
                    <h6 className="text-black font-semibold text-[16px] mb-2">
                        Collaborate with us
                    </h6>
                    <a className="link link-hover">Partnership</a>
                    <a className="link link-hover">Affiliate Programme</a>
                    <a className="link link-hover">DS Center</a>
                    <a className="link link-hover">Seller Login</a>
                    <a className="link link-hover">中国卖家入驻</a>
                    <a className="link link-hover">
                        Non-Chinese Seller Registration
                    </a>
                    <a className="link link-hover">
                        Become a payment partner with us
                    </a>
                </nav>
                <nav>
                    <h6 className="text-black font-semibold text-[16px] mb-2">
                        Pay With
                    </h6>
                    <div className="flex items-center gap-2">
                        <img className="w-12" src={visa} alt="" />
                        <img className="w-12" src={mastercard} alt="" />
                        <img className="w-12" src={unionpay} alt="" />
                        <img className="w-12" src={jcb} alt="" />
                        <img className="w-12" src={amex} alt="" />
                    </div>
                </nav>
                <nav>
                    <h6 className="text-black font-semibold text-[16px] mb-2">
                        Stay connected
                    </h6>
                    <div className="flex gap-2">
                        <FaFacebookSquare className="text-3xl" />
                        <FaTwitter className="text-3xl" />
                        <FaInstagram className="text-3xl" />
                        <FaFacebookMessenger className="text-3xl" />
                        <RiWhatsappFill className="text-3xl" />
                    </div>
                </nav>
            </footer>
            <div className="px-10 pb-10 grid grid-cols-2 gap-12">
                <div>
                    <h6 className="text-black font-semibold text-[16px] mb-2">
                        Help
                    </h6>
                    <p>
                        Help Center, Disputes & Reports, Return&refund policy,
                        Report IPR infringement, DSA/OSA Information, Integrity
                        Compliance, Transparency Center, Submit report
                        (non-registered users)
                    </p>
                </div>
                <div>
                    <h6 className="text-black font-semibold text-[16px] mb-2">
                        AliExpress Multi-Language Sites
                    </h6>
                    <p>
                        Russian, Portuguese, Spanish, French, German, Italian,
                        Dutch, Turkish, Japanese, Korean, Thai, Arabic, Hebrew,
                        Polish
                    </p>
                </div>
                <div>
                    <h6 className="text-black font-semibold text-[16px] mb-2">
                        Browse by Category
                    </h6>
                    <p>
                        All Popular, Product, Promotion, Low Price, Great Value,
                        Reviews, Wiki, Blog, Video
                    </p>
                </div>
                <div>
                    <h6 className="text-black font-semibold text-[16px] mb-2">
                        Alibaba Group
                    </h6>
                    <p>
                        Alibaba Group Website, AliExpress, Alimama, Alipay,
                        Fliggy, Alibaba Cloud, Alibaba International,
                        AliTelecom, DingTalk, Juhuasuan, Taobao Marketplace,
                        Tmall, Taobao Global, AliOS, 1688
                    </p>
                </div>
            </div>
            <div className="bg-black text-white px-10 py-6 text-sm">
                <p>
                    Intellectual Property Protection - Privacy Policy - Sitemap
                    - Terms of Use - Information for EU consumers - Legal
                    Information / Imprint - Transaction Services Agreement for
                    non-EU/UK Consumers - Terms and Conditions for EU/EEA/UK
                    Consumers - User Information Legal Enquiry Guide ©️2010-2025
                    AliExpress.com. All rights reserved. 增值电信业务经营许可证
                    增值电信业务经营许可证 浙B2-20120091-8 浙公网安备 浙公网安备
                    33010802002248号
                </p>
            </div>
        </div>
    );
}

export default Footer;

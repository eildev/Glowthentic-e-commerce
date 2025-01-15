import HeadTitle from "../../components/typography/HeadTitle";
import image1 from '../../assets/img/latest-banner/7.png'
import image2 from '../../assets/img/latest-banner/8.png'
import image3 from '../../assets/img/latest-banner/9.png'
import Badge from "../../components/typography/Badge";

const LatestBannerSection = () => {
    return (
        <div className="px-5 py-5">
            <HeadTitle className="text-center mb-5 lg:text-3xl">
                Discover the Latest <br /> Beauty Trends
            </HeadTitle>

            <div className="grid lg:grid-cols-4 gap-5 ">
                <div className="lg:col-span-2 relative">
                    <img src={image1} alt="Latest Banner" />
                    <div className="absolute top-5 left-5 z-10">
                        <Badge className="rounded-3xl bg-primary px-5 py-2 font-medium">New</Badge>
                    </div>
                </div>
                <div className="relative">
                    <img src={image2} alt="Latest Banner" />
                    <div className="absolute top-5 left-5 z-10">
                        <Badge className="rounded-3xl bg-primary px-5 py-2 font-medium shadow-md">New</Badge>
                    </div>
                </div>
                <div className="relative">
                    <img src={image3} alt="Latest Banner" />
                    <div className="absolute top-5 left-5 z-10">
                        <Badge className="rounded-3xl bg-primary px-5 py-2 font-medium">New</Badge>
                    </div>
                </div>
                <div className="relative">
                    <img src={image2} alt="Latest Banner" />
                    <div className="absolute top-5 left-5 z-10">
                        <Badge className="rounded-3xl bg-primary px-5 py-2 font-medium">New</Badge>
                    </div>
                </div>
                <div className="relative">
                    <img src={image3} alt="Latest Banner" />
                    <div className="absolute top-5 left-5 z-10">
                        <Badge className="rounded-3xl bg-primary px-5 py-2 font-medium">New</Badge>
                    </div>
                </div>
                <div className="lg:col-span-2 relative">
                    <img src={image1} alt="Latest Banner" />
                    <div className="absolute top-5 left-5 z-10">
                        <Badge className="rounded-3xl bg-primary px-5 py-2 font-medium">New</Badge>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LatestBannerSection;
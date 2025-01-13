import HeadTitle from "../../components/typography/HeadTitle";
import bannerImage1 from '../../assets/img/banner/banner-image-1.png';
import Banner from "../../components/banner/Banner";

const BannerSection = () => {
    return (
        <div>
            <Banner image={bannerImage1}>
                <HeadTitle>Free Shipping Beauty</HeadTitle>
            </Banner>
        </div>
    );
};

export default BannerSection;
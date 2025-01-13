import HeadTitle from "../../components/typography/HeadTitle";
// import Banner from "../../components/banner/Banner";
import RegularButton from "../../components/typography/RegularButton";
import bannerImage1 from '../../assets/img/banner/banner-image-1.png';
import bannerImage2 from '../../assets/img/banner/banner-image-2.png';
import bannerImage3 from '../../assets/img/banner/banner-image-3.png';
import bannerImage4 from '../../assets/img/banner/banner-image-4.png';
import bannerImage5 from '../../assets/img/banner/banner-image-5.png';
import DynamicBanner from "../../components/banner/DynamicBanner";

const data = [
    {
        title: 'Free Shipping Beauty',
        details: '',
        price: '',
        button: 'book now',
        url: '#',
        image: bannerImage1,
        colspan: 4,
    },
    {
        title: 'Beauty & Care',
        details: '',
        price: '',
        button: 'Discover Now',
        url: '#',
        image: bannerImage2,
        colspan: 2,
    },
    {
        title: 'Get Your 50% Off',
        details: 'Nourish your skin with toxin-free cosmetic products.',
        price: '',
        button: 'Shop Now',
        url: '#',
        image: bannerImage3,
        colspan: 4,
    },
    {
        title: 'Check This Out',
        details: 'FROM',
        price: '$169',
        button: 'Shop Now',
        url: '#',
        image: bannerImage4,
        colspan: 1,
    },
    {
        title: 'Body Lotion',
        details: 'FROM',
        price: '$169',
        button: 'Shop Now',
        url: '#',
        image: bannerImage5,
        colspan: 1,
    },
]

const BannerSection = () => {
    return (
        <div className="py-5 px-5 grid lg:grid-cols-6 gap-5">
            {data.map((element, index) => (
                <DynamicBanner image={element?.image} key={index} className={`rounded-xl col-span-${element?.colspan}`} >
                    <HeadTitle className="text-white">{element?.title ?? ""}</HeadTitle>
                    <p className="text-white">{element?.details ?? ""}</p>
                    <RegularButton >{element?.button ?? ""}</RegularButton>
                </DynamicBanner>
            ))}
        </div>


    );
};

export default BannerSection;
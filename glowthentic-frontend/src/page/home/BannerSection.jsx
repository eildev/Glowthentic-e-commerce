import HeadTitle from "../../components/typography/HeadTitle";
import Banner from "../../components/banner/Banner";
import RegularButton from "../../components/typography/RegularButton";
import bannerImage1 from '../../assets/img/banner/banner-image-1.png';
import bannerImage2 from '../../assets/img/banner/3.png';
import bannerImage3 from '../../assets/img/banner/4.png';
import bannerImage4 from '../../assets/img/banner/5.png';
import bannerImage5 from '../../assets/img/banner/6.png';

const data = [
    {
        title: 'Free Shipping Beauty',
        details: '',
        price: '',
        button: 'book now',
        url: '#',
        image: bannerImage1,
    },
    {
        title: 'Beauty & Care',
        details: '',
        price: '',
        button: 'Discover Now',
        url: '#',
        image: bannerImage2,
    },
    {
        title: 'Get Your 50% Off',
        details: 'Nourish your skin with toxin-free cosmetic products.',
        price: '',
        button: 'Shop Now',
        url: '#',
        image: bannerImage3,
    },
    {
        title: 'Check This Out',
        details: 'FROM',
        price: '$169',
        button: 'Shop Now',
        url: '#',
        image: bannerImage4,
    },
    {
        title: 'Body Lotion',
        details: 'FROM',
        price: '$169',
        button: 'Shop Now',
        url: '#',
        image: bannerImage5,
    },
]

const BannerSection = () => {
    return (
        <div className="my-5 mx-5">
            {data.map((element, index) => (
                <Banner image={element?.image} key={index + 1} className="rounded-md" >
                    <HeadTitle className="text-white">{element?.title ?? ""}</HeadTitle>
                    <p>{element?.details ?? ""}</p>
                    <RegularButton>{element?.button ?? ""}</RegularButton>
                </Banner>
            ))}
        </div>
    );
};

export default BannerSection;
import HeadTitle from '../../components/typography/HeadTitle';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const items = [
    {
        img: 'https://swiperjs.com/demos/images/nature-1.jpg',
        title: 'Beautya Capture Total Dreamskin Care & Perfect',
        price: '$76.00',
        description: 'Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration'
    },
    {
        img: 'https://swiperjs.com/demos/images/nature-2.jpg',
        title: 'Beautya Capture Total Dreamskin Care & Perfect',
        price: '$76.00',
        description: 'Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration'
    },  
    {
        img: 'https://swiperjs.com/demos/images/nature-3.jpg',
        title: 'Beautya Capture Total Dreamskin Care & Perfect',
        price: '$76.00',
        description: 'Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration'
    },
    {
        img: 'https://swiperjs.com/demos/images/nature-4.jpg',
        title: 'Beautya Capture Total Dreamskin Care & Perfect',
        price: '$76.00',
        description: 'Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration'
    },  
    {
        img: 'https://swiperjs.com/demos/images/nature-5.jpg',
        title: 'Beautya Capture Total Dreamskin Care & Perfect',
        price: '$76.00',
        description: 'Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration'
    },
    {
        img: 'https://swiperjs.com/demos/images/nature-6.jpg',
        title: 'Beautya Capture Total Dreamskin Care & Perfect',
        price: '$76.00',
        description: 'Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration'
    },  
    {
        img: 'https://swiperjs.com/demos/images/nature-7.jpg',
        title: 'Beautya Capture Total Dreamskin Care & Perfect',
        price: '$76.00',
        description: 'Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration'
    },
    {
        img: 'https://swiperjs.com/demos/images/nature-8.jpg',
        title: 'Beautya Capture Total Dreamskin Care & Perfect',
        price: '$76.00',
        description: 'Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration'
    },  
]

const RecommendedSlider = () => {
    return (
        <div>
            <HeadTitle className="text-center pt-4 pb-1">
                Recommended Skincare Routine
            </HeadTitle>
            <div className='relative'>
                <Swiper

                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    navigation={{
                        nextEl: '.button-next2',
                        prevEl: '.button-prev2',
                    }}
                    spaceBetween={24}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper my-8"
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 10 },
                        640: { slidesPerView: 3, spaceBetween: 16 }, 
                        1024: { slidesPerView: 3, spaceBetween: 24 }, 
                        1280: { slidesPerView: 4, spaceBetween: 24 }  
                    }}
                >
                    {
                        items.map((item, index) => (
                            <SwiperSlide key={index} className='cursor-pointer'>
                        <div className='text-left border border-[#DFDFDF]'>
                            <img src={item.img} alt="" className='md:min-h-[384px] min-h-[202px] object-cover md:max-h-[384px]' />
                            <div className='p-4 pb-6 bg-white'>
                                <h3 className='text-[#0C0C0C] sm:text-base text-sm sm:font-bold font-semibold'>{item.title}</h3>
                                <p className='text-[#0C0C0C] text-[12px] my-2'>{item.description}</p>
                                <p className='text-[#FA8232] sm:text-lg text-sm'>{item.price}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className='lg:flex hidden button-prev2 cursor-pointer w-[40px] h-[40px] bg-white border border-[#CBCBCB] justify-center items-center absolute top-[50%] left-0 z-20 translate-x-[-50%] translate-y-[-100%]'>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.33301 0.33334L0.666341 7.00001L7.33301 13.6667L7.33301 0.33334Z" fill="#0C0C0C" />
                    </svg>
                </div>
                <div className='lg:flex hidden button-next2 cursor-pointer w-[40px] h-[40px] bg-white border border-[#CBCBCB] justify-center items-center absolute right-0 top-[50%] translate-x-[50%] translate-y-[-100%] z-20'>
                    <svg className='rotate-[180deg]' width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.33301 0.33334L0.666341 7.00001L7.33301 13.6667L7.33301 0.33334Z" fill="#0C0C0C" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default RecommendedSlider;
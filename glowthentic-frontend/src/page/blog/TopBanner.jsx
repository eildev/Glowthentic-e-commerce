import React from 'react';
import img1 from '../../assets/img/blog/blog-image-1.png'
import img2 from '../../assets/img/blog/blog-image-2.png'
import img3 from '../../assets/img/blog/blog-image-3.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { imagePath } from '../../utils/imagePath';

const TopBanner = ({latestArticle}) => {
    const img1 = imagePath(latestArticle[0]?.image);
    const img2 = imagePath(latestArticle[1]?.image);
    const img3 = imagePath(latestArticle[2]?.image);
    const banners = [
        { image: img1, title: "সৌন্দর্যের রাজ্যে স্বাগতম!", date: "September 23th, 2025" },
        { image: img2, title: "স্কিনকেয়ার নিয়ে কিছু কথা:", date: "September 23th, 2025" },
        { image: img3, title: "ত্বকের সাথে প্রেমের সম্পর্ক", date: "September 23th, 2025" }
    ];
    return (
        <div>
             <div className="hidden lg:grid grid-cols-4 gap-4 w-full min-h-[595px] my-8">
            {/* First image  */}
            <div className="col-span-3 relative h-[595px] rounded-lg">
                <img 
                    src={img1} 
                    alt={latestArticle[0]?.title} 
                    className="w-full h-[595px] object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black rounded-lg" ></div>
                <div className="absolute bottom-4 left-4  text-white   ">
                    <h3 className="text-[40px] text-start -ml-1 leading-[50px] font-bold mb-3">{latestArticle[0]?.title}</h3>
                    <p className="text-xs leading-4 font-extralight text-start">{latestArticle[0]?.date}</p>
                </div>
            </div>

            {/* Second & Third images  */}
            <div className="col-span-1 flex flex-col gap-3">
                {latestArticle.slice(1, 3).map((banner, index) => (
                    <div key={index} className="relative flex-1 ">
                        <img 
                            src={imagePath(banner?.image)} 
                            alt={banner?.title} 
                            className="w-full h-[290px] object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black rounded-lg"></div>
                        <div className="absolute bottom-4 left-4 text-white  ">
                            <h3 className="text-xl font-bold mb-3 w-7/12">{banner?.title}</h3>
                            <p className="text-xs leading-4 font-thin">{banner?.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
                 {/* Mobile & Tablet View (Auto-Swiping Slider) */}
                 <div className="lg:hidden my-10">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true} // Infinite loop
                    autoplay={{
                        delay: 3000, // 3 seconds
                        disableOnInteraction: false, // Keeps autoplay running even after interaction
                    }}
                    pagination={{ clickable: true }}
                    modules={[Autoplay, Pagination]}
                    className="h-full"
                >
                    {latestArticle.map((banner, index) => (
                        <SwiperSlide key={index} className="relative">
                            <img 
                                src={imagePath(banner?.image)} 
                                alt={banner?.title} 
                                className="w-full h-[400px] object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black rounded-lg"></div>
                            <div className="absolute bottom-4 left-4  text-white p-2 rounded">
                                <h3 className="text-sm md:text-2xl font-bold mb-3">{banner?.title}</h3>
                                <p className="text-[10px] leading-4 font-[250px] text-start">{banner?.date}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default TopBanner;
import React from 'react';
import img1 from '../../assets/img/blog/blog-image-1.png'
import img2 from '../../assets/img/blog/blog-image-2.png'
import img3 from '../../assets/img/blog/blog-image-3.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const TopBanner = () => {
    const banners = [
        { image: img1, title: "সৌন্দর্যের রাজ্যে স্বাগতম!", date: "March 2025" },
        { image: img2, title: "স্কিনকেয়ার নিয়ে কিছু কথা:", date: "Feb 2025" },
        { image: img3, title: "ত্বকের সাথে প্রেমের সম্পর্ক", date: "Jan 2025" }
    ];
    return (
        <div>
             <div className="hidden lg:grid grid-cols-4 gap-4 w-full min-h-[595px] my-10">
            {/* First image  */}
            <div className="col-span-3 relative h-[595px]">
                <img 
                    src={banners[0].image} 
                    alt={banners[0].title} 
                    className="w-full h-[595px] object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
                <div className="absolute bottom-4 left-4  text-white p-2 ">
                    <h3 className="text-[40px] leading-[50px] font-bold">{banners[0].title}</h3>
                    <p className="text-sm">{banners[0].date}</p>
                </div>
            </div>

            {/* Second & Third images  */}
            <div className="col-span-1 flex flex-col gap-3">
                {banners.slice(1, 3).map((banner, index) => (
                    <div key={index} className="relative flex-1 ">
                        <img 
                            src={banner.image} 
                            alt={banner.title} 
                            className="w-full h-[290px] object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
                        <div className="absolute bottom-4 left-4 bg-black/50 text-white p-2 rounded">
                            <h3 className="text-sm font-bold">{banner.title}</h3>
                            <p className="text-xs">{banner.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
                 {/* Mobile & Tablet View (Auto-Swiping Slider) */}
                 <div className="lg:hidden">
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
                    {banners.map((banner, index) => (
                        <SwiperSlide key={index} className="relative">
                            <img 
                                src={banner.image} 
                                alt={banner.title} 
                                className="w-full h-[400px] object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
                            <div className="absolute bottom-4 left-4 bg-black/50 text-white p-2 rounded">
                                <h3 className="text-sm font-bold">{banner.title}</h3>
                                <p className="text-xs">{banner.date}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default TopBanner;
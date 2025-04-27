import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { imagePath } from '../../utils/imagePath';

const TopBanner = ({ selectedBlog, setSelectedBlogId, sortedBlogs }) => {
    // Determine banners: selected blog + next 2 latest blogs (excluding selected)
    const banners = selectedBlog
        ? [
              selectedBlog,
              ...sortedBlogs
                  .filter(blog => blog.id !== selectedBlog.id)
                  .slice(0, 2),
          ]
        : sortedBlogs?.slice(0, 3) || [];

    return (
        <div>
            {/* Desktop View */}
            <div className="hidden lg:grid grid-cols-4 gap-4 w-full min-h-[595px] my-8">
                {/* First banner (selected or latest blog) */}
                <div
                    className="col-span-3 relative h-[595px] rounded-lg cursor-pointer"
                    onClick={() => setSelectedBlogId(banners[0]?.id)}
                >
                    <img
                        src={imagePath(banners[0]?.image)}
                        alt={banners[0]?.title}
                        className="w-full h-[595px] object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black rounded-lg"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-[40px] text-start -ml-1 leading-[50px] font-bold mb-3">
                            {banners[0]?.title}
                        </h3>
                        <p className="text-xs leading-4 font-extralight text-start">
                            {banners[0]?.date}
                        </p>
                    </div>
                </div>

                {/* Second & Third banners */}
                <div className="col-span-1 flex flex-col gap-3">
                    {banners.slice(1, 3).map((banner, index) => (
                        <div
                            key={index}
                            className="relative flex-1 cursor-pointer"
                            onClick={() => setSelectedBlogId(banner?.id)}
                        >
                            <img
                                src={imagePath(banner?.image)}
                                alt={banner?.title}
                                className="w-full h-[290px] object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black rounded-lg"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-xl font-bold mb-3 w-7/12">
                                    {banner?.title}
                                </h3>
                                <p className="text-xs leading-4 font-thin">
                                    {banner?.date}
                                </p>
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
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    modules={[Autoplay, Pagination]}
                    className="h-full"
                >
                    {banners.map((banner, index) => (
                        <SwiperSlide
                            key={index}
                            className="relative"
                            onClick={() => setSelectedBlogId(banner?.id)}
                        >
                            <img
                                src={imagePath(banner?.image)}
                                alt={banner?.title}
                                className="w-full h-[400px] object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black rounded-lg"></div>
                            <div className="absolute bottom-4 left-4 text-white p-2 rounded">
                                <h3 className="text-sm md:text-2xl font-bold mb-3">
                                    {banner?.title}
                                </h3>
                                <p className="text-[10px] leading-4 font-[250px] text-start">
                                    {banner?.date}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default TopBanner;
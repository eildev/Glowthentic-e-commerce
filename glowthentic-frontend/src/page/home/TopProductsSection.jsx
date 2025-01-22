import Product from "../../components/product_card/Product";
import Slider from "../../components/Slider/Slider";
import { SwiperSlide } from "swiper/react";
import { useGetProductsQuery } from "../../redux/features/api/product-api/productApi";
import Loading from "../../components/spinners/Loading";
import HeadTitle from "../../components/typography/HeadTitle";
const TopProductsSection = () => {
  const { data, isLoading, error } = useGetProductsQuery();
  // console.log(data);
  if (isLoading) return <Loading />;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <HeadTitle className="text-center mb-10 lg:text-3xl">
        Our Top Product
      </HeadTitle>
      <Slider>
        {data?.products.slice(0, 10).map((product) => (
          <SwiperSlide key={product?.id}>
            <Product product={product} isDark={true} />
          </SwiperSlide>
        ))}
      </Slider>
    </>
  );
};

export default TopProductsSection;

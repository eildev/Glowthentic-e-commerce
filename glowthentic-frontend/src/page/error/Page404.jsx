import HeadTitle from "../../components/typography/HeadTitle";
import image from "../../assets/img/error/404.png";
const Page404 = () => {
  return (
    <div>
      <DynamicHelmet title="404 Not Fount" />
      <HeadTitle>404 Not Fount</HeadTitle>
      <img src={image} alt="" />
    </div>
  );
};

export default Page404;

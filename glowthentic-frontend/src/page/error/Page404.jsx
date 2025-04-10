import HeadTitle from "../../components/typography/HeadTitle";
import image from "../../assets/img/error/404.png";
import DynamicHelmet from "../../components/helmet/DynamicHelmet";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
const Page404 = () => {
  return (
    <div className="min-h-screen w-full">
      <DynamicHelmet title="404 Not Found" />
      <Link to="/">
        <img className="w-full h-full object-contain" src={image} alt="" />
      </Link>
    </div>
  );
};

export default Page404;

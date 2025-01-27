import DynamicHelmet from "../../components/helmet/DynamicHelmet";
import HeadTitle from "../../components/typography/HeadTitle";

const Page401 = () => {
  return (
    <div>
      <DynamicHelmet title="Unauthorized" />
      <HeadTitle>Unauthorized </HeadTitle>
    </div>
  );
};

export default Page401;

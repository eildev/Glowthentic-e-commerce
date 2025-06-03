import HeadTitle from "../../typography/HeadTitle";

const ProgressProductTitle = ({ title, sku }) => {
  return (
    <div>
      <div className="lg:flex lg:justify-between">
        <HeadTitle className="text-md lg:text-xl">{title}</HeadTitle>
        <p className="text-sm text-gray-500 mt-1">{sku}</p>
      </div>
    </div>
  );
};

export default ProgressProductTitle;

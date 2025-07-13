import ShowRating from "../rating/ShowRating";

const ReviewProductItem = ({ selectedProduct }) => {
    // console.log("selectedProduct", selectedProduct);

    const reviews = selectedProduct?.product?.reviews ?? [];

    const rating =
        reviews.length > 0
            ? reviews.reduce(
                (accumulator, currentValue) =>
                    accumulator + (currentValue.rating || 0),
                0
            ) / reviews.length
            : 0;
    return (
        <div className="flex flex-row md:flex-col w-[280px]">
            <div className="w-[280px]">
                <img
                    className="object-cover h-[350px] w-[280px]"
                    src={`http://127.0.0.1:8000/${selectedProduct?.variant?.variant_image[0]?.image}`}
                    alt=""
                />
            </div>
            <div className="pl-4 md:pl-0 md:mt-4">
                <h5 className="text-sm md:text-lg text-dark font-bold font-encode">
                    {selectedProduct?.product?.product_name ?? ""}
                </h5>
                <div className="flex justify-between items-center">
                    <p className="text-sm md:text-md text-gray font-normal font-encode">
                        {selectedProduct?.product?.category?.categoryName ?? ""}
                    </p>
                    <ShowRating rating={rating} width={100} />
                </div>
                <p className="text-sm md:text-xl text-dark font-semibold font-encode">
                    ৳ {selectedProduct?.variant?.regular_price ?? 0}
                </p>
            </div>
        </div>
    );
};

export default ReviewProductItem;
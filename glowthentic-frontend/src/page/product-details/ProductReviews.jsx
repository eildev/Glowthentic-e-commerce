import Rating from "react-rating";
import { useGetReviewInfoQuery } from "../../redux/features/api/review/reviewGetApi";


const ProductReviews = ({ images, data }) => {

    const { data: reviews, isLoading, isError, error } = useGetReviewInfoQuery(data?.data.id);

    // console.log("data", data?.data.id, "review", reviews);




    return (
        <div className="mt-4 mb-[28px]">
            <h2 className="md:text-[18px] text-[10px] text-[#242424] border-b border-[#242424] w-fit p-[10px] mb-6">Rate & review ({images.length})</h2>
            {
                reviews?.reviews.map((item, index) => (
                    <div key={index} className="mb-[27px]">
                        <div className="flex gap-[18px]">
                            <img alt="" src={item.user.image || 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='} className="md:w-[56px] w-[32px] object-cover md:h-[59px] h-[32px] rounded-full" />
                            <div>
                                <div className="flex items-center md:gap-4 gap-2">
                                    <h1 className="md:text-[18px] text-[10px] font-medium text-[#565656]">{item.user.name}</h1>
                                    <Rating
                                        initialRating={item.rating}
                                        readonly
                                        emptySymbol={
                                            <svg
                                                className="md:w-[22px] w-[11px] md:h-[22px]"
                                                fill="#D9D9D9"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 .587l3.668 7.431L24 9.753l-6 5.849L19.336 24 12 20.201 4.664 24 6 15.602 0 9.753l8.332-1.735z" />
                                            </svg>
                                        }
                                        fullSymbol={
                                            <svg
                                                className="md:w-[22px] w-[11px] md:h-[22px]"
                                                fill="#FA8232"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 .587l3.668 7.431L24 9.753l-6 5.849L19.336 24 12 20.201 4.664 24 6 15.602 0 9.753l8.332-1.735z" />
                                            </svg>
                                        }
                                    />

                                
                            </div>
                            <p className="text-[#868686] md:text-[16.11px] text-[9px] mt-1">{item.review}</p>

                            <div className="flex flex-wrap gap-[18px] mt-[18px]">
                                {/* {
                            images.map((image, i) =>(
                                <img className="md:w-[125px] w-[72px] md:h-[125px] h-[72px] border-2 duration-200 border-transparent hover:border-[#EF4A03]" key={i} src={image} alt="" />
                            ))
                        } */}
                            </div>
                        </div>
                    </div>
                    </div>
    ))
}
        </div >
    );
};

export default ProductReviews;
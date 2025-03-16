import { useNavigate } from "react-router-dom";
import Container from "../../components/Container";
import DynamicHelmet from "../../components/helmet/DynamicHelmet";
import PreviousPage from "../../components/previous-page/PreviousPage";
import Checkbox from "../../components/typography/Checkbox";
import HeadTitle from "../../components/typography/HeadTitle";
import RegularButton from "../../components/typography/RegularButton";
import RoundedIcon from "../../components/typography/RoundedIcon";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { 
    useDeleteWishlistItemMutation, 
    useGetWishlistByUserIdQuery 
} from "../../redux/features/api/wishlistByUserAPI/wishlistByUserAPI";

const WishlistPage = () => {
    const { token, user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    
    const { 
        data: wishlist, 
        error, 
        isLoading 
    } = useGetWishlistByUserIdQuery(user?.data?.id, {
        skip: !user?.data?.id
    });
    
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const [isInCart, setIsInCart] = useState([]);
    const [deleteWishlistItem] = useDeleteWishlistItemMutation();

    const handleDeleteItems = (itemID) => {
        setItemToDelete(itemID);
        setShowConfirmModal(true);
    };

    const confirmDelete = async () => {
        if (itemToDelete) {
            try {
                await deleteWishlistItem(itemToDelete).unwrap();
                toast.success('Item deleted successfully!');
                // The invalidatesTags will automatically trigger a refetch
            } catch (error) {
                console.error('Failed to delete the item:', error);
                toast.error('Error deleting the item!');
            }
            setShowConfirmModal(false);
            setItemToDelete(null);
        }
    };

    const cancelDelete = () => {
        setShowConfirmModal(false);
        setItemToDelete(null);
    };

    const handleAddCart = (productItem) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        if (!cart.some((item) => item.id === productItem.id)) {
            const newProduct = { ...productItem, quantity: 1 };
            cart.push(newProduct);
            localStorage.setItem("cart", JSON.stringify(cart));
            toast.success(`${productItem.title} added to Cart!`);
        } else {
            toast.error("This product is already in your Cart.");
        }
    };

    if (isLoading) {
        return <div>Loading wishlist...</div>;
    }

    if (error) {
        return <div>Error loading wishlist: {error.message}</div>;
    }

    return (
        <div className="md:py-10">
            <DynamicHelmet title="Wishlist Page" />
            <Container>
                <div className="bg-white p-2 block md:hidden ">
                    <div className="flex justify-between">
                        <button onClick={() => navigate(-1)}>
                            <PreviousPage title={"Wishlist"}></PreviousPage>
                        </button>
                    </div>
                </div>
                <div className="bg-white p-0 ">
                    <HeadTitle className="bg-white p-5 hidden md:block">
                        Wishlist
                    </HeadTitle>
                    {wishlist?.wishlist?.length === 0 ? (
                        <div className="text-center text-lg pb-5 font-semibold">
                            No Wish List Items Available!
                        </div>
                    ) : (
                        <div className="overflow-x-auto ">
                            <div className="hidden md:block">
                                <table className="table">
                                    <thead className="bg-light">
                                        <tr className="uppercase border-none text-[#475156] font-medium text-xs">
                                            <th>Product</th>
                                            <th></th>
                                            <th>Price</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {wishlist?.wishlist?.map((item, i) => (
                                            <tr key={i} className="border-none">
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle h-12 w-12">
                                                                <img
                                                                    src={item?.variant.variant_image[0].image}
                                                                    alt="Avatar Tailwind CSS Component"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="text-[13px] text-[#475156]">
                                                                {item?.wishlist_product?.product_name ?? ""}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <th></th>
                                                <td className="text-[#FA8232] text-[13px] font-medium">
                                                    {item?.variant.regular_price}
                                                </td>
                                                <td className="flex gap-3 justify-between items-center">
                                                    <button
                                                        onClick={() => handleDeleteItems(item.id)}
                                                    >
                                                        <RoundedIcon
                                                            className="bg-transparent rounded-none p-2 text-secondary"
                                                            iconName="hugeicons:delete-03"
                                                        />
                                                    </button>

                                                    <div className="hidden md:block">
                                                        <div
                                                            onClick={() => handleAddCart(item)}
                                                            className="flex items-center gap-4"
                                                        >
                                                            <RegularButton className="flex gap-2 font-bold text-[12px] leading-10 uppercase justify-center items-center p-0 px-5 py-">
                                                                Add to Cart
                                                                <RoundedIcon
                                                                    className="bg-transparent rounded-none p-0"
                                                                    iconName="meteor-icons:cart-shopping"
                                                                />
                                                            </RegularButton>
                                                            <Checkbox />
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="block md:hidden">
                                <table className="table w-full mb-24">
                                    <tbody>
                                        {wishlist?.wishlist?.map((item, i) => (
                                            <tr key={i} className="border-none">
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="rounded-xl h-[120px] w-[120px]">
                                                                <img
                                                                    src={item?.variant.variant_image[0].image}
                                                                    alt="Avatar Tailwind CSS Component"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">{item?.wishlist_product?.product_name}</div>
                                                            <div className="mt-2">
                                                                <h1 className="text-[#FA8232] text-xs font-semibold">
                                                                    <span>$</span>{item?.variant.regular_price}
                                                                </h1>
                                                            </div>
                                                            <button onClick={() => handleDeleteItems(item.id)}>
                                                                <RoundedIcon
                                                                    className="bg-transparent rounded-none p-2 text-secondary"
                                                                    iconName="hugeicons:delete-03"
                                                                />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                    {showConfirmModal && (
                        <div className="h-[100vh] w-full bg-[#1C1B1B] bg-opacity-60 fixed top-0 left-0 z-[100]">
                            <div className="w-full max-w-md bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl px-5 py-8">
                                <div className="text-center">
                                    <h1 className="text-[#1C1B1B] text-lg font-semibold">
                                        Delete Item
                                    </h1>
                                    <p className="text-[#5F6C72] mt-2">
                                        Are you sure you want to remove this item from your wishlist?
                                    </p>
                                </div>
                                <div className="flex justify-center gap-4 mt-6">
                                    <button
                                        onClick={cancelDelete}
                                        className="px-6 py-2 bg-gray-200 text-[#1C1B1B] rounded-lg"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={confirmDelete}
                                        className="px-6 py-2 bg-red-500 text-white rounded-lg"
                                    >
                                        Yes, Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default WishlistPage;
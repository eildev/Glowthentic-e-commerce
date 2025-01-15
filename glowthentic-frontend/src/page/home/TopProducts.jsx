import TopProduct from '../../components/product_card/TopProduct';

const TopProducts = () => {
    return (
        <div className="flex gap-5">
            <TopProduct />
            <TopProduct />
            <TopProduct />
            <TopProduct />
        </div>
    );
};

export default TopProducts;
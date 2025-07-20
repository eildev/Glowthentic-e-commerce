
const formatPrice = (price) => {
    if (!price || isNaN(price)) return "0.00";
    const formattedPrice = Number(price).toFixed(2);
    const [integerPart, decimalPart] = formattedPrice.split(".");
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${formattedInteger}.${decimalPart}`;
};

export default formatPrice;
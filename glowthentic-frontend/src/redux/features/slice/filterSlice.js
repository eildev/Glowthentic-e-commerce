import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filters",
    initialState: {
        selectedCategories: [],
        filteredCategories: [],
        filteredTags: [],
        filteredPrices: [],
        toggleFilter: false,
        filteredProducts: [],
        sortOption: "Recommended",
    },
    reducers: {
        setSelectedCategories(state, action) {
            state.selectedCategories = action.payload;
        },
        setFilteredCategories(state, action) {
            state.filteredCategories = action.payload;
        },
        setFilteredTags(state, action) {
            state.filteredTags = action.payload;
        },
        setFilteredPrices(state, action) {
            state.filteredPrices = action.payload;
        },
        toggleFilter(state) {
            state.toggleFilter = !state.toggleFilter;
        },
        clearAllFilters(state) {
            state.selectedCategories = [];
            state.filteredCategories = [];
            state.filteredTags = [];
            state.filteredPrices = [];
            state.filteredProducts = [];
        },
        setSortOption(state, action) {
            state.sortOption = action.payload;
        },
        setFilteredProducts(state, action) {
            const products = action.payload;

            let filtered = products;
            if (
                state.filteredCategories.length > 0 ||
                state.filteredTags.length > 0 ||
                state.filteredPrices.length > 0
            ) {
                filtered = products.filter((product) => {
                    const matchesCategory = state.filteredCategories.includes(product.category_id);
                    const matchesTags =
                        product.product_tags &&
                        product.product_tags.some((tag) => state.filteredTags.includes(tag.tag_id));
                    const matchesPrice = state.filteredPrices.some(
                        (priceRange) =>
                            product.variants[0].regular_price >= priceRange.min &&
                            product.variants[0].regular_price <= priceRange.max
                    );
                    return matchesCategory || matchesTags || matchesPrice;
                });
            }

            let sortedProducts = [...filtered];
            switch (state.sortOption) {
                case "Price High To Low":
                    sortedProducts.sort((a, b) => b.variants[0].regular_price - a.variants[0].regular_price);
                    break;
                case "Price Low To High":
                    sortedProducts.sort((a, b) => a.variants[0].regular_price - b.variants[0].regular_price);
                    break;
                case "Latest Arrival":
                    sortedProducts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                    break;
                case "Old First":
                    sortedProducts.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
                    break;
                case "Discount % High To Low":
                    sortedProducts.sort((a, b) => {
                        const discountA = ((a.variants[0].regular_price - a.variants[0].sale_price) / a.variants[0].regular_price) * 100 || 0;
                        const discountB = ((b.variants[0].regular_price - b.variants[0].sale_price) / b.variants[0].regular_price) * 100 || 0;
                        return discountB - discountA;
                    });
                    break;
                case "Discount % Low To High":
                    sortedProducts.sort((a, b) => {
                        const discountA = ((a.variants[0].regular_price - a.variants[0].sale_price) / a.variants[0].regular_price) * 100 || 0;
                        const discountB = ((b.variants[0].regular_price - b.variants[0].sale_price) / b.variants[0].regular_price) * 100 || 0;
                        return discountA - discountB;
                    });
                    break;
                case "Recommended":
                default:
                    sortedProducts = [...filtered];
                    break;
            }

            state.filteredProducts = sortedProducts;
        },
    },
});

export const {
    setSelectedCategories,
    setFilteredCategories,
    setFilteredTags,
    setFilteredPrices,
    toggleFilter,
    clearAllFilters,
    setFilteredProducts,
    setSortOption
} = filterSlice.actions;

export default filterSlice.reducer;
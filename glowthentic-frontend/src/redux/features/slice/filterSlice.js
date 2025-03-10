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
        setFilteredProducts(state, action) {
            const products = action.payload;
            if (
                state.filteredCategories.length === 0 &&
                state.filteredTags.length === 0 &&
                state.filteredPrices.length === 0
            ) {
                state.filteredProducts = products;
            } else {
                const filtered = products.filter((product) => {
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

                let sortedFiltered = filtered;
                if (state.filteredCategories.length > 0) {
                    sortedFiltered = state.filteredCategories
                        .map((catId) => filtered.filter((p) => p.category_id === catId))
                        .flat();
                }
                state.filteredProducts = sortedFiltered.length > 0 ? sortedFiltered : filtered;
            }
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
} = filterSlice.actions;

export default filterSlice.reducer;
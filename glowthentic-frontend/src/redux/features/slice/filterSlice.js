import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filters",
    initialState: {
        selectedCategories: [],
        filteredCategories: [],
        filteredTags: [],
        filteredPrices: [],
        filteredBrands: [],
        filteredFeatures: [],
        filteredSearchQuery: "",
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
            console.log(action);
        },
        setFilteredTags(state, action) {
            state.filteredTags = action.payload;
        },
        setFilteredBrands(state, action) {
            state.filteredBrands = action.payload;
        },
        setFilteredFeatures(state, action) {
            state.filteredFeatures = action.payload;
        },
        setFilteredSearchQuery(state, action) {
            state.filteredSearchQuery = action.payload;
        },
        toggleFilter(state) {
            state.toggleFilter = !state.toggleFilter;
        },
        setSortOption(state, action) {
            state.sortOption = action.payload;
        },
        setFilteredSearchQuery(state, action) {
            state.filteredSearchQuery = action.payload;
        },
        setFilteredProducts(state, action) {
            const products = action.payload;
            let filtered = products;
            console.log("filterd", filtered);

            if (
                state.filteredCategories.length > 0 ||
                state.filteredTags.length > 0 ||
                state.filteredPrices.length > 0 ||
                state.filteredBrands.length > 0 ||
                state.filteredFeatures.length > 0 ||
                state.filteredSearchQuery
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
                    const matchesBrand = state.filteredBrands.includes(product.brand_id);
                    const matchesFeature = state.filteredFeatures.includes(product.feature?.slug);
                    const matchesSearch = state.filteredSearchQuery
                        ? product.product_name
                            .toLowerCase()
                            .includes(state.filteredSearchQuery.toLowerCase())
                        : true;
                    return (
                        matchesCategory ||
                        matchesTags ||
                        matchesPrice ||
                        matchesBrand ||
                        matchesFeature ||
                        matchesSearch
                    );
                });
            }

            let sortedProducts = [...filtered];
            switch (state.sortOption) {
                case "Price High To Low":
                    sortedProducts.sort((a, b) => b.variants[0].regular_price - a.variants[0].regular_price);
                    break;
                // ... Other sort options ...
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
    setFilteredBrands,
    setFilteredFeatures,
    setFilteredSearchQuery,
    toggleFilter,
    clearAllFilters,
    setFilteredProducts,
    setSortOption,
} = filterSlice.actions;

export default filterSlice.reducer;
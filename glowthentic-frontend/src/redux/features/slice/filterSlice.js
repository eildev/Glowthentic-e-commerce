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
        },
        setFilteredTags(state, action) {
            state.filteredTags = action.payload;
        },
        setFilteredPrices(state, action) {
            state.filteredPrices = action.payload;
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
        clearAllFilters(state) {
            state.selectedCategories = [];
            state.filteredCategories = [];
            state.filteredTags = [];
            state.filteredPrices = [];
            state.filteredBrands = [];
            state.filteredFeatures = [];
            state.filteredSearchQuery = "";
        },
        setFilteredProducts(state, action) {
            const products = action.payload;
            let filtered = [...products];
            let anyFilterApplied = false;

            // Apply category filter
            if (state.filteredCategories.length > 0) {
                anyFilterApplied = true;
                filtered = filtered.filter(product => 
                    state.filteredCategories.includes(product.category_id)
                );
            }

            // Apply tags filter
            if (state.filteredTags.length > 0) {
                anyFilterApplied = true;
                filtered = filtered.filter(product => 
                    product.product_tags && 
                    product.product_tags.some(tag => 
                        state.filteredTags.includes(tag.tag_id)
                    )
                );
            }

            // Apply price filter
            if (state.filteredPrices.length > 0) {
                anyFilterApplied = true;
                filtered = filtered.filter(product => {
                    if (!product.variants || !product.variants.length) return false;
                    const price = product.variants[0].regular_price;
                    return state.filteredPrices.some(priceRange => 
                        price >= priceRange.min && price <= priceRange.max
                    );
                });
            }

            // Apply brand filter
            if (state.filteredBrands.length > 0) {
                anyFilterApplied = true;
                filtered = filtered.filter(product => 
                    state.filteredBrands.includes(product.brand_id)
                );
            }

            // Apply feature filter
            if (state.filteredFeatures.length > 0) {
                anyFilterApplied = true;
                filtered = filtered.filter(product => 
                    product.feature && 
                    state.filteredFeatures.includes(product.feature.slug)
                );
            }

            // Apply search filter
            if (state.filteredSearchQuery) {
                anyFilterApplied = true;
                filtered = filtered.filter(product => 
                    product.product_name.toLowerCase().includes(
                        state.filteredSearchQuery.toLowerCase()
                    )
                );
            }

            // If no filter has been applied, use all products
            if (!anyFilterApplied) {
                filtered = products;
            }

            // Apply sorting
            let sortedProducts = [...filtered];
            switch (state.sortOption) {
                case "Price High To Low":
                    sortedProducts.sort((a, b) => {
                        const priceA = a.variants && a.variants.length ? a.variants[0].regular_price : 0;
                        const priceB = b.variants && b.variants.length ? b.variants[0].regular_price : 0;
                        return priceB - priceA;
                    });
                    break;
                case "Price Low To High":
                    sortedProducts.sort((a, b) => {
                        const priceA = a.variants && a.variants.length ? a.variants[0].regular_price : 0;
                        const priceB = b.variants && b.variants.length ? b.variants[0].regular_price : 0;
                        return priceA - priceB;
                    });
                    break;
                case "Latest Arrival":
                    sortedProducts.sort((a, b) => 
                        new Date(b.created_at) - new Date(a.created_at)
                    );
                    break;
                case "Old First":
                    sortedProducts.sort((a, b) => 
                        new Date(a.created_at) - new Date(b.created_at)
                    );
                    break;
                case "Discount % High To Low":
                    sortedProducts.sort((a, b) => {
                        const discountA = a.variants && a.variants.length ? (a.variants[0].discount || 0) : 0;
                        const discountB = b.variants && b.variants.length ? (b.variants[0].discount || 0) : 0;
                        return discountB - discountA;
                    });
                    break;
                case "Discount % Low To High":
                    sortedProducts.sort((a, b) => {
                        const discountA = a.variants && a.variants.length ? (a.variants[0].discount || 0) : 0;
                        const discountB = b.variants && b.variants.length ? (b.variants[0].discount || 0) : 0;
                        return discountA - discountB;
                    });
                    break;
                case "Recommended":
                default:
                    // Keep the original order
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
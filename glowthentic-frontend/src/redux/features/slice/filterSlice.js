import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    selectedCategories: [], // Names for display (categories, tags, brands)
    selectedCategoryMap: {}, // Map of ID to name for all filters
    filteredCategories: [], // Category IDs
    filteredTags: [], // Tag IDs
    filteredBrands: [], // Brand IDs
    filteredPrices: [],
    filteredFeatures: [],
    filteredSearchQuery: "",
    toggleFilter: false,
    filteredProducts: [],
    sortOption: "Recommended",
  },
  reducers: {
    addCategoryWithName(state, action) {
      const { id, name } = action.payload;
      const stringId = String(id); // Ensure ID is a string
      console.log(`Adding category: id=${stringId}, name=${name}`);
      if (!state.filteredCategories.includes(stringId)) {
        state.filteredCategories.push(stringId);
      }
      if (!state.selectedCategories.includes(name)) {
        state.selectedCategories.push(name);
      }
      state.selectedCategoryMap[stringId] = name;
    },
    removeCategoryByName(state, action) {
      const nameToRemove = action.payload;
      console.log(`Removing category: name=${nameToRemove}`);
      const idToRemove = Object.keys(state.selectedCategoryMap).find(
        (id) => state.selectedCategoryMap[id] === nameToRemove
      );
      if (idToRemove) {
        state.filteredCategories = state.filteredCategories.filter((id) => id !== idToRemove);
        delete state.selectedCategoryMap[idToRemove];
        state.selectedCategories = state.selectedCategories.filter(
          (name) => name !== nameToRemove
        );
        console.log(`Category removed: id=${idToRemove}, remaining categories:`, state.filteredCategories);
      } else {
        console.warn(`No ID found for category: ${nameToRemove}`);
      }
    },
    addTag(state, action) {
      const { id, name } = action.payload;
      const stringId = String(id); // Ensure ID is a string
      console.log(`Adding tag: id=${stringId}, name=${name}`);
      if (!state.filteredTags.includes(stringId)) {
        state.filteredTags.push(stringId);
      }
      if (!state.selectedCategories.includes(name)) {
        state.selectedCategories.push(name);
      }
      state.selectedCategoryMap[stringId] = name;
    },
    removeTag(state, action) {
      const nameToRemove = action.payload;
      console.log(`Removing tag: name=${nameToRemove}`);
      const idToRemove = Object.keys(state.selectedCategoryMap).find(
        (id) => state.selectedCategoryMap[id] === nameToRemove
      );
      if (idToRemove) {
        state.filteredTags = state.filteredTags.filter((id) => id !== idToRemove);
        delete state.selectedCategoryMap[idToRemove];
        state.selectedCategories = state.selectedCategories.filter(
          (name) => name !== nameToRemove
        );
        console.log(`Tag removed: id=${idToRemove}, remaining tags:`, state.filteredTags);
      } else {
        console.warn(`No ID found for tag: ${nameToRemove}`);
      }
    },
    addBrand(state, action) {
      const { id, name } = action.payload;
      const stringId = String(id); // Ensure ID is a string
      console.log(`Adding brand: id=${stringId}, name=${name}`);
      if (!state.filteredBrands.includes(stringId)) {
        state.filteredBrands.push(stringId);
      }
      if (!state.selectedCategories.includes(name)) {
        state.selectedCategories.push(name);
      }
      state.selectedCategoryMap[stringId] = name;
    },
    removeBrand(state, action) {
      const nameToRemove = action.payload;
      console.log(`Removing brand: name=${nameToRemove}`);
      const idToRemove = Object.keys(state.selectedCategoryMap).find(
        (id) => state.selectedCategoryMap[id] === nameToRemove
      );
      if (idToRemove) {
        state.filteredBrands = state.filteredBrands.filter((id) => id !== idToRemove);
        delete state.selectedCategoryMap[idToRemove];
        state.selectedCategories = state.selectedCategories.filter(
          (name) => name !== nameToRemove
        );
        console.log(`Brand removed: id=${idToRemove}, remaining brands:`, state.filteredBrands);
      } else {
        console.warn(`No ID found for brand: ${nameToRemove}`);
      }
    },
    setFilteredPrices(state, action) {
      console.log("Setting price filter:", action.payload);
      state.filteredPrices = action.payload;
    },
    clearAllFilters(state) {
      console.log("Clearing all filters");
      state.selectedCategories = [];
      state.selectedCategoryMap = {};
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

      console.log("Applying filters:", {
        categories: state.filteredCategories,
        tags: state.filteredTags,
        brands: state.filteredBrands,
        prices: state.filteredPrices,
        search: state.filteredSearchQuery,
      });

      // Apply category filter
      if (state.filteredCategories.length > 0) {
        anyFilterApplied = true;
        filtered = filtered.filter((product) => {
          if (product.category_id && state.filteredCategories.includes(String(product.category_id))) {
            return true;
          }
          if (product.subcategory_id && state.filteredCategories.includes(String(product.subcategory_id))) {
            return true;
          }
          if (product.category?.id && state.filteredCategories.includes(String(product.category.id))) {
            return true;
          }
          if (product.subcategories?.length) {
            return product.subcategories.some((sub) => state.filteredCategories.includes(String(sub.id)));
          }
          return false;
        });
        console.log("After category filter:", filtered.length);
      }

      // Apply tags filter
      if (state.filteredTags.length > 0) {
        anyFilterApplied = true;
        filtered = filtered.filter((product) =>
          product.product_tags?.some((tag) => state.filteredTags.includes(String(tag.tag_id)))
        );
        console.log("After tags filter:", filtered.length);
      }

      // Apply price filter
      if (state.filteredPrices.length > 0) {
        anyFilterApplied = true;
        filtered = filtered.filter((product) => {
          if (!product.variants?.length) return false;
          return product.variants.some((variant) => {
            const price = variant.regular_price;
            return state.filteredPrices.some(
              (priceRange) => price >= priceRange.min && price <= priceRange.max
            );
          });
        });
        console.log("After price filter:", filtered.length);
      }

      // Apply brand filter
      if (state.filteredBrands.length > 0) {
        anyFilterApplied = true;
        filtered = filtered.filter((product) =>
          state.filteredBrands.includes(String(product.brand_id))
        );
        console.log("After brand filter:", filtered.length);
      }

      // Apply feature filter
      if (state.filteredFeatures.length > 0) {
        anyFilterApplied = true;
        filtered = filtered.filter((product) =>
          product.feature && state.filteredFeatures.includes(product.feature.slug)
        );
        console.log("After feature filter:", filtered.length);
      }

      // Apply search filter
      if (state.filteredSearchQuery) {
        anyFilterApplied = true;
        filtered = filtered.filter((product) =>
          product.product_name.toLowerCase().includes(state.filteredSearchQuery.toLowerCase())
        );
        console.log("After search filter:", filtered.length);
      }

      // If no filter has been applied, use all products
      if (!anyFilterApplied) {
        filtered = products;
        console.log("No filters applied, using all products:", filtered.length);
      }

      // Apply sorting
      let sortedProducts = [...filtered];
      switch (state.sortOption) {
        case "Price High To Low":
          sortedProducts.sort((a, b) => {
            const priceA = a.variants?.length ? a.variants[0].regular_price : 0;
            const priceB = b.variants?.length ? b.variants[0].regular_price : 0;
            return priceB - priceA;
          });
          break;
        case "Price Low To High":
          sortedProducts.sort((a, b) => {
            const priceA = a.variants?.length ? a.variants[0].regular_price : 0;
            const priceB = b.variants?.length ? b.variants[0].regular_price : 0;
            return priceA - priceB;
          });
          break;
        case "Latest Arrival":
          sortedProducts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
          break;
        case "Old First":
          sortedProducts.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
          break;
        case "Discount % High To Low":
          sortedProducts.sort((a, b) => {
            const discountA = a.variants?.length ? a.variants[0].discount || 0 : 0;
            const discountB = b.variants?.length ? b.variants[0].discount || 0 : 0;
            return discountB - discountA;
          });
          break;
        case "Discount % Low To High":
          sortedProducts.sort((a, b) => {
            const discountA = a.variants?.length ? a.variants[0].discount || 0 : 0;
            const discountB = b.variants?.length ? b.variants[0].discount || 0 : 0;
            return discountA - discountB;
          });
          break;
        case "Recommended":
        default:
          break;
      }

      state.filteredProducts = sortedProducts;
      console.log("Final filtered products:", sortedProducts.length);
    },
    setSelectedCategories: (state, action) => {
      state.selectedCategories = action.payload;
    },
    setFilteredCategories: (state, action) => {
      state.filteredCategories = action.payload.map(String); // Ensure IDs are strings
      state.selectedCategories = state.selectedCategories.filter((name) => {
        const id = Object.keys(state.selectedCategoryMap).find(
          (id) => state.selectedCategoryMap[id] === name
        );
        return id && action.payload.includes(id);
      });
      Object.keys(state.selectedCategoryMap).forEach((id) => {
        if (!action.payload.includes(id)) {
          delete state.selectedCategoryMap[id];
        }
      });
    },
    setFilteredTags: (state, action) => {
      state.filteredTags = action.payload.map(String); // Ensure IDs are strings
    },
    setFilteredBrands: (state, action) => {
      state.filteredBrands = action.payload.map(String); // Ensure IDs are strings
    },
    setFilteredFeatures: (state, action) => {
      state.filteredFeatures = action.payload;
    },
    setFilteredSearchQuery: (state, action) => {
      state.filteredSearchQuery = action.payload;
    },
    toggleFilter: (state) => {
      state.toggleFilter = !state.toggleFilter;
    },
    setSortOption: (state, action) => {
      state.sortOption = action.payload;
    },
  },
});

export const {
  setSelectedCategories,
  addCategoryWithName,
  removeCategoryByName,
  addTag,
  removeTag,
  addBrand,
  removeBrand,
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
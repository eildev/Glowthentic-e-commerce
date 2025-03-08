
export const getCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  };
  
  // Local storage-এ কার্ট ডেটা সংরক্ষণ করা
  export const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };
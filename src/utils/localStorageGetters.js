export const getCartFromLocalStorage = () => {
  if (localStorage.getItem("cart")) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

export const getFavProductsFromLocalStorage = () =>
  localStorage.getItem("favProducts")
    ? JSON.parse(localStorage.getItem("favProducts"))
    : [];

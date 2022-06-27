import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import Router from "../routing/Router";
import RootContext from "../context";
//import { data } from "../localData/data";
import GlobalStyles from "../globalStyles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../globalStyles/themes/mainTheme";
import { getCartFromLocalStorage } from "../utils/localStorageGetters";
import { client } from "../contentful";

const Root = () => {
  const [products, setProducts] = useState([]);
  const [initialProducts, setInitialProducts] = useState([]);
  const [cart, setCart] = useState(getCartFromLocalStorage());

  const [delivery, setDelivery] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  const [productFilterInputValue, setProductFilterInputValue] = useState("");
  const [productCategories, setProductCategories] = useState([]);
  const [selectedCategoriesInFilter, setSelectedCategoriesInFilter] = useState(
    []
  );

  const [minimumPrice, setMinimumPrice] = useState();
  const [maximumPrice, setMaximumPrice] = useState();
  const [currentPricesSelected, setCurrentPricesSelected] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [
    productSearchedInputValueInModal,
    setProductSearchedInputValueInModal,
  ] = useState("");
  const [searchedProducts, setSearchedProducts] = useState([]);

  const [isFilterOpen, setIsFilterOpen] = useState("close");
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState("close");

  const [isPasswordShownInLogin, setIsPasswordShownInLogin] = useState(false);
  const [isPasswordShownInSignup, setIsPasswordShownInSignup] = useState(false);
  const [isRepeatPasswordShown, setIsRepeatPasswordShown] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);

  const getContentfulData = () => {
    client
      .getEntries({
        content_type: "product",
      })
      .then((res) => {
        setContentfulData(res.items);
      })
      .catch((err) => console.log(err));
  };

  const setContentfulData = (data) => {
    const productsData = data.map((item) => {
      return {
        ...item.fields,
        image: item.fields.image.fields.file.url,
        id: item.sys.id,
      };
    });

    setInitialProducts([...productsData]);
    setProducts([...productsData]);
    getCategories(productsData);
    takeMinAndMaxPrice(productsData);
  };

  useEffect(() => {
    getContentfulData();
    console.log(cart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    checkSubtotalInCart();
  }, [cart, subtotal, total, delivery]);

  useEffect(() => {
    handleFilter();
  }, [
    productFilterInputValue,
    selectedCategoriesInFilter,
    currentPricesSelected,
  ]);

  useEffect(() => {
    searchedProductsInModal();
  }, [productSearchedInputValueInModal]);

  const showHidePassword = (name) => {
    if (name === "password") {
      isPasswordShownInLogin
        ? setIsPasswordShownInLogin(false)
        : setIsPasswordShownInLogin(true);
    }
    if (name === "passwordSignUp") {
      isPasswordShownInSignup
        ? setIsPasswordShownInSignup(false)
        : setIsPasswordShownInSignup(true);
    }
    if (name === "repeatPassword") {
      isRepeatPasswordShown
        ? setIsRepeatPasswordShown(false)
        : setIsRepeatPasswordShown(true);
    }
  };

  const toggleModal = () => {
    isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);
  };

  const toggleFilter = () => {
    isFilterOpen === "open"
      ? setIsFilterOpen("close")
      : setIsFilterOpen("open");
  };

  const toggleHamburgerMenu = () => {
    console.log("clicked");
    console.log(isHamburgerMenuOpen);
    isHamburgerMenuOpen === "open"
      ? setIsHamburgerMenuOpen("close")
      : setIsHamburgerMenuOpen("open");
  };

  const getCategories = (productsData) => {
    const categories = new Set(productsData.map((item) => item.category));
    setProductCategories([...categories]);
    setSelectedCategoriesInFilter([...categories]);
  };

  const takeMinAndMaxPrice = (productsData) => {
    const priceArray = productsData.map((product) => product.price);
    const minPrice = Math.min(...priceArray);
    const maxPrice = Math.max(...priceArray);
    setMinimumPrice(minPrice);
    setMaximumPrice(maxPrice);
    setCurrentPricesSelected([minPrice, maxPrice]);
  };

  const checkSelectedDelivery = (e) => {
    setDelivery(e.target.value);
    checkTotalInCart();
  };

  const checkSubtotalInCart = () => {
    console.log("cart", cart);
    let totalPriceOfItem = cart.map((item) => item.inCartQuantity * item.price);

    let subtotalOfItems = 0;
    totalPriceOfItem.map((item) => (subtotalOfItems += item));
    setSubtotal(subtotalOfItems);

    checkTotalInCart();
  };

  const checkTotalInCart = () => {
    let totalInCart = Number(subtotal) + Number(delivery);
    setTotal(totalInCart);
  };

  const checkIfAlreadyInCart = (id) => {
    let isAlreadyInCart;

    cart.forEach((product) => {
      if (product.id === id) {
        isAlreadyInCart = true;
      }
    });
    return isAlreadyInCart;
  };

  const addToCart = (id) => {
    const filteredProduct = products.find((item) => item.id === id);

    if (checkIfAlreadyInCart(id)) {
      swal("CART", "Product is already in your shopping cart!", "warning", {
        timer: 3000,
      });
    } else {
      setCart([...cart, filteredProduct]);
      swal("CART", "Product is into your shopping cart", "success", {
        timer: 3000,
      });
    }
  };

  const removeFromCart = (id) => {
    const filteredProducts = cart.filter((item) => item.id !== id);
    setCart([...filteredProducts]);
  };

  const incrementQty = (id) => {
    const mappedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          inCartQuantity: item.inCartQuantity + 1,
        };
      } else {
        return item;
      }
    });

    setCart([...mappedCart]);
  };

  const decrementQty = (id) => {
    const mappedCart = cart.map((item) => {
      if (item.id === id && item.inCartQuantity > 1) {
        return {
          ...item,
          inCartQuantity: item.inCartQuantity - 1,
        };
      } else {
        return item;
      }
    });

    setCart([...mappedCart]);
  };

  const handleSearchInputChange = (e) => {
    setProductFilterInputValue(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    let checkedCat = [];

    if (e.target.checked) {
      checkedCat.push(e.target.id);
      setSelectedCategoriesInFilter(checkedCat);
    } else {
      const filteredCat = selectedCategoriesInFilter.filter(
        (item) => item !== e.target.id
      );
      setSelectedCategoriesInFilter(filteredCat);
    }
  };

  const handleFilter = () => {
    //filter by name

    let tempProducts = [...initialProducts];

    if (productFilterInputValue.length !== 0) {
      tempProducts = tempProducts.filter((item) => {
        return (
          item.name.toLowerCase().slice(0, productFilterInputValue.length) ===
          productFilterInputValue.toLowerCase()
        );
      });
    }

    // filter by category
    if (selectedCategoriesInFilter[0] !== "All") {
      tempProducts = tempProducts.filter((item) =>
        selectedCategoriesInFilter.includes(item.category) ? item : null
      );
    }

    //filtered by price
    tempProducts = tempProducts.filter((item) => {
      return (
        item.price >= currentPricesSelected[0] &&
        item.price <= currentPricesSelected[1]
      );
    });

    setProducts([...tempProducts]);
  };

  const handleSearchInputChangeOnModal = (e) => {
    setProductSearchedInputValueInModal(e.target.value);
  };

  const searchedProductsInModal = () => {
    if (productSearchedInputValueInModal.length === 0) {
      setSearchedProducts([]);
    } else {
      let searchedProducts = initialProducts.filter((item) => {
        return (
          item.name
            .toLowerCase()
            .slice(0, productSearchedInputValueInModal.length) ===
          productSearchedInputValueInModal.toLowerCase()
        );
      });

      setSearchedProducts(searchedProducts);
    }
  };

  return (
    <RootContext.Provider
      value={{
        products,
        cart,
        delivery,
        subtotal,
        total,
        productFilterInputValue,
        productCategories,
        maximumPrice,
        minimumPrice,
        currentPricesSelected,
        isModalOpen,
        isFilterOpen,
        isHamburgerMenuOpen,
        isPasswordShownInLogin,
        isPasswordShownInSignup,
        isRepeatPasswordShown,
        searchedProducts,
        setIsModalOpen,
        setCurrentPricesSelected,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        incrementQty: incrementQty,
        decrementQty: decrementQty,
        checkSelectedDelivery: checkSelectedDelivery,
        handleFilter: handleFilter,
        handleSearchInputChange: handleSearchInputChange,
        handleSearchInputChangeOnModal: handleSearchInputChangeOnModal,
        handleCheckboxChange: handleCheckboxChange,
        toggleModal: toggleModal,
        toggleFilter: toggleFilter,
        toggleHamburgerMenu,
        showHidePassword,
      }}
    >
      {/* <Test /> */}

      <GlobalStyles isModalOpen={isModalOpen} />
      {isModalOpen ? (
        <div
          style={{
            position: "fixed",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            height: "200%",
            width: "100%",
          }}
        ></div>
      ) : null}

      <ThemeProvider theme={mainTheme}>
        <Router />
      </ThemeProvider>
    </RootContext.Provider>
  );
};

export default Root;

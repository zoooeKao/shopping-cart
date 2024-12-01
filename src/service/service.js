/**
 * @param {string} username
 * @param {string} password
 * @returns {Promise<{isLoggedIn: boolean, data: string | null}>}
 */
export const login = (username, password) => {
  return fetch('/api/auth/login?auth=0', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({username, password}),
  })
    .then((response) => {
      return response.ok ? response.json() : Promise.reject(response);
    })
    .then((txt) => {
      return {isLoggedIn: true, data: txt};
    })
    .catch(() => {
      return {isLoggedIn: false, data: null};
    });
};

export const logout = () => {
  return fetch('/api/auth/logout?auth=0', {
    method: 'POST',
  })
    .then((response) => {
      return response.ok ? response.json() : Promise.reject(response);
    })
    .then((txt) => {
      return {isLoggedOut: true, data: txt};
    })
    .catch(() => {
      return {isLoggedOut: false, data: null};
    });
};

// id
export const getUserProfile = () => {
  return fetch('/api/auth/profile?auth=0')
    .then((response) => {
      return response.ok ? response.json() : Promise.reject(response);
    })
    .then((userProfile) => {
      return {isLoggedIn: true, profileData: userProfile};
    })
    .catch(() => {
      return {isLoggedIn: false, profileData: []};
    });
};

/**
 * @returns {Promise<{id: number, userId: number, products: number[]}>}
 */
export const getMyCart = () => {
  return fetch('/api/cart/my')
    .then((response) => {
      return response.ok ? response.json() : Promise.reject(response);
    })
    .then((userCart) => {
      // { id: 21, userId: 1, products: []}
      // Question: 為甚比上去沒有顯示型別
      console.log('userCart', userCart);
      return userCart;
    })
    .catch((reason) => {
      console.log('api getMyCart fail', reason);
      return {id: null, userId: null, products: []};
    });
};

// id !== userId
/**
 * @param {number} id
 * @param {string[]} myCart
 * @returns
 */
export const updateCart = (id, myCart) => {
  return fetch(`/api/cart/${id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({products: myCart}),
  })
    .then((response) => {
      return response.ok ? response.json() : Promise.reject(response);
    })
    .catch((reason) => {
      console.log('api updateCart fail', reason);
      return [];
    });
};

export const delCart = (id) => {
  return fetch(`/api/cart/${id}`, {
    method: 'DELETE',
    headers: {'content-type': 'application/json'},
  })
    .then((response) => {
      return response.ok ? response.json() : Promise.reject(response);
    })
    .then((result) => {
      // { id: 21, userId: 1, products: []}
      return result;
    })
    .catch((reason) => {
      console.log('api delCart fail', reason);
      return [];
    });
};

// 品牌(brand):32 及分類(category):11
/**
 * @returns {Promise<import("../env").AutoCompleteList>}
 */
export const getAutoCompleteList = () => {
  return fetch('/api/product/autocomplete-list?auth=0')
    .then((response) => {
      return response.ok ? response.json() : Promise.reject(response);
    })
    .then((brandCategoryList) => {
      // { brand: string[]; category: string[] }
      return brandCategoryList;
    })
    .catch((reason) => {
      console.log('api getAutoCompleteList fail', reason);
      return {brand: [], category: []};
    });
};

// Code review: assertion
/**
 * @returns {'abc'}
 */
function foo() {
  const str = 'abcd';
  return /** @type {'abc'} */ (str);
}

// 12個產品，total是100
/**
 * @returns {Promise<import("../env").AllProduct>}
 */
export const getAllProduct = () => {
  return fetch('/api/product?auth=0')
    .then((response) => {
      return response.ok ? response.json() : Promise.reject(response);
    })
    .then((allProducts) => {
      // { products: Product[]; total: number }
      return allProducts;
    })
    .catch((reason) => {
      console.log('get All Product', reason);
      return {products: [], total: 0};
    });
};

/**
 * @param {string} productId
 * @returns {Promise<Pick<import("../env").Product, 'title' | 'price' | 'thumbnail' | 'brand'>>}
 */
export const getProductDetail = (productId) => {
  return fetch(`/api/product/${productId}?auth=0`)
    .then((response) => {
      return response.ok ? response.json() : Promise.reject(response);
    })
    .then(({title, price, thumbnail, brand}) => {
      // product's payload
      return {title, price, thumbnail, brand};
    });
  // .catch((reason) => {
  //   console.log('get product detail', reason);
  //   return {title: null, price: null, thumbnail: null, brand: null};
  // });
};

/**
 * @param {URLSearchParams} query
 * @returns {Promise<import("../env").AllProduct>}
 */
export const getSearchProduct = (query) => {
  return fetch(`/api/product?auth=0&skip=0&limit=100&${query}`)
    .then((response) => (response.ok ? response.json() : Promise.reject(response)))
    .then((productsPayload) => {
      // { products: Product[]; total: number }
      return productsPayload;
    })
    .catch((reason) => {
      console.log(`get search beauty fail`, reason);
      return {products: [], total: null};
    });
};

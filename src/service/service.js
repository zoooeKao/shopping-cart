export const login = (username, password) => {
  return fetch('/api/auth/login', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({username, password}),
  })
    .then((response) => {
      return response.ok ? response.json() : Promise.reject(response);
    })
    .then((userProfile) => {
      // console.log('/api/auth/login', {isLoggedIn: true, data: userProfile});
      return {isLoggedIn: true, data: userProfile};
    })
    .catch((reason) => {
      console.log('login fail', reason);
    });
};

export const getUserProfile = () => {
  return fetch('/api/auth/profile')
    .then((response) => {
      return response.ok ? response.json() : Promise.reject(response);
    })
    .then((userProfile) => {
      // console.log('/api/auth/profile', {isLoggedIn: true, profileData: userProfile});
      return {isLoggedIn: true, profileData: userProfile};
    })
    .catch((reason) => {
      console.log('get profile', reason);
    });
};

// 取得購物車有什麼產品
export const getUserCart = () => {
  return fetch('/api/cart/my')
    .then((response) => {
      return response.ok ? response.json() : Promise.reject(response);
    })
    .then((userCart) => {
      console.log('/api/cart/my', {myCartData: userCart});
      return {myCartData: userCart};
    })
    .catch((reason) => {
      console.log('get user cart', reason);
    });
};

// hold on
export const updateCart = (userId, cartId, currentCart) => {
  return fetch(`/api/cart/${cartId}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({
      userId: userId,
      products: currentCart,
    }),
  });
};

// 品牌(brand):32 及分類(category):11
export const getAutoCompleteList = () => {
  return fetch('/api/product/autocomplete-list')
    .then((response) => {
      return response.ok ? response.json() : Promise.reject(response);
    })
    .then((list) => {
      // console.log('/api/product/autocomplete-list?auth=0', {autocompleteData: list});
      return list;
    })
    .catch((reason) => {
      console.log('get Auto CompleteList', reason);
    });
};

// 12個產品，total是100
export const getAllProduct = () => {
  return fetch('/api/product')
    .then((response) => {
      return response.ok ? response.json() : Promise.reject(response);
    })
    .then((product) => {
      // console.log('/api/product', {allProduct: product});
      // product.products.map(({tags}) => console.log(tags));
      return product;
    })
    .catch((reason) => {
      console.log('get All Product', reason);
    });
};

export const getProductDetail = (productId) => {
  return fetch(`/api/product/${productId}`)
    .then((response) => {
      return response.ok ? response.json() : Promise.reject(response);
    })
    .then((product) => {
      // console.log(`/api/product/${productId}`, {productId: product});
      return product;
    })
    .catch((reason) => {
      console.log('get product detail', reason);
    });
};

// backup
// // export const getSearchProduct = (requestQuery, requestValue, requestQuery1 = null, requestValue1 = null, requestQuery2 = null, requestValue2 = null) => {
// export const getSearchProduct = (requestQuery, requestValue) => {
//   // const {skip, limit, searchParams} = query;
//   // const modifiedSearchParams = `?auth=0&skip=${skip ? skip : '0'}&limit=${limit ? limit : '100'}${searchParams?.size ? `&${searchParams.toString()}` : ''}`;

//   // return fetch(`/api/product${modifiedSearchParams}`);
//   // return fetch(`/api/product?${requestQuery}=${requestValue}&${requestQuery1}=${requestValue1}&${requestQuery2}=${requestValue2}`)
//   return fetch(`/api/product?${requestQuery}=${requestValue}`)
//     .then((response) => (response.ok ? response.json() : Promise.reject(response)))
//     .then((products) => {
//       console.log(`/api/product/?${requestQuery}=${requestValue}`, {searchCategory: products});
//       return {requestQuery: products};
//     })
//     .catch((reason) => {
//       console.log(`get search beauty fail`, reason);
//     });
// };

export const getSearchProduct = (query) => {
  const baseAPI = `/api/product?`;
  // console.log(`${baseAPI}${query.toString()}`);

  return fetch(`${baseAPI}${query.toString()}`)
    .then((response) => (response.ok ? response.json() : Promise.reject(response)))
    .then((products) => {
      console.log(`${baseAPI}${query.toString()}`, {requestQuery: products});
      return products;
      // return {requestQuery: products};
    })
    .catch((reason) => {
      console.log(`get search beauty fail`, reason);
    });
};

import { ShopActionTypes } from "./shop.types"

export const retrieveProductsData = shop => ({
    type: ShopActionTypes.RETRIEVE_PRODUCTS_DATA,
    payload: shop
})
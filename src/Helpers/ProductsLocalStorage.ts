import { s } from "vitest/dist/reporters-5f784f42";
import env from "../env/env";

export const ProductsLike = (idProduct: number, like: boolean) => {
    const productsArray = GetProducstLikeList();
    let saved = false;
    const productExists = FindProductLikeExist(idProduct, productsArray);
    let updatedProducts: any = [];
    if (productExists) {
        // Producto Existe en el arreglo guardado
        if(!like) {
            updatedProducts = productsArray.filter((p: any) => p !== idProduct);
            saved = true;
        }
    } else {
        if (like) {
            updatedProducts = [...productsArray, idProduct];
            saved = true;
        }
    }

    if(saved) {
        SaveProductLikeList(updatedProducts);
    }
}

export const GetProducstLikeList = () => {
    const productsArray = JSON.parse(localStorage.getItem('productsLike') || '[]');
    return productsArray;
}

export const SaveProductLikeList = (productsArray: any) => {
    localStorage.setItem('productsLike', JSON.stringify(productsArray));
}

export const FindProductLikeExist = (idProduct: number, listProducts: any = GetProducstLikeList()) => {
    const productsArray = GetProducstLikeList();
    const productExists = productsArray.some((p: any) => p === idProduct);
    return productExists;
}
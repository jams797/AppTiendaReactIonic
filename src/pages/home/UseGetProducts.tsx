import { useIonToast } from "@ionic/react";
import { useState } from "react";
import { AlertToast } from "../../Helpers/AlertToast";
import { UrlHelper } from "../../Helpers/UrlHelper";
import { GetProducstLikeList } from "../../Helpers/ProductsLocalStorage";


const useGetProducts = (showAllProducts: boolean = true) => {
    const [present] = useIonToast();

    const [listProducts, setListProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const toggleLike = (idProduct: number, like: boolean) => {
      setListProducts((item) =>
        item.map((product) =>
          product.id === idProduct ? { ...product, liked: like} : product
        )
      );
    };
  
    const fetchProducts = () => {
      setLoading(true);
      fetch(UrlHelper('products'))
        .then((response) => response.json())
        .then((data) => {
            try{
            const productsStorageLike = GetProducstLikeList();
            const productAltert = data.map((product: any) => ({
              ...product,
              liked: productsStorageLike.includes(product.id),
            }));

            const listFinal = showAllProducts ? productAltert : productAltert.filter((p: any) => p.liked === true);
            setListProducts(listFinal);
            setLoading(false);
          } catch (error) {
            AlertToast("Error al cargar los productos", present);
            setLoading(false);
          }
        })
        .catch((err) => {
          AlertToast("Error en la comunicación", present);
          setLoading(false);
        });
    };
  
    return {
      listProducts,
      loading,
      fetchProducts,
      toggleLike,
      setListProducts,
    };
  };
  
  export default useGetProducts;
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { useEffect, useState } from 'react';
import { heart, heartOutline } from 'ionicons/icons';
import { ProductsLike } from '../../Helpers/ProductsLocalStorage';
import ItemProductList from '../../components/ItemProductList';
import useGetProducts from '../home/UseGetProducts';

interface FavoritesPageProps {
    idGeneric: number;
}

const FavoritesPage: React.FC<FavoritesPageProps> = ({idGeneric}) => {

    const { listProducts, loading, fetchProducts, toggleLike, setListProducts } = useGetProducts(false);

    const updateLikeProduct = (idProduct: number, like: boolean) => {
        ProductsLike(idProduct, !like);
        toggleLike(idProduct, !like);
    }

    useEffect(() => {
        setListProducts([]);
        fetchProducts();
    }, [idGeneric]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Inicio</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Favoritos</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ItemProductList
                    listProducts={listProducts}
                    updateLikeProduct={updateLikeProduct}
                    showLikeButtom={false}
                />
            </IonContent>
        </IonPage>
    );
};

export default FavoritesPage;

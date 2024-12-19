import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import './Home.css';
import { useEffect, useState } from 'react';
import { ParseImage } from '../../Helpers/ParseImage';
import useGetProducts from './UseGetProducts';
import { heart, heartOutline } from 'ionicons/icons';
import { ProductsLike } from '../../Helpers/ProductsLocalStorage';
import ItemProductList from '../../components/ItemProductList';

const Home: React.FC = () => {

    const { listProducts, loading, fetchProducts, toggleLike } = useGetProducts();

    const showLikeButtom = true;

    const updateLikeProduct = (idProduct: number, like: boolean) => {
        ProductsLike(idProduct, !like);
        toggleLike(idProduct, !like);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

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
                        <IonTitle size="large">Home</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ItemProductList
                    listProducts={listProducts}
                    updateLikeProduct={updateLikeProduct}
                />
            </IonContent>
        </IonPage>
    );
};

export default Home;

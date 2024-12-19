import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonIcon, IonRow, IonSpinner, useIonModal } from "@ionic/react";
import { ParseImage } from "../Helpers/ParseImage";
import { heart, heartOutline } from "ionicons/icons";
import ModalProdtuct from "./ModalProduct";
import ModalProduct from "./ModalProduct";
import { useState } from "react";

interface ItemProductListProps {
    listProducts: any;
    updateLikeProduct: any;
    showLikeButtom?: boolean;
    loading?: boolean;
}

const ItemProductList: React.FC<ItemProductListProps> = ({listProducts, updateLikeProduct, showLikeButtom = true, loading  = false}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imgProductModal, setImgProductModal] = useState("");
    const [titleProductModal, setTitleProductModal] = useState("");
    const [descriptionProductModal, setDescriptionProductModal] = useState("");

    const [presentModalProd, dismiss] = useIonModal(ModalProdtuct, {
        dismiss: (data: string, role: string) => dismiss(data, role),
    });

    const openProductModal = (item: any) => {
        setImgProductModal(ParseImage(item.images[0]));
        setTitleProductModal(item.title);
        setDescriptionProductModal(item.description);

        setIsModalOpen(true);
    }

    return loading
        ? (
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
                >
                <IonSpinner name="crescent" />
            </div>
        )
        : (
            <div>
                <IonGrid>
                    <IonRow>
                        {listProducts.map((item: any) => (
                            <IonCol id={item.id} size="12" size-md="6" size-lg="3" className="ion-padding">
                                <IonCard>
                                    <IonCardHeader>
                                        <IonCardTitle>
                                            <span className="titleProduct">{item.title}</span>
                                            {showLikeButtom && (
                                                <IonButton onClick={(() => updateLikeProduct(item.id, item.liked))} color='light'>
                                                    <IonIcon icon={item.liked ? heart : heartOutline}  color={item.liked ? 'danger' : ''} />
                                                </IonButton>
                                            )}
                                        </IonCardTitle>
                                    </IonCardHeader>
                                    <IonCardContent onClick={() => openProductModal(item)}>
                                        <img src={ParseImage(item.images[0])} alt="imagen" />
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        ))}
                    </IonRow>
                </IonGrid>
                <ModalProduct isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={titleProductModal} img={imgProductModal} description={descriptionProductModal} />
            </div>
        );
  };
  
  export default ItemProductList;
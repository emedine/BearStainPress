import { 
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
} from '@ionic/react';
import { camera, trash, close } from 'ionicons/icons';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  const { photos, takePhoto } = usePhotoGallery();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Archive</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">BookShop</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="BookShop" />

        <IonGrid>
        <IonRow>
          {photos.map((photo, index) => (
            <IonCol size="6" key={photo.filepath}>
              <IonImg src={photo.webviewPath} />
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>


        <IonFab vertical="bottom" horizontal="center" slot="fixed">
        <IonFabButton onClick={() => takePhoto()}>
          <IonIcon icon={camera}></IonIcon>
        </IonFabButton>
      </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

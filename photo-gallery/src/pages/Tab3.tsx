import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import axios from 'axios';
import { Books } from '../components/Books';
import './Tab3.css';


const Tab3: React.FC = () => {


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bear Stain Press Bookshop</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">BookShop</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="BookShop" />
       

        <Books /> {/* Render the Books component here */}
       

      
      </IonContent>
    </IonPage>
  );

  /*
  return (


  
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bear Stain Press Bookstore</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Bookstore</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Bookstore" />
      </IonContent>
    </IonPage>
  
  );
  */
};

export default Tab3;

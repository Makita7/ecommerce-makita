//Firebase
import db from './firebaseConfig';
import { collection, getDocs, query, orderBy, where } from "@firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

export const firestoreFetch = async (idCategory) => {
    let Q;
    if(idCategory){
        Q = query(collection(db, "products"), where('categoryId', '==' , idCategory));
    } else {
        Q = query(collection(db, "products"), orderBy('category'));
    }
    
    const querySnapshot = await getDocs(Q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));

    return dataFromFirestore;
} 

// export default firestoreFetch;

export const firestoreFetchOne = async (idItem) => {
    console.log(idItem);
    const docRef = doc(db, "products", idItem);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.exists());
    
    if (docSnap.exists()) {
        return {
            id: idItem,
            ...docSnap.data()
        }
    } else {
        console.log("No info found!");
    }
}
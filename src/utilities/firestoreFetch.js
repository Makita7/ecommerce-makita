//Firebase
import db from './firebaseConfig';
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";

const firestoreFetch = async (idCategory) => {
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

export default firestoreFetch;
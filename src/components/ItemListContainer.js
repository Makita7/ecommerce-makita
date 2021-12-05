import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router"; 
import firestoreFetch from "../utilities/firestoreFetch";


const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { idCategory } = useParams();


  useEffect(() => {

    firestoreFetch(idCategory)
      .then(result => setData(result))
      .catch(err => console.log(err));
  }, [idCategory]);

  //Unmount
  // useEffect(() => {
  //   return (() => {
  //       setData([]);
  //   })
  // }, []);

  return (
    <>
      <div className="container">
        <div className="row d-flex flex-wrap Center">
          <ItemList items={data} />
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;

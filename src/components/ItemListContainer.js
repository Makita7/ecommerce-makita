import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router"; 
import firestoreFetch from "../utilities/firestoreFetch";


//Custom Fetch & Local API
// import CustomFetch from "../utilities/CustomFetch";
// import products from "../utilities/products";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { idCategory } = useParams();


  useEffect(() => {

    firestoreFetch(idCategory)
      .then(result => console.log(result))
      .then(result => setData(result))
      .catch(err => console.log(err));
  }, [idCategory]);

  //Unmount
  // useEffect(() => {
  //   return (() => {
  //       setData([]);
  //   })
  // }, []);

  //GetFetch Old
  // useEffect(() => {
  //   CustomFetch(
  //     1500,
  //     products.filter((item) => {
  //       if (idCategory === undefined) return item;
  //       return item.category === idCategory;
  //     })
  //   )
  //     .then((result) => setData(result))
  //     .catch((err) => console.log(err));
  // }, [idCategory]);

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

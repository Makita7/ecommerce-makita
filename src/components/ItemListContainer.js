import ItemList from "./ItemList";
import CustomFetch from "../utilities/CustomFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import products from "../utilities/products";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { idCategory } = useParams();

  //DidUpdate
  useEffect(() => {
    CustomFetch(
      500,
      products.filter((item) => {
        if (idCategory === undefined) return item;
        return item.category === idCategory;
      })
    )
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, [idCategory]);

  return (
    <>
      <div className="d-flex flex-wrap">
        <ItemList items={data} />
      </div>
    </>
  );
};

export default ItemListContainer;

import Items from "./Items";

const ItemList = (props) => {
    return(
        <>
            {
                props.items.map((element) => (
                        <Items key={element.id} coffee={element}/>
                    ))
            }
        </>
    );
};

export default ItemList;
import {Link} from "react-router-dom";

const Items = (props) => {
    return (
        <>
            <div className="col-2 card text-center" >
                <img src={props.coffee.img} className="card-img-top" alt={props.coffee.name}/>
                <div className="card-body">
                    <h5 className="card-title">{props.coffee.name}</h5>
                    <button type="button" className="btn btn-dark"><Link className="whiteLink" to={`/Item/${props.coffee.id}`}>Show Description</Link></button>
                </div>
            </div>
        </>
    )
}

export default Items;
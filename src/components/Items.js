import {Link} from "react-router-dom";

const Items = (props) => {
    return (
        <>
            <div class="card text-center" >
                <img src={props.coffee.img} class="card-img-top" alt={props.coffee.name}/>
                <div class="card-body">
                    <h5 class="card-title">{props.coffee.name}</h5>
                    <button type="button" class="btn btn-dark"><Link className="whiteLink" to={`/Item/${props.coffee.id}`}>Show Description</Link></button>
                </div>
            </div>
        </>
    )
}

export default Items;
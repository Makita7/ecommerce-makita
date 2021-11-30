function Pokemon(){
    //state - DidMount
    import { useEffect, useState } from 'react';
    import { useParams } from 'react-router';
    
    /*For API usage*/
    const [name, setName] = useState([]);
    const {data, setData} = useParams();
    const [error, setError] = useState({
    isError: false,
    errorMessage: ', sorry for the trouble'
    });

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
            .then(response => response.json())
            .then(response => setName(response.forms))
            .catch(error => console.log('There was an issue with the fetch'+error.errorMessage));
    },[data]); /*So that it only asks and brings results once*/

    return(
        <>
            {/*API*/}
            <h4 className="text-center">Pokemon Name:
            {
                    error.isError
                    ? <p>there was an error</p>
                    : name.map((data) => <h5>{data.name}</h5>)
                }
            </h4>
            {/*<ol>
                {
                        error.isError
                    ? <p>there was an error</p>
                    : abilities.map((data) => <li>{data.ability.name}</li>)
                }
            </ol>*/}
        </>
    )
}

export default Pokemon;
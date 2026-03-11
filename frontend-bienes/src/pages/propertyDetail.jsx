import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Gallery from "../components/gallery";

import { getPropertiesByID } from "../services/get_properties";

function PropertyDetail(){
    const {id} = useParams(); //desde la url
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (() => {
        if (!id){
            setError('ID invalido');
            setLoading(false);
            return;
        }
        setLoading(true);

        getPropertiesByID(id)
        .then(data => {
            console.log('Data backend', data);// solo para pruebas
            setProperty(data);
            setLoading(false);
        })
        .catch(err =>{
            setError(err.message);
            setLoading(false);
        });
    }, [id]);
    
    if(loading) return <p className="loading"> Cargando propiedad..</p>;
    if(error) return <p className="error"> {error}</p>;
    if(!property) return <p className="ms-error"> No existe la propiedad</p>;

    return(
        <section className="container">
            <div className="container-content">
            {property && <Gallery images={property.images} />}
            {console.log(property.images)}
            {console.log( typeof property.images)}   
            <aside>
            <h2>{property.title}</h2>
            <p> {property.location}</p>
            <p> {property.price}</p>
            <p> {property.description}</p>
            </aside>
            </div>
            
        </section>
    );
}

export default PropertyDetail;
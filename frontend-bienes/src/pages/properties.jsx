import { useEffect, useState } from 'react';
import "./properties.css"
import { get_Properties } from '../services/get_properties';

function Properties() {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error , setError ] = useState(null);
    
    useEffect(() => {
        get_Properties()
        .then(setProperties)
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
        }, []);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p> {error}</p>;

    return(
        <section className='properties-section'>
            <h2>Propiedades Disponibles</h2>
            <div className='properties-grid'>
                {properties.map(property => (
                   <div className='property-card' key={property.id}> 
                   <div className='property-image'>
                    <img src={property.image} alt='propiedad'/> 
                   </div>

                   <div className='property-info'>
                    <h3>{property.title}</h3>
                    <p className='location'> {property.location}</p>
                    <p className='price'> {property.price}</p>

                    <button className='btn btn-primary'> Ver detalle</button>
                   </div>
                   </div> 
                ))}
            </div>
        </section>
    );
}
export default Properties;
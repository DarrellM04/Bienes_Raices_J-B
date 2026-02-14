import { useEffect, useState } from 'react';
import "./properties.css"

function Properties() {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error , setError ] = useState(null);
    
    useEffect(() => {
        fetch('http://localhost:3000/api/properties')
        .then(res => {
            if (!res.ok) throw new Error("Error al cargar Propiedades")
                return res.json();
        })
        .then(data => {
            setProperties(data);
            setLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setLoading(false);
        });
    }, []);

    if (loading) return <p>Cargando Propiedades...</p>;
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

                    <button> Ver detalle</button>
                   </div>
                   </div> 
                ))}
            </div>
        </section>
    );
}
export default Properties;
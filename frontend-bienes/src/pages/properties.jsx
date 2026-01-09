import { useEffect, useState } from 'react';

function Properties() {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error , setError ] = useState(null);
    
    useEffect(() => {
        fetch('properties')
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
        <section>
            <h2>Propiedades Disponibles</h2>
            <Properties properties={properties}/>
        </section>
    );
}
export default Properties;
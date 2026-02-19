const API_URL = 'http://localhost:3000/api/properties'

export async function get_Properties() {
    const res = await fetch(API_URL);

    if(!res.ok) throw new Error("Error al cargar propiedades");
    return res.json();
}

export async function getPropertiesByID(id) {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) {
        throw new Error("Propiedad no encontrada");
    }
    return res.json();
}

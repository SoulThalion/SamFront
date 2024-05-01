import app from './config'

export const getShipsByClientId = async (id) => {
    const token = localStorage.getItem('token');
    console.log(id)
    const ide= id
    try {   
        const {data} = await app.get(`/ship/own/${ide}`, {
            headers: {
                token: token // Incluir el token en el encabezado de autorización
            }
        });
        

    return data

} catch (error) {
    console.error('Error al borrar el usuario:', error);
    throw error; // Propagar el error para que pueda ser manejado por el código que llama a esta función
}
};
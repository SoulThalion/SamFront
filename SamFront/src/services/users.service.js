import app from './config'

export const getAllUsers = async () => {
    const token = localStorage.getItem('token');
    try {
        const { data } = await app.get('/user', {
            headers: {
                token: token
            }
        })

        return data

    } catch (error) {
        console.log('Error loging: ', error.message)
    }
}

export const getOneUser = async (id) => {
    const token = localStorage.getItem('token');
    try {
        const { data } = await app.get(`/user/${id}`, {
            headers: {
                token: token
            }
        })

        return data

    } catch (error) {
        console.log('Error loging: ', error.message)
    }
}

export const createUser = async (userName, name, surName, telephone, email, password, role) => {
    const token = localStorage.getItem('token');

    try {
        // Realizar la solicitud POST para crear un nuevo usuario
        const { data } = await app.post('/user', {
            userName: userName,
            name: name,
            surName: surName,
            telephone: telephone,
            email: email,
            password: password,
            role: role
        }, {
            headers: {
                token: token // Incluir el token en el encabezado de autorización
            }
        });

        return data; // Devolver los datos del nuevo usuario creado

    } catch (error) {
        console.error('Error al crear el usuario:', error);
        throw error; // Propagar el error para que pueda ser manejado por el código que llama a esta función
    }
};

export const updateUser = async (id, userName, name, surName, telephone, email, password, role) => {
    const token = localStorage.getItem('token');

    try {
        // Realizar la solicitud PATCH para editar un nuevo usuario
        const { data } = await app.patch(`/user/${id}`, {
            userName: userName,
            name: name,
            surName: surName,
            telephone: telephone,
            email: email,
            password: password,
            role: role
        }, {
            headers: {
                token: token // Incluir el token en el encabezado de autorización
            }
        });

        return data; // Devolver los datos del usuario editado

    } catch (error) {
        console.error('Error al crear el usuario:', error);
        throw error; // Propagar el error para que pueda ser manejado por el código que llama a esta función
    }
};
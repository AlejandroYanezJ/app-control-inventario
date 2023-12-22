import axios from 'axios';


const basePath = "http://localhost:8080/clientes"

export const getClientes = async() => {
    try{
        const response = await axios.get(`${basePath}/obtener`)
        return response.data;
    } catch(error){
        console.log(error)
        return []
    }  
}

export const getClienteById = async(idCliente) => {
    try{
        const response = await axios.get(`${basePath}/obtener/${idCliente}`)
        return response.data
    } catch(error){
        console.log(error)
        return []
    }  
}

export const addCliente = async (nombre= "",rut="", dv = "", direccion="", telefono ="", email = "") =>{
    try{
        debugger
        const cliente = {
            "nombre":nombre,
            "rut":rut,
            "dv":dv,
            "direccion":direccion,
            "telefono":telefono,
            "email":email
        };
        const response = await axios.put(`${basePath}/agregar`, cliente)
        return response.data;
    }catch(error){
        console.log(error)
        return error.response.data;
    }

}
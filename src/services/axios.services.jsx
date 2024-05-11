import axios from "axios"
import { LOCAL_SERVER_URL } from "../config/envConfig";

const localData  = localStorage.getItem("isLoggedInObj")

const {token}  = JSON.parse(localData);


export const Post =async (url,data) =>{
    try{

        const response = await axios.post(`${LOCAL_SERVER_URL}/${url}`,data);
        return response.data;

    }
    catch(err){
        return err.response.data
    }

}
export const axiosPost =async (url,data) =>{
    try{

        const response = await axios.post(`${LOCAL_SERVER_URL}/${url}`,data,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        return response.data;

    }
    catch(err){
        return err.response.data
    }

}
export const axiosPatch =async (url,data) =>{
    try{

        const response = await axios.patch(`${LOCAL_SERVER_URL}/${url}`,data,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        return response.data;

    }
    catch(err){
        return err.response.data
    }

}
export const  axiosGet =async (url) =>{
    try{
        const response = await axios.get(`${LOCAL_SERVER_URL}/${url}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        console.log(response)
        return response.data;

    }
    catch(err){
        return err.response.data
    }

}
export const axiosDelete =async (url) =>{
    try{
        const response = await axios.delete(`${LOCAL_SERVER_URL}/${url}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        return response.data;

    }
    catch(err){
        return err.response.data
    }

}
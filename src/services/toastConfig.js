import { toast } from "react-toastify"

const toastConifigtoast= {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
    }
export const successToast = (message) =>{
    toast.success(message,toastConifigtoast)
}
export const errorToast = (message) =>{
    toast.error(message,toastConifigtoast)
}
export const warningToast = (message) =>{
    toast.warning(message,toastConifigtoast)
}
export const infoToast = (message) =>{
    toast.info(message)
}
export const loader = (message) =>{
    toast.loading(message,toastConifigtoast)
}
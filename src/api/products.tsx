import { IProduct } from "../types/products";
import instance from "./instance";


let user;
if(localStorage.getItem('user')){
    user = JSON.parse(localStorage.getItem('user'))
}
console.log(user)
const {token ,user : getUser} = user;

export const list = () => {
    const url = "/products";
    return instance.get(url);
}
export const remove = (id: number) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}
export const read = (id: string | undefined) => {
    const url = `/products/${id}`;
    return instance.get(url);
}

export const add = (product:IProduct) => {
    const url = `/products/${getUser._id}`;
    return instance.post(url,product,{
        headers:{
            "Authorization":`Bearer ${token}`
        }
    });
}

export const update = (product:IProduct) => {
    const url = `/products/${product._id}`;
    return instance.put(url,product);
}
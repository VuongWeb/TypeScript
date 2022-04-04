import { TAuth } from "../types/auth";
import instance from "./instance";

export const sigin = (user:TAuth) => {
    const url='/signin';
    return instance.post(url,user)
}
export const sigup = (user:TAuth) => {
    const url='/signup';
    return instance.post(url,user)
}
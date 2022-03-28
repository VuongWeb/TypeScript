import { TAuth } from "../types/auth";
import instance from "./instance";

export const sigin = (user:TAuth) => {
    const url='/sigin';
    return instance.post(url,user)
}
export const sigup = (user:TAuth) => {
    const url='/sigup';
    return instance.post(url,user)
}
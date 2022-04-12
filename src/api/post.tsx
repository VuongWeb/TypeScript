import instance from "./instance";

export const listPost = () => {
    const url = "/posts";
    return instance.get(url);
}
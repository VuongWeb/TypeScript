import instance from "./instance"

export const listCate = () => {
    const url = "/categories";
    return instance.get(url);
}
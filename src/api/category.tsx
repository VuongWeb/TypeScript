import instance from "./instance"

export const listCate = () => {
    const url = "/cate";
    return instance.get(url);
}
import instance from "./instance"

export const listCate = () => {
    const url = "/categories";
    return instance.get(url);
}

export const listProductCate = (slug : string)=>{
    const url = `/category/${slug}`;
    return instance.get(url);
}
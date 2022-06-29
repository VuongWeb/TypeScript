import instance from "./instance"

export const listCate = () => {
    const url = "/categories";
    return instance.get(url);
}

export const removeCate = (id: number) => {
    const url = `/category/${id}`;
    return instance.delete(url);
}



export const productsOfCate = (id: string | undefined) => {
    const url = `/category/${id}?_embed=products`;
    return instance.get(url);
}
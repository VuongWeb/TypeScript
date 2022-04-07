import instance from "./instance"

export const listCate = () => {
    const url = "/categories";
    return instance.get(url);
}

export const removeCate = (id: number) => {
    const url = `/category/${id}`;
    return instance.delete(url);
}

export const listProductCate = (slug: string) => {
    const url = `/category/${slug}`;
    return instance.get(url);
}
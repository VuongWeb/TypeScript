type ProductProps = {
    data:{
        id:number,
        name:string
    }
}
const Products = ({data:{name,id}}:ProductProps) =>{
    return (
        <div>{name}</div>
    )
}
export default Products;
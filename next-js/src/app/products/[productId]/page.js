import { notFound } from "next/navigation"
export default function ProductDetails(props) {
    const { params } = props
    if(Number(params?.productId) > 100){
        notFound()
    }
    return (
        <h1>Product Details {params?.productId}</h1>
    )
}
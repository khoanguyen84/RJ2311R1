export default function ReviewDetails(props) {
    const { params: { productId, reviewId } } = props
    return (
        <h1>Reviews { reviewId} of Product {productId}</h1>
    )
}
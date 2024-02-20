export default function DocsPage(props) {
    const { params: { slugs } } = props
    if (slugs?.length === 2) {
        return (
            <h1>Viewing concept {slugs[1]} of feature {slugs[0]}</h1>
        )
    }
    if(slugs?.length === 1) {
        return (
            <h1>Viewing feature {slugs[0]}</h1>
        )
    }
    return (
        <h1>Document Page</h1>
    )
}
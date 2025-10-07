import { Link } from "react-router-dom";
const DefaultRoute = () => {
    return (
        <>
        <h1>Default Page</h1>
        <Link to="/testing/100">Go to Testing</Link>
        <Link to="/page-not-found">Go to PNF</Link>
        </>
    )
}
export default DefaultRoute
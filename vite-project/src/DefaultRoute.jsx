import { Link } from "react-router-dom";
const DefaultRoute = () => {
    return (
        <>
        <h1>Default Page</h1>
        <Link to="testing">Go to Testing</Link>
        <Link to="/page-not-found">Go to PNF</Link>
        </>
    )
}
export default DefaultRoute
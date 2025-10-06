import DefaultRoute from "./DefaultRoute";
import { Link } from "react-router-dom";
const PageNotFound = () => {
    return (
        <>
        <h1>404 Error</h1>
        <h2>Page Not Found</h2>
        <Link to="/" >Go to Home</Link>
        </>
    )
}
export default PageNotFound
import { Link } from "react-router-dom"
import DefaultRoute from "./DefaultRoute"
import { useParams } from "react-router-dom";

const TestingRoute = () => {
    let ReceivedData = useParams();
    console.log(ReceivedData.data)
    
    return (
        <>
        <h1>Just Testing</h1>
        <Link to="/">Go To Home</Link>
        </>
    )
}
export default TestingRoute;
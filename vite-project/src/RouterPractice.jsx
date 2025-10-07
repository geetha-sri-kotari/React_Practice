import {BrowserRouter, Routes, Route} from "react-router-dom"
import DefaultRoute from "./DefaultRoute"
import TestingRoute from "./TestingRoute"
import PageNotFound from "./PageNotFound"
const RouterPractice = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultRoute />} />
                <Route path="/testing/:data" element={<TestingRoute/>} />
                <Route path="*" element={<PageNotFound/>} />
            </Routes>
        </BrowserRouter>
        </>
    )
}
export default RouterPractice
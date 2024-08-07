import NavBar from "../NavBar/NavBar"
import { Outlet } from "react-router-dom"
const HomeLayout = () => {
    return (
        <>
            <NavBar /> 
            <Outlet />       
        </>
    )
}

export default HomeLayout
import { Outlet } from "react-router-dom"
import DashBoard from "../DashBoard"
const AdminLayout = () => {
    return (
        <>
            <DashBoard />
            <Outlet />
        </>
    )
}

export default AdminLayout
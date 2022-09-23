import { Outlet } from "react-router-dom";
export const SharedLayout = () => {
    return (
        <>
        <h1>header</h1>
        <Outlet />
        <h2>footer</h2>
        </>
    )
}
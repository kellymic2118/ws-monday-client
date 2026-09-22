import UserProtectedRoute from "../context/use-route-context"
import Dashboard from "../pages/dashboard/dashboard"
import { Navigate, Route, Routes } from "react-router-dom"

export const Routing = () => {
    return (<>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<UserProtectedRoute><div className="page-content"><h1>Settings</h1></div></UserProtectedRoute>} />
            <Route path="/profile" element={<UserProtectedRoute><div className="page-content"><h1>Profile</h1></div></UserProtectedRoute>} />
        </Routes>
    </>)
}
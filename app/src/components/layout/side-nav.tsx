import { ChevronRight, Clock3, Eye, LayoutGrid, LogOut, MoreHorizontal, Settings2, SlidersHorizontal, TrendingUp, WalletCards } from "lucide-react";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";

type SideNavProps = { user?: { email?: string; name?: string }; onLogout: () => void };

export const SideNav = ({ user, onLogout }: SideNavProps) => {
    return (
        <aside className="sidebar">
            <div className="brand-mark">
                <span>NS</span>
                <strong>Wall Street Monday</strong>
            </div>
            <nav className="main-nav">
                <p className="nav-label">Workspace</p>
                <NavLink to="/" className={({ isActive }) => `nav-item${isActive ? " active" : ""}`} end><LayoutGrid /> Overview</NavLink>
                <a className="nav-item"><Eye /> Watchlist <span className="nav-count">5</span></a>
                <a className="nav-item"><WalletCards /> Portfolio</a>
                <a className="nav-item"><Clock3 /> Activity</a>
                <p className="nav-label nav-spaced">Tools</p>
                <NavLink to="/markets" className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}><TrendingUp /> Markets</NavLink>
                <a className="nav-item"><SlidersHorizontal /> Screeners</a>
            </nav>
            <div className="sidebar-bottom">
                <div className="cash-card">
                    <span>Available to invest</span>
                    <strong>$4,280.45</strong>
                    <a>Move money <ChevronRight /></a>
                </div>
                <a className="nav-item"><Settings2 /> Settings</a>
                <Button className="nav-item logout-button" onClick={onLogout}><LogOut /> Sign out</Button>
                <div className="profile">
                    <div className="avatar">{user?.email?.slice(0, 2).toUpperCase() || "KM"}</div>
                    <div>
                        <strong>{user?.name || "Kelly Morgan"}</strong>
                        <span>Individual account</span>
                    </div>
                    <MoreHorizontal />
                </div>
            </div>
        </aside>
    );
}
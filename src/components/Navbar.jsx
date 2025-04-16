import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <NavLink to='/'>Homepage</NavLink>
            <NavLink to='/post-list'>Lista prodotti</NavLink>
            <NavLink to='/chi-siamo'>Chi siamo</NavLink>
        </nav>
    )
}

export default Navbar;
import { Link } from "react-router-dom"

function NotFound() {
    return <div>
        <h1>Ops, post non trovato!</h1>
        <Link to='/'>Vuoi tornare alla home?</Link>

    </div>
}

export default NotFound;
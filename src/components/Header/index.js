import { Link } from "react-router-dom"
import "./styles.css"

export const Header = () => {
    return(
        <div className="header">
            <Link  to="/" className="homeP">HOME</Link> 
            <Link  to="favotires" className="favoritesP">FAVORITES</Link>
        </div>
    )
}
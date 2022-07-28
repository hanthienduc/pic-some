import { useContext } from "react"
import { Link } from "react-router-dom"
import { appContext } from "../context/AppContext"

function Header() {
    const { cartItems } = useContext(appContext)
    const cartClassName = `ri-shopping-cart-${cartItems.length > 0 ? 'fill' : 'line'}`
    return (
        <header>
            <Link to={'/'}><h2>Pic Some</h2></Link>
            <Link to={'/cart'}>
                <i className={`${cartClassName} ri-fw ri-2x`}>
                </i>
            </Link>
        </header>
    )
}

export default Header
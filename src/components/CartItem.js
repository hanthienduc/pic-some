import { useContext } from "react"
import { appContext } from "../context/AppContext"
import UseHover from "../hooks/UseHover"
import { PropTypes } from 'prop-types'

function CartItem({ item }) {

    const { removeFromCart } = useContext(appContext)
    const { hovered, ref } = UseHover()

    const iconClassName = hovered ? 'fill' : 'line'

    return (
        <div className="cart-item" onClick={() => removeFromCart(item.id)}>
            <i
                ref={ref}
                className={`ri-delete-bin-${iconClassName}`}></i>

            <img src={item.url} width="130px" alt={item.id} />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem
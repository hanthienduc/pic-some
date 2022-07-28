import { useContext } from "react"
import { appContext } from "../context/AppContext"
import { PropTypes } from 'prop-types'
import UseHover from "../hooks/UseHover"

function Image({ img, className }) {

    const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(appContext)

    const { hovered, ref } = UseHover()


    function heartIcon() {
        if (img.isFavorite) {
            return <i
                onClick={() => toggleFavorite(img.id)}
                className="ri-heart-fill favorite">
            </i>
        } else if (hovered) {
            return <i
                onClick={() => toggleFavorite(img.id)}
                className='ri-heart-line favorite'>
            </i>
        }
    }

    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if (alreadyInCart) {
            return <i onClick={() => removeFromCart(img.id)}
                className="ri-shopping-cart-fill cart"></i>
        }
        if (hovered) {
            return <i onClick={(e) => addToCart(e, img)}
                className="ri-add-circle-line cart"> </i>
        }
    }

    return (
        <div
            ref={ref}
            className={`${className} image-container`}>
            <img src={img.url} className="image-grid" alt={className} />
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    }),
    className: PropTypes.string
}

export default Image
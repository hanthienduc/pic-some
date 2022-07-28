import { useContext, useState } from "react"
import CartItem from "../components/CartItem"
import { appContext } from "../context/AppContext"

function Cart() {
    const { cartItems, emptyCart } = useContext(appContext)

    const defaultPrice = 5.99

    const totalCost = (defaultPrice * cartItems.length)

    const totalCostDisplay = totalCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' })

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    const defaultText = 'Place Order'

    const [buttonText, setButtonText] = useState(defaultText)

    function placeOrder() {
        setButtonText('Ordering...')
        setTimeout(() => {
            console.log('Order placed!')
            setButtonText(defaultText)
            emptyCart()
        }, 1000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            {cartItems.length ? <div className="order-button">
                <button onClick={placeOrder}>{buttonText}</button>
            </div>
                : <p>You have no items in the cart</p>
            }
        </main>
    )
}

export default Cart
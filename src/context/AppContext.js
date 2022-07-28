import { createContext, useEffect, useState } from "react";

const appContext = createContext()

function AppContextProvider({ children }) {

    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])

    function toggleFavorite(id) {
        const updateArr = allPhotos.map(photo => {
            if (photo.id === id) {
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }
            return photo
        })

        setAllPhotos(updateArr)
    }

    function addToCart(e, newItem) {
        setCartItems((prevItems) => {
            return [...prevItems, newItem]
        })
    }

    function removeFromCart(id) {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id))
    }

    function emptyCart() {
        setCartItems([])
    }

    return (
        <appContext.Provider value={{ allPhotos, toggleFavorite, addToCart, cartItems, removeFromCart, emptyCart }}>
            {children}
        </appContext.Provider>
    )
}

export { AppContextProvider, appContext }
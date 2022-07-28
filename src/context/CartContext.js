import { createContext, useEffect, useState } from "react";

const cartContext = createContext()

function CartContextProvider(props) {

    const [allPhotos, setAllPhotos] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    })

    return (
        <cartContext.Provider value={{ allPhotos }}>
            {props.children}
        </cartContext.Provider>
    )
}

export { CartContextProvider, cartContext }
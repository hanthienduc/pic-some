import { useContext } from "react"
import Image from "../components/image"
import { cartContext } from "../context/CartContext"
import { getClass } from "../utils"

function Photos() {

    const context = useContext(cartContext)

    const allPhotosElement = context.allPhotos.map((photo, index) => (
        <Image key={index} img={photo.url} className={getClass(index)} />
    ))

    return (
        <main className="photos">
            {allPhotosElement}
        </main>
    )
}

export default Photos
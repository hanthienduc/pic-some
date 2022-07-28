import { useContext } from "react"
import Image from "../components/image"
import { appContext } from "../context/AppContext"
import { getClass } from "../utils"

function Photos() {

    const context = useContext(appContext)

    const allPhotosElement = context.allPhotos.map((photo, index) => (
        <Image key={photo.id}
            img={photo}
            className={getClass(index)} />
    ))

    return (
        <main className="photos">
            {allPhotosElement}
        </main>
    )
}

export default Photos
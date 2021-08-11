import React from 'react'
import { Image } from '../Image/Image'

export const Gallery = props => {

    const renderImages = imgs => {
        if (imgs.length === 0) {
            return <p>No images, try again</p>
        }
        return imgs.map(img => {
            const url = `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}_m.jpg`
            return (
            <Image
                id={img.id}
                key={img.id}
                src={url}
                title={img.title}
            />
            )
        })
    }

    return (
        <div className="container d-flex justify-content-between flex-wrap mb-3 image">
            {props.imgArr ? renderImages(props.imgArr) : <p>No images</p>}
        </div>
    )
}


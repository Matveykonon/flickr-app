import React from 'react'
import { Image } from '../../components/Image/Image'

export const Bookmarks = () => {

    const renderBookmarks = () => {
        if (localStorage.length === 0) {
            return <p>No bookmarks</p>
        }
        return Object.entries(localStorage).map(item => {
            const[ , data] = item
            const img = JSON.parse(data);
            return (
                <Image
                    id={img.id}
                    key={img.id}
                    src={img.src}
                    type="bookmarked"
                    tags={img.tags}
                />
            )
        })
    }

    return (
        <div style={{marginTop: '20px'}}>
            <h1>Bookmarks</h1>
            <div className="container d-flex justify-content-between flex-wrap mb-3 image">
                {renderBookmarks()}
            </div>
        </div>
    )
}
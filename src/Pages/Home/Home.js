import React from 'react'
import { Gallery } from '../../components/Gallery/Gallery'
import { Loader } from '../../components/Loader/Loader'
import { Pagination } from '../../components/Pagination/Pagination'
import { Search } from '../../components/Search/Search'
import { useFlickr } from '../../FlickrContext/FlickrContext'

export const Home = () => {

    const {images, loading} = useFlickr()
    
    return (
        <div className="container pt-3">
            <Search/>
            {loading ? <Loader/> : null}
            {images && images.pages > 1 ? <Pagination total={images.pages}/> : null}
            {images ? <Gallery imgArr={images.photo}/> : null}
        </div>
    )
}


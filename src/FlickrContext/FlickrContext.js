import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

const FlickrContext = React.createContext()

export const useFlickr = () => {
    return useContext(FlickrContext)
}

export const FlickrProvider = ({children}) => {

    const apiKey = process.env.REACT_APP_API_KEY

    const [images, setImages] = useState(null)   // should be combined in redux
    const [sTag, setSTag] = useState('')
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)

    const nextPage = () => {
        setPage(prev => prev + 1)
    }

    const prevPage = () => {
        setPage(prev => prev - 1)
    }

    const loadingHandler = () => {
        setLoading(prev => !prev)
    }


    useEffect(() => {
        searchImages(sTag)
        // eslint-disable-next-line
    }, [page])


    const searchImages = async tag => {
        if (!tag) {
            return
        }
        setSTag(tag)
        try {
            loadingHandler()
            const response = await axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=24&page=${page}&format=json&nojsoncallback=1`)
            setImages(response.data.photos)
            loadingHandler()
        } catch (e) {
            console.log("Fetching home error", e)
        }
    }

    return (
        <FlickrContext.Provider
            value={{
                images,
                loading,
                searchImages,
                page,
                nextPage,
                prevPage,
                setPage
            }}
        >
            {children}
        </FlickrContext.Provider>
    )
}
import React, { useEffect, useState } from 'react'
import { useFlickr } from '../../FlickrContext/FlickrContext'
import useDebounce from '../../Helpers/useDebounce'

export const Search = () => {

    const [searchInput, setSearchInput] = useState("")
    const {images, searchImages, setPage} = useFlickr()

    const debouncedSearch = useDebounce(searchInput, 800)

    useEffect(() => {
        if (debouncedSearch) {
            setPage(1)
            searchImages(debouncedSearch)
        } else {
            return
        }
        // eslint-disable-next-line
    }, [debouncedSearch])

    const inputControl = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value)
    }

    const submitHandler = (e) => {
            e.preventDefault()
    }

    return (
        <>
        <form onSubmit={submitHandler} className="mb-2">
            <div className="form-group">
                <input
                    className="form-control shadow-none"
                    placeholder="Find images..."
                    value={searchInput}
                    onChange={inputControl}
                />
            </div>
        </form>
        {!!images || !!searchInput ? null : <span className="mx-3">No images here. Would you try to search for anything else?..</span>}
        </>
        
    )
}
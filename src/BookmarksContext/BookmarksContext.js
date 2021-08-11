import React, { useContext, useLayoutEffect, useRef, useState } from 'react'

const BookmarksContext = React.createContext()

export const useBookmarks = () => {
    return useContext(BookmarksContext)
}

export const BookmarksProvider = ({children}) => {

    const [bookmark, setBookmark] = useState({})

    const firstUpdate = useRef(true); //help me please 0_0
        useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    bookmarkIt(bookmark.id)
    console.log("componentDidUpdateFunction");
  });

  
    const bookmarkIt = (id) => {
        localStorage.setItem(id, JSON.stringify(bookmark))
    }

    const removeFromBookmarks = (id) => {
        localStorage.removeItem(id.toString())
    }

    const formBookmark = (src, id, tags) => {
        setBookmark(prev => {
            return {
                ...prev,
                src: src,
                id: id,
                tags: tags
            }
        })
    }
    
    return (
        <BookmarksContext.Provider
            value={{
                bookmark,
                formBookmark,
                bookmarkIt,
                removeFromBookmarks
            }}
        >
            {children}
        </BookmarksContext.Provider>
    )
}
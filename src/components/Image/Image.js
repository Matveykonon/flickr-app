import React, { useState } from 'react'
import { useBookmarks } from '../../BookmarksContext/BookmarksContext'

export const Image = props => {

    const {formBookmark, removeFromBookmarks} = useBookmarks()
    const [input, setInput] = useState("")
    const [, setRe] = useState(false)
    const type = Object.keys(localStorage).includes(props.id) ? "bookmarked" : "simple" 
    
    const tagsHandler = e => {
        e.preventDefault()
        setInput(e.target.value)
    }

    const reload = () => {
        setRe(prev => !prev)
    }

    const bookIt = async () => {
        await formBookmark(props.src, props.id, input)
        reload()
    }

    const removeIt = async (id) => {
        await removeFromBookmarks(props.id)
        reload()
    }

    return (
        <div className="card" style={{width: "30%", marginBottom: "30px"}}>
            <div className="card-image">
                {/* eslint-disable-next-line */}
                <img className="card-img-top" src={props.src} alt="Image is not aviliable!"/>  
            </div>
            <div className="card-body d-flex flex-column">
                <span className="card-text mb-1 text-truncate" style={{maxWidth: '100%'}}>{props.title}</span>
                {type==="bookmarked" ? 
                <button className="btn btn-danger mb-2" onClick={removeIt}>Remove It!</button>
                :<> <button onClick={() => bookIt()} className="btn btn-primary mb-2 ">Bookmark it!</button>
                <input onChange={tagsHandler} className="form-control" placeholder="some tags?"/></>
                }
                {props.tags ? <span className="text-muted">{props.tags}</span> : null}
            </div>
        </div>
    )
}
import React, { useState, useEffect } from "react"
require('dotenv').config()


export default function Search() {
    const [loading, setLoading] = useState(false)
    const [urlArr, setUrls] = useState([])
    const [slicedArr, setSliced] = useState([])
    const [search, setSearch] = useState('')
    const [load, setLoad] = useState(8)
    const [getError, setError] = useState(false)

    const api_key = process.env.REACT_APP_API_KEY


    const fetchSearch = async (query) => {
        let results = []
        try {
            setLoading(true)
            const response = await fetch(
                `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${query}&limit=80&offset=0&rating=G&lang=en`
            )
            const json = await response.json()
            results = await json.data.map(res => res.images.fixed_height_downsampled.url)
            results.length === 0 ? setError(true) : setError(false)
            console.log(json)
        } catch (err) {
            console.log(err)
            setError(true)
        } finally {
            setLoading(false)
        }
        return { results }
    }


    const getUrl = async () => {
        const urls = await fetchSearch(search)
        setUrls(urls.results)
    }
    

    const handleSubmit = (e) => {
        e.preventDefault()
        getUrl()
    }

    const handleLoad = () => {
        setLoad(load + 8)
    }

    useEffect(() => {
        setSliced(urlArr.slice(0, load))
    }, [urlArr, load])

    return(
        <div className="row text-center mx-auto home-container">
            <form onSubmit={(e) => handleSubmit(e)} className="input-group mb-5 mx-auto justify-content-center">
                <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search a GIF"
                />
                <button className="btn btn-outline-secondary search-btn" style={{boxShadow: 'none'}} type="submit">Search</button>
            </form><br />
            <div className="col-12 mx-auto mb-5">
                {
                 loading ? <p>loading...</p> : slicedArr.map((data, key) => <img className="trend m-2" key={key} alt="" src={data}></img>)
                }
                {
                    getError && <p className="text-center">No gifs found!</p>
                }
            </div>
            {
                    urlArr.length > load && <button className="btn btn-outline-secondary mb-5 mx-auto" style={{boxShadow: 'none'}} onClick={handleLoad}>Load More</button>
            }
        </div>
    )
}
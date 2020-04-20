import React, { useState, useEffect } from "react"
require('dotenv').config()

function useGiphy(query) {
    const [results, setResults] = useState('')
    const [loading, setLoading] = useState(false)
    const [getError, setError] = useState(false)

    const api_key = process.env.REACT_APP_API_KEY
    

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                const response = await fetch(
                    `https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${query}&rating=G`
                )
                const json = await response.json()
                setResults(json.data.images.fixed_height_downsampled.url)

                json.length === 0 ? setError(true) : setError(false)
            } catch(err) {
                console.log(err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }   
        if(query !== '') {
            fetchData()
        }
    }, [query])
    
    return [results, loading, getError]
}

export default function AsyncHooks() {
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('')
    const [results, loading, getError] = useGiphy(query)

    const handleSubmit = (e) => {
        e.preventDefault()
        setQuery(search)
    }

    return (
        <div className="row text-center mx-auto home-container">
            <form onSubmit={(e) => handleSubmit(e)} className="input-group mb-5 mx-auto justify-content-center">
                <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search a random GIF"
                />
                <button className="btn btn-outline-secondary search-btn" style={{boxShadow: 'none'}} type="submit">Search</button>
            </form>
            <br />
            {loading ? (
                    <p className="col-md-12 text-align-center">Loading gif...</p>
                ) : (
                    <div className="col-md-12 column mx-auto mb-5">
                        <img className="random-gif" alt="" src={results} />
                    </div>
                )
            }
            {
                !loading && getError && <p className="text-center">No gifs found!</p>
            }
        </div>
    )
}
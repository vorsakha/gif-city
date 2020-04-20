import React, { useEffect, useState } from "react"
require('dotenv').config()

export default function Home() {
    const [trending, setTrend] = useState([])
    const [slicedArr, setSliced] = useState([])
    const [load, setLoad] = useState(8)
    const [loading, setLoading] = useState(true)

    const api_key = process.env.REACT_APP_API_KEY


    useEffect(() => {
        setup()
    }, [])

    useEffect(() => {
        setSliced(trending.slice(0, load))
    }, [trending, load])

    async function fetchTrending() {
        let trend = []
        try {
            const response = await fetch(
                `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=80&rating=G`
            )
            const json = await response.json()
            console.log(json)
            trend = await json.data.map(res => res.images.fixed_height_downsampled.url)
        } catch(err) {
            console.log(err)  
        }
        return trend
    }

    async function setup() {
        try {
            const gifData = await fetchTrending()
            setTrend(gifData.map(data => data))
        } finally {
            setLoading(false)
        }
    }

    const handleLoad = () => {
        setLoad(load + 8)
    }

    return(
        <div className="row home-container mx-auto mt-5">
            <div className="col-md-12 text-info text-center mb-3">
                <h2>Trending Gifs</h2>
            </div>
            <div className="col-12 mx-auto text-center mb-5">
                {
                    loading ? <h3>loading...</h3> : slicedArr.map((data, key) => <img className="trend m-2" key={key} alt="" src={data}></img>)
                }
            </div>
            {
                trending.length > load && <button className="btn btn-outline-secondary mb-5" style={{boxShadow: 'none'}} onClick={handleLoad}>Load More</button>
            }
        </div>
    )
}
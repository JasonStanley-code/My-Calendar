import React from 'react'
import Card from "./card"
import "./index.scss"
const Home = ({
    data
}) => {
    return (
        
        <div className="container">
            <h1>Wawancara ARC</h1>
            {data.map(dat => <Card key={dat.path} data={dat}/>)}
        </div>
    )
}

export default Home;
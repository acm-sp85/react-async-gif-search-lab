import React from "react";
import GifList from "../components/GifList"
import GifSearch from "../components/GifSearch";

class GifListContainer extends React.Component {
    state = {
        data: [],
        gifs: []
    }

componentDidMount(){
    fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
    .then(response => response.json())
    .then(data=>{

        this.setState({data})
        const fetchedData = this.state.data.data
        this.setState({
            gifs: [
            fetchedData[0].images.original.url,
            fetchedData[1].images.original.url,
            fetchedData[2].images.original.url
            ]
        })


    })
}

handleSearch = (textValue) => {
    console.log(textValue)
    fetch(`https://api.giphy.com/v1/gifs/search?q=${textValue}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())
    .then(data=>{

        this.setState({data})
        const fetchedData = this.state.data.data
        this.setState({
            gifs: [
            fetchedData[0].images.original.url,
            fetchedData[1].images.original.url,
            fetchedData[2].images.original.url
            ]
        })


    })
}



render(){

    return(
        <div>
            <GifSearch handleSearch={this.handleSearch} />
            <GifList gifs={this.state.gifs}/>
        </div>
    )
}
}

export default GifListContainer
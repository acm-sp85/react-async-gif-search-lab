
import React from 'react'

const GifList = props => {
    const gifs = props.gifs
    console.log(gifs)

    return (
        <div>
          {gifs.map(gif => (
            <img src={gif} key={gif}></img>
          ))}
        </div>
      );

}

export default GifList




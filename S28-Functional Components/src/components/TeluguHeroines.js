import React from 'react'

function TeluguHeroines(props) {
  return (
    <div className="mainD">
        <h1>Name:{props.name}</h1>
        <img src={props.imgURL}></img>
        <h2>Industry:{props.industry}</h2>
        <h2>Hit Movie:{props.hitmovie}</h2>
        <h2>Flop Movie:{props.flopmovie}</h2>
      </div>
  )
}

export default TeluguHeroines

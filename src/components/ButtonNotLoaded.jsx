import React from 'react'

const ButtonNotLoaded = ({ isLoading, getData }) => (
  <button onClick={getData} disabled={isLoading}>
    {
      isLoading
        ? 'isLoading'
        : 'download data'
    }
  </button>
)

export default ButtonNotLoaded
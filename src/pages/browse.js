import React from 'react'
import {useContent} from '../hooks/use-content'

function Browse() {
    const {films} = useContent('films')
    console.log(films)
    return (
        <div>
          Browse
        </div>    
    )
}

export default Browse

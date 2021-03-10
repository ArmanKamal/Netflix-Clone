import React from 'react'
import {useContent} from '../hooks/use-content'
import selectionFilter from '../utils/selection-map'

function Browse() {
    const {films} = useContent('films')
    const { series} = useContent('series')

    const slides = selectionFilter({ series, films})
    console.log(slides)
    return (
        <div>
          Browse
        </div>    
    )
}

export default Browse

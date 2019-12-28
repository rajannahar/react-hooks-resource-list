import React from 'react'
import useResources from './useResources'

const ResourceList = ({ resourceName }) => {

  const resources = useResources(resourceName)

  return(
    <>
      <h2>{resourceName}</h2>
      <ul>
        {resources.map(resource => {
          return <li key={resource.id}>{resource.title}</li>
        })}
      </ul>
    </>
  )
}

export default ResourceList
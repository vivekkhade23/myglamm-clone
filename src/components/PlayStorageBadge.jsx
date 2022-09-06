import React from 'react'
import { ReactAppStoreBadge } from 'react-app-store-badge'

const PlayStorageBadge = () => {
  return (
    <ReactAppStoreBadge
    textHeading="Available on the"
    textStoreName="App Store"
    icon={<i className="icon-my-icon" />}
    url="www.myappstoreplaceholder.com"
  />
  )
}

export default PlayStorageBadge
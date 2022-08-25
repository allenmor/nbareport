import React from 'react'
import ConferenceTableContainer from './ConferenceTableContainer';

function FrontPage({teams}) {
  return (
    <div>
      <ConferenceTableContainer teams={teams}/>
    </div>
  )
}

export default FrontPage;

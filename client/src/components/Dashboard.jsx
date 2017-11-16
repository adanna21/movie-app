import React from 'react';

function Dashboard(props){
  return(
    <div className="dash">
      <h1>Hello {props.user.username}!</h1>
    </div>
  )
}

export default Dashboard;

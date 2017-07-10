"use strict"
import React from 'react';

class PersonItem extends React.Component{
  render(){
    var p = this.props.data;
    return(
      <div className="person">
        <div className="picture">{p.picture && p.picture.large ? <img src={p.picture.large} /> : ''}</div>
        <div className="name">{p.name.first} {p.name.last}</div>
        <div className="mail">{p.email}</div>
        <div className="joined">
          {p.registered ? <div>Joined <div>{p.registered}</div> </div> : ''}
        </div>
      </div>
    )
  }
}
export default PersonItem;

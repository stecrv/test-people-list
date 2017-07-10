"use strict"
import React from 'react';
import {connect} from 'react-redux';
import {getPeople} from '../../actions/peopleActions';
import {bindActionCreators} from 'redux';


import PersonItem from './personItem';

class PeopleList extends React.Component{
  componentDidMount(){
    this.props.getPeople()
  }
  handleClick(){
    this.props.getPeople(this.props.people)
  }
  render(){
    const button = <button onClick={this.handleClick.bind(this)} >Load More</button>
    const list = this.props.people.map(function(peopleArr,index){

      return(

          <PersonItem
            key={index}
            id={index}
            data={peopleArr}
          />

      )
    });

    return(
        <div id="peopleListWrapper">
          <h1>PEOPLE</h1>
          {list.length?
            <div><div id="peopleList">{list}</div><div id="peopleButton">{button}</div></div>
            :'loading data'}
        </div>
    )
  }
}
function mapStateToProps(state){
  return{
    people: state.people.people
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getPeople:getPeople
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          className='list-group-item'>
          <button
            onClick={() => this.props.selectBook(book)}>
            {book.title}</button></li>
      )
    })
  }

  render() {
    console.log(this.props)
    return (
      <ul className='list group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}


function mapStateToProps(state) {
  //whatever is returned will show up as props inside booklist
  return {
    books: state.books
  }
}


//anything returned will end up as props in component container
function mapDispatchToProps(dispatch) {
  //whenever action is called, result should be passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}
//this.props.selectBook will call the action container

//makes dispatch function available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
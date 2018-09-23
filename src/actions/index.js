export function selectBook(book) {
  console.log('book', book.title)
  //selectbook action creator, return and object with type property, always type, maybe payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
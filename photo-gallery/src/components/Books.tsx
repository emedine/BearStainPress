import React, { Component } from 'react'

import axios from 'axios';

interface Book {
    id: number;
    title: {
      rendered: string;
    };
    // Add other properties as needed
  }

  interface BooksState {
    books: Book[];
    isLoaded: boolean;
  }

export class Books extends Component<{}, BooksState> {

    state: BooksState = {
        books: [],
        isLoaded: false
      };

      componentDidMount() {
        axios
          .get<Book[]>('https://bearstainpress.com/wp-json/wp/v2/books')
          .then(res =>
            this.setState({
              books: res.data,
              isLoaded: true
            })
          )
          .catch(err => console.log(err));
      }
    
      render() {
        const { books, isLoaded } = this.state;
    
        return (
          <div>
            {isLoaded ? (
              books.map(book => (
                <div key={book.id}>
                  <h4>{book.title.rendered}</h4>
                  {/* Render other book properties here */}

                  console.log("I am a book: " + book.title)
                </div>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>
        );
      }
    }
    
    export default Books;
import React, { Component } from 'react'

import axios from 'axios';

interface Book {
    id: number;
    title: {
      rendered: string;
    };
    featured_media:{
        rendered: string;
    };
    content:{
        rendered: string;
      };
    excerpt:{
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
        console.log("book data: " + JSON.stringify(this.state));

        const { books, isLoaded } = this.state;
        return (
            
          <div>
            
            {isLoaded ? (
              books.map(book => (
                <div key={book.id}>
                  <h4>{book.title.rendered}</h4>
                  {/* Render other book properties here */}
                  
                  console.log("ABOUT: " + book.excerpt);

                  {book.featured_media && ( // Check if featured_media exists
                <img
                  src={`https://bearstainpress.com/wp-json/wp/v2/media/${book.featured_media}`}
                  alt="Featured Image"
                />
              )}

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
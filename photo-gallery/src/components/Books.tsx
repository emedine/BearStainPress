import React, { Component } from 'react'

import axios from 'axios';

interface Book {
    id: number;
    title: {
      rendered: string;
    };
    featured_media?: string;

    imageurl:{
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

  interface BookWithImage extends Book {
    imageUrl?: string;
  }
  

export class Books extends Component {
  state = {
    books: [] as BookWithImage[],
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get('https://bearstainpress.com/wp-json/wp/v2/books')
      .then(res => {
        const bookPromises = res.data.map((book: Book) => {
            if (book.featured_media) {
                return axios.get(`https://bearstainpress.com/wp-json/wp/v2/media/${book.featured_media}`);
              } else {
                return Promise.resolve(null);
              }
        });

        Promise.all(bookPromises)
          .then(mediaResponses => {
            const booksWithImages = res.data.map((book: Book, index: number) => ({
              ...book,
              imageUrl: mediaResponses[index] ? mediaResponses[index].data.guid.rendered : null
            }));

            this.setState({
              books: booksWithImages,
              isLoaded: true
            });
          })
          .catch(err => console.log(err));
      })
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
              {book.imageUrl && (
                <img
                  src={book.imageUrl}
                  alt="Featured Image"
                />
              )}
              <p>{book.content.rendered}</p>
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
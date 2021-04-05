import { useState, useEffect } from "react";
import { getGenres, getAuthors, getBooks } from "../functions/index";
import CategoryCard from "../components/cards/CategoryCard";
import ProductCard from "../components/cards/ProductCard";

const Home = ({ token, history }) => {
  const [genres, setGenres] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getGenres()
      .then((res) => {
        if (res.data.success === "1") {
          setGenres(res.data.genres);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    getAuthors().then((res) => {
      if (res.data.success === "1") {
        setAuthors(res.data.authors);
      }
    });
  }, []);
  useEffect(() => {
    getBooks()
      .then((res) => {
        if (res.data.success === "1") {
          setBooks(res.data.books);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {" "}
      <h2 className="section-title">Browse by Genres</h2>
      <div className="conatiner-fluid">
        <div className="row section-row">
          {books.map((item) => (
            <div
              key={item.book_id}
              className="col-6 col-md-4 col-lg-3 p-1 product-card-wrapper"
            >
              <ProductCard
                id={item.book_id}
                name={item.book_name}
                author={item.author_name}
                img={item.image}
                discountedPrice={item.discounted_price}
                discount={item.offer}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>
      <h2 className="section-title">Browse by Genres</h2>
      <div className="conatiner-fluid">
        <div className="row section-row">
          {genres.map((i) => (
            <div key={i.genre_id} className="col-6 col-md-4 col-lg-3 p-1">
              <CategoryCard
                name={i.genre_name}
                img={i.image}
                id={i.genre_id}
                q={0}
              />
            </div>
          ))}
        </div>
      </div>
      <h2 className="section-title">Browse by Authors</h2>
      <div className="conatiner-fluid">
        <div className="row section-row">
          {authors.map((i) => (
            <div key={i.author_id} className="col-6 col-md-4 col-lg-3 p-1">
              <CategoryCard
                name={i.author_name}
                img={i.image}
                id={i.author_id}
                q={1}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

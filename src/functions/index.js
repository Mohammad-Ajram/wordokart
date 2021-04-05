import axios from "axios";

export const userLogin = async (email, password) =>
  await axios.post(`${process.env.REACT_APP_API}/api/customer/login`, {
    email,
    password,
  });

export const userRegistration = async (name, email, password) =>
  await axios.post(`${process.env.REACT_APP_API}/api/customer/create`, {
    name,
    email,
    password,
    contact: "",
    houseNo: "",
    landmark: "",
    locality: "",
    city: "",
    state: "",
    pincode: "",
  });

export const getGenres = async () =>
  await axios.get(`${process.env.REACT_APP_API}/get/genres`);

export const getAuthors = async () =>
  await axios.get(`${process.env.REACT_APP_API}/get/authors`);

export const getBooks = async () =>
  await axios.get(`${process.env.REACT_APP_API}/get/books`);

export const getBooksByGenre = async (id) =>
  await axios.get(
    `${process.env.REACT_APP_API}/get/genres/books?genre_id=${id}`
  );
export const getBooksByAuthor = async (id) =>
  await axios.get(
    `${process.env.REACT_APP_API}/get/authors/books?author_id=${id}`
  );
export const getBookById = async (id) =>
  await axios.get(`${process.env.REACT_APP_API}/book/item?book_id=${id}`);

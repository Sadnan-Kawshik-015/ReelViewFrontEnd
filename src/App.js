//font awesome
//to play movie trailers install react-player
//react router dom for routing
//axios for api calls
//redux for state management
//material ui for components
//firebase for authentication and database

//material ui for components
//firebase for authentication and database
//for carousels install react-slick and slick-carousel
import "./App.css";
import api from "./api/axionsConfig";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login.js";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
  const [movies, setMovies] = useState([]);
  const n = 5;

  const fetchMovies = async () => {
    try {
      const url = `/movies/popular/${n}`;
      const response = await api.get(url);
      console.log('Movies from backend:', response.data.data);
      setMovies(response.data?.data || []); // fallback to empty array
    } catch (error) {
      console.error('Error fetching movies:', error);
      setMovies([]); // fallback in case of error
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);


  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home movies={movies} />} />
            {/* <Route path="watchList" element={<WatchList />} /> */}
          </Route>

          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>

        <ToastContainer position="top-right" theme="dark" />
      </div>
  );
}

export default App;

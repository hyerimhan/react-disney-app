import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../api/axios";
import "./DetailPage.css";

const DetailPage = () => {
  let { movieId } = useParams();
  const [movie, setmovie] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`movie/${movieId}`);
        setmovie(response.data);
      } catch (error) {
        navigate(-1);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <section className="modal__poster-bg">
      <img
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="modal__poster-img"
      />
    </section>
  );
};

export default DetailPage;

import React, { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard"
import InfiniteScroll from "react-infinite-scroll-component"
import axios from "axios";

const AllMovieInfi = () =>{
  const [movies, setMovies] = useState([])
  const [count, setCount] = useState(null)
  const [page, setPage] = useState(2)

  const getMovies = async () =>{ 
    try{
      let res = await axios.get("/allmovies")
      console.log(res.data)
      setMovies(res.data.movie)
      setCount(res.data.count)
    }catch(err){
      console.log(err)
    }
  }

  const getMoreMovies = async () =>{
    try {
      let res = await axios.get(`/allmovies?page=${page}`)
      console.log(res.data.movie)
      setMovies((prevState)=>[...prevState, ...res.data.movie])
      setPage((prevState)=>prevState+1)

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    getMovies()
  },[])

  const renderMovies = () =>{

    return movies.map((movie)=>{
      return(
        <div key={movie.id}>
          <MovieCard info = {movie}></MovieCard>
        </div>
      )
    })

  }
  return(
    <div>
      <InfiniteScroll
      dataLength={movies.length} //This is important field to render the next data
      next={()=>getMoreMovies()}
      hasMore={movies.length === count ? false : true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      height = {200}
      >
        {renderMovies()}
        </InfiniteScroll>
    </div>
  )
}

export default AllMovieInfi
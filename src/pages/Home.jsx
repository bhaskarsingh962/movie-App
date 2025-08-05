import React, { useEffect, useState } from 'react'
import BannerHome from '../components/BannerHome'
import { useSelector } from 'react-redux'

import HorizontalScrollCard from '../components/HorizontalScrollCard'
import useFetch from '../hooks/useFetch'

function Home() {
  const trendingMovie = useSelector(state => state.movieHubData.bannerData)
  const {data : nowPlayingData} = useFetch('/movie/now_playing')
  const {data : topRated} = useFetch('/movie/top_rated')
  const {data : popularTvShowData} = useFetch('/tv/popular')
  const {data : onTheAirTvShowData} = useFetch('/tv/on_the_air')

  return (
    <div>
      <BannerHome/>
      <HorizontalScrollCard data={trendingMovie} heading={"Trending"} trending={true}/>
      <HorizontalScrollCard data={nowPlayingData} heading={"Now Playing"} media_type={"media"}/>
      <HorizontalScrollCard data={topRated} heading={"Top Rated"} media_type={"media"}/>
      <HorizontalScrollCard data={popularTvShowData} heading={"Popular Tv Show"} media_type={"tv"}/>
      <HorizontalScrollCard data={onTheAirTvShowData} heading={"On The Air Tv Show"} media_type={"tv"}/>
    </div>
  )
}

export default Home
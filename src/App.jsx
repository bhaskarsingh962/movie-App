import { useEffect, useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileNavigation from './components/MobileNavigation'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setBannerData} from './store/MovieHubSlice'
import { setImageURL } from './store/MovieHubSlice'


function App() {

  const dispatch = useDispatch()

  const fetchTrendingData = async() => {
    try {
      const response = await axios.get('/trending/all/day')
      dispatch(setBannerData(response.data.results));

    } catch (error) {
      console.log(error);
    }
  }

  const fetchConfiguration = async() => {
    try {
      const response = await axios.get("/configuration");

      dispatch(setImageURL(response.data.images.secure_base_url+"original"));
      //console.log("config Data" , response);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
  fetchTrendingData();
  fetchConfiguration();
  }, []);

  return (
    <main  className=' pb-14 lg:pb-0'>
       <Header/>
     <div>
       <Outlet/>
     </div>
      <Footer/>
      <MobileNavigation/>
    </main>
  )
}

export default App

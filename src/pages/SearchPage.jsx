import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import Card from '../components/Card';

function SearchPage() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const query = location?.search?.slice(3);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/search/multi`, {
        params: {
          query: location?.search?.slice(3),
          page: page,
        },
      });
      setData((prev) => {
        return [...prev, ...response.data.results];
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(()=>{
    if(query){
      setPage(1);
      setData([])
      fetchData();
    }
  },[location?.search])

   const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetWidth) {
      setPage((prev) => prev + 1);
    }
  };

   useEffect(() => {
      if(query){
        fetchData();
      }
    },[page]) 

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
    }, []);  

  console.log("location", location.search.slice(3));
  return (
    
    <div className=' py-16'>
     
      <div className=' lg:hidden mx-1 sticky top-[70px] z-30'>
        <input type='text' placeholder='Search here...'
         onChange={(e) => navigate(`/search?q=${e.target.value}`)} 
          className=' px-4 py-1 text-lg w-full bg-white rounded-full text-neutral-900'
         />
      </div>

      <div className=' container mx-auto'>
      <h3 className="capitalize text-lg lg:text-xl font-semibold my-3 text-white">Search Result</h3>

        <div className="w-full grid gap-6 grid-cols-[repeat(auto-fit,minmax(230px,1fr))] place-items-center">
          {data.map((searchData, index) => (
            <Card data={searchData} key={searchData.id + "search"} media_type={searchData.media_type} />
          ))}
        </div>

     </div>
    </div>
  )
}

export default SearchPage
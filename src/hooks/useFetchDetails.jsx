import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useFetchDetails = (endpoint) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  
  const fetchData = async() => {
    try {
        setLoading(true);
        const response = await axios.get(endpoint);
        setLoading(false)
        setData(response);
    } catch (error) {
        console.log("Error", error);
    }
  }

  useEffect(() => {
    fetchData();
  },[endpoint])

  return {data, loading}
}


export default useFetchDetails
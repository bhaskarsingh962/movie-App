import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const ExplorePage = () => {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);

  console.log("params", params.explore);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params: {
          page: pageNo,
        },
      });
      setData((prev) => {
        return [...prev, ...response.data.results];
      });
      setTotalPageNo(response.data.total_pages);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 10) {
      setPageNo((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageNo, params.explore]);

  useEffect(()=>{
    setData([]);
    setPageNo(1);
  },[params.explore])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" py-16">
      <div className="w-full min-h-screen bg-neutral-900 px-2 pt-16">
        <h3 className="capitalize text-lg lg:text-xl font-semibold my-3 text-white">
          Popular {params.explore} show
        </h3>
        <div className="w-full grid gap-6 grid-cols-[repeat(auto-fit,minmax(230px,1fr))] place-items-center">
          {data.map((exploreData, index) => (
            <Card data={exploreData} key={exploreData.id + "exploreSection"} media_type={params.explore} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;

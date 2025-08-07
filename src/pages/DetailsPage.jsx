import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchDetails from "../hooks/useFetchDetails";
import { useSelector } from "react-redux";
import moment from "moment";
import Divider from "../components/Divider";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import VideoPlay from "../components/VideoPlay";

function DetailsPage() {
  const params = useParams();
  const imageURL = useSelector((state) => state.movieHubData.imageURL);
  const { data } = useFetchDetails(`/${params?.explore}/${params?.id}`);
  const { data: castData } = useFetchDetails(
    `/${params?.explore}/${params?.id}/credits`
  );
  const {data : similarData} = useFetchDetails(`/${params?.explore}/${params?.id}/similar`);
  const {data : recommendation} = useFetchDetails(`/${params?.explore}/${params?.id}/recommendations`)
  const [playVideo, setPlayvideo] = useState(false);
  const [playVideoId, setPlayVideoId] = useState("");

  
  console.log("data", data);
  console.log("cast details", castData);

  const handlePlayVideo = ()=>{
    setPlayVideoId(data);
    setPlayvideo(true);
  }



  const writer = castData?.data?.crew
    ?.filter((el) => el?.department === "Writing")
    ?.map((el) => el.name)
    ?.join(", ");

  //console.log("params", params);

  


  return (
    <div>
      <div className="w-full  relative hidden lg:block  h-[400px] lg:h-[480px] overflow-hidden">
        <div className="w-full h-full">
          <img
            className=" h-full w-full object-cover "
            src={imageURL + data?.data?.backdrop_path}
          />
        </div>
        <div className=" absolute w-full h-full top-0 bg-gradient-to-b from-neutral-900/60 to-transparent/90"></div>
      </div>

      <div className=" container mx:auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10">
        <div className="relative mx-auto lg:-mt-32 lg:mx-0 w-fit min-w-60 z-20">
          <img
            src={imageURL + data?.data?.poster_path}
            className=" h-80 w-60 object-cover rounded-lg shadow-2xl border-4 border-white"
          />
          <button onClick={()=>handlePlayVideo(data)} className=" mt-3 w-full py-2 px-4 text-center text-black bg-white rounded font-bold text-lg hover:bg-gradient-to-l from-red-500 to-orange-500 hover:scale-105 transition-all ">Play Now</button>
        </div>

        <div>
          <h2 className=" text-2xl lg:text-4xl font-bold text-white">
            {data?.data?.title || data?.data?.name}
          </h2>
          <p className=" text-neutral-400">{data?.data?.tagline}</p>

          <Divider />

          <div className=" flex items-center my-3 gap-3">
            <p>Rating : {Number(data?.data?.vote_average).toFixed(1)}+</p>
            <span>|</span>
            <p>View : {Number(data?.data?.vote_count)}</p>
            <span>|</span>
            <p>
              Duration:{" "}
              {data?.data?.runtime
                ? `${Math.floor(data.data.runtime / 60)}h ${
                    data.data.runtime % 60
                  }m`
                : Array.isArray(data?.data?.episode_run_time) &&
                  data.data.episode_run_time.length > 0
                ? `${data.data.episode_run_time[0]} min`
                : "N/A"}
            </p>
          </div>

          <Divider />

          <div>
            <h3 className=" text-xl font-bold text-white mb-1">Overview</h3>
            <p>{data?.data?.overview}</p>

            <Divider />

            <div className=" flex items-center gap-3 my-3 text-center">
              <p>Status : {data?.data?.status}</p>
              <span>|</span>
              <p>
                Release Date :{" "}
                {moment(data?.release_date).format("MMMM Do YYYY")}
              </p>
              <span>|</span>
              <p>Revenue : {Number(data?.data?.revenue)}</p>
            </div>

            <Divider />
          </div>

          <div>
            <p>
              {" "}
              <span className=" text-white">Director</span> :{" "}
              {castData?.data?.crew[0].name}
            </p>
            <p>
              <span className=" text-white">Writer : {writer}</span>
            </p>
          </div>

          <Divider />

          <h2 className=" font-bold text-lg">Cast</h2>

          <div className=" grid grid-cols-[repeat(auto-fit,96px)] gap-5">
            {castData?.data?.cast?.filter(el => el?.profile_path).map((cast, index) => {
              return (
                <div className=" relative mt-0">
                  <div>
                    <img
                      src={
                        cast.profile_path
                          ? imageURL + cast.profile_path
                          : "https://via.placeholder.com/100x140?text=No+Image"
                      }
                      alt={cast.name}
                      className="w-24 h-32 object-cover rounded"
                    />
                  </div>
                  <p className=" font-bold text-center text-sm text-neutral-400">{cast.name}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      <div>
        <HorizontalScrollCard data={similarData?.data?.results || []} heading={`Similar ${params?.explore}` }/>
        <HorizontalScrollCard data={recommendation?.data?.results || []} heading={`Recommendation ${params?.explore}` }/>
      </div>

      {
        playVideo && (
          <VideoPlay data={playVideoId} close={()=> setPlayvideo(false)} media_type={params?.explore}/>
        )
      }
    </div>
  );
}

export default DetailsPage;

import React from 'react'
import { IoClose } from "react-icons/io5";
import useFetchDetails from '../hooks/useFetchDetails';

const VideoPlay = ({data, close, media_type}) => {
  const {data: videoData} = useFetchDetails(`${media_type}/${data?.data?.id}/videos`)
  console.log("videoData", videoData) 
  return (
    <section className=' fixed bg-neutral-700 top-0 right-0 bottom-0 left-0 z-40 bg-opacity-50 flex justify-center items-center'>
      <div className=' bg-black w-full max-h-[80vh] max-w-screen-lg aspect-video rounded overflow-hidden relative'>
       
       <button onClick={close} className="absolute top-2 right-2 text-3xl z-50 text-white cursor-pointer">
         <IoClose />
       </button>

       <iframe 
         src={`https://www.youtube.com/embed/${videoData?.data?.results[0]?.key}`}
         className=' w-full h-full'
        />
      </div>
    </section>
  )
}

export default VideoPlay
import React, { useEffect, useState } from 'react'
import  axios from 'axios';
import Spinner from './Spinner';



function Random() {
   
    const [gif,setGif]=useState('');
    const [loading,steLoading]=useState(false);
    

    async function fetchData() {
        steLoading(true);
        const url=`https://api.giphy.com/v1/gifs/random?api_key=RnFlwagp9MpCpkbnrTEMDs7hfmBxSn01`;
       const {data} = await axios.get(url)
      
       const imageSrc=data.data.images.downsized_large.url;
       console.log(imageSrc);
       setGif(imageSrc);
       steLoading(false);
        
    }

    useEffect(()=>{
   fetchData();
    },[])

    function clickHandler() {
        fetchData();
    }

  return (
    <div className='w-1.3/2  bg-green-400 m-auto mt-[85px] rounded-lg border-black flex flex-col '>
        <h2 className='font-bold text-center text-2xl underline'>A Random Gif</h2>
        {
            loading?(<Spinner/>)
            :(<img src={gif} width='300' height='300' className='mx-auto' />)
        }
        
        <button onClick={clickHandler} className='mb-[20px]  bg-green-200 text-xl w-6/12 rounded-lg m-auto '>
            Generate
        </button>
    </div>
  )
}

export default Random
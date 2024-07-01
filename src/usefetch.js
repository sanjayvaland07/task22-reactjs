import { useEffect, useState } from "react";

function useFetch(url)
{
  const [data,setData] = useState(null);
  const [isLoading,setIsLoading] = useState(false);
  const [error,setError] = useState(null)
  useEffect(()=>{
    setIsLoading(true);
    fetch(url)
    .then((res)=>res.json())
    .then((result)=>{
      setData(result)
      setIsLoading(false)
    }).catch((err)=>setError(err))
  },[])

  return {data,isLoading,error};
}

export default useFetch;
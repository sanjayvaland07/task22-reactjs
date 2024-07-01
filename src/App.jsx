import { useEffect, useState, useDispatch } from 'react'
import './App.css'
import useFetch from './usefetch';

function App() {

  const {data,isLoading,error} = useFetch("https://jsonplaceholder.typicode.com/photos");
  console.log(data);

  function getData()
  {
    return (
      <>
      <h1>Photos</h1>
    <div className='container'>
      {
        data?.map((dt)=>{
          return(
            <div className='box' key={dt.id}>
              <img src={dt.url} alt="" width={200} height={200}/>
              <p>{dt.title}</p>
            </div>
          )
        })
      }
    </div>
    </>
    )
  }


 if(error)
  {
    return <h1 className='loading'>Error : failed to fetch data</h1>
  }
  else if(isLoading)
    {
      return <h1 className='loading'>Loading...</h1>
    }

    return getData();
}

export default App;

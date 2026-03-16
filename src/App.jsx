import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)


  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=24`)

    setUserData(response.data)

  }

  useEffect(function () {
    getData()
  }, [index])

  let PrintuserData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold' >Loading....</h3>

  if (userData.length > 0) {
    PrintuserData = userData.map(function (elem, idx) {
      return <div key={idx}>
        <Card elem={elem}/>
      </div>
    }
    )



  }

  return (
    <div className='bg-black min-h-screen p-4 text-white flex flex-col'>
      {/* <h1 className='fixed'>{index}</h1> */}
      <div className='flex flex-wrap gap-4 p-2 flex-grow'>
        {PrintuserData}
      </div>

      <div className='flex  justify-center items-center p-4 gap-6'>
        <button
          onClick={() => {
            if (index > 1) {
              setUserData([])
              setIndex(index - 1)
            }
          }}
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black px-2 py-2 rounded font-semibold'>Prev</button>
        <button
          onClick={() => {
            setUserData([])
            setIndex(index + 1)

          }}
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black px-2 py-2 rounded font-semibold'>Next</button>
      </div>

    </div>
  )
}

export default App
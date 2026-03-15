import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])


  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list?page=1&limit=15")

    setUserData(response.data)

    console.log(response.data)
  }

  let PrintuserData = "No Available Data"

  if (userData.length > 0) {
    PrintuserData = userData.map(function (elem, idx) {
      return <div>
       <img src={elem.download_url} alt="" /> 
      </div>
    }
    )

  }

  return (
    <div className=' bg-black h-screen p-4 text-white'>
      <button
        onClick={getData}
        className='bg-green-600 active:scale-95 mb-4 px-5 py-2 rounded text-white'>
        Get Data
      </button>

      <div>
        {PrintuserData}
      </div>

    </div>
  )
}

export default App
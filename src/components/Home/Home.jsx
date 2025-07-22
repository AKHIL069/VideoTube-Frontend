import React, { useEffect, useState } from 'react'
import fetchvideosApi from '../../api/fetchvideosApi.js'
import Notiflix from 'notiflix' 
import { useSelector } from 'react-redux'

function Home() {
    const {fetchUserVideo} = fetchvideosApi()
    const [homeVideos, setHomeVideos] = useState([])
    const userDetails = useSelector((state) => state?.authDetails)
    console.log("user details:", userDetails);
    

    const handleUserVideos = async () =>{
        try {
            const response = await fetchUserVideo(userDetails?._id)
            setHomeVideos(response.data)

        } catch (error) {
            console.log("Video fetch:", error);
            Notiflix.Notify.failure('Something went wrong. Please try again.')
        }
    }
    useEffect(() => {
        handleUserVideos()
    }, [])
    return (   
        <div className='grid grid-cols-4 gap-6 m-5'>
                {homeVideos.map((data, index) => {
                    return <div key={index} className=''>
                            <h2 className="text-xl font-bold mb-2">{data.title}</h2>
                            <video className="w-100 h-50 object-cover" controls poster={data?.thumbnail}>
                                <source src={data?.videoFile} type="video/webm" />
                                    Your browser does not support the video tag.
                            </video>
                            <p className="mt-2">{data?.description}</p>
                    </div>
                })}
         </div>
    )
}

export default Home

import useApiMethods from "./useApiMethods.js";

const fetchvideosApi=()=>{
    const {Get}=useApiMethods()
    const fetchUserVideo=(userId)=>{
        console.log("userid", userId);
        
        const url = `/api/v1/videos/fetch/${userId}`
        return Get(url)
    }
    return { fetchUserVideo }
}

export default fetchvideosApi
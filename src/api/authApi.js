import useApiMethods from "./useApiMethods.js";


const authApi=()=>{
    const {Post}=useApiMethods()
    const login=(data)=>{
        console.log(data)
        const url='/api/v1/users/login'
        return Post(url,data)
    }
    return { login }
}

export default authApi
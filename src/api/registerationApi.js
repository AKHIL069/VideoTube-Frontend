import useApiMethods from "./useApiMethods.js";

import React from 'react'

const registerationApi=() => {
    const {Post} = useApiMethods()
    const signup=(data)=>{
        console.log(data)
        const url='/api/v1/users/register'
        return Post(url, data)
    }
    return { signup }
}

export default registerationApi
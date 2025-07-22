import useApiMethods from "./useApiMethods.js";

const logoutApi = () => {
    const {Post} = useApiMethods()
    const logout = (data) => {
        console.log(data);
        const url='api/v1/users/logout'
        return Post(url, data)
    }
    return { logout }
}

export default logoutApi
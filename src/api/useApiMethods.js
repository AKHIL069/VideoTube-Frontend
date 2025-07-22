import useAxios from "./useAxios";
 
const useApiMethods = () => {
  const { axiosInstance, loading } = useAxios();
 
  const Get = async (endPoint) => {
    try {
      const { data } = await axiosInstance.get(endPoint);
      return data;
    } catch (e) {
      throw e.response?.data || e;
    }
  };
 
  const Post = async (endPoint, payload, formData = false) => {
    try {
      const { data } = await axiosInstance.post(
        endPoint,
        payload,
        formData ? { headers: { "Content-Type": "multipart/form-data" } } : {}
      );
      return data;
    } catch (e) {
      throw e.response?.data || e;
    }
  };
 
  const Delete = async (endPoint, payload) => {
    try {
      const { data } = await axiosInstance.delete(endPoint, { data: payload });
      return data;
    } catch (e) {
      throw e.response?.data || e;
    }
  };
 
  const Put = async (endPoint, payload, formData = false) => {
    try {
      const { data } = await axiosInstance.put(
        endPoint,
        payload,
        formData ? { headers: { "Content-Type": "multipart/form-data" } } : {}
      );
      return data;
    } catch (e) {
      throw e.response?.data || e;
    }
  };
 
  const Patch = async (endPoint, payload, formData = false) => {
    try {
      const { data } = await axiosInstance.patch(
        endPoint,
        payload,
        formData ? { headers: { "Content-Type": "multipart/form-data" } } : {}
      );
      return data;
    } catch (e) {
      throw e.response?.data || e;
    }
  };
 
  return { Get, Post, Delete, Put, Patch, loading };
};
 
export default useApiMethods;
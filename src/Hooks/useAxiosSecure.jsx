import axios from "axios";
import { useEffect } from "react";


const axiosSecure = axios.create({
    baseURL: "http://localhost:8050",
    withCredentials: true
})

const useAxiosSecure = () => {
    // logout custom hook import here

    // 

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log("error in axios interceptor", error.response);

            if (error.response.status == 401 || error.response.status == 403) {

                // Logout function call here

                console.log("200 ok");


            }
        })
    }, [])

    return axiosSecure;
};

export default useAxiosSecure;
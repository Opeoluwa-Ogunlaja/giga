import axios from "axios";
import { useAsync } from "./useAsync";
import { throwError } from "../utils/requests";

export default function useFetch(url, options, dependencies){
   const [loading, value, error] = useAsync((async () => {
       // console.log("Running fetch");
       try {
            const req = await axios.request({url: url, ...options})
            return req.data;
       } catch (error) {
            throwError(error)
       }
   })(), dependencies)

   return [loading, value, error]
}
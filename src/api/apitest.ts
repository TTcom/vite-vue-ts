import { doPost } from "../utils/axios";
export default{
    getNewSongs(url, params){
        return  doPost(url, params, true)
    }
     
}
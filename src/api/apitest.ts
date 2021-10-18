import { doPost } from "../utils/axios";
export default {
  getNewSongs(url: string, params: { [key: string]: unknown }): any {
    return doPost(url, params, true);
  },
};

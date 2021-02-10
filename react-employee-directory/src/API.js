import axios from "axios";

const BASEURL = "https://randomuser.me/api/?inc=gender,name,email,picture";
const APIKEY = "3T8L-O2DB-J0RU-8MY4";

// Export an object with a "search" method that searches URL for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
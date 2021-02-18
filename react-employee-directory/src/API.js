import axios from "axios";

export default {
    //Get random users
    getUsers: function () {
        return axios.get("https://randomuser.me/api/?results=300&nat=us");
    }
};
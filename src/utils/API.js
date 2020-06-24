import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=25&nat=us";
// Export an object with a "search" method that searches the randomUI API

export default{
  getEmp: function () {
    return axios.get(BASEURL);
  },
};
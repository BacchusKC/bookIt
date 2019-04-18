import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyAAANtXzEAlF8NG9Yrw-6Aag-gamelF_cY";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};

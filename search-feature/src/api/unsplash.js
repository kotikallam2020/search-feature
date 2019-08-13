import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 46567aec3cedacc6e58764258c774cc209ef057b74c1422e57e06ae106716222"
      }
});

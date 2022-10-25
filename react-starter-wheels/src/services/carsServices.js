import axios from "axios";

const getPing = () => {

  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/ping",
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};



export { getPing }; 
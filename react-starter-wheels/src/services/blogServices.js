import axios from "axios";

const userLogin={
    endpoint:"https://api.remotebootcamp.dev/api/users/login"
};

const blogService = {
    endpoint: "https://api.remotebootcamp.dev/api/blogs"
  };

const getUser = (payload) =>{
    const config = {
    method: "POST",
    url: userLogin.endpoint,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
}  

const getBlogs = () => {

  const config = {
    method: "GET",
    url: blogService.endpoint,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};


const updateBlog = (id,payload) => {

  const config = {
    method: "PUT",
    url: `${blogService.endpoint}/${id}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

  const dleetBlog = (id) => {

  const config = {
    method: "DELETE",
    url: `${blogService.endpoint}/${id}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

export { getBlogs,updateBlog,dleetBlog,getUser }; 
import axios from 'axios';

const api = {};

api.getHelloMessage =  async () => {
  const { data } = await axios.get('http://localhost:4000/hello');
  return data.message;
};

export default api;

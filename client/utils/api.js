import axios from 'axios';

const api = {};

api.getHelloMessage =  async () => {
  const { data } = await axios.get('/api/hello');
  return data.message;
};

export default api;

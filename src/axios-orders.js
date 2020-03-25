import axios from "axios";

const instance = axios.create({
    baseURL: "https://react-my-burger-74c77.firebaseio.com/"
});

export default instance;

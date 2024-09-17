import axios from "axios";
import configs from "./configs";

const Axios = axios.create({
	baseURL: configs.apiBaseUrl,
});

export default Axios;

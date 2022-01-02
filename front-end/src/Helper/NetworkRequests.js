import axios from "axios";
import { apiURL } from "../util/apiURL";
const API = apiURL();

export const updateJob = async (input,user) => {
    console.log(input)
    try {
        const res = await axios.put(`${API}/jobs/${input.id}?uid=${user.uid}`, input);
            return res
    } catch (err) {
        console.log(err);
    }
};

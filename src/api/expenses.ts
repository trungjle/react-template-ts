import axios from "axios";

const baseUrl = "https://expenses-backend-mu.vercel.app/expenses";
const username = "johnny.le";

export const fetchExpenses = async () => {
    return axios
        .get(baseUrl, {
            headers: {
                "Content-Type": "application/json",
                Username: username,
            },
        })
        .then((response) => response.data)
        .catch(function (error) {
            console.log(error.response);
            return error.response;
        });
};

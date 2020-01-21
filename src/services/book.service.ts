import axios from "axios";

export function fetchBooks(): any {
            return axios.get('http://10.80.131.179:8000/service/books/')
}
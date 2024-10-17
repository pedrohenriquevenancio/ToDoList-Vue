import axios from "axios"

export default async function getTasks() {
  try {
    const response = await axios.get('http://localhost:8080/api/task/');
    return response.data;
  } catch(error) {
    console.log(error);
    return [];
  }
}
import axios from "axios"

export default async function getGroupTasks() {
  try {
    const response = await axios.get('http://localhost:8080/api/task-group/');
    return response.data;
  } catch(error) {
    console.log(error);
    return [];
  }
}
import type Task from './Task'

export default interface TaskGroup {
  id: Number
  name: String
  color: String
  tasks: Array<Task>
}

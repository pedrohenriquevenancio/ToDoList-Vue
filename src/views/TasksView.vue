<template>
  <div class="max-h-[620px] overflow-auto">
    <div class="w-full">
      <p class="text-end">{{ tasks.length }}</p>
    </div>
    <div class="row">
      <TaskCardComponent v-for="task in tasks" v-bind:key="task.id" :task="task" />
    </div>
  </div>
</template>

<script setup>
import TaskCardComponent from '@/components/TaskCardComponent.vue'
import getTasks from '@/services/getTasks'
import { onMounted, onUpdated, ref } from 'vue'
import { useRoute } from 'vue-router'

const router = useRoute()
const id = ref(null)

const tasks = ref([])

onMounted(() => {
  updateVariables()
})

onUpdated(() => {
  updateVariables()
})

function updateVariables() {
  if (router.params.id) {
    id.value = router.params.id
  } else {
    id.value = null
  }
  getTasks(id.value).then((data) => {
    if (id.value) {
      tasks.value = data.filter((task) => task.group_id == id.value)
    } else {
      tasks.value = data
    }
  })
  console.log(tasks.value)
}
</script>

<style></style>

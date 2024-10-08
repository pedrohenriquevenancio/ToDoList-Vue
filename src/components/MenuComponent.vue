<template>
  <div class="flex justify-start pt-4 pl-4">
    <fwb-button gradient="purple-blue" square @click="toggleSidebar">
      <svg
        class="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="2"
          d="M5 7h14M5 12h14M5 17h14"
        />
      </svg>
    </fwb-button>
  </div>
  <fwb-sidebar v-if="visible">
    <div class="flex justify-end">
      <fwb-button gradient="purple-blue" square @click="toggleSidebar">
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="2"
            d="M5 7h14M5 12h14M5 17h14"
          />
        </svg>
      </fwb-button>
    </div>
    <fwb-sidebar-item @click="navigate('Home')">
      <template #icon>
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
            clip-rule="evenodd"
          />
        </svg>
      </template>
      <template #default>Home</template>
    </fwb-sidebar-item>
    <fwb-sidebar-item @click="showModal">
      <template #icon>
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h14m-7 7V5"
          />
        </svg>
      </template>
      <template #default>Add New Task</template>
    </fwb-sidebar-item>
    <div class="w-full bg-black h-[0.5px]"></div>
    <div class="py-2 space-y-2 z-0 overflow-hidden"></div>
    <fwb-sidebar-dropdown-item>
      <template #icon>
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M7.833 2c-.507 0-.98.216-1.318.576A1.92 1.92 0 0 0 6 3.89V21a1 1 0 0 0 1.625.78L12 18.28l4.375 3.5A1 1 0 0 0 18 21V3.889c0-.481-.178-.954-.515-1.313A1.808 1.808 0 0 0 16.167 2H7.833Z"
          />
        </svg>
      </template>
      <template #trigger> Lists </template>
      <template #default>
        <fwb-sidebar-item
          class="pl-11"
          v-for="item in lists"
          v-bind:key="item.id"
          @click="navigate('Groups', item.id)"
        >
          <div>
            {{ item.name }}
          </div>
        </fwb-sidebar-item>
      </template>
    </fwb-sidebar-dropdown-item>
    <fwb-sidebar-item @click="showModal">
      <template #icon>
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z"
            clip-rule="evenodd"
          />
        </svg>
      </template>
      <template #default>Add New List</template>
    </fwb-sidebar-item>
  </fwb-sidebar>
  <fwb-modal v-if="isShowModal" @close="closeModal">
    <template #header>
      <div class="flex items-center text-lg">New List</div>
    </template>
    <template #body>
      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">Form</p>
    </template>
    <template #footer>
      <div class="flex justify-between">
        <fwb-button @click="closeModal" color="alternative"> Decline </fwb-button>
        <fwb-button @click="closeModal" color="green"> I accept </fwb-button>
      </div>
    </template>
  </fwb-modal>
</template>
<script setup>
import {
  FwbSidebar,
  FwbSidebarItem,
  FwbSidebarDropdownItem,
  FwbButton,
  FwbModal
} from 'flowbite-vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const visible = ref(true)
const toggleSidebar = () => {
  visible.value = !visible.value
  console.log(visible.value)
}

const lists = ref([])

onMounted(() => {
  axios
    .get('http://localhost:8080/api/task-group/')
    .then((response) => {
      lists.value = response.data
    })
    .catch((error) => console.log(error))
})

const router = useRouter()

const navigate = (pathName, id = null) => {
  if (id) {
    router.push({ name: pathName, params: { id: id } })
  } else {
    router.push({ name: pathName })
  }
}

const isShowModal = ref(false)

function showModal() {
  isShowModal.value = true
}
function closeModal() {
  isShowModal.value = false
}
</script>

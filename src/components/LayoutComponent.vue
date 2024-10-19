<script setup>
import MenuComponent from './MenuComponent.vue'
import HeaderComponent from './HeaderComponent.vue'
import { computed, ref } from 'vue'
import { getNavBackgroundColor, getSideBarBackgroundColor, getBackgroundColor, getTextColor } from '@/services/observables/theme';

const visible = ref(false)
const changeVisibility = () => {
  visible.value = !visible.value
}
const bgColor = computed(() => getBackgroundColor());
const bgNavColor = computed(() => getNavBackgroundColor());
const bgSideBarColor = computed(() => getSideBarBackgroundColor());
const textColor = computed(() => getTextColor());
</script>

<template>
  <main class="overflow-hidden h-screen" :style="{backgroundColor: bgColor, color: textColor}">
    <div class="flex w-full" :style="{ backgroundColor: bgNavColor }">
      <HeaderComponent />
    </div>
    <div class="flex justify-between">
      <div class="w-auto">
        <MenuComponent @toggleSidebar="changeVisibility" />
      </div>
      <div class="w-2/12 h-screen" :style="{backgroundColor:bgSideBarColor }" v-if="visible"></div>
      <div :class="`${visible.value ? 'w-10/12' : 'w-full px-2'}`">
        <RouterView />
      </div>
    </div>
  </main>
</template>

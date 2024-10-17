<script setup lang="ts">
import MenuComponent from './components/MenuComponent.vue';
</script>

<template>
  <main>
    <MenuComponent />
    <div class="flex justify-end">
      <div class="w-10/12 px-10">
        <RouterView />
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>

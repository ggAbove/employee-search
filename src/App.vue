<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppSidebar from '@/components/AppSidebar.vue'

</script>

<template>
  <main class="container">
    <header class="header">
      <h1 class="header__title">Жилфонд</h1>
      <div class="header__user">
        <span class="header__user-name">Пользователь</span>
      </div>
    </header>
    <div class="dashboard">
      <AppSidebar />
      <RouterView />
    </div>

  </main>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  &__title {
    font-size: 32px;
    font-weight: bold;
    color: rgba(227, 31, 36, 1);
  }

  &__user-name {
    font-size: 1rem;
    color: rgba(51, 51, 51, 1);

  }
}

.container {
  padding: 2rem 5rem;
  display: flex;
  flex-direction: column;
  height: 90vh;
}

.dashboard {
  display: flex;
  width: 100%;
  overflow-y: hidden;
  height: 70vh;
  background-color: rgba(253, 253, 253, 1);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
</style>

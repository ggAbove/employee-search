<template>
  <div v-bind="containerProps" class="sidebar">
    <h2 class="sidebar__title">Поиск сотрудников</h2>
    <input @input="onSearch" class="sidebar__input" placeholder="Введите ID или имя" />
    <h2 class="sidebar__title">Результаты</h2>
    <div v-if="users.length" class="sidebar__results">
      <div class="sidebar__results-wrapper" v-bind="wrapperProps">
        <UserCard v-for="user in list" :key="user.data.id" class="sidebar__results-item" :user="user.data"
          @selectUser="selectUser" />
      </div>

    </div>
    <div class="sidebar__info" v-if="!users.length && !loading && !error && !searchQuery">начните поиск</div>
    <div class="sidebar__info" v-if="!users.length && !loading && !error && searchQuery">ничего не найдено</div>
    <p v-if="error" class="sidebar__error">{{ error }}</p>
    <div v-if="loading" class="sidebar__info">Загрузка...</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useUserStore } from "../stores/userStore";
import UserCard from '@/components/UserCard.vue';
import { useDebounceFn, useVirtualList } from "@vueuse/core";



const userStore = useUserStore();
const searchQuery = ref<string>("");
const users = computed(() => userStore.users);
const loading = computed(() => userStore.loading);
const error = computed(() => userStore.error);

const onSearch = useDebounceFn((event: Event) => {
  searchQuery.value = (event.target as HTMLInputElement).value;
  if (searchQuery.value.trim()) {
    userStore.fetchUsers(searchQuery.value);
  } else {
    userStore.clearUsers();
  }
}, 300);

const selectUser = (userId: number) => {
  userStore.setCurrentUser(userId);
};

const { list, containerProps, wrapperProps } = useVirtualList(
  users,
  {
    itemHeight: 86,
  },
)
</script>

<style scoped lang="scss">
.sidebar {
  padding: 1rem;
  background-color: #f8f9fa;
  border-right: 1px solid #dee2e6;
  min-width: 300px;
  height: 100%;

  &__title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  &__input {
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    border: 1.5px solid rgba(233, 236, 239, 1)
  }

  &__results {
    width: 100%;
    display: grid;
    overflow-y: auto;

    gap: 1rem;

    &-item {
      cursor: pointer;

      &:hover {
        background-color: #e9ecef;
      }
    }
  }

  &__error {
    color: #dc3545;
  }

  &__info {
    text-align: center;
    font-size: 14px;
    color: #6c757d;
  }
}
</style>

<template>
  <div class="user-profile" v-if="user">
    <div class="user-profile__avatar">
      <FaImage class="user-profile__avatar-img" />
    </div>
    <div class="user-profile__info">
      <p class="user-profile__info-title"><strong>{{ user.name }}</strong></p>
      <p class="user-profile__info-field"><strong>email:</strong> {{ user.email }}</p>
      <p class="user-profile__info-field"><strong>phone:</strong> {{ user.phone }}</p>

      <p class="user-profile__info-title"><strong>О себе</strong></p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>

    </div>

  </div>
  <div v-else class="user-profile__placeholder">
    <p>Выберите сотрудника, чтобы посмотреть его профиль.</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useUserStore } from "../stores/userStore";
import FaImage from '@/components/FaImage.vue';
const userStore = useUserStore();
const user = computed(() => userStore.currentUser);

</script>

<style scoped lang="scss">
.user-profile {
  padding: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
  max-height: 60%;

  &__title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  &__info {
    &-title {
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }

    &-field {
      margin: 0.5rem 0;
      font-size: 1rem;

      strong {
        font-weight: 600;
      }
    }
  }


  &__link {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  &__avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1.5px solid #dee2e6;

    &-img {
      width: 50%;
      height: 50%;

      object-fit: cover;
      color: rgb(169, 169, 169)
    }

  }

  &__placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1rem;
    color: #6c757d;
  }


}
</style>

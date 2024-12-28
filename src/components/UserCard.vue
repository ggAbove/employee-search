<template>
  <li @click="handleClick" class="user-card" :class="{ 'user-card--selected': selected }">
    <div class="user-card__avatar">
      <FaImage class="user-card__avatar-img" />
    </div>
    <div class="user-card__info">
      <h3 class="user-card__info-username">{{ user.username }}</h3>
      <p class="user-card__info-email">{{ user.email }}</p>
    </div>
  </li>
</template>

<script setup lang="ts">
import { type PropType, computed } from 'vue';
import FaImage from '@/components/FaImage.vue'
import { useUserStore } from '../stores/userStore';
const userStore = useUserStore();

const selected = computed(() => {
  if (userStore.currentUser === null) return false;
  return userStore.currentUser.id === props.user.id;
})
interface User {
  name: string;
  username: string;
  email: string;
  id: number;
}
const props = defineProps(
  {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
)

const emit = defineEmits(["selectUser"]);
function handleClick() {
  emit("selectUser", props.user.id);
}
</script>

<style scoped lang="scss">
.user-card {
  margin-bottom: 16px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

  &--selected {
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    &-username {
      font-size: 14px;
      font-weight: 600;
    }

    &-email {
      font-size: 12px;
    }
  }

  &__avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border-right: rgba(224, 224, 224, 1) 1px solid;

    &-img {
      width: 50%;
      height: 50%;

      object-fit: cover;
      color: rgb(169, 169, 169)
    }

  }
}
</style>

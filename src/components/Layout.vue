<script setup>
import Receipt from './Receipt.vue';
import Cart from './Cart.vue';
</script>

<template>
  <div class="layout">
    <div class="layout__left">
      <Cart />
    </div>
    <div class="layout__right">
      <Receipt />
    </div>
  </div>
</template>

<style lang="scss" scoped>

.layout {
  display: flex;

  &__left {
    flex: 1 0 60%;
    padding: 32px;
  }

  &__right {
    flex: 1 0 40%;
    height: calc(100vh - 64px);
    background-color: white;
    border-radius: 28px;
    padding: 32px;
  }
}
</style>
<script setup>
import { useCartStore } from '@/stores/cart'

// STORE
const cartStore = useCartStore()

// METHODS
const deleteProduct = (itemId) => {
  cartStore.removeItemFromCart(itemId)
}
</script>
<template>
    <div class="content">
      <div v-for="item of cartStore.shoppingCart" :key="item.id" class="cart-item-container">
        {{item.title}} {{item.price}}
      </div>
    </div>
</template>
<style scoped>
.content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
p {
  margin: 0 10px
}
</style>

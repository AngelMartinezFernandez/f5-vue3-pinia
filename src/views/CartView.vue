<script setup>
import { useCartStore } from '@/stores/cart'
import CartItem from '@/components/cart/CartItem.vue'

// STORE
const cartStore = useCartStore()

// METHODS
const deleteProduct = (itemId) => {
  cartStore.removeItemFromCart(itemId)
}
</script>
<template>
    <div class="content">
      <h1 v-if="cartStore.shoppingCart.length === 0">No hay elementos en el carrito</h1>
      <div v-else v-for="item of cartStore.shoppingCart" :key="item.id" class="cart-item-container">
        <CartItem
            :id="item.id"
            :title="item.title"
            :price="item.price"
            @delete-item="deleteProduct"
        />
      </div>
    </div>
</template>
<style scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5vh 0;
  overflow-y: auto;
}
p {
  margin: 0 10px
}
</style>

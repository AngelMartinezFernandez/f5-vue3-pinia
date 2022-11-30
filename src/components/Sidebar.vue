<template>
  <div id="sidebar">
    <div class="sidebar-header">
      <span>UserName</span>
    </div>
    <div class="sidebar-nav">
      <router-link to="/" class="nav-button text">Products</router-link>
      <router-link to="/about" class="nav-button text">About</router-link>
    </div>
<!--    <div @click="toggleModal" class="sidebar-footer text">-->
<!--      <span>Cart</span>-->
<!--      <Modal-->
<!--          v-model="showCartModal"-->
<!--          :title="'Cart'"-->
<!--      >-->
<!--        <p>{{handledTotal}}</p>-->
<!--      </Modal>-->
<!--    </div>-->
  </div>
</template>

<script setup>

// // DATA
// const showModal = ref( false )
// const cartStore = useCartStore()

// // COMPUTED
// const handledTotal = computed( () => {
//   return `Total: ${cartStore.getTotal .toFixed(2)}`
// } )
// METHODS
// const toggleModal = () => {
//   showModal.value = !showModal.value
// }
</script>

<style scoped>
#sidebar {
  display: flex;
  flex-direction: column;
  background-color: var(--primary-color);
  /*height: 100%;*/
}

.sidebar-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  font-size: 1.2rem;
  letter-spacing: 1.1rem;
  text-transform: uppercase;
  color: whitesmoke;
  border-bottom: 2px solid white;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.sidebar-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  cursor:pointer;
  color: whitesmoke;
  border-top: 2px solid white;
}

.nav-button {
  display: flex;
  justify-content: center;
  align-items: center;
  /*height: 2em;*/
  padding: 1rem;
  font-size: 1rem;
  transition: all 0.2s cubic-bezier(0.77, 0, 0.175, 1);
  cursor: pointer;
  user-select: none;
  background-color: var(--primary-color);
  /*border-radius: 15px;*/
  text-align: center;
  text-decoration: none;
}

.nav-button:hover {
  color: var(--secondary-color);
  background-color: var(--elements-color);
  /*border-radius: 15px;*/
}

.text {
  letter-spacing: 1.1rem;
  text-transform: uppercase;
  color: var(--secondary-color);
}
</style>

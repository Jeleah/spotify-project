<template>
  <div class="modal" id="modal">
    <div
      class="modal__backdrop"
      @click="$emit('modalBGClick')"
      id="modal-backdrop"
    />
    <div class="modal__body" id="modal-body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  components: {},
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal__body {
  position: relative;
  z-index: 1;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  min-height: 500px;
  min-width: 300px;
}
</style>

<template>
  <nav id="navigation-bar-main">
    <div
      class="text-white w-full flex flex-row justify-between fixed header rounded-b-2xl"
      id="navigation-bar-main-header"
    >
      <div class="flex flex-row justify-between" id="navigation-left-side">
        <div id="navigation-hamburger">
          <button
            class="hamburger hamburger--vortex"
            :class="isActive ? 'is-active' : ''"
            type="button"
            @click="activate"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner" />
            </span>
          </button>
        </div>
        <div id="navigation-logo">
          <h1 class="text-3xl md:text-4xl font-bold pt-2">Allison Mackenzie</h1>
        </div>
      </div>
      <div class="hidden lg:block" id="navigation-right-side">
        <div class="pr-12" id="navigation-links">
          <ul class="text-2xl pt-2.5 flex flex-row space-x-10">
            <li v-for="(route, index) in routes" :key="index">
              <p>
                <router-link :to="route.route">
                  {{ route.name }}
                </router-link>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-if="isActive">
      <Modal @modalBGClick="activate"><Links /></Modal>
    </div>
  </nav>
</template>

<script>
import { routes } from "../../constants/";
import Links from "./Links.vue";
import Modal from "../modal/Modal.vue";

export default {
  name: "NavBar",
  components: {
    Links,
    Modal,
  },
  data() {
    return {
      routes,
      isActive: false,
    };
  },
  methods: {
    activate() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
@import "../mit-licensed/Hamburgers.css";

.header {
  background-color: rgb(120, 50, 255);
}
</style>

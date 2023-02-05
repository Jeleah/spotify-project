<template>
  <div class="flex justify-center" id="links-modal-header">
    <h1 class="text-4xl border-b">Links</h1>
  </div>
  <div class="" id="links-modal-navigation-links">
    <ul class="text-2xl pt-2.5 flex flex-col space-y-6">
      <li v-for="(route, index) in routes" :key="index">
        <p>
          <router-link :to="route.route">
            {{ route.name }}
          </router-link>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { routes } from "../../constants";

export default {
  name: "LinksComponent",
  components: {},
  data() {
    return {
      routes,
    };
  },
};
</script>

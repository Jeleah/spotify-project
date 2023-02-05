<template>
  <div id="app-content">
    <header id="app-header">
      <NavBar />
    </header>
    <main id="app-main">
      <RouterView />
    </main>
    <footer id="app-footer">
      <Footer />
    </footer>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import Footer from "./components/footer/Footer.vue";
import NavBar from "./components/navigation/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    RouterView,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  background-color: #fefefe;
  overflow: hidden;
}

#app-main::before {
  display: block;
  content: "";
  height: 4rem;
}
</style>

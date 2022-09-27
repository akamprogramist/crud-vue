<template>
  <NavbarSection />
  <router-view />
</template>

<script>
import NavbarSection from "./components/navbar-section.vue";
export default {
  name: "App",
  components: { NavbarSection },
};
</script>

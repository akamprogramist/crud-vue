<template>
  <div class="links">
    <input type="search" name="search" id="search" placeholder="search" />
  </div>
  <div class="cats">
    <a class="cat">gaming</a>
    <a class="cat">programing</a>
    <a class="cat">design</a>
  </div>
  <cardList />
</template>

<script>
import cardList from "../components/card-list.vue";
export default {
  components: { cardList },
};
</script>

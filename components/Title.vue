<template>
  <h2
    :class="{
      primary: isPrimary,
      font1: font1,
      font2: font2
    }"
  >
    {{ title }}
  </h2>
</template>

<script>
export default {
  props: {
    title: String,
    isPrimary: Boolean,
    font1: Boolean,
    font2: Boolean
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Anton&family=Dancing+Script:wght@500&display=swap");

.font1 {
  font-family: "Anton", sans-serif;
}

.font2 {
  font-family: "Dancing Script", cursive;
}

.primary {
  font-weight: bold;
  text-decoration: underline;
  color: rgb(187, 91, 91);
}
</style>

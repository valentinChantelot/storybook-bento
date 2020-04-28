<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: String,
    isPrimary: Boolean,
    isDisable: Boolean,
    isBordered: Boolean,
    color: String
  }
};
</script>

<style lang="scss" scoped>

button {

}
</style>

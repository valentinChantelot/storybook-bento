<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: String,
    isPrimary: Boolean,
    isDisable: Boolean
  }
};
</script>

<style lang="scss" scoped></style>

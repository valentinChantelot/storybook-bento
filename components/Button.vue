<template>
  <button
    class="button"
    :class="{
      'button--pink': color === 'pink',
      'button--green': color === 'green',
      'button--yellow': color === 'yellow',
      'button--disabled': isDisabled
    }"
    :disabled="isDisabled"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    isDisabled: Boolean,
    color: String
  }
};
</script>

<style lang="scss" scoped>
$pink: #a3195b;
$green: #004042;
$yellow: #c29d2a;

.button {
  padding: 1rem 2rem;
  font-size: 2rem;
  border-radius: 5px;

  &--pink {
    border-color: $pink;
    color: white;
    background-color: $pink;
  }

  &--green {
    border-color: $green;
    color: white;
    background-color: $green;
  }

  &--yellow {
    border-color: $yellow;
    color: white;
    background-color: $yellow;
  }

  &--disabled {
    border: solid 2px #494d4c;
    background: none;
    color: #494d4c;
    text-decoration: line-through;
  }
}
</style>

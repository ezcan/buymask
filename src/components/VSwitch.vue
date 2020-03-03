<template lang="pug">
label.switch
  input(type="checkbox"
    @change="$emit('change', $event.target.checked)"
    :checked="checked")
  span.slider
  span.knobs
</template>

<script>
export default {
  name: 'VSwitch',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  }
};
</script>

<style lang="scss" scoped>
.switch{
  position: relative;
  display: inline-block;
  height: 1.2em;
  width: auto;

  > input[type="checkbox"]{
    display: none;

    &:checked{
      + .slider{
        background-color: #88e1f2;
        transform: rotate(180deg)
      }
      ~ .knobs{
        transform: translateX(1.2em) rotate(-180deg);
      }
    }
  }
  .slider{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 2.4em;
    height: 1.2em;
    background-color: #ccc;
    box-shadow: 0 0 1px rgba(black, .3);
    transition: all .5s cubic-bezier(0.18, 0.89, 0.35, 1.15);
    border-radius: 4px;
    transform: rotate(0);
  }

  .knobs{
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 1.2em;
      height: 1.2em;
      background-color: #fff;
      box-shadow: 0 0 1px rgba(black, .3);
      border-radius: 4px;
      transform: rotate(0);
      transition: transform .5s ease-in-out;
  }
}
</style>

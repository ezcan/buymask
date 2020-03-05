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
$size: 1.5em;
.switch{
  position: relative;
  display: inline-block;
  height: $size;
  width: auto;
  transform: translateY($size / 2);

  > input[type="checkbox"]{
    display: none;

    &:checked{
      + .slider{
        background-color: #00635D;
        transform: rotate(180deg);
        &::after{
          content: 'on';
          transform: rotate(-180deg);
        }
      }
      ~ .knobs{
        transform: translateX($size) rotate(-180deg);
      }
    }
  }
  .slider{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: $size * 2;
    height: $size;
    background-color: #777777;
    box-shadow: 0 0 4px rgba(black, .3);
    transition: all .5s;
    border-radius: 4px;
    transform: rotate(0);


    &::after{
      content: 'off';
      position: absolute;
      right: .1em;
      transform: rotate(0);
      font-size: .5em;
      color: #fff;
    }
  }

  .knobs{
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: $size;
      height: $size;
      background-color: #fff;
      box-shadow: 0 0 1px rgba(black, .3);
      border-radius: 4px;
      transform: rotate(0);
      transition: transform .5s ease-in-out;
  }
}
</style>

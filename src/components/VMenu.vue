<template lang="pug">
  #menu
    input#burger-toggle(type="checkbox")
    label.burger(for="burger-toggle" @click="clickHandler($event)")
      span.burger-bar
</template>

<script>
export default {
  name: 'VMenu',
  methods: {
    clickHandler(evt) {
      this.$emit('click', evt);
    }
  }
};
</script>

<style lang="scss" scoped>
#menu{
  position: fixed;
  display: block;
  bottom: 2em;
  right: 1em;
  z-index: 100;
}

input[type='checkbox']{
  visibility: hidden;
  &:checked + label > .burger-bar{
    background: transparent;
    box-shadow: none;
    transform: translateX(25px);
    &::before, &::after{
      box-shadow: 0 2px 2px rgba(#777, 0.3);
    }
    &::before{
      transform: rotate(45deg) translate(-18px, 18px);
    }
    &::after{
      transform: rotate(-45deg) translate(-18px, -18px);
    }
  }
  &:checked ~ nav {
    right: 0;
    opacity: 1;
  }
}

.burger{
position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  border-radius: 60px;
  background-color: #ddd;
  box-shadow: 0 0 4px rgba(#777, .3);
}

.burger-bar{
  width: 28px;
  height: 4px;
  background-color: #333;
  border-radius: 4px;
  box-shadow: 0 2px 2px rgba(#ddd, 0.3);
  transition: all 0.5s ease-in-out;

  &::after,
  &::before{
    content: '';
    position: absolute;
    width: 28px;
    height: 4px;
    background-color: #333;
    border-radius: 4px;
    box-shadow: 0 2px 2px rgba(#ddd, 0.3);
    transition: all 0.5s ease-in-out;
  }


  &::before{
    transform: translateY(-8px);
  }

  &::after{
    transform: translateY(8px);
  }
}


nav{
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  background-color: red;
  flex-direction: row;
  right: -100%;
  opacity: 0;
  width: 100vw;
  height: 100vh;
  transition: all 0.5s ease-in-out;
  z-index: 10;
}


</style>

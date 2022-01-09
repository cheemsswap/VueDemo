<template>
  <div class="root">
    <transition-group>
      <img
        v-show="active == index"
        v-for="(i, index) in imgSrc"
        :key="i"
        :src="i"
        alt=""
      />
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: [
        "images/1.jpg",
        "images/2.jpg",
        "images/3.jpg",
        "images/4.jpg",
        "images/5.jpg",
      ],
      active: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.active = (this.active + 1) % 5;
    }, 3000);
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.root {
  width: 800px;
  height: 400px;
  overflow: hidden;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  background-color: cornsilk;
}
.root > span > img {
  width: 100%;
  height: 100%;
  position: absolute;
}
.v-enter-active {
  animation: in 1s ease-in-out;
}
@keyframes in {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
.v-leave-active {
  animation: out 1s ease-in-out;
}
@keyframes out {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
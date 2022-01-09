<template>
  <div id="root">
    <transition name="lunbo" v-for="(i, index) of imgSrc" :key="i" :css="true">
      <img :src="i" alt="" v-show="index == active" />
    </transition>
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
#root {
  width: 800px;
  height: 400px;
  overflow: hidden;
  border-radius: 25px;
  position: relative;
}
#root > img {
  width: 100%;
  height: 100%;
  position: absolute;
  transition: 1s ease-in-out;
}
/* 进入起始位置 */
.lunbo-enter {
  transform: translateX(100%);
}
/* 进入最终位置 离开起始位置 */
.lunbo-enter-to,
.lunbo-leave {
  transform: translateX(0);
}
/* 离开最终位置 */
.lunbo-leave-to {
  transform: translateX(-100%);
}
</style>
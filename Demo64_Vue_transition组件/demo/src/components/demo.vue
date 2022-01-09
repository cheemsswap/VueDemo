<template>
  <div>
    <button @click="fun">点我隐藏/显示</button>
    <transition>
      <h2 v-show="isShow"></h2>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    fun() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
h2 {
  width: 100%;
  height: 80px;
  background-color: orange;
}
.v-enter-active {
  animation: in 2s;
}
.v-leave-active {
  animation: in 2s reverse;
}
@keyframes in {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
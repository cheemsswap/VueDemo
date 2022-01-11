<template>
  <div class="row">
    <h3 v-show="message.trim() != ''">{{ message }}</h3>
    <div class="card" v-for="d of data" :key="d.id">
      <a :href="d.html_url" target="_blank">
        <img :src="d.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ d.login }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyWords: "",
      data: [],
      isget: false,
      message: "欢迎，请检索",
    };
  },
  mounted() {
    this.$bus.$on("setdata", (data) => {
      this.data = data;
    });
    this.$bus.$on("setMessage", (val) => {
      this.message = val;
    });
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
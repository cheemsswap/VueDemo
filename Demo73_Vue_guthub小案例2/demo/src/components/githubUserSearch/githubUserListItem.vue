<template>
  <div
    class="
      col-xxl-2 col-xl-3 col-lg-4 col-sm-6 col-12
      d-flex
      flex-direction-column
      align-content-center
      flex-wrap
      card
    "
  >
    <img :src="user.avatar_url" alt="" />
    <span class="text-center">{{ user.login }}</span>
  </div>
</template>

<script>
export default {
  props: ["user"],
};
</script>

<style>
</style>
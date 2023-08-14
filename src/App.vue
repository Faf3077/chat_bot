<template>
  <router-view />
</template>

<script>
export default {

}
</script>

<style lang="scss">
body {
  background: linear-gradient(-45deg, #895499, #b151a9, #78a3b3);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

</style>

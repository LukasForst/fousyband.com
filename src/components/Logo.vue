<template>
  <div class="main-container">
    <div class="item name">
      <p>FOUsY</p>
    </div>
    <div class="item logo">
      <img alt="Fousy Logo" src="../assets/fousy.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Logo',
}
</script>

<style scoped>

.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  flex-wrap: wrap;
}

.item {
  margin-top: 1vw;
  margin-right: 2vw;
  margin-left: 2vw;
}

.name {
  font-size: 11vw;
  font-family: Phorssa, serif;
  color: black;
}

.logo img {
  max-width: 18vw;
}

@media only screen and (max-width: 600px) {
  .name {
    margin-top: -10%;
    font-size: 30vw;
  }

  .logo img {
    max-width: 40vw;
  }
}

</style>

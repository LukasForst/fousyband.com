<template>
  <div id="top-level-container">
    <SlideShow/>
    <div class="content">
      <Logo/>
    </div>
    <Socials/>
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import Socials from "@/components/Socials";
import SlideShow from "@/components/SlideShow";

export default {
  name: "Container",
  components: {
    SlideShow,
    Logo,
    Socials
  }
}
</script>

<style scoped>

#top-level-container {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}

.content {
  z-index: 5;
  background-color: rgba(255, 255, 255, 0.2);
}

</style>
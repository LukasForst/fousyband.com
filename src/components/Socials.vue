<template>
  <div class="socials">
    <md-button :href="facebook" class="social-icon md-fab md-big" target="_blank">
      <div class="social-icon fa fa-facebook"/>
    </md-button>

    <md-button :href="instagram" class="social-icon md-fab md-big" target="_blank">
      <div class="social-icon fa fa-instagram"/>
    </md-button>

    <md-button :href="youtube" class="social-icon md-fab md-big" target="_blank">
      <div class="social-icon fa fa-youtube"/>
    </md-button>

    <md-button :href="email" class="social-icon md-fab md-big">
      <div class="social-icon fa fa-envelope-o"/>
    </md-button>
  </div>
</template>

<script>
export default {
  name: "Socials",
  data() {
    return {
      facebook: 'https://www.facebook.com/fousyband/',
      instagram: 'https://www.instagram.com/fousyband/',
      youtube: 'https://www.youtube.com/channel/UCf6j1ffSdmnY6pZ4wyKjx4g',
      email: "mailto:booking@fousyband.com"
    }
  }
}
</script>

<!--not scoped-->
<style>
.socials > a {
  color: inherit;
}

/* Used, overwrites default */
/*noinspection CssUnusedSymbol*/
.socials .md-ripple {
  background-color: rgba(255, 255, 255, 0.3) !important;
  transition: background-color .2s;
}

/*noinspection CssUnusedSymbol*/
.socials .md-ripple:hover {
  background-color: rgba(255, 255, 255, 0.9) !important;
}

</style>

<style scoped>
.socials {
  display: flex;
  flex-flow: row;
  position: absolute;
  bottom: 5%;
}

.md-fab {
  width: 70px !important;
  height: 70px !important;
}

.social-icon {
  font-size: 30px !important;
  color: black;
}

@media only screen and (max-width: 600px) {
  .md-fab {
    width: 50px !important;
    height: 50px !important;
  }

  .socials {
    bottom: 1%;
  }
}

</style>
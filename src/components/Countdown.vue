<template>
  <div class="countdown-container">
    <div id="num-tag">
      <p>#{{ days + 1 }}</p>
    </div>
    <div class="countdown">
      <div class="counter">{{ days }}d</div>
      <div class="counter">{{ hours }}h</div>
      <div class="counter">{{ minutes }}m</div>
      <div class="counter">{{ seconds }}s</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Countdown",
  data() {
    return {
      finalReleaseDate: new Date(2020, 8, 9, 21, 15, 0),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  methods: {
    formatNumber(num) {
      return num < 10 ? `0${num}` : num
    },
    updateTimer() {
      let delta = Math.abs(this.finalReleaseDate - new Date()) / 1000;

      if (delta <= 0) {
        this.days = 0
        this.hours = 0
        this.minutes = 0
        this.seconds = 0
        return
      }

      const days = Math.floor(delta / 86400);
      delta -= days * 86400;

      const hours = Math.floor(delta / 3600) % 24;
      delta -= hours * 3600;

      const minutes = Math.floor(delta / 60) % 60;
      delta -= minutes * 60;

      const seconds = Math.floor(delta % 60);

      this.days = days
      this.hours = hours
      this.minutes = minutes
      this.seconds = this.formatNumber(seconds)

      setTimeout(() => this.updateTimer(), 1000)
    }
  },
  created() {
    this.updateTimer()
  }
}
</script>

<style scoped>
.countdown-container {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

.countdown {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding-bottom: 5%;
  padding-top: 2%;
}

.counter {
  color: black;
  font-family: Long Cang, serif;
  font-size: 4.4vw;
  width: 4.4vw;
}

.countdown .counter:not(:last-child) {
  margin-right: 2.5rem;
}

#num-tag {
  position: absolute;
  top: 40%;
  left: 15%;
  transform: translateX(-50%) skewY(-20deg);
}

#num-tag > p {
  font-family: Phorssa, serif;
  font-size: 10rem;
  color: black;
}

@media only screen and (max-width: 600px) {
  #num-tag {
    visibility: hidden;
  }

  .countdown {
    justify-content: center;
    padding-top: 10%;
  }

  .counter {
    font-size: 7vw;
  }
}
</style>

<template>
  <div class="home container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="yourName">Enter your name</label>
          <input type="text" name="name" id="yourName" v-model="name">
          <button class="btn teal">Enter chat</button>
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
        </form>

      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        name: null,
        feedback: null
      }
    },
    methods: {
      enterChat() {
        // console.log(this.name);
        if( this.name ){
          this.feedback = null;
          this.$router.push({ name: "Chat", params: { name: this.name } })
        } else {
          this.feedback = "You must enter your name..."
        }
      }
    }
  }
</script>

<style lang="scss">
  .home {
    max-width: 400px;
    margin: 100px auto;
    h2 {
      font-size: 3em;
    }
    button {
      margin: 30px auto;
    }
  }

</style>
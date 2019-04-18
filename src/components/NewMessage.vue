<template>
  
  <div class="newMessage">
    <form @submit.prevent="addMessage">
      <label for="new-message">New message (enter to add):</label>
      <input type="text" ref="text" name="new-message" id="new-message" v-model="newMessage">
      <button class="btn teal">Send message</button>
      <p class="red-text" v-if="feedback">{{ feedback }}</p>
    </form>
  </div>
  
  
</template>

<script>
  import db from "@/firebase/init"
  export default {
    name: "NewMessage",
    props: [ "name" ],
    data() {
      return {
        newMessage: null,
        feedback: null
      }
    },
    methods: {
      addMessage() {
        console.log(this.newMessage, this.name, Date.now());
        if( this.newMessage ) {
          db.collection("messages").add({
            content: this.newMessage,
            name: this.name,
            timestamp: Date.now()
          });
          this.feedback = null
        } else {
          this.feedback = "You must enter a message in order to send one..."
        }
      }
    },
    mounted(){
      this.$refs.text.focus();
    }
  }
</script>

<style scoped>

</style>
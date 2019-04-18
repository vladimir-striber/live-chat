<template>

  <div class="chat container">
    <h2 class="teal-text">Hi, {{ this.name }}</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li>
            <span class="teal-text">Name</span>
            <span class="grey-text text-darken-3">message</span>
            <span class="grey-text time">time</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage :name="name" />
      </div>

    </div>



  </div>

</template>

<script>
  import NewMessage from "./NewMessage";
  export default {
    name: "Chat",
    components: {NewMessage},
    props: [ "name" ],
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>

  .chat {
    max-width: 60%;
    margin: 100px auto;
    h2 {
      text-align: center !important;
      font-size: 2.6em;
      margin-bottom: 40px;
    }
    .messages {
     span {
       font-size: 1.4em;
      }
      .time {
        display: block;
        font-size: 1.2em;
      }
    }
  }

</style>
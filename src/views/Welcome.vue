<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter Your Name:</label>
          <input class="center-align" type="text" name="name" v-model="name">
          <p v-if="feedback" class="red-text"><i class="material-icons inline-icon">error</i> {{ feedback }}</p>
          <button class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat() {
      if(this.name) {
        this.feedback = null;
        this.$router.push({
          name: 'Chat', params: { name: this.name }
        });
      }
      else {
        this.feedback = 'You must enter a name to join the chat';
      }
    }
  }
}
</script>

<style>
.welcome {
  max-width: 400px;
  margin-top: 100px;
}
.welcome h2 {
  font-size: 3em;
  margin-top: 0;
}
.welcome button {
  margin: 30px auto;
}
</style>


<template>
  <div class="new-message">
    <form autocomplete="off" @submit.prevent="addMessage">
      <label for="new-message">New Message (Press <kbd>Enter</kbd> to send a message)</label>
      <input type="text" name="new-message" v-model="newMessage">
      <p class="red-text" v-if="feedback"><i class="material-icons inline-icon">error</i> {{ feedback }}</p>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'NewMessage',
  props: ['name'],
  data() {
    return {
      newMessage: null,
      feedback: null
    }
  },
  methods: {
    addMessage() {
      if(this.newMessage) {
        db.collection('messages').add({
          content: this.newMessage,
          name: this.name,
          timestamp: Date.now()
        }).catch(err => {
          console.log(err);
        });
        this.newMessage = null;
        this.feedback = null;
      }
      else {
        this.feedback = 'You must enter a message to send one!'
      }
    }
  }
}
</script>

<style>

</style>

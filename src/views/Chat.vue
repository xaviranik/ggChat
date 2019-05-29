<template>
  <div class="chat container">
    <h2 class="center teal-text">ggChat for you and your homies!</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li v-for="message in messages" :key="message.id">
            <span class="teal-text">{{message.name}}</span>
            <span class="grey-text text-darken-2">{{message.content}}</span>
            <span class="grey-text time">{{message.timestamp}}</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage :name="name"/>
      </div>
    </div>
  </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
import moment from 'moment'

export default {
  name: 'Chat',
  components: {
    NewMessage
  },
  props:[
    'name'
  ],
  data() {
    return {
      messages: []
    }
  },
  methods: {

  },
  created() {
    let ref = db.collection('messages').orderBy('timestamp');
    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if(change.type == "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).calendar()
          });
        }
      });
    });
  }
}
</script>

<style>

.chat h2 {
  margin: 30px auto;
  font-size: 1.4em;
}

.chat span {
  font-size: 1.2em;
  padding: 4px;
}

.chat .time {
  display: block;
  font-size: 0.8em;
}

.messages {
  max-height: 400px;
  overflow: auto;
}

.messages::-webkit-scrollbar {
  width: 3px;
}

.messages::-webkit-scrollbar-track {
  background: #ddd;
}

.messages::-webkit-scrollbar-thumb {
  background: teal;
}
</style>

<template>
  <div class="modal">
    <div @click="done" class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">New Question!</p>
        <button @click="done" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">

        <div class="field">
          <label class="label">Question</label>
          <div class="control">
            <input class="input" type="text" placeholder="Judul Postingan Blog" v-model="question.title">
          </div>
        </div>

        <div class="field">
          <label class="label">Description</label>
          <div class="control editor">
            <textarea class="textarea" placeholder="Konten postingan blog" v-model="question.content"></textarea>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button @click="newPost" class="button is-success is-right">Add Post</button>
        <button @click="done" class="button is-right">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<style>
  .modal-card-foot {
    align-content: right;
  }
</style>

<script>
export default {
  name: 'NewQ',
  data () {
    return {
      question: {
        title: '',
        content: ''
      }
    }
  },
  methods: {
    done () {
      this.$emit('done', 'inactive')
    },
    newPost () {
      this.$emit('post', this.question)
      this.$emit('done', 'inactive')
    }
  }
}
</script>

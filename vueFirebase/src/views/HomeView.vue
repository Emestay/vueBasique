<template>
  <div class="add-article">
    <form @submit.prevent="submitArticle">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" v-model="article.title">
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" id="description" v-model="article.description"></textarea>
      </div>

      <button type="submit" class="btn btn-primary">Add Article</button>
    </form>
  </div>
</template>

<script>
import ArticleDataService from '../ArticleDataServices';

export default {
  name: 'add-article',

  data() {
    return {
      submitted: false,
      article: {
        title: '',
        description: ''
      }
    };
  },

  methods: {
    submitArticle() {
      const data = {
        title: this.article.title,
        description: this.article.description
      };

      ArticleDataService.create(data)
        .then(() => {
          this.submitted = true;
          console.log('New article added successfully!');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
};
</script>
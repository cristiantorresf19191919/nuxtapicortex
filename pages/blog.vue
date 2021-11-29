<template>
  <div>
    <h1>
      Blog, total : <span class="counter">{{ total }}</span>
    </h1>
    <br /><br />
    <div v-for="post in posts" :key="post.id">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  //   created() {
  //     this.$store.dispatch("posts/setPosts");
  //   },
  created() {
    this.loadPosts();
  },
  methods: {
    ...mapActions({
      loadPosts: "posts/setPosts",
    }),
  },
  computed: {
    ...mapGetters({
      posts: "posts/getPosts",
      total: "posts/getTotal",
    }),
  },
};
</script>

<template>
  <div>
    <h3>INDEX</h3>
    <h2>
      contador: <span class="counter">{{ counter }}</span>
    </h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque a
      cupiditate vel molestiae libero doloremque sed excepturi. Provident quo
      ipsa consequatur quod sint asperiores error nam, laborum voluptas a quos!
    </p>
    <button class="button" @click="callSumTwo">Sumar Dos</button>
    <nuxt-link to="/services">Services</nuxt-link>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  methods: {
    callSumTwo() {
      this.$store.dispatch("sumTwo");
    },
  },
  computed: {
    ...mapGetters({
      counter: "getCounters",
    }),
  },
};
</script>
<style lang="scss">


</style>

<template>
  <div>
    <h2>Posts</h2>
    <div class="cardList">
      <div class="card" v-for="service in servicesList" :key="service.id">
        <div class="card__front" :style="getImageUrl(service.pictures)">
          <div class="card__info">
            <div class="card__title">{{ service.title }}</div>
            <div class="card__description">{{ service.description }}</div>
          </div>
        </div>
        <div class="card__back">
          {{ service.title }}
          <button>
            <nuxt-link :to="`services/${service.id}`">Reservar</nuxt-link>
          </button>
        </div>
      </div>
    </div>

    
  </div>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      servicesList: [],
      error: null,
    };
  },
  async mounted() {
    try {
      const res = await this.$strapi.find("services");
      this.servicesList = res;
    } catch (error) {
      this.error = error;
    }
  },
  methods: {
    getImageUrl(picture) {
      const url = process.env.BACKEND_URL;
      if (!picture) return undefined;
      return { backgroundImage: `url(${url + picture?.url})` };
    },
  },
};
</script>

<style lang="scss" scoped>

</style>

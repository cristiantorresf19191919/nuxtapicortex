<template>
  <div>
    <h2>Posts</h2>
    <!-- <div className="cardList" v-for="service in servicesList" :key="service.id">
               <div className="card">
                <div className="card__front" :style="getImageUrl(service.pictures)">
                    <div className="card__info">
                        <div className="card__title">{{service.title}}</div>
                        <div className="card__description">{{service.description}}</div>
                    </div>
                </div>
                <div className="card__back">
                    {{service.title}}
                    <button>
                        <nuxt-link :to="`services/${service.id}`">Reservar</nuxt-link>
                    </button>
                </div>

            </div>
    </div> -->
    <div class="padre">
      <div class="hijo">
        <h1>Hola mundo</h1>
      </div>
    </div>
    <div class="cardList">
      <div className="card">
        <div className="card__front">
          <div className="card__info">
            <div className="card__title">title</div>
            <div className="card__description">description</div>
          </div>
        </div>
        <div className="card__back">
          title
          <button>
            <nuxt-link :to="`services`">Reservar</nuxt-link>
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
    console.log(
      "🚀 ~ file: index.vue ~ line 22 ~ mounted ~ this.$strapi",
      this.$strapi
    );
    try {
      //   const res = await axios.get('http://localhost:1337/services');
      const res = await this.$strapi.find("services");
      this.servicesList = res;
      console.log("🚀 ~ file: index.vue ~ line 22 ~ mounted ~ res", res);
    } catch (error) {
      console.log("🚀 ~ file: index.vue ~ line 27 ~ mounted ~ error", error);

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
.padre {
  background-color: black;
  .hijo {
    background-color: darkgoldenrod;
    border-radius: 20px;
    color: greenyellow;
  }
}
%custom-card {
  width: 9rem;
  margin: 10px;
  flex-basis: 15rem;
  height: 15rem;
  border-radius: 9px;
  position: relative;
}

%cards-container {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  flex-wrap: wrap;
}

%card-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  background: #0000006b;
  text-align: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

%fillAbsoluteParent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.img-container {
  width: calc(100% / 2);
}
.cardList {
  @extend %cards-container;
  .card {
    @extend %custom-card;
    perspective: 1000px;
    &__front {
      .card__info {
        @extend %card-bottom;
        .card__description {
          overflow: hidden;
          text-overflow: ellipsis;
          height: 3rem;
          width: 7rem;
          margin: 0 auto;
          font-size: 9px;
          text-align: center;
          display: flex;
          align-items: center;
        }
      }
      box-shadow: 1px 1px 6px #222;
      background-size: cover;
      background-position: top;
      @extend %fillAbsoluteParent;
      transition: all 0.8s ease;
      opacity: 1;
      z-index: 100;
    }
    &__back {
      @extend %fillAbsoluteParent;
      transition: all 0.8s ease;
      height: 100%;
      background-color: orangered;
      background-color: #ff4e00;
      background-image: linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%);
      transform: rotateY(-180deg);
      z-index: -1;
      opacity: 0;
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
      button {
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.76);
        color: white;
        cursor: pointer;
        a {
          color: white;
          text-decoration: none;
        }
      }
    }
  }
  .card:hover > .card__front {
    transform: rotateY(180deg);
    opacity: 0;
  }
  .card:hover > .card__back {
    transform: rotateY(0);
    opacity: 1;
    z-index: 9999;
  }
}
</style>

<template>
  <div class="app">
    <h1 class="app__title">Гороскоп</h1>
    <div class="app__cards">
      <AppCard v-for="card in signs" :key="card.sign" :card="card" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useStore } from './stores/horoscope'
import AppCard from './components/AppCard.vue'

export default {
  components: { AppCard },
  data() {
    return {
      signs: [
        {
          sign: '♈',
          dates: '21.03 - 19.04',
          original: 'Овен',
          translated: 'Aries'
        },
        {
          sign: '♉',
          dates: '20.04 - 20.05',
          original: 'Телец',
          translated: 'Taurus'
        },
        {
          sign: '♊',
          dates: '21.05 - 20.06',
          original: 'Близнаци',
          translated: 'Gemini'
        },
        {
          sign: '♋',
          dates: '21.06 - 22.07',
          original: 'Рак',
          translated: 'Cancer'
        },
        {
          sign: '♌',
          dates: '23.07 - 22.08',
          original: 'Лев',
          translated: 'Leo'
        },
        {
          sign: '♍',
          dates: '23.08 - 22.09',
          original: 'Дева',
          translated: 'Virgo'
        },
        {
          sign: '♎',
          dates: '23.09 - 22.10',
          original: 'Весы',
          translated: 'Libra'
        },
        {
          sign: '♏',
          dates: '23.10 - 21.11',
          original: 'Скорпион',
          translated: 'Scorpio'
        },
        {
          sign: '♐',
          dates: '22.11 - 21.12',
          original: 'Стрелец',
          translated: 'Sagittarius'
        },
        {
          sign: '♑',
          dates: '22.12 - 19.01',
          original: 'Козерог',
          translated: 'Capricorn'
        },
        {
          sign: '♒',
          dates: '20.01 - 18.02',
          original: 'Водолей',
          translated: 'Aquarius'
        },
        {
          sign: '♓',
          dates: '19.02 - 20.03',
          original: 'Рыбы',
          translated: 'Pisces'
        }
      ]
    }
  },
  computed: {
    ...mapState(useStore, ['cards'])
  },
  methods: {
    ...mapActions(useStore, ['fetchCards'])
  },
  async mounted() {
    await this.fetchCards()
    console.log(this.cards)
  }
}
</script>

<style scoped>
.app {
  width: 100%;
  max-width: 1080px;

  padding: 20px;
  margin: 0 auto;
}
.app__title {
  font-size: 56px;
  text-align: center;
  margin: 0 auto;
  font-weight: 700;

  margin-bottom: 20px;
}
.app__cards {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 430px) {
    grid-template-columns: 1fr;
  }
}
</style>

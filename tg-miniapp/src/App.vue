<template>
  <div class="app">
    <h1 class="app__title">{{ lang == 'ru' ? 'Гороскоп' : 'Horoscope' }}</h1>
    <SelectButton class="app__lang" v-model="lang" :options="langOptions"></SelectButton>
    <div class="app__cards">
      <AppCard
        @click="toggleInfoVisibility"
        v-for="card in this.signs"
        :key="card.sign"
        :card="card"
        :lang="this.lang"
      />
    </div>
    <Dialog
      class="app__dialog"
      v-model:visible="this.isInfoVisible"
      modal
      :style="{ width: '50rem', margin: '0 15px' }"
    >
      <template #header>
        <h2 v-touch:swipe.rigth="toggleInfoVisibility">{{ lang == 'ru' ? 'Прогноз' : 'Predict' }}</h2>
      </template>
      <p v-touch:swipe.rigth="toggleInfoVisibility">{{ this.cards.horoscopes[this.sign.toLowerCase()] }}</p>
      <BackButton @click="toggleInfoVisibility" />
    </Dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useStore } from './stores/horoscope'
import AppCard from './components/AppCard.vue'
import Dialog from 'primevue/dialog'
import SelectButton from 'primevue/selectbutton'

import { BackButton } from 'vue-tg'
import { useWebApp } from 'vue-tg'

export default {
  components: { AppCard, Dialog, SelectButton, BackButton },
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
      ],
      isInfoVisible: false,
      lang: 'ru',
      langOptions: ['ru', 'en']
    }
  },
  computed: {
    ...mapState(useStore, ['cards', 'isInfoVisible', 'sign'])
  },
  methods: {
    toggleInfoVisibility() {
      this.isInfoVisible = !this.isInfoVisible
    },
    ...mapActions(useStore, ['fetchCards', 'handleLang'])
  },
  watch: {
    lang: {
      handler(val) {
        this.handleLang(val)
        this.fetchCards()
      }
    }
  },
  mounted() {
    this.fetchCards()

    if (useWebApp().initDataUnsafe.user.language_code == 'ru') {
      this.lang = 'ru'
    } else {
      this.lang = 'en'
    }
  }
}
</script>

<style scoped>
.app {
  width: 100%;
  max-width: 1080px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
  margin: 0 auto;
}
.app__title {
  font-size: 56px;
  text-align: center;
  margin: 0 auto;
  font-weight: 700;

  margin-bottom: 20px;

  @media screen and (max-width: 430px) {
    font-size: 36px;
  }
}
.app__lang {
  margin-bottom: 20px;
}
.app__cards {
  width: 100%;
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

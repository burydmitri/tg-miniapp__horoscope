<template>
  <Card class="card" @click="handleSign(this.card.translated)">
    <template #header>
      <h1>{{ this.card.sign }}</h1>
    </template>
    <template #title>{{ this.lang == 'ru' ? this.card.original : this.card.translated }}</template>
    <template #content>
      <p>
        {{ this.card.dates }}
      </p>
    </template>
  </Card>
</template>

<script>
import { mapActions } from 'pinia'
import { useStore } from '../stores/horoscope'
import Card from 'primevue/card'

export default {
  props: {
    card: Object,
    lang: String,
  },
  components: { Card },
  methods: {
    ...mapActions(useStore, ['handleSign'])
  }
}
</script>

<style scoped>
.card {
  display: flex;
  align-items: center;
  text-align: center;

  cursor: pointer;
  transition: 0.2s;

  padding-top: 24px;
}
.card h1 {
  font-size: 48px;
}
.card:hover {
  transform: scale(1.05);
}
.card:active {
  transform: scale(1.07);
}
</style>
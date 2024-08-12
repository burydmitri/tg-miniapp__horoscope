<template>
  <Card class="card" @click="getMoreInfo">
    <template #header>
      <h1>{{ this.card.sign }}</h1>
    </template>
    <template #title>{{ this.card.original }}</template>
    <template #content>
      <p>
        {{ this.card.dates }}
      </p>
    </template>
  </Card>
</template>

<script>
import Card from 'primevue/card'

export default {
  props: {
    card: Object
  },
  components: { Card },
//   methods: {

//   }
}
</script>

<style scoped>
.card {
  display: flex;
  align-items: center;
  text-align: center;

  cursor: pointer;
  transition: .2s;

  padding-top: 24px;
}
.card h1 {
    font-size: 48px;
}
.card:hover {
    transform: scale(1.05);
}
</style>
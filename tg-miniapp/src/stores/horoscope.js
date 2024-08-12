import { defineStore } from 'pinia'

export const useStore = defineStore('horoscope', {

    state: () => {
        return {
            sign: '',
            language: 'original',
            cards: [],
        }
    },
    getters: {
        body() {
            if (this.sign) {
                return {
                    sign: this.sing,
                    language: this.language,
                }
            }
            return { language: this.language, }
        }
    },
    actions: {
        async fetchCards() {
            try {
                const response = await fetch('http://5.35.90.171:61011/get_horoscope/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(this.body)
                })
                let result = await response.json();
                
                this.cards = result
            } catch (error) {
                return error
            }
        }
    }
})
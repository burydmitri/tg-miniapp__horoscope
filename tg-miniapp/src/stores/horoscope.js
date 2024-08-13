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
        handleSign(sign) {
            this.sign = sign
        },
        handleLang(str) {
            if (str == 'ru') this.language = 'original'
            else this.language = 'translated'
        },
        async fetchCards() {
            try {
                const response = await fetch('https://poker247tech.ru/get_horoscope/', {
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
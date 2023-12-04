
const listaSpesa = [
    {
        text: 'pomodori',
        done: 'true'
    },
    {
        text: 'pane',
        done: 'false'
    },
    {
        text: 'carta igenica',
        done: 'true'
    },
    {
        text: 'tovaglioli',
        done: 'true'
    },
    {
        text: 'pasta',
        done: 'false'
    },
]






const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Compito Fatto'
        }
    }

    methods{

    }
}).mount('#app')

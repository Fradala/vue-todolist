






const { createApp } = Vue

createApp({
    data() {
        return {
            listaSpesa:[
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
            
                
        }
    }

    
}).mount('#app')

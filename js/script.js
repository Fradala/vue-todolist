






const { createApp } = Vue

createApp({
    data() {
        return {
            newTodoElement: '',

            listaSpesa:[
                {
                    text: 'pomodori',
                    done: true
                },
                {
                    text: 'pane',
                    done: false
                },
                {
                    text: 'carta igenica',
                    done: true
                },
                {
                    text: 'tovaglioli',
                    done: true
                },
                {
                    text: 'pasta',
                    done: false
                },
            
            ]
            
                
        }
    },
    methods:{
        addNewTodoItem(newElement){
            console.log(newElement)
            this.listaSpesa.push({
                text: newElement,
                done: false
            })
            this.newTodoElement = '';
        },

        removeTodoElement(indexToBeRemoved){
            this.listaSpesa.splice(indexToBeRemoved, 1)
        }

    }

    
}).mount('#app')

console.log('js ok')

const app = new Vue(

    {
        el:'#app',
        data: {
            newTodo: '',
            todos: [
                
                {
                text:'Fare la spesa',
                done: true,
                
                },

                {
                text: 'Fare la lavatrice',
                done: true,
                },

                {
                text: 'fare il carosello',
                done: false,
                },

                {
                text: 'Preparare la cena',
                done: true,
                },
                
            ]
        },
        methods: {
            
             deleteTodo(index){
                
                 const deleteTodos = this.todos.splice(index, 1)
                
             },

            addTodo () {
                const toDoToInsert = {
                    text:this.newTodo.trim(),
                    done:false,
                }

                
                console.log(toDoToInsert)
                if (toDoToInsert){
                    this.todos.push(toDoToInsert);
                    this.newTodo = '';
                    
                }else {
                    console.log('non hai inserito nulla')

                } 
                console.log(this.todos)
                
            },
            changeTodo(i) {
                this.todos[i].done =!this.todos[i].done
            }
        }
    }

)

import { createApp } from './vue.esm-browser.js'


window.app = createApp({
    
  // data() {
  //   return {

  //   }
  // },
  data: () => ({
    message: '',
messageClasses:'',
searchValue:''
,
   nameTask: '',
   completeTasks:"",

    // tasksList: [
        
    // ],
 
  query:'',
  // items:['task1:Apple', 'task2:Banana', 'task3:Orange'],
  tasksList: [
    {
      nameTask: 'Make todo list',
      completed: true
    },
    {
      nameTask: 'Go skydiving',
      completed: false
    },
    {
      nameTask: 'skydiving',
      completed: false
    }
  ]
}),





computed:{
    filterList(){
       return this.tasksList.filter((task)=>{return task.nameTask.toLowerCase().includes(this.searchValue.toLowerCase())})
        // filter((user) =>{return user.name.includes(this.search)})
    },
    // filteredItems(){
  
    //     return this.items.filter((task)=>{
    //         return task.toLowerCase().indexOf(this.query.toLowerCase())!== -1; })
    // },
    // className() {
    //   let classes = ['tasks__item__toggle'];
    //   if (this.task.completed) {
    //     classes.push('tasks__item__toggle--completed');
    //   }
    //   return classes.join(' ');
    // }
  
},
  methods: {
    addTask(){
        if(this.nameTask===""){
          this.showMsg('please enter Values' ,true)
            return
        }
 this.tasksList.push({nameTask:this.nameTask})
 this.showMsg('Task added successfully' )
this.nameTask=""
},
removeLastTask(){
    this.tasksList.pop()
},
removeFirstTask(){
    this.tasksList.shift()
},
removeTasks(){
    this.tasksList = []
    this.showMsg('Tasks list was emptied')
},
removeTask(index){
this.tasksList.splice(index ,1)


},
removeItem(index){
    this.items.splice(index ,1)
}
,

    showMsg(message , isError=false){
 if(isError){
    this.messageClasses="error"
 }
 else{
    this.messageClasses="success"
 }
 this.message=message
 setTimeout(this.removeMsg ,3000)
}
  ,
  removeTask(index) {
    this.tasksList.splice(index, 1)
  }
    ,
    removeMsg(){
        this.message=""
        this.messageClasses=""
    },
//     complete(){
 
//     },
// taskcomplete(){
  
// }
showComplete(isComplete =false ){
  if(isComplete){
    this.messageClasses="complete"
 }
 else{
    this.messageClasses="uncomplete"
 }
}
  }
}).mount('#app')
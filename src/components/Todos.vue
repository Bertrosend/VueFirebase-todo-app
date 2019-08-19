<template>
  <div class="container mx-auto">
    <div class="flex justify-center p-10">
      <div class="flex-col shadow-xl w-full">
        <div>
          <h1 class="text-center text-4xl">MY TODO APP</h1>
        </div>
        <!-- form fill -->
        <div>
          <form @submit.prevent="addtodos" class="w-full max-w-sm p-5">
            <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
              <input v-model="todo" class="w-3/4 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="fill todos #####" required>
              <button class="w-1/4 flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                Add Todo
              </button>
            </div>
          </form>
        </div>
        <!-- our todos -->
        <div class="p-5">
          <ul>
            <li v-for="(todo) in todos" :key="todo['.key']" class="flex bg-gray-200 p-2 m-2 border-b-2 border-b-black ">
              <div class="w-3/4 pl-5"> {{todo}} </div>
              <div @click="deleteTodo(todo)" class="w-1/4 text-right pr-4"><i class="text-blue-600 material-icons md-36">delete</i></div>
            </li>
          </ul>
          <div class="flex justify-end">
              <button class="bg-red-600 border-red-600 text-lg border-4 text-white py-1 px-2 rounded" type="button">
                Clear Todos
              </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from './db'
import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  name: 'Todos',
 data() {
   return {
     todos: null,
     todo: null,
     todoitem: null
   }
 },
 created() {
     db.collection("mytodos").get().then((e) => {
         e.forEach((doc) => {this.todos = doc.data().todos})})
 },
 methods: {
   addtodos() {
     db.collection("mytodos").doc("todolist").update({
       todos: firebase.firestore.FieldValue.arrayUnion(this.todo)
     });
   },
   deleteTodo(id){
     alert("Delete todo????")
    db.collection("mytodos").doc("todolist").update({
       todos: firebase.firestore.FieldValue.arrayRemove(id)
     })
   }
 },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .text-blue-600{
    cursor: pointer;
  }
</style>
<script setup>
import { ref, onMounted } from 'vue';
//we have to use .value to access the ref's inner value
          const name= ref('Ali selam');
          const status= ref(false);
          const tasks= ref(['eating', 'sleeping', 'walking']);
          const newTask=ref('');
          const toggleStatus= () => {
            if (status.value===true){
            status.value=false
          }else{
            status.value=true
          }
          }
          const addTask=()=>{
            tasks.value.push(newTask.value)
            newTask.value=''
          }
          const removeTask=(theIndex)=>{
              //const filteres = tasks.value.filter((task,index)=>index!==theIndex);
              //tasks.value=filteres;
              tasks.value.splice(theIndex,1);
          }
          onMounted(async ()=>{
              try {
                const response =await fetch('https://jsonplaceholder.typicode.com/todos')
                const data=await response.json();
                //.map for transforming each element 
                tasks.value=data.map((task)=>task.title);
              } catch (error) {
                console.log(error);
              }
          })
</script>

<template>
  <h1>Vue Jobs</h1>
  <p v-if="status">User is active! </p>
  <p v-else>User is not active!</p>
  <!--the .prevent will stop the page from refreshing upon submitting, we want to intercept-->
  <form @submit.prevent="addTask">
    <label for="newTask"></label>
    <input type="text" id="newTask" v-model="newTask">
      <button type="submit">Submit</button>
  </form>
  <button  @click="toggleStatus"> change status</button>

  <li>
    <ul v-for="(task,index) in tasks" key="task">
      
      {{ task }}
      <button @click="removeTask(index)">X</button>
    </ul>
  </li>
</template>


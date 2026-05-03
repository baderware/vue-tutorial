<script>
    export default{
      data() {
        return {
          name: 'Ali selam',
          status:false,
          tasks:['cleaning','mopping','reading'],
          link:"https://google.com"
        }
      },
      methods:{
        toggleStatus(){
          if (this.status===true){
            this.status=false
          }else{
            this.status=true
          }
        }
      }
    }
</script>
<template>
  <h1>Vue Jobs</h1>
  <p v-if="status">User is active! </p>
  <p v-else>User is not active!</p>
  <button  @click="toggleStatus"> change status</button>
  <li>
    <ul v-for="task in tasks" key="task">{{ task }}</ul>
  </li>
  <a :href="link">Click for google</a>
</template>


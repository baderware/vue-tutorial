<script>
    export default{

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


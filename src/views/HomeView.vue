<script setup>
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import JobListing from '@/components/JobListing.vue';
</script>

<template>
  <Hero title="Test-title"/>
  <HomeCards />
  <JobListing :limit="2" :show-button="true" />
</template>
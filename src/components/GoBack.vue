<template>
  <button @click="goBack">Go Back</button>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goBack = () => router.back()
</script>
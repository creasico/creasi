<script setup>
defineProps(['value'])
</script>

<template>
  <label class="select-none font-semibold text-md">
    <span v-if="value">{{ value }}</span>
    <span v-else><slot /></span>
  </label>
</template>

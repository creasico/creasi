<script setup>
import { onMounted, ref } from 'vue'
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
const input = ref(null)
onMounted(() => {
  if (input.value.hasAttribute('autofocus'))
    input.value.focus()
})
defineExpose({ focus: () => input.value.focus() })
</script>

<template>
  <input
    ref="input"
    class="shadow border-gray-300 transition ease-in-out duration-150 disabled:bg-gray-100 readonly:bg-gray-50 focus:ring-primary focus:outline-none focus:border-primary focus-visible:ring-primary focus:ring-opacity-20 rounded px-4 py-2"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
</template>

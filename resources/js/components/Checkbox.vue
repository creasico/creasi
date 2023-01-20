<script setup>
import { computed } from 'vue'
const props = defineProps({
  checked: {
    type: [Array, Boolean],
    default: false,
  },
  value: {
    default: null,
  },
})
const emit = defineEmits(['update:checked'])
const proxyChecked = computed({
  get() {
    return props.checked
  },
  set(val) {
    emit('update:checked', val)
  },
})
</script>

<template>
  <input
    v-model="proxyChecked"
    type="checkbox"
    :value="value"
    class="shadow border-gray-300 transition ease-in-out duration-150 disabled:bg-gray-100 readonly:bg-gray-50 focus:ring-primary focus:outline-none focus:border-primary focus-visible:ring-primary focus:ring-opacity-20 rounded checked:bg-primary text-primary"
  >
</template>

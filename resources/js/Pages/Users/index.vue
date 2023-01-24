<script>
import { Head } from '@inertiajs/vue3'
import Layout from '../../Shared/Layout.vue'
export default {
  components: { Head },
  layout: Layout,
  props: { users: Array },
  data() {
    return { visible: false }
  },
}
</script>

<template>
  <Head title="Creasi Internal - Semua Pengguna " />
  <table class="table">
    <thead>
      <tr>
        <th class="w-4/8 text-left">
          {{ $t('') }}
        </th>
        <th class="w-3/8 text-left">
          Email
        </th>
        <th class="action">
          Action
        </th>
      </tr>
    </thead>
    <tbody class="border rounded-lg">
      <tr v-for="user in users" :key="user.id" class="no-content">
        <td>
          {{ user.name }}
        </td>
        <td>
          {{ user.email }}
        </td>
        <td class="action" @click="visible = !visible">
          <div class="text-left">
            <div name="trigger" class="m-auto select-none justify-between cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
              </svg>
            </div>
            <div v-show="visible" class="block px-2 py-5 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
              Detail
            </div>
          </div>
        </td>
      </tr>
      <tr v-if="users.length === 0">
        <td colspan="3">
          Data not found
        </td>
      </tr>
    </tbody>
  </table>
</template>

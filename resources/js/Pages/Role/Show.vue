<script>
import { Head, Link, router } from '@inertiajs/vue3'
import Layout from '../../Shared/Layout.vue'
export default {
  components: { Head, Link },
  layout: Layout,
  props: {
    role: Object,
  },
  data() {
    return {
      currentId: '',
      isVisible: false,
    }
  },
  methods: {
    toggleVisible(id) {
      this.isVisible = !this.isVisible
      this.currentId = id
    },
    handleDelete(id) {
      router.delete(`/roles/${id}`)
    },
  },
}
</script>

<template>
  <Head title="Creasi Internal - Detail Pengguna " />
  <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg sm:border border-gray-200 mt-3">
    <table class="table">
      <thead>
        <tr>
          <th class="w-4/8 text-left">
            No
          </th>
          <th class="w-3/8 text-left">
            Role
          </th>
          <th class="action">
            {{ $t('actions.tables.column') }}
          </th>
        </tr>
      </thead>
      <tbody class="border rounded-lg">
        <tr class="no-content">
          <td> {{ role.id }} </td>
          <td> {{ role.name }} </td>
          <td class="action" @click="toggleVisible(role.id)">
            <div class="text-left">
              <div name="trigger" class="m-auto select-none justify-between cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                </svg>
                <div @click="toggleVisible">
                  <div v-if="currentId === role.id && isVisible">
                    <Link :href="`/roles/${role.id}/edit`" class="block px-2 py-5 text-sm leading-5 text-green-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                      Edit
                    </Link>
                    <button class="bg-transparent text-green-600 block px-2 py-5 text-sm leading-5 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" @click="handleDelete(`${role.id}`)">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr v-if="role.length === 0">
          <td colspan="3" class="text-center">
            {{ $t('roles.table.result') }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>

</style>

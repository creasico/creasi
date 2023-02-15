<script>
import { Head, Link } from '@inertiajs/vue3'
import { ref } from 'vue'
import Layout from '../../Shared/Layout.vue'
export default {
  components: { Head, Link },
  layout: Layout,
  props: { users: Array },
  setup() {
    const currentId = ref('')
    const isVisible = ref(false)

    const toggleVisible = (id) => {
      isVisible.value = !isVisible.value
      currentId.value = id
    }

    return { currentId, isVisible, toggleVisible }
  },
}
</script>

<template>
  <Head title="Semua Pengguna " />
  <Link href="/users/create" class="inline-flex items-center font-semibold transition ease-in-out duration-150 border border-transparent rounded hover:shadow focus:ring-opacity-40 focus:outline-opacity-60 disabled:opacity-25 select-none px-2 py-2 text-white bg-emerald-700 hover:bg-emerald-600 focus:bg-emerald-600 active:bg-emerald-800 focus:outline-emerald-500 hover:border-emerald-700 focus:border-emerald-700 focus:border-emerald-900">
    {{ $t('users.button.create') }}
  </Link>
  <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg sm:border border-gray-200 mt-3">
    <table class="table">
      <thead>
        <tr>
          <th class="w-4/8 text-left">
            {{ $t('users.table.name') }}
          </th>
          <th class="w-3/8 text-left">
            {{ $t('users.table.email') }}
          </th>
          <th class="action">
            {{ $t('actions.tables.column') }}
          </th>
        </tr>
      </thead>
      <tbody class="border rounded-lg">
        <tr v-for="user in users" :key="user.id" class="no-content">
          <td> {{ user.name }} </td>
          <td> {{ user.email }} </td>
          <td class="action" @click="toggleVisible(user.id)">
            <div class="text-left">
              <div name="trigger" class="m-auto select-none justify-between cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                </svg>
                <div @click="toggleVisible">
                  <div v-if="currentId === user.id && isVisible">
                    <Link v-if="can('users.detail')" :href="`/users/${user.id}/show`" class="block px-2 py-5 text-sm leading-5 text-green-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                      {{ $t('actions.forms.detail') }}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr v-if="users.length === 0">
          <td colspan="3" class="text-center">
            {{ $t('users.table.result') }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

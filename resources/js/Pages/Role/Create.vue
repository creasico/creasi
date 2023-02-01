<script>
import { Head, useForm } from '@inertiajs/vue3'
import InputLabel from '../../components/InputLabel.vue'
import PrimaryButton from '../../components/PrimaryButton.vue'
import Layout from '../../Shared/Layout.vue'
export default {
  components: {
    Head, InputLabel, PrimaryButton,
  },
  layout: Layout,
  props: {
    permissions: Object,
    roles: Array,
  },
  setup() {
    const form = useForm({
      role: '',
      permission: [],
    })

    const handleSubmit = () => {
      form.post('/roles')
    }

    return { form, handleSubmit }
  },
}
</script>

<template>
  <Head title="Creasi Internal - Create Role " />
  <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg sm:border border-gray-200">
    <div class="p-6 justify-center">
      <form @submit.prevent="handleSubmit">
        <div class="flex">
          <div class="w-4/8">
            <InputLabel class="font-semibold text-md">
              Role Pengguna
            </InputLabel>
            <select v-model="form.role" class="bg-white border border-gray-400 py-2 px-2 rounded-lg focus:outline-none w-full">
              <option v-for="(role, index) in roles" :key="index" :value="role">
                {{ role }}
              </option>
            </select>
          </div>

          <div class="px-4 w-full">
            <table class="table w-full">
              <thead>
                <tr>
                  <th class="text-left">
                    Menu / Form
                  </th>
                  <th class="text-left">
                    Permission
                  </th>
                </tr>
              </thead>

              <tbody class="border rounded-lg">
                <tr v-for="(permission, index) in permissions" :key="index" class="w-full">
                  <td>
                    {{ index }}
                  </td>
                  <td>
                    <InputLabel v-for="menu in permission" :key="menu.id" class="flex flex-wrap items-center font-semibold px-3 text-md">
                      <input v-model="form.permission" type="checkbox" :value="menu.name" class="shadow border-gray-300 transition ease-in-out duration-150 disabled:bg-gray-100 readonly:bg-gray-50 focus:ring-primary focus:outline-none focus:border-primary focus-visible:ring-primary focus:ring-opacity-20 rounded py-2">
                      {{ menu.name }}
                    </InputLabel>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <PrimaryButton type="submit" class="flex px-3 py-2 bg-emerald-700 hover:bg-emerald-700 rounded-md mt-3">
          Save
        </PrimaryButton>
      </form>
    </div>
  </div>
</template>

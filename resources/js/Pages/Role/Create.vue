<script>
import { Head } from '@inertiajs/vue3'
import TextInput from '../../components/TextInput.vue'
import InputLabel from '../../components/InputLabel.vue'
import PrimaryButton from '../../components/PrimaryButton.vue'
import Layout from '../../Shared/Layout.vue'
export default {
  components: {
    Head, InputLabel, TextInput, PrimaryButton,
  },
  layout: Layout,
  props: {
    users: Array,
  },
}
</script>

<template>
  <Head title="Creasi Internal - Create Role " />
  <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg sm:border border-gray-200">
    <div class="p-6 justify-center">
      <form>
        <div class="flex">
          <div class="flex-inline w-4/8">
            <InputLabel class="font-semibold text-md">
              Role Pengguna
            </InputLabel><br>
            <select class="bg-white border border-gray-400 py-2 px-2 rounded-lg focus:outline-none w-full">
              <option value="owner">
                Owner
              </option>
              <option value="manager">
                Manager
              </option>
              <option value="member">
                Member
              </option>
            </select>
          </div>

          <div class="flex-inline px-4 w-full">
            <table class="table">
              <thead>
                <tr>
                  <th class="w-4/8 text-left">
                    Menu/Form
                  </th>
                  <th class="w-4/8 text-left">
                    Permission
                  </th>
                </tr>
              </thead>
              <tbody class="border rounded-lg">
                <td>
                  <InputLabel class="font-semibold text-md">
                    User
                  </InputLabel>
                </td>
                <td>
                  <TextInput
                    type="checkbox"
                    class="mt-1 py-2 px-2"
                  />
                  <span class="px-3">Create user</span>
                </td>
              </tbody>
            </table>
          </div>
        </div>
        <PrimaryButton class="flex px-3 py-2 bg-emerald-700 hover:bg-emerald-700 rounded-md mt-3">
          Save
        </PrimaryButton>
      </form>
    </div>
  </div>
</template>

<style>

</style>

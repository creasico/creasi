<script>
import { Head, router } from '@inertiajs/vue3'
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import Layout from '../../Shared/Layout.vue'
import PrimaryButton from '../../components/PrimaryButton.vue'
import InputLabel from '../../components/InputLabel.vue'
import TextInput from '../../components/TextInput.vue'
import InputError from '../../components/InputError.vue'

export default {
  components: { InputLabel, TextInput, Head, PrimaryButton, InputError },
  layout: Layout,
  props: {
    user: Object,
    role: Array,
    roles: Array,
    errors: Object,
  },
  setup(props) {
    const form = reactive({
      name: props.user.name,
      email: props.user.email,
      role: props.role[0],
    })

    const { t } = useI18n({
      useScope: 'global',
      legacy: false,
    })

    const handleSubmit = () => {
      router.put(`/users/${props.user.id}/edit`, form, {
        onSuccess() {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: t('notifications.update'),
            showConfirmButton: false,
            timer: 1500,
          })
        },
      })
    }
    return { form, handleSubmit, t }
  },

}
</script>

<template>
  <Head title="Edit Pengguna " />
  <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg sm:border border-gray-200">
    <div class="p-6 justify-center">
      <div class="flex flex-col">
        <form class="flex flex-col gap-4" @submit.prevent="handleSubmit">
          <div>
            <InputLabel for="name" class="font-semibold text-md">
              {{ $t('auth.fields.username') }}
            </InputLabel>

            <TextInput
              id="name"
              v-model="form.name"
              type="text"
              class="mt-1 block w-full rounded-md"
              autofocus
            />

            <InputError class="mt-3" :message="errors.name" />
          </div>
          <div class="mt-4">
            <InputLabel for="email" class="font-semibold text-md">
              {{ $t('auth.fields.email') }}
            </InputLabel>

            <TextInput
              id="email"
              v-model="form.email"
              type="email"
              class="mt-1 block w-full rounded-md"
            />

            <InputError class="mt-3" :message="errors.email" />
          </div>
          <div class="mt-4">
            <InputLabel for="role" class="font-semibold text-md">
              {{ $t('role_permission.table.role') }}
            </InputLabel>

            <select v-model="form.role" class="shadow border-gray-300 transition ease-in-out duration-150 disabled:bg-gray-100 readonly:bg-gray-50 focus:ring-primary focus:outline-none focus:border-primary focus-visible:ring-primary focus:ring-opacity-20 rounded-md px-4 py-2 w-full">
              <option v-for="value in roles" :key="value.id" :selected="value.name === role[0] ? true : false">
                {{ value.name }}
              </option>
            </select>
          </div>

          <div class="flex items-center justify-between mt-4">
            <PrimaryButton class="inline-flex items-center font-semibold transition ease-in-out duration-150 border border-transparent rounded hover:shadow focus:ring-opacity-40 focus:outline-opacity-60 disabled:opacity-25 select-none px-4 py-2 text-white bg-emerald-700 hover:bg-emerald-600 focus:bg-emerald-600 active:bg-emerald-800 focus:outline-emerald-500 hover:border-emerald-700 focus:border-emerald-700 focus:border-emerald-900">
              {{ $t('actions.forms.update') }}
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style>

</style>

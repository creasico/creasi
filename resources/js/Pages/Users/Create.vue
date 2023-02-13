<script>
import Swal from 'sweetalert2'
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
    errors: Object,
    roles: Array,
  },
  setup() {
    const form = reactive({
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      role: '',
    })

    const { t } = useI18n({
      legacy: false,
    })

    const submit = () => {
      router.post('/users/create', form, {
        onSuccess() {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: t('notifications.submit'),
            showConfirmButton: false,
            timer: 1500,
          })
        },
        // onError() {}
      })
    }

    return { form, submit, t }
  },
}
</script>

<template>
  <Head title="Create Pengguna " />
  <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg sm:border border-gray-200">
    <div class="p-6 justify-center">
      <div class="flex flex-col">
        <form class="flex flex-col gap-4" @submit.prevent="submit">
          <div>
            <InputLabel for="name" class="font-semibold text-md">
              {{ $t('auth.fields.username') }}
            </InputLabel>

            <TextInput
              id="name"
              v-model="form.name"
              type="text"
              class="mt-1 block w-full"
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
              class="mt-1 block w-full"
            />

            <InputError class="mt-3" :message="errors.email" />
          </div>
          <div class="mt-4">
            <InputLabel for="password" class="font-semibold text-md">
              {{ $t('auth.fields.password') }}
            </InputLabel>

            <TextInput
              id="password"
              v-model="form.password"
              type="password"
              class="mt-1 block w-full"
            />
            <InputError class="mt-3" :message="errors.password" />
          </div>

          <div class="mt-4">
            <InputLabel for="password_confirmation" class="font-semibold text-md">
              {{ $t('auth.fields.confirm_password') }}
            </InputLabel>

            <TextInput
              id="password_confirmation"
              v-model="form.password_confirmation"
              type="password"
              class="mt-1 block w-full"
            />
            <InputError class="mt-3" :message="errors.password_confirmation" />
          </div>
          <div class="mt-4">
            <InputLabel for="role" class="font-semibold text-md">
              {{ $t('role_permission.table.role') }}
            </InputLabel>
            <select v-model="form.role" class="shadow border-gray-300 transition ease-in-out duration-150 disabled:bg-gray-100 readonly:bg-gray-50 focus:ring-primary focus:outline-none focus:border-primary focus-visible:ring-primary focus:ring-opacity-20 rounded px-4 py-2 w-full">
              <option disabled value="">
                -- {{ $t('role_permission.select.option') }} --
              </option>
              <option v-for="role in roles" :key="role.id">
                {{ role.name }}
              </option>
            </select>
            <InputError class="mt-3" :message="errors.role" />
          </div>
          <div class="flex items-center justify-between mt-4">
            <PrimaryButton class="inline-flex items-center font-semibold transition ease-in-out duration-150 border border-transparent rounded hover:shadow focus:ring-opacity-40 focus:outline-opacity-60 disabled:opacity-25 select-none px-4 py-2 text-white bg-emerald-700 hover:bg-emerald-600 focus:bg-emerald-600 active:bg-emerald-800 focus:outline-emerald-500 hover:border-emerald-700 focus:border-emerald-700 focus:border-emerald-900">
              {{ $t('actions.forms.submit') }}
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

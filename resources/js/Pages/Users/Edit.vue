<script>
import { Head, router, useForm } from '@inertiajs/vue3'
import Layout from '../../Shared/Layout.vue'
import PrimaryButton from '../../components/PrimaryButton.vue'
import InputLabel from '../../components/InputLabel.vue'
import TextInput from '../../components/TextInput.vue'

export default {
  components: { InputLabel, TextInput, Head, PrimaryButton },
  layout: Layout,
  props: {
    user: Object,
  },
  setup(props) {
    const form = useForm(props.user)

    const handleSubmit = () => {
      router.put(`/users/${props.user.id}/edit`, {
        name: form.name,
        email: form.email,
      })
    }
    return { form, handleSubmit }
  },

}
</script>

<template>
  <Head title="Creasi Internal - Edit Pengguna " />
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
              class="mt-1 block w-full"
              required
              autofocus
            />
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
          </div>
          <div class="flex items-center justify-between mt-4">
            <PrimaryButton class="inline-flex items-center font-semibold transition ease-in-out duration-150 border border-transparent rounded hover:shadow focus:ring-opacity-40 focus:outline-opacity-60 disabled:opacity-25 select-none px-4 py-2 text-white bg-emerald-700 hover:bg-emerald-600 focus:bg-emerald-600 active:bg-emerald-800 focus:outline-emerald-500 hover:border-emerald-700 focus:border-emerald-700 focus:border-emerald-900">
              Update
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style>

</style>

<script setup>
import { Head, useForm } from '@inertiajs/vue3'
import GuestLayout from '../../Shared/GuestLayout.vue'
import InputError from '@/Components/InputError.vue'
import InputLabel from '@/Components/InputLabel.vue'
import PrimaryButton from '@/Components/PrimaryButton.vue'
import TextInput from '@/Components/TextInput.vue'
defineProps({
  status: String,
})

const form = useForm({
  email: '',
})

const submit = () => {
  form.post(route('password.email'))
}
</script>

<script>
export default {
  components: { InputError, InputLabel, PrimaryButton, TextInput, Head },
  layout: GuestLayout,
}
</script>

<template>
  <Head title="Forgot Password" />

  <div class="mb-4 text-sm text-gray-600">
    {{ $t('auth.notices.forgot-password') }}
  </div>

  <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
    {{ status }}
  </div>

  <form @submit.prevent="submit">
    <div>
      <InputLabel for="email" value="Email" />

      <TextInput
        id="email"
        v-model="form.email"
        type="email"
        class="mt-1 block w-full"
        required
        autofocus
        autocomplete="username"
      />

      <InputError class="mt-2" :message="form.errors.email" />
    </div>

    <div class="flex items-center justify-end mt-4">
      <PrimaryButton class="text-white bg-emerald-700 hover:bg-emerald-600 focus:bg-emerald-600 active:bg-emerald-800 px-2 py-3" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
        {{ $t('auth.actions.request') }}
      </PrimaryButton>
    </div>
  </form>
</template>

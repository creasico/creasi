<script>
import { Head, Link, useForm } from '@inertiajs/vue3'
import GuestLayout from '../../Shared/GuestLayout.vue'
import InputLabel from '../../components/InputLabel.vue'
import TextInput from '../../components/TextInput.vue'
import PrimaryButton from '../../components/PrimaryButton.vue'
import Checkbox from '../../components/Checkbox.vue'
import InputError from '../../components/InputError.vue'

defineProps({
  canResetPassword: Boolean,
  status: String,
})
const form = useForm({
  username: '',
  password: '',
})

const submit = () => {
  form.post('/login')
}
export default {
  layout: GuestLayout,
  component:
  {
    Link,
    InputLabel,
    TextInput,
    PrimaryButton,
    Checkbox,
    InputError,
    Head,
  },
}
</script>

<template>
  <Head title="Creasi Internal - Login" />
  <div v-if="status" class="font-medium text-sm text-green-600">
    {{ status }}
  </div>
  <form class="flex flex-col gap-4" @submit.prevent="submit">
    <div>
      <InputLabel for="name" class="font-semibold text-md">
        {{ $t('auth.fields.username') }}
      </InputLabel>

      <TextInput
        id="name"
        v-model="form.username"
        type="text"
        class="mt-1 block w-full"
        required
        autofocus
        placeholder="John Doe"
      />
      <InputError class="mt-3" :message="form.errors.username" />
    </div>

    <div class="mt-4">
      <InputLabel for="password">
        {{ $t('auth.fields.password') }}
      </InputLabel>

      <TextInput
        id="password"
        v-model="form.password"
        type="password"
        class="mt-1 block w-full"
        required
        autocomplete="current-password"
      />
    </div>

    <div class="inline-flex items-center gap-2">
      <Checkbox name="remember" />
      <span class="inline-flex items-center gap-2">{{ $t('auth.fields.remember') }}</span>
    </div>

    <div class="flex items-center justify-between mt-4">
      <Link
        href="/forgot-password"
        class="underline text-primary hover:text-emerald-900"
      >
        {{ $t('auth.actions.forgot') }}
      </Link>

      <PrimaryButton class="inline-flex items-center font-semibold transition ease-in-out duration-150 border border-transparent rounded hover:shadow focus:ring-opacity-40 focus:outline-opacity-60 disabled:opacity-25 select-none px-4 py-2 text-white bg-emerald-700 hover:bg-emerald-600 focus:bg-emerald-600 active:bg-emerald-800 focus:outline-emerald-500 hover:border-emerald-700 focus:border-emerald-700 focus:border-emerald-900" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
        {{ $t('auth.actions.login') }}
      </PrimaryButton>
    </div>
  </form>
</template>

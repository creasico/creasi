<script>
import { Head, usePage } from '@inertiajs/vue3'
import Layout from '../../Shared/Layout.vue'
import InputLabel from '../../components/InputLabel.vue'
import TextInput from '../../components/TextInput.vue'
export default {
  components: {
    InputLabel, TextInput, Head,
  },
  layout: Layout,
  props: {
    user: Object,
    role: Object,
  },
  setup() {
    const permissions = usePage().props?.auth?.user?.permissions
    return { permissions }
  },
}
</script>

<template>
  <Head title="Account " />
  <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg sm:border border-gray-200">
    <div class="p-6 justify-center">
      <div class="flex flex-row gap-2 ">
        <div class="grid grid-cols-2 items-center w-full">
          <div class="flex flex-col gap-1">
            <InputLabel class="font-semibold text-md">
              {{ $t('auth.fields.username') }}
            </InputLabel>
            <TextInput disabled class="rounded mt-1 block" :value="user.name" />
          </div>
          <div class="flex flex-col gap-1 mt-3">
            <InputLabel class="font-semibold text-md">
              {{ $t('role_permission.table.role') }}
            </InputLabel>
            <TextInput disabled class="rounded mt-1 block" :value="role[0]" />
          </div>
        </div>
        <div class="grid grid-cols-2 items-center w-full">
          <div class="flex flex-col gap-1">
            <InputLabel class="font-semibold text-md">
              {{ $t('auth.fields.email') }}
            </InputLabel>
            <TextInput disabled class="rounded mt-1 block" :value="user.email" />
          </div>
          <div class="flex flex-row gap-2 mt-3">
            <InputLabel class="font-semibold text-md">
              {{ $t('role_permission.table.permission') }}
            </InputLabel>
            <div class="flex flex-col gap-3">
              <div v-for="permission in permissions" :key="permission.id">
                <span class="items-center px-2 rounded-lg bg-emerald-700 text-sm font-semibold text-white">{{ permission }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

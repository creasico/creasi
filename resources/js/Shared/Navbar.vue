<script>
import { Link } from '@inertiajs/vue3'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import ApplicationLogo from '../components/ApplicationLogo.vue'
export default {
  components: { Link, ApplicationLogo },
  setup() {
    const visible = ref(false)
    const { t } = useI18n({
      legacy: false,
      useScope: 'global',
    })

    return { visible, t }
  },
}
</script>

<template>
  <aside class="h-screen sm:border-r &lt;sm:shadow-md bg-white flex flex-col w-60">
    <div class="flex-grow relative">
      <header class="w-full px-4 py-2">
        <ApplicationLogo width="180" height="56" />
      </header>
      <nav class="flex flex-col gap-1" role="navigation">
        <Link
          v-if="can('dashboard.view')" method="get" as="button"
          class="inline-flex text-gray-600 text-sm leading-7 items-center font-bold py-2 px-4
                                leading-5 focus:outline-none transition duration-150 ease-in-out"
          :class="{ 'text-primary bg-emerald-50 border-emerald-600 focus:border-emerald-700 border-r-3': $page.url === '/' }"
          href="/" @click="$store.commit('SET_SIDEBAR', t('dashboard.routes.index')) "
        >
          {{ $t('dashboard.routes.index') }}
        </Link>
        <Link
          v-if="can('users.view')" method="get" as="button"
          class="inline-flex text-gray-600 text-sm leading-7 items-center font-bold py-2 px-4
                            leading-5 focus:outline-none transition duration-150 ease-in-out"
          :class="{ 'text-primary bg-emerald-50 border-emerald-600 focus:border-emerald-700 border-r-3': $page.url === '/users' }"
          href="/users" @click="$store.commit('SET_SIDEBAR', t('users.routes.index')) "
        >
          {{ $t('users.routes.index') }}
        </Link>
        <Link
          v-if="can('role_permission.view')" method="get" as="button"
          class="inline-flex text-gray-600 text-sm leading-7 items-center font-bold py-2 px-4
                            leading-5 focus:outline-none transition duration-150 ease-in-out"
          :class="{ 'text-primary bg-emerald-50 border-emerald-600 focus:border-emerald-700 border-r-3': $page.url === '/roles' }"
          href="/roles" @click="$store.commit('SET_SIDEBAR', t('role_permission.routes.index')) "
        >
          {{ $t('role_permission.routes.index') }}
        </Link>
      </nav>
    </div>
    <footer class="w-full flex-grow-0 flex-shrink-0 p-2" @click="visible = !visible">
      <div class="relative">
        <button class="flex gap-1 items-center focus:outline-none focus:text-gray-700 select-none justify-between w-full cursor-pointer">
          <div class="font-medium px-2 text-left">
            <div class="text-base text-gray-800">
              {{ $page.props.auth.user.name }}
            </div>
            <div class="text-sm text-gray-500">
              {{ $page.props.auth.user.email }}
            </div>
          </div>
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>

        <div v-show="visible" class="absolute z-50 w-48 rounded-md shadow-lg origin-top-right right-0" style="bottom: 52px; left: 8px;">
          <div class="rounded-md ring-1 ring-black ring-opacity-5 py-1 bg-white">
            <Link
              class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100
                    focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" href="/users/account"
              :class="{ 'text-primary bg-emerald-50 border-emerald-600 focus:border-emerald-700 border-r-3': $page.url === '/users/account' }"
            >
              {{ $t('dashboard.account') }}
            </Link>
            <Link
              class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100
                            focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out
                            flex gap-1 w-full cursor-pointer"
              href="/logout" method="post" as="button"
            >
              {{ $t('auth.actions.logout') }}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  </aside>
</template>

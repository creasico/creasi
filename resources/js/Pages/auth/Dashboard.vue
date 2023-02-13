<script>
import { Head } from '@inertiajs/vue3'
import Layout from '../../Shared/Layout.vue'
export default {
  components: { Head },
  layout: Layout,
}
</script>

<template>
  <Head title="Dashboard" />
  <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg sm:border border-gray-200 p-6">
    <h3 class="">
      {{ $t('dashboard.welcome-notice') }} {{ $page.props.auth.user.name }}
    </h3>
  </div>
</template>

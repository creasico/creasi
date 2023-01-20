<script>
export default {
  name: 'Dashboard',
}
</script>

<template>
  <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg sm:border border-gray-200 p-6">
    <h3 class="">
      Selamat datang {{ $page.props.auth.user.name }}
    </h3>
  </div>
</template>

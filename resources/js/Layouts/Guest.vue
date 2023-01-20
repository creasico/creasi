<script>
export default {
  name: 'Guest',
}
</script>

<template>
  <div id="wrapper" class="font-sans antialiased auth-bg">
    <div class="text-gray-700">
      <slot />
    </div>
  </div>
</template>

<style>
    #wrapper {
        background-image: url('./../image/app-bg.jpeg');
        background-size: cover;
    }
</style>

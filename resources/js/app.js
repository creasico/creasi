import { createSSRApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { createI18n } from 'vue-i18n'
import Swal from 'sweetalert2'
import localeMessages from './vue-i18n-locales.generated'

createInertiaApp({
  resolve: name => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
  title: title => title ? `Creasi Internal System - ${title}` : 'Creasi Internal System',
  setup({ el, App, props, plugin }) {
    const i18n = createI18n({
      locale: props.initialPage.props.locale,
      fallbackLocale: 'en',
      legacy: false,
      messages: localeMessages,
    })

    return createSSRApp({ render: () => h(App, props) })
      .use(plugin)
      .use(i18n)
      .mixin({
        methods: {
          can(permission) {
            return this.$page.props?.user?.permissions.includes(permission)
          },
        },
      })
      .mount(el)
  },
})

window.Swal = Swal
window.Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  },
})

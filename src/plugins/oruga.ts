import Oruga from '@oruga-ui/oruga-next'
import IconAdaptor from '~/oruga/IconAdaptor.vue';
// import '@oruga-ui/oruga-next/dist/oruga.css'
// import '@oruga-ui/oruga-next/dist/oruga-full.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp
    .component('icon-adaptor', IconAdaptor)
    .use(Oruga, {
      iconComponent: 'icon-adaptor',
      customIconPacks: {
        mdi: {
          sizes: {
              'default': '24px',
              'small': null,
              'medium': '36px',
              'large': '48px'
          },
          iconPrefix: '',
        }
      },
      button: {
        rootClass: 'disabled:cursor-not-allowed focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mr-2',
      },
      modal: {
        rootClass: 'flex flex-col justify-center items-center overflow-hidden fixed inset-0 top-0 right-0 bottom-0 left-0 z-50',
        contentClass: 'overflow-auto relative bg-white',
        overlayClass: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 inset-0 fixed',
      },
      inputitems: {
        itemClass: 'bg-blue-300 text-gray-700 mx-1.5 mt-1 mb-1.5 px-3',
      },
      autocomplete: {
        rootClass: 'text-gray-900 text-base',
      },
    });
})
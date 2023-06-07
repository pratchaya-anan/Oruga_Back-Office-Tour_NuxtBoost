import Oruga from '@oruga-ui/oruga-next'
import ItemVue from '~/components/menu/Item.vue';
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
      input: {
        rootClass: 'block mb-2 text-sm font-medium',
        inputClass: 'border block w-full p-2.5 text-sm rounded-lg',
      },
      table: {
        rootClass: 'relative overflow-x-auto',
        tableClass: 'w-full text-sm text-left text-gray-500 dark:text-gray-400',
        tdClass: 'px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-b',
        thClass: 'px-6 py-4 bg-white border-b dark:bg-gray-800 dark:border-gray-700 uppercase',
      },
      select:{
        selectClass: 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
      },
      switch:{
        checkClass:'w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content- after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600',
        inputClass:'sr-only peer',
        rootClass:'relative inline-flex items-center mb-4 cursor-pointer',
        labelClass:'ml-3 text-sm font-medium text-gray-900 dark:text-gray-300',
      },
      steps: {
        rootClass:"flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base",
        animatedClass:"flex items-center justify-around w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base",
        stepContentClass:"hidden",
      },
      checkbox: {
        checkClass:"w-4 h-4",
        labelClass:"ml-2 text-sm font-medium"
      }
    });
})
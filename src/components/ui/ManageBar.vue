<template>
  <nav class="order-2 md:order-3">
    <div class="flex flex-col items-center pb-3 md:flex-row">
      <form class="relative mb-4 w-full md:mr-4 md:max-w-sm md:mb-0">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <Icon class="w-5 h-5 text-gray-500 dark:text-gray-400"
            name="mdi:magnify"></Icon>
        </div>
        <input type="search"
          class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Search">
      </form>
      <div class="grid grid-cols-2 gap-4 items-center w-full md:gap-0 md:flex md:w-auto">
        <slot></slot>
      </div>
    </div>
  </nav>
</template>
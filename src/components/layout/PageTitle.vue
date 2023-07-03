<template>
  <section>
    <nav class="flex mb-4" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <NuxtLink
            to="/tour_list"
            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <Icon class="w-5 h-5 mr-2" name="line-md:home-twotone"></Icon>
            Home
          </NuxtLink>
        </li>
        <li>
          <div class="flex items-center">
            <Icon class="w-6 h-6 text-gray-400" name="mdi:chevron-right"></Icon>
            <a
              href="#"
              class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >Settings</a
            >
          </div>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <Icon class="w-6 h-6 text-gray-400" name="mdi:chevron-right"></Icon>
            <span
              class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"
              >Team</span
            >
          </div>
        </li>
      </ol>
    </nav>
    <h2
      class="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white"
    >
      <slot></slot>
    </h2>
  </section>
</template>

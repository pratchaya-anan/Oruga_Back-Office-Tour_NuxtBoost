<template>
  <div
    class="mb-4 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
  >
    <ul class="flex flex-wrap -mb-px">
      <li class="mr-2">
        <a
          href="#"
          class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
        >
          <Icon
            class="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
            name="mdi:border-all"
          ></Icon>
          ทั้งหมด
        </a>
      </li>
      <li class="mr-2">
        <a
          href="#"
          class="inline-flex p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
          aria-current="page"
        >
          <Icon
            class="w-5 h-5 mr-2 text-blue-600 dark:text-blue-500"
            name="mdi:view-dashboard"
          ></Icon>
          Dashboard
        </a>
      </li>
      <li class="mr-2">
        <a
          href="#"
          class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
        >
          Archived
        </a>
      </li>
      <li class="mr-2">
        <a
          class="cursor-not-allowed inline-block p-4 text-gray-400 rounded-t-lg dark:text-gray-500"
          >Disabled</a
        >
      </li>
    </ul>
  </div>
</template>

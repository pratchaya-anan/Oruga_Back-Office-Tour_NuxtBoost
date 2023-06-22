<template>
  <button
    type="button"
    data-dropdown-toggle="notification-dropdown"
    class="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
  >
    <span class="sr-only">View notifications</span>
    <!-- Bell icon -->
    <Icon class="w-6 h-6" name="line-md:bell-twotone"></Icon>
  </button>
  <!-- Dropdown menu -->
  <div
    class="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700 rounded-xl"
    id="notification-dropdown"
  >
    <div
      class="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300"
    >
      Notifications
    </div>
    <div>
      <a
        href="/calendar"
        class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
      >
        <div class="flex-shrink-0">
          <Icon
            class="w-11 h-11 rounded-full text-xl font-medium text-gray-500 dark:text-white"
            name="mingcute:cake-fill"
          >
          </Icon>
          <div
            class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-blue-500 dark:border-gray-700"
          ></div>
        </div>
        <div class="pl-3 w-full">
          <div
            class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"
          >
            กำลังจะถึงวันเกิดของ
            <span class="font-semibold text-gray-900 dark:text-white"
              >สมหมาย ใจดี</span
            >
            ในอีก
            <span class="font-medium text-gray-900 dark:text-white"
              >15 วัน</span
            >
          </div>
          <div
            class="text-xs font-medium text-primary-600 dark:text-primary-500"
          >
            ไม่กี่นาทีที่แล้ว
          </div>
        </div>
      </a>
      <a
        href="/calendar"
        class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
      >
        <div class="flex-shrink-0">
          <Icon
            class="w-11 h-11 rounded-full text-xl font-medium text-gray-500 dark:text-white"
            name="mdi:credit-card-remove-outline"
          >
          </Icon>
          <div
            class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-yellow-500 rounded-full border border-white dark:border-gray-700"
          ></div>
        </div>
        <div class="pl-3 w-full">
          <div
            class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"
          >
            <span class="font-semibold text-gray-900 dark:text-white"
              >นายสายใย มีใจ</span
            >
            Passport กำลังจะหมดอายุในอีก
            <span class="font-medium text-gray-900 dark:text-white"
              >600 วัน</span
            >
          </div>
          <div
            class="text-xs font-medium text-primary-600 dark:text-primary-500"
          >
            10 นาทีที่แล้ว
          </div>
        </div>
      </a>
      <a
        href="/calendar"
        class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
      >
        <div class="flex-shrink-0">
          <Icon
            class="w-11 h-11 rounded-full text-xl font-medium text-gray-500 dark:text-white"
            name="mdi:credit-card-remove-outline"
          >
          </Icon>
          <div
            class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-red-500 rounded-full border border-white dark:border-gray-700"
          ></div>
        </div>
        <div class="pl-3 w-full">
          <div
            class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"
          >
            <span class="font-semibold text-gray-900 dark:text-white"
              >สมหมาย ใจดี</span
            >
            Passport กำลังจะหมดอายุในอีก
            <span class="font-medium text-gray-900 dark:text-white">
              300 วัน</span
            >
          </div>
          <div
            class="text-xs font-medium text-primary-600 dark:text-primary-500"
          >
            44 นาทีที่แล้ว
          </div>
        </div>
      </a>

      <!-- <a href="#" class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
        <div class="flex-shrink-0">
          <img class="w-11 h-11 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
            alt="Roberta Casas image" />
          <div
            class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-green-400 rounded-full border border-white dark:border-gray-700">
            <svg aria-hidden="true" class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                clip-rule="evenodd"></path>
            </svg>
          </div>
        </div>
        <div class="pl-3 w-full">
          <div class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span>
            mentioned you in a comment:
            <span class="font-medium text-primary-600 dark:text-primary-500">@bonnie.green</span>
            what do you say?
          </div>
          <div class="text-xs font-medium text-primary-600 dark:text-primary-500">
            1 hour ago
          </div>
        </div>
      </a>
      <a href="#" class="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600">
        <div class="flex-shrink-0">
          <img class="w-11 h-11 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png" alt="Robert image" />
          <div
            class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-purple-500 rounded-full border border-white dark:border-gray-700">
            <svg aria-hidden="true" class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z">
              </path>
            </svg>
          </div>
        </div>
        <div class="pl-3 w-full">
          <div class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Robert Brown</span>
            posted a new video: Glassmorphism - learn how to implement the new
            design trend.
          </div>
          <div class="text-xs font-medium text-primary-600 dark:text-primary-500">
            3 hours ago
          </div>
        </div>
      </a> -->
    </div>
    <a
      href="/calendar"
      class="block py-2 text-md font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:underline"
    >
      <div class="inline-flex items-center">
        <svg
          aria-hidden="true"
          class="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
          <path
            fill-rule="evenodd"
            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        ดูทั้งหมด
      </div>
    </a>
  </div>
</template>

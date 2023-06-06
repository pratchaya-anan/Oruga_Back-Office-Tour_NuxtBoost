<template>
  <div class="antialiased bg-gray-50 dark:bg-gray-900">
    <nav
      class="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
      <div class="flex flex-wrap justify-between items-center">
        <div class="flex justify-start items-center">
          <button data-drawer-target="drawer-navigation"
            data-drawer-toggle="drawer-navigation"
            aria-controls="drawer-navigation"
            class="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <Icon aria-hidden="true" class="w-6 h-6" name="mdi:menu"></Icon>
            <span class="sr-only">Toggle sidebar</span>
          </button>
          <a href="https://github.com/tlaothong/NuxtBoost"
            class="flex items-center justify-between mr-4">
            <img src="/applogo.png"
              class="mr-3 h-8"
              alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Fin</span>
          </a>
          <LayoutAppSearch></LayoutAppSearch>
        </div>
        <div class="flex items-center lg:order-2">
          <button type="button"
            data-drawer-toggle="drawer-navigation"
            aria-controls="drawer-navigation"
            class="p-2 mr-1 text-gray-500 rounded-lg md:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
            <span class="sr-only">Toggle search</span>
            <Icon name="mdi:search" class="w-6 h-6"></Icon>
          </button>
          <!-- Notifications -->
          <LayoutNotifications></LayoutNotifications>
          <!-- Apps -->
          <LayoutAppDropMenu></LayoutAppDropMenu>
          <LayoutUserMenu></LayoutUserMenu>
        </div>
      </div>
    </nav>

    <!-- Sidebar -->

    <aside
      class="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidenav"
      id="drawer-navigation">

      <div class="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
        <LayoutAppSearch :mobile="true"></LayoutAppSearch>
        <LayoutDefaultAppMenu></LayoutDefaultAppMenu>
        <LayoutDefaultNavAppSupport></LayoutDefaultNavAppSupport>
      </div>

      <LayoutDefaultNavFooterBar></LayoutDefaultNavFooterBar>

    </aside>

    <main class="p-4 md:ml-64 h-auto pt-20">

      <slot></slot>

    </main>

    <span class="hidden o-btn o-btn--primary">Just for maintain CSS in components.</span>
  </div>
</template>
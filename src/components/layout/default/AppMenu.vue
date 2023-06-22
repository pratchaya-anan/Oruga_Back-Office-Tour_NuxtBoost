<template>
  <ul class="space-y-2">
    <li>
      <NuxtLink href="/tour_list">
        <MenuItem icon-name="line-md:home-twotone">Home</MenuItem>
      </NuxtLink>
    </li>
    <li>
      <MenuDropDown label="Report" icon-name="mdi:report-line">
        <MenuDropItem>
          <NuxtLink to="/reportday"> รายวัน </NuxtLink>
        </MenuDropItem>
        <MenuDropItem>
          <NuxtLink to="/reportmouth"> รายเดือน </NuxtLink>
        </MenuDropItem>
        <MenuDropItem>
          <NuxtLink to="/reportyear"> รายปี </NuxtLink>
        </MenuDropItem>
      </MenuDropDown>
    </li>
    <li>
      <MenuDropDown label="Document" icon-name="mdi:file-document">
        <MenuDropItem>
          <NuxtLink to="#">ใบกำกับภาษี</NuxtLink>
        </MenuDropItem>
        <MenuDropItem>
          <NuxtLink to="#">ใบเสร็จรับเงิน</NuxtLink>
        </MenuDropItem>
        <MenuDropItem>
          <NuxtLink to="#">ใบสำคัญรับเงิน</NuxtLink>
        </MenuDropItem>
        <MenuDropItem>
          <NuxtLink to="#">ใบประมาณการเบิกเงินสดย่อย</NuxtLink>
        </MenuDropItem>
      </MenuDropDown>
    </li>
    <li>
      <MenuDropDown label="Pages" icon-name="mdi:file-document">
        <MenuDropItem>Settings</MenuDropItem>
        <MenuDropItem>Kanban</MenuDropItem>
        <MenuDropItem>Calendar</MenuDropItem>
      </MenuDropDown>
    </li>
    <li>
      <MenuDropDown label="Sales" icon-name="mdi:shopping">
        <MenuDropItem>Products</MenuDropItem>
        <MenuDropItem>Billing</MenuDropItem>
        <MenuDropItem>Invoices</MenuDropItem>
      </MenuDropDown>
    </li>
    <li>
      <MenuItem icon-name="mdi:forum" badge="4">Messages</MenuItem>
    </li>
    <li>
      <MenuDropDown label="Authentication" icon-name="mdi:lock">
        <MenuDropItem>Sign In</MenuDropItem>
        <MenuDropItem>Sign Up</MenuDropItem>
        <MenuDropItem>Forgot Password</MenuDropItem>
      </MenuDropDown>
    </li>
  </ul>
</template>

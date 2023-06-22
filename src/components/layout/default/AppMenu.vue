<template>
  <ul class="space-y-2">
    <li>
      <NuxtLink href="/tour_list">
        <MenuItem icon-name="line-md:home-twotone">Home</MenuItem>
      </NuxtLink>
    </li>
    <li>
      <MenuDropDown label="รายงาน" icon-name="mdi:file-document">
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
      <MenuDropDown label="เอกสาร" icon-name="fluent:receipt-money-24-filled">
        <MenuDropItem
          ><NuxtLink to="/quotation_list"> ใบเสนอราคา </NuxtLink></MenuDropItem
        >
        <MenuDropItem
          ><NuxtLink to="/billing_list">
            ใบวางบิล/ใบแจ้งหนี้
          </NuxtLink></MenuDropItem
        >
        <MenuDropItem
          ><NuxtLink to="/taxinvoice_list">
            ใบกำกับภาษี
          </NuxtLink></MenuDropItem
        >
        <MenuDropItem
          ><NuxtLink to="/receipt_list">
            ใบเสร็จรับเงิน
          </NuxtLink></MenuDropItem
        >
        <MenuDropItem
          ><NuxtLink to="/cashreceipt_list">
            ใบสำคัญรับเงิน
          </NuxtLink></MenuDropItem
        >
        <MenuDropItem
          ><NuxtLink to="/bill_list">
            ใบประมาณการเบิกเงินสดย่อย
          </NuxtLink></MenuDropItem
        >
        <MenuDropItem
          ><NuxtLink to="#">
            ใบเคลียร์ประมาณการเบิกเงินสดย่อย
          </NuxtLink></MenuDropItem
        >
        <MenuDropItem
          ><NuxtLink to="cashcertificate_list">
            ใบรับรองแทนใบเสร็จรับเงิน
          </NuxtLink></MenuDropItem
        >
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

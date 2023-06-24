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
          ><NuxtLink to="/paper_list/quotation_list">
            ใบเสนอราคา
          </NuxtLink></MenuDropItem
        >
        <MenuDropItem
          ><NuxtLink to="/paper_list/billing_list">
            ใบวางบิล/ใบแจ้งหนี้
          </NuxtLink></MenuDropItem
        >
        <MenuDropItem
          ><NuxtLink to="/paper_list/taxinvoice_list">
            ใบกำกับภาษี
          </NuxtLink></MenuDropItem
        >
        <MenuDropItem
          ><NuxtLink to="/paper_list/receipt_list">
            ใบเสร็จรับเงิน
          </NuxtLink></MenuDropItem
        >
        <MenuDropItem
          ><NuxtLink to="/paper_list/cashreceipt_list">
            ใบสำคัญรับเงิน
          </NuxtLink></MenuDropItem
        >
        <MenuDropItem
          ><NuxtLink to="/paper_list/disbursement_list">
            ใบขอเบิกเบิก
          </NuxtLink></MenuDropItem
        >
        <MenuDropItem
          ><NuxtLink to="/paper_list/estimate_list">
            ใบเคลียร์เงินสดย่อย
          </NuxtLink></MenuDropItem
        >
        <MenuDropItem
          ><NuxtLink to="/paper_list/cashcertificate_list">
            ใบรับรองแทนใบเสร็จ
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

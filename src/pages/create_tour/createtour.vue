<template>
  <section>
    <div class="p-5">
      <div>
        <label class="text-4xl font-medium">สร้างทัวร์</label>
      </div>
      <hr class="my-5 border-1.5" />
      <div class="grid grid-cols-2 gap-4">
        <div>
          <o-field label="ชื่อทริป">
            <o-input></o-input>
          </o-field>
        </div>
        <div>
          <o-field label="ชื่อโปรแกรม">
            <o-input></o-input>
          </o-field>
        </div>
        <div>
          <o-field label="จำนวนวัน">
            <o-input></o-input>
          </o-field>
        </div>
        <div>
          <o-field label="จำนวนคืน">
            <o-input></o-input>
          </o-field>
        </div>
        <div>
          <o-field label="วันเริ่มต้น">
            <o-input></o-input>
          </o-field>
        </div>
        <div>
          <o-field label="วันจบทริป">
            <o-input></o-input>
          </o-field>
        </div>
        <div>
          <o-field label="ราคาต่อหน่วย">
            <o-input></o-input>
          </o-field>
        </div>
        <div>
          <o-field label="ภาษี">
            <o-select placeholder="กำหนดภาษี">
              <option value="free">ยกเว้นภาษี</option>
              <option value="1%">1%</option>
              <option value="3%">3%</option>
              <option value="5%">5%</option>
              <option value="7%">7%</option>
              <option value="9%">9%</option>
            </o-select>
          </o-field>
        </div>
      </div>
      <hr class="my-5 border-1.5" />
      <div class="flex justify-end py-4">
        <o-button>ถัดไป ></o-button>
      </div>
    </div>
  </section>
</template>

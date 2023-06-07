<template>
  <section>
    <div class="max-w-screen-sm mx-auto">
      <p>
        <o-field grouped group-multiline>
          <div class="control">
            <o-switch v-model="showSocial"> Show Social step </o-switch>
          </div>
          <div class="control">
            <o-switch v-model="isAnimated"> Animated </o-switch>
          </div>
          <div class="control">
            <o-switch v-model="isRounded"> Rounded </o-switch>
          </div>
          <div class="control">
            <o-switch v-model="isStepsClickable"> Clickable Marker </o-switch>
          </div>
        </o-field>
        <o-field grouped group-multiline>
          <div class="control">
            <o-switch v-model="hasNavigation"> Navigation Buttons </o-switch>
          </div>
          <div class="control">
            <o-switch v-model="customNavigation"> Custom Navigation </o-switch>
          </div>
          <div class="control">
            <o-switch v-model="isProfileSuccess">
              Set <code>success</code> for profile
            </o-switch>
          </div>
          <div class="control">
            <o-switch v-model="enableProfileActivateEvent">
              Enable profile activate event
            </o-switch>
          </div>
        </o-field>
        <o-field v-if="hasNavigation" grouped group-multiline>
          <o-field label="Prev icon">
            <o-select v-model="prevIcon">
              <option value="chevron-left">Chevron</option>
              <option value="arrow-left">Arrow</option>
            </o-select>
          </o-field>
          <o-field label="Next icon">
            <o-select v-model="nextIcon">
              <option value="chevron-right">Chevron</option>
              <option value="arrow-right">Arrow</option>
            </o-select>
          </o-field>
          <o-field label="Label position">
            <o-select v-model="labelPosition">
              <option value="bottom">Bottom</option>
              <option value="right">Right</option>
              <option value="left">Left</option>
            </o-select>
          </o-field>
        </o-field>
      </p>
      <o-steps 
      rootClass="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base"
      animatedClass="flex items-center justify-around w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base"
      v-model="activeStep"
        :animated="isAnimated"
        :rounded="isRounded"
        :has-navigation="hasNavigation"
        :icon-prev="prevIcon"
        :icon-next="nextIcon"
      >
      <o-step-item
        itemHeaderActiveClass="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700" 
        itemHeaderPreviousClass="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
        step="1" 
        label="Account" 
        :clickable="true"
        >
          <h1 class="title has-text-centered">Account</h1>
          Lorem ipsum dolor sit amet.
        </o-step-item>

        <o-step-item
        itemHeaderClass="flex md:w-full items-center dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700" 
        itemHeaderActiveClass="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700" 
        itemHeaderPreviousClass="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
        step="2"
        label="Profile"
        :clickable="true"
        :variant="isProfileSuccess ? 'success' : ''"
        @activate="onProfileActivate"
        >
        <h1 class="title has-text-centered">Profile</h1>
        Lorem ipsum dolor sit amet.
      </o-step-item>
      
      <o-step-item
      itemHeaderActiveClass="flex md:w-full items-center text-blue-600 dark:text-blue-500"
      step="3"
      :visible="showSocial"
      label="Social"
      :clickable="true"
      >
      <h1 class="title has-text-centered">Social</h1>
      Lorem ipsum dolor sit amet.
    </o-step-item>
    
    <o-step-item
    itemHeaderActiveClass="flex items-center text-blue-600 dark:text-blue-500"
          :step="showSocial ? '4' : '3'"
          label="Finish"
          :clickable="true"
          disabled
        >
          <h1 class="title has-text-centered">Finish</h1>
          Lorem ipsum dolor sit amet.
        </o-step-item>

        <template
          v-if="customNavigation"
          #navigation="{ previous, next }"
        >
          <o-button
            outlined
            variant="danger"
            icon-pack="fas"
            icon-left="backward"
            :disabled="previous.disabled"
            @click.prevent="previous.action"
          >
            Previous
          </o-button>
          <o-button
            outlined
            variant="success"
            icon-pack="fas"
            icon-right="forward"
            :disabled="next.disabled"
            @click.prevent="next.action"
          >
            Next
          </o-button>
        </template>
      </o-steps>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    // Is
    const activeStep = ref(1)
    const isStepsClickable = ref(false)
    const isAnimated = ref(true)
    const isProfileSuccess = ref(false)
    const isRounded = ref(true)
    const enableProfileActivateEvent = ref(false)
    // Navigation
    const hasNavigation = ref(true)
    const customNavigation = ref(false)
    // Icon
    const prevIcon = ref('chevron-left')
    const nextIcon = ref('chevron-right')
    // Misc
    const showSocial = ref(false)
    const labelPosition = ref('bottom')

    const onProfileActivate = () => {
        if(enableProfileActivateEvent.value) {
          alert('Profile Activated')
        }
    }

    return {
      activeStep,
      showSocial,
      isAnimated,
      isRounded,
      enableProfileActivateEvent,
      isStepsClickable,
      hasNavigation,
      customNavigation,
      isProfileSuccess,
      prevIcon,
      nextIcon,
      labelPosition,
      onProfileActivate
    }
  }
})
</script>
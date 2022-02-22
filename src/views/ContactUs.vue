<template>
  <div class="container">
    <h1>Contact us page.</h1>
    <ContactUsForm />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import ContactUsForm from '@/components/ContactUsForm.vue';

@Options({
  components: {
    ContactUsForm,
  },
})
export default class ContactUs extends Vue {}
</script>

<style lang="scss">
</style>

<template>
  <div class="form-container m-auto mb-4">
    <div v-if="alert.message" class="alert" :class="`alert-${alert.color}`" role="alert">
      {{ alert.message }}
    </div>
    <form class="form mt-3">
      <div class="form-outline mb-4">
        <label class="form-label text-start d-block" for="subject">Subject</label>
        <input v-model="message.subject" type="text" id="subject" class="form-control" disabled />
      </div>
      <div class="form-outline mb-4">
        <label class="form-label text-start d-block" for="email">Email address</label>
        <input v-model="message.email" type="email" id="email" class="form-control" />
      </div>
      <div class="form-outline mb-4">
        <label class="form-label text-start d-block" for="body">Body</label>
        <input v-model="message.body" type="text" id="body" class="form-control" />
      </div>
      <button @click="submit" type="button" id="submit-button" class="btn btn-primary btn-block">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import axios from 'axios';

export default class ContactUsForm extends Vue {
  message = {
    email: '',
    body: '',
    subject: 'skills-vue Submission',
  };

  alert = {
    message: '',
    color: '',
  }

  data(): Record<string, unknown> {
    return {
      message: this.message,
      alert: this.alert,
    };
  }

  async submit(): Promise<string | undefined> {
    try {
      const result = await axios.post(process.env.VUE_APP_URL, this.message, {
        headers: {
          'Content-type': 'application/json',
        },
      });
      if (result) {
        this.alert.message = 'Send Successfuly thanks.';
        this.alert.color = 'success';
      }
      return result.data;
    } catch (error) {
      this.alert.message = 'Failed, please try again later.';
      this.alert.color = 'danger';
      return undefined;
    }
  }
}
</script>
<style lang="scss">
.form-container {
  max-width: 500px;
}
</style>

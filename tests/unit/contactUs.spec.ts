import axios from "axios";
const MockAdapter = require("axios-mock-adapter");
const mock = new MockAdapter(axios);
import { shallowMount } from "@vue/test-utils";
import ContactUsForm from "@/components/ContactUsForm.vue";

describe("Send Message", () => {
  afterAll(() => mock.restore());
  beforeEach(() => mock.reset());

  it("send message", async () => {
    mock
      .onPost(process.env.VUE_APP_URL)
      .reply(200, { success: true });

    const wrapper = shallowMount(ContactUsForm);
    const result = await wrapper.vm.submit();
    expect(result).toEqual({ success: true });
  });
});
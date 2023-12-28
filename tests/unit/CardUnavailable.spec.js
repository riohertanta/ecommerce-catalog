import { shallowMount } from "@vue/test-utils";
import CardUnavailable from "@/components/CardUnavailable.vue";

// describe used to create a block that groups together several related test scenarios
describe("CardUnavailable.vue", () => {
  // test used for test scenario to be tested
  test("should have 'CardUnavailable' as name", () => {
    // assert
    expect(CardUnavailable.name).toBe("CardUnavailable");
  });
  test("should render correctly", () => {
    // arrange
    const wrapper = shallowMount(CardUnavailable);

    // assert
    expect(wrapper.element).toMatchSnapshot();
  });
});

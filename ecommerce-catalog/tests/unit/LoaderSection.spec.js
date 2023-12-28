import { shallowMount } from "@vue/test-utils";
import LoaderSection from "@/components/LoaderSection.vue";

// describe used to create a block that groups together several related test scenarios
describe("LoaderSection.vue", () => {
  // test used for test scenario to be tested
  test("should have 'LoaderSection' as name", () => {
    // assert
    expect(LoaderSection.name).toBe("LoaderSection");
  });
  test("should render correctly", () => {
    // arrange
    const wrapper = shallowMount(LoaderSection);

    // assert
    expect(wrapper.element).toMatchSnapshot();
  });
});

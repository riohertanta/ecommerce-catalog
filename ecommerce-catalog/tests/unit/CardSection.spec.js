import CardSection from "@/components/CardSection.vue";

// describe used to create a block that groups together several related test scenarios
describe("CardSection.vue", () => {
  // test used for test scenario to be tested
  test("should have 'CardSection' as name", () => {
    // assert
    expect(CardSection.name).toBe("CardSection");
  });
});

const { TestWatcher } = require("@jest/core");
const Engineer = require("../lib/Engineer");

TestWatcher("Can set Github account via constructor", ( =>{
    const testValue = "GitHubUser";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
}));

test("getRole() should return \"Engineer\"", () =>{
    const testValue = "Engineer";
    const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("Can get Github username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});
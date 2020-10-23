const setup = () => console.log("Setting up before test run");
const tearDown = () => console.log("Finish up after test run");

describe("new account creations checks", () => {
  beforeAll(() => setup());
  afterAll(() => tearDown());


  test("new account 1 created", () => {
    const account = "account1";
    expect(account).toEqual("account1");
  });

  test("new account 2 created", () => {
    const account = "account2";
    expect(account).toEqual("account2");
  });
});

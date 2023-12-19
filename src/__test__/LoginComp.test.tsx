import { render, screen, act } from "@testing-library/react"; //jestの書き方すでにインストール済み
import LoginComp, { validateEmail } from "../components/jest/LoginComp";
import userEvent from "@testing-library/user-event";

describe("test login component", () => {
  test("render form with 2 button", async () => {
    render(<LoginComp />);
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(1);
  });

  test("should be failed on email validation", () => {
    const testEmail = "hiaojfoajgeorihg.com";
    expect(validateEmail(testEmail)).not.toBe(true)
  });

  test("should be success on email validation", () => {
    const testEmail = "hiaojfoajgeorihg@gmail.com";
    expect(validateEmail(testEmail)).toBe(true)
  });

  test("password input should have type password", () => {
    render(<LoginComp />);
    const password = screen.getByPlaceholderText("パスワード入力");
    expect(password).toHaveAttribute("type", "password")
  });

  test("should be able to submit the from", async () => {
    render(<LoginComp />);
    const submitButton = screen.getByTestId("submit");
    const email = screen.getByPlaceholderText("メールアドレス入力");
    const password = screen.getByPlaceholderText("パスワード入力");
    
    await act(async () => {
      userEvent.type(email, "aaa@gmail.com");
      userEvent.type(password, "123456");
      userEvent.click(submitButton);
    });
    
    const useInfo = screen.getByText("aaa@gmail.com");
    expect(useInfo).toBeInTheDocument();
  });
});
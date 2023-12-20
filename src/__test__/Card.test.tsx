import { RenderResult, act, render } from "@testing-library/react"; //jestの書き方すでにインストール済み;
import { createRoot, Root } from "react-dom/client";
import Card from "../components/jest/Card";

let container: HTMLDivElement | null = null;
let root: Root | null = null;
let renderResult: RenderResult | null = null;

beforeEach(() => {
  // DOM 要素をレンダー ターゲットとして設定する
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
  jest.useFakeTimers();
});

afterEach(() => {
  // 終了時のクリーンアップ
  if (container !== null) {
    container.remove();
  }
  container = null;
  root = null;
  jest.useRealTimers();
})

describe("card test comp", () => {
  test("タイムアウト後に null を選択する", async () => {
    const onSelect = jest.fn();

    await act(async () => {
      root?.render(<Card onSelect={onSelect} />);
    });

    // 時間を100ミリ秒進める
    act(() => {
      jest.advanceTimersByTime(100);
    });
    expect(onSelect).not.toHaveBeenCalled();

    // そして5秒進みます
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(onSelect).toHaveBeenCalledWith(null);
  });

  test("削除時にクリーンアップする必要があります", async () => {
    const onSelect = jest.fn();

    await act(async () => {
      renderResult = render(<Card onSelect={onSelect} />);
    });

    act(() => {
      jest.advanceTimersByTime(100);
    });
    expect(onSelect).not.toHaveBeenCalled();

    // アプリをアンマウントする
    act(() => {
      renderResult?.unmount();
    });
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(onSelect).not.toHaveBeenCalled();
  });

  test("選択を受け入れる必要があります", async () => {
    const onSelect = jest.fn();

    await act(async () => {
      root?.render(<Card onSelect={onSelect} />);
    });

    act(() => {
      container
        ?.querySelector("[data-testid='2']")
        ?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(onSelect).toHaveBeenCalledWith(2);
  });
});

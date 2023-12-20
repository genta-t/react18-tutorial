import { act } from "@testing-library/react"; //jestの書き方すでにインストール済み;
import { createRoot, Root } from "react-dom/client";
import Toggle from "../components/jest/Toggle";

let container: HTMLDivElement | null = null;
let root: Root | null = null;

beforeEach(() => {
  // DOM 要素をレンダー ターゲットとして設定する
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(() => {
  // 終了時のクリーンアップ
  if (container !== null) {
    container.remove();
  }
  container = null;
  root = null;
})

describe("toggle test comp", () => {
  test("クリックすると値が変わる", async () => {
    const onChange = jest.fn();

    await act(async () => {
      root?.render(<Toggle onChange={onChange} />);
    });

    // ボタン要素をつかんで、いくつかのクリックをトリガーします
    const button = document.querySelector("[data-testid='toggle']");
    expect(button?.innerHTML).toBe("Turn on");

    await act(async() => {
      button?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(button?.innerHTML).toBe("Turn off");

    await act(async() => {
      for (let i = 0; i < 5; i++) {
        button?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      }
    });

    expect(onChange).toHaveBeenCalledTimes(6);
    expect(button?.innerHTML).toBe("Turn on");
  });
});

// 1. 初期状態のテスト：最初に、Toggleコンポーネントがレンダリングされたときに、ボタンのテキストが"Turn on"であることを確認しています。
// 2. クリックによる状態変更のテスト：次に、ボタンをクリックしたときに、onChange関数が呼び出され、ボタンのテキストが"Turn off"に変わることを確認しています。
// 3. 複数回のクリックによる状態変更のテスト：最後に、ボタンを5回クリックしたときに、onChange関数が合計で6回呼び出され（最初のクリックを含む）、ボタンのテキストが再び"Turn on"に戻ることを確認しています。

// これらのテストは、Toggleコンポーネントが正しく動作していることを確認するために行われています。具体的には、ボタンのクリックによって状態が切り替わり、その結果としてボタンのテキストが適切に更新され、onChange関数が正しい回数呼び出されることを確認しています。

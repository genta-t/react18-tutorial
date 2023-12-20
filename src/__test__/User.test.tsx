import { act } from "@testing-library/react"; //jestの書き方すでにインストール済み;
import { createRoot, Root } from "react-dom/client";
import User from "../components/jest/User";

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

describe("user test comp", () => {
  test("ユーザーデータをレンダリング", async () => {
    const fakeUser = {
      name: "ジョン",
      age: "32",
      address: "山形県",
    };

    // この行は、global.fetch関数をモック化（偽装）しています。
    // 1. ↓jest.spyOn(global, "fetch")：
      // global.fetch関数を監視（スパイ）します。これにより、この関数がどのように呼び出され、どのような値を返すかを制御できます。
    // 2. ↓.mockImplementation(() => Promise.resolve(new Response(JSON.stringify(fakeUser))))：
      // global.fetch関数が呼び出されたときの挙動を上書きします。具体的には、fetch関数が呼び出されると、fakeUserオブジェクトをJSON形式に変換したものを含む新しいResponseオブジェクトを解決するPromiseを返します。
    const mockFetch = jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve(new Response(JSON.stringify(fakeUser)))
    );
    // act の非同期バージョンを使用して解決された Promise を適用する
    await act(async () => {
      root?.render(<User id="3" />);
    });

    expect(container?.querySelector("summary")?.textContent).toBe(fakeUser.name);
    expect(container?.querySelector("strong")?.textContent).toBe(fakeUser.age);
    expect(container?.textContent).toContain(fakeUser.address);

    // モックを削除し、他のテストに影響を与えないようにしています。これにより、各テストが独立して実行されることが保証されます。
    mockFetch.mockRestore();
  });
});

import { act } from "@testing-library/react"; //jestの書き方すでにインストール済み;
import Hello from "../components/jest/Hello";
import { createRoot, Root } from "react-dom/client";

let container: HTMLDivElement | null = null;
let root: Root | null = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(() => {
  if (container !== null) {
    container.remove();
  }
  container = null;
  root = null;
})

describe("test hello component", () => {
  test("props = null", () => {
    act(() => {
      root?.render(<Hello />);
    })
    expect(container?.textContent).toBe("Hey, stranger");
  });

  test("props = name", () => {
    act(() => {
      root?.render(<Hello name="ジェニー" />);
    })
    expect(container?.textContent).toBe("Hello, ジェニー!");

    act(() => {
      root?.render(<Hello name="マーガレット" />);
    });
    expect(container?.textContent).toBe("Hello, マーガレット!");
  });
});

// beforeEachとafterEachは、Jestのテストライフサイクルメソッドで、それぞれテストケースが実行される前と後に特定の処理を行うために使用されます。
// 具体的には、このコードでは以下のような役割を果たしています：
// - beforeEach: この関数は各テストケースが実行される前に呼び出されます。ここでは、新しいdiv要素を作成し、それをdocument.bodyに追加しています。そして、そのdiv要素をcreateRoot関数に渡して、新しいReactルートを作成しています。これにより、各テストケースはクリーンな状態から始まることが保証されます。
// - afterEach: この関数は各テストケースが実行された後に呼び出されます。ここでは、beforeEachで作成したdiv要素をdocument.bodyから削除し、containerとrootの参照をnullにリセットしています。これにより、テストケース間での状態のリークを防ぎ、各テストケースが互いに影響を及ぼさないようにしています。
// これらのメソッドを使用することで、各テストケースが独立して実行され、テストの信頼性と予測可能性が向上します。
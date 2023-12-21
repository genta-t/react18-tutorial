import { render, screen } from "@testing-library/react"; //jestの書き方すでにインストール済み;
import List from "../components/jest/List";

describe("list test comp", () => {
  const listItems: { title: string, description?: string, icon?: React.ReactNode }[] = [
    { title: "タイトル1" },
    { title: "タイトル2", description: "説明" },
    { title: "タイトル3", description: "デスクリプション" },
  ];

  test("headerDataを渡しヘッダーを表示", () => {
    // render()関数を使ってコンポーネントを描画（headerDataを渡す）
    const view = render(
      <List items={listItems} headerData="リストのヘッダー" />
    );
    console.log("view: ", view);
    // 要素の取得（@testing-library/reactのクエリ ` queryByTestId ` を使用）
    const listDom = screen.queryByTestId("list-header");
    console.log(listDom);
    // nullにならないことを期待する
    expect(listDom).not.toBeNull();
  });

  test("headerDataを渡さずヘッダーを表示しない", () => {
    // render()関数を使ってコンポーネントを描画（headerDataを渡さない）
    render(<List items={listItems} />);

    // 要素の取得（@testing-library/reactのクエリ ` queryByTestId ` を使用）
    const listDom = screen.queryAllByTestId("list-header");
    console.log(listDom);
    // 配列が空になることを期待する
    expect(listDom).toHaveLength(0);
  });
});

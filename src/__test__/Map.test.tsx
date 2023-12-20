import { act } from "@testing-library/react"; //jestの書き方すでにインストール済み;
import { createRoot, Root } from "react-dom/client";
import Map, { TypeMap } from "../components/jest/Map";
import { TypeGoogleMapComp } from "../components/jest/GoogleMapComp";

jest.mock("../components/jest/Map", () => {
  // まとめてはかけるけど適切なテストができない場合がある
  const originalModule = jest.requireActual("../components/jest/Map");
  const originalModuleGoogleMapComp = jest.requireActual("../components/jest/GoogleMapComp");
  return {
    __esModule: true,
    default: function DummyMap({ name, email, site, center } : TypeMap) {
      return (
        <>
          <address>
            Contact {name} via{" "}
            <a data-testid="email" href={"mailto:" + email}>
              email
            </a>
            or on their <a data-testid="site" href={site}>
              website
            </a>.
          </address>
          <div data-testid="map">
            {center?.lat}:{center?.lng}
          </div>
        </>
      );
    },
    GoogleMapComp: function DummyGoogleMapComp({ center } : TypeGoogleMapComp) {
      return (
        <div data-testid="map">
          {center?.lat}:{center?.lng}
        </div>
      );
    },
    // default: function DummyMap(props: TypeMap) {
    //   return (
    //     <originalModule.default {...props}/>
    //   );
    // },
    // GoogleMapComp: function DummyGoogleMapComp(props: TypeGoogleMapComp) {
    //   return (
    //     <originalModuleGoogleMapComp.default {...props}/>
    //   );
    // },
  };
});

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

describe("test map component", () => {
  test("連絡先情報を表示", () => {
    const center = { lat: 0, lng: 0 }
    act(() => {
      root?.render(
        <Map
          name="ジョニー"
          email="test@test.com"
          site="http://test.com"
          center={center}
        />
      );
    });

    expect(
      container?.querySelector("[data-testid='email']")?.getAttribute("href")
    ).toEqual("mailto:test@test.com");
    expect(
      container?.querySelector("[data-testid='site']")?.getAttribute("href")
    ).toEqual("http://test.com");
    expect(
      container?.querySelector("[data-testid='map']")?.textContent
    ).toEqual("0:0");
  });
});

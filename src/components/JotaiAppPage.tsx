import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import PageLinks from './items/PageLinks';
import { TypesItemComp, TypesLineComp } from './jotai/types';
import { addItemAtom, addLineAtom, linesAtom, removeItemAtom, removeLineAtom } from './jotai/utils';

const JotaiAppPage = () => {
  const lineAtoms = useAtomValue(linesAtom);
  const addLine = useSetAtom(addLineAtom);

  return (
    <div style={{ margin: "0 24px" }}>
      <PageLinks link={"/jotai-app"}/>
      <p>jotaiです</p>
      {lineAtoms.map((l) => {
        return <Line key={l.toString()} lineAtom={l} />
      })}
      <button onClick={() => addLine()}>あどらいん</button>
    </div>
  );
}

export default JotaiAppPage;

const Line = ({ lineAtom } : TypesLineComp) => {
  const line = useAtomValue(lineAtom);
  const addItem = useSetAtom(addItemAtom);
  const removeLine = useSetAtom(removeLineAtom);

  return (
    <div style={{ padding: "8px", border: "solid 1px black" }}>
      <h2>{line.index}</h2>
      <div style={{ display: "flex" }}>
        {line.itemAtoms.map((l) => {
          return <Item key={l.toString()} itemAtom={l} lineAtom={lineAtom} />
        })}
        <button onClick={() => removeLine(lineAtom)}>デリートライン</button>
      </div>
      <button onClick={() => addItem(lineAtom)}>あどあいてむ</button>
    </div>
  )
}

const Item = ({ itemAtom, lineAtom } : TypesItemComp) => {
  const [ item, setItem ] = useAtom(itemAtom);
  const removeItem = useSetAtom(removeItemAtom);
  return (
    <>
      <div style={{ padding: "8px", border: "solid 1px black"  }}>
        <p>Item : {item.id}</p>
        <p>{item.index}</p>
        <input
          type="text"
          value={item.text}
          onChange={(e) => setItem({ ...item, text: e.target.value})}
        />
        <button onClick={() => removeItem(lineAtom, itemAtom)}>デリートアイテム</button>
      </div>
    </>
  )
}
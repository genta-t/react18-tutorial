import { atom } from "jotai";
import { nanoid } from "nanoid";
import { TypesItem, TypesItemAtom, TypesLine, TypesLineAtom } from "./types";

export const createLineAtom = (index: number) => atom<TypesLine>({
  id: nanoid(),
  index,
  itemAtoms: [],
});

export const createItemAtom = (index: number) => atom<TypesItem>({
  id: nanoid(),
  index,
  text: "",
});

export const linesAtom = atom<TypesLineAtom[]>([]);

export const addLineAtom = atom(null, (get, set) => {
  set(
    linesAtom,
    [
      ...get(linesAtom),
      createLineAtom(get(linesAtom).length),
    ]
  );
});

export const removeLineAtom = atom(
  null,
  (get, set, targetLineAtom: TypesLineAtom) => {
    set(
      linesAtom,
      get(linesAtom).filter((l) => l !== targetLineAtom),
    );
  },
);

export const addItemAtom = atom(null, (get, set, lineAtom: TypesLineAtom) => {
  const line = get(lineAtom);
  set(
    lineAtom,
    {
      ...line,
      itemAtoms: [
        ...line.itemAtoms,
        createItemAtom(line.itemAtoms.length)
      ]
    },
  );
});

export const removeItemAtom = atom(
  null,
  (get, set, targetLineAtom: TypesLineAtom, targetItemAtom: TypesItemAtom) => {
    const { itemAtoms, ...other }= get(targetLineAtom);
    const newItemAtoms = itemAtoms.filter((i) => i !== targetItemAtom);
    newItemAtoms.forEach((itemAtom, index) => {
      const item = get(itemAtom);
      if (typeof item === "object" && item !== null ) {
        set(itemAtom, { ...item, index})
      } else {
        return null;
      }
    });
    set(targetLineAtom, {
      ...other,
      itemAtoms: newItemAtoms,
    });
  }
);
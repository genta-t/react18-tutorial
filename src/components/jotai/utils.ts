import { PrimitiveAtom, atom, createStore } from "jotai";
import { nanoid } from "nanoid";
import { TypesItem, TypesItemAtom, TypesLine, TypesLineAtom, TypesAtomTodo } from "./types";

// atom　は外部で記述しないと動かない

// ---- 基本 ----
export const priceAtom = atom(100);

export const addPriceAtom = atom(
  (get) => get(priceAtom),
  (get, set, num: number) => {
    set(priceAtom, get(priceAtom) + num);
  },
);

export const countAtom = atom(0);

export const myStore = createStore();

// ---- 基本Todo ----

export const filterAtom = atom("all");

export const todosAtom = atom<PrimitiveAtom<TypesAtomTodo>[]>([]);

export const filteredAtom = atom<PrimitiveAtom<TypesAtomTodo>[]>((get) => {
  const filter = get(filterAtom);
  const todos = get(todosAtom);

  if (filter === "all") return todos;
  if (filter === "competed") return todos.filter((atom) => get(atom).completed);

  return todos.filter((atom) => !get(atom).completed);
});

// ---- 応用 ----
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
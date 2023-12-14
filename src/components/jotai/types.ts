import { createItemAtom, createLineAtom } from "./utils";


export type TypesItem = {
  id: string;
  index: number;
  text: string;
};

export type TypesItemAtom = ReturnType<typeof createItemAtom>;

export type TypesLine = {
  id: string;
  index: number;
  itemAtoms: TypesItemAtom[];
};

export type TypesLineAtom = ReturnType<typeof createLineAtom>;

export type TypesLineComp = {
  lineAtom : TypesLineAtom; 
}

export type TypesItemComp = {
  itemAtom : TypesItemAtom; 
  lineAtom: TypesLineAtom;
}
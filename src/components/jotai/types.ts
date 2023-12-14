import { PrimitiveAtom } from "jotai";
import { createItemAtom, createLineAtom } from "./utils";
import { TypesTodo } from "../items/types";


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

export type TypesAtomTodo = {
  title: string;
  completed: boolean;
}

export type RemoveFn = (item: PrimitiveAtom<TypesAtomTodo>) => void;

export type TypesAtomTodoItemProps = {
  atom: PrimitiveAtom<TypesAtomTodo>;
  remove: RemoveFn;
}

export type TypesFilteredProps = {
  remove: (atom: any) => void;
}
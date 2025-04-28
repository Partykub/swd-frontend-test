import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Person {
  id: string;
  name: string;
  age: number;
}

const storedPersons =
  typeof window !== "undefined" ? localStorage.getItem("persons") : null;

const initialState: {
  persons: Person[];
  editingPersonId: string | null;
} = {
  persons: storedPersons ? JSON.parse(storedPersons) : [],
  editingPersonId: null,
};

const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<Person>) => {
      state.persons.push(action.payload);
      localStorage.setItem("persons", JSON.stringify(state.persons));
    },
    updatePerson: (state, action: PayloadAction<Person>) => {
      const index = state.persons.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.persons[index] = action.payload;
        localStorage.setItem("persons", JSON.stringify(state.persons));
      }
    },
    deletePerson: (state, action: PayloadAction<string>) => {
      state.persons = state.persons.filter((p) => p.id !== action.payload);
      localStorage.setItem("persons", JSON.stringify(state.persons));
    },
    setEditingPersonId: (state, action: PayloadAction<string | null>) => {
      state.editingPersonId = action.payload;
    },
  },
});

export const { addPerson, updatePerson, deletePerson, setEditingPersonId } =
  personSlice.actions;
export default personSlice.reducer;

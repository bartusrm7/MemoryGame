import { create } from "zustand";

interface FieldsCreator {
	squareAmount: number;
}

const useFieldsCreator = create<FieldsCreator>(set => ({
	squareAmount: 0,
}));

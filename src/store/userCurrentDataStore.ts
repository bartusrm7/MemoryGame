import { create } from "zustand";

interface userCurrentDataState {
	userCurrentName: string;
	userCurrentGuessedCards: number[];
	difficultyLevel: string;
	userCurrentMoves: number;

	setUserCurrentName: (name: string) => void;
	setDifficultyLevel: (level: string) => void;
	incrementMoves: () => void;
	guessCard: (cardId: number) => void;
	restartGame: () => void;
}

const DIFFICULTY_LEVELS = {
	EASY: "easy",
	MEDIUM: "medium",
	HARD: "hard",
};

const useUserCurrentDataState = create<userCurrentDataState>(set => ({
	userCurrentName: "",
	userCurrentGuessedCards: [],
	difficultyLevel: "",
	userCurrentMoves: 0,

	setUserCurrentName: name => set({ userCurrentName: name }),
	setDifficultyLevel: level => set({ difficultyLevel: level }),
	incrementMoves: () => set(state => ({ userCurrentMoves: state.userCurrentMoves + 1 })),
	guessCard: cardId => set(state => ({ userCurrentGuessedCards: [...state.userCurrentGuessedCards, cardId] })),

	restartGame: () =>
		set({
			userCurrentName: "",
			userCurrentGuessedCards: [],
			difficultyLevel: "",
			userCurrentMoves: 0,
		}),
}));

export default useUserCurrentDataState;

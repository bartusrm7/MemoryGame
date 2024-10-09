import { create } from "zustand";

const DIFFICULTY_LEVELS = {
	easy: { squareAmount: 20 },
	medium: { squareAmount: 30 },
	hard: { squareAmount: 40 },
};

interface userCurrentDataState {
	userCurrentName: string;
	userCurrentGuessedCards: number[];
	difficultyLevel: string;
	userCurrentMoves: number;
	currentTimer: Date;
	squareToFields: number;

	setUserCurrentName: (name: string) => void;
	setDifficultyLevel: (level: string) => void;
	incrementMoves: () => void;
	guessCard: (cardId: number) => void;
	setSquareToFields: (amount: number) => void;
	restartGame: () => void;
}

const useUserCurrentDataState = create<userCurrentDataState>(set => ({
	userCurrentName: "",
	userCurrentGuessedCards: [],
	difficultyLevel: "",
	userCurrentMoves: 0,
	currentTimer: new Date(),
	squareToFields: 0,

	setUserCurrentName: name => set({ userCurrentName: name }),
	setDifficultyLevel: level => {
		set({ difficultyLevel: level });
		const squareCount = DIFFICULTY_LEVELS[level as keyof typeof DIFFICULTY_LEVELS]?.squareAmount;
		set({ squareToFields: squareCount });
	},
	incrementMoves: () => set(state => ({ userCurrentMoves: state.userCurrentMoves + 1 })),
	guessCard: cardId => set(state => ({ userCurrentGuessedCards: [...state.userCurrentGuessedCards, cardId] })),
	setSquareToFields: amount => set(state => ({ ...state, squareToFields: amount })),

	restartGame: () =>
		set({
			userCurrentName: "",
			userCurrentGuessedCards: [],
			difficultyLevel: "",
			userCurrentMoves: 0,
			squareToFields: 0,
		}),
}));

export default useUserCurrentDataState;

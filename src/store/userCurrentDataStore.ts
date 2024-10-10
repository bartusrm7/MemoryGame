import { create } from "zustand";
import EASY_PHOTOS from "../components/dashboard-components/fields-difficulties-components/Easy";
import MEDIUM_PHOTOS from "../components/dashboard-components/fields-difficulties-components/Medium";
import HARD_PHOTOS from "../components/dashboard-components/fields-difficulties-components/Hard";

const DIFFICULTY_LEVELS = {
	easy: { squareAmount: 20, images: EASY_PHOTOS },
	medium: { squareAmount: 30, images: MEDIUM_PHOTOS },
	hard: { squareAmount: 40, images: HARD_PHOTOS },
};
console.log(EASY_PHOTOS);
interface userCurrentDataState {
	userCurrentName: string;
	userCurrentGuessedCards: number[];
	difficultyLevel: string;
	userCurrentMoves: number;
	currentTimer: Date;
	squareToFields: number[];
	photosToFields: string[];

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
	squareToFields: [],
	photosToFields: [],

	setUserCurrentName: name => set({ userCurrentName: name }),
	setDifficultyLevel: level => {
		set({ difficultyLevel: level });
		const squareCount = DIFFICULTY_LEVELS[level as keyof typeof DIFFICULTY_LEVELS]?.squareAmount;
		const squarePhotos = DIFFICULTY_LEVELS[level as keyof typeof DIFFICULTY_LEVELS]?.images;

		if (squareCount && squarePhotos) {
			const squareArray = Array.from({ length: squareCount }, (_, i) => i + 1);
			set({ squareToFields: squareArray });
			set({ photosToFields: squarePhotos });
		}
	},
	incrementMoves: () => set(state => ({ userCurrentMoves: state.userCurrentMoves + 1 })),
	guessCard: cardId => set(state => ({ userCurrentGuessedCards: [...state.userCurrentGuessedCards, cardId] })),
	setSquareToFields: amount => set(state => ({ squareToFields: [...state.squareToFields, amount] })),
	restartGame: () =>
		set({
			userCurrentName: "",
			userCurrentGuessedCards: [],
			difficultyLevel: "",
			userCurrentMoves: 0,
			squareToFields: [],
			photosToFields: [],
		}),
}));

export default useUserCurrentDataState;

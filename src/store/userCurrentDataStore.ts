import { create } from "zustand";
import EASY_PHOTOS from "../components/dashboard-components/fields-difficulties-components/Easy";
import MEDIUM_PHOTOS from "../components/dashboard-components/fields-difficulties-components/Medium";
import HARD_PHOTOS from "../components/dashboard-components/fields-difficulties-components/Hard";

const DIFFICULTY_LEVELS = {
	easy: { squareAmount: 20, images: EASY_PHOTOS },
	medium: { squareAmount: 30, images: MEDIUM_PHOTOS },
	hard: { squareAmount: 40, images: HARD_PHOTOS },
};

interface userCurrentDataState {
	userCurrentName: string;
	userCurrentGuessedCards: string[];
	userCurrentPoints: number;
	difficultyLevel: string;
	userCurrentMoves: number;
	currentTimer: Date;
	photosToFields: string[];

	setUserCurrentName: (name: string) => void;
	setDifficultyLevel: (level: string) => void;
	setUserCurrentPoints: (point: number) => void;
	incrementMoves: () => void;
	guessCard: (cardName: string) => void;
	restartGame: () => void;
}

const useUserCurrentDataState = create<userCurrentDataState>(set => ({
	userCurrentName: "",
	userCurrentGuessedCards: [],
	userCurrentPoints: 0,
	difficultyLevel: "",
	userCurrentMoves: 0,
	currentTimer: new Date(),
	photosToFields: [],

	setUserCurrentName: name => set({ userCurrentName: name }),
	setDifficultyLevel: level => {
		set({ difficultyLevel: level });
		const squarePhotos = DIFFICULTY_LEVELS[level as keyof typeof DIFFICULTY_LEVELS]?.images;
		const randomSquarePhotos = squarePhotos.sort(() => Math.random() - 0.7);

		if (squarePhotos) {
			set({ photosToFields: randomSquarePhotos });
		}
	},
	setUserCurrentPoints: () => set(state => ({ userCurrentPoints: state.userCurrentGuessedCards.length })),
	incrementMoves: () => set(state => ({ userCurrentMoves: state.userCurrentMoves + 1 })),
	guessCard: cardName => set(state => ({ userCurrentGuessedCards: [...state.userCurrentGuessedCards, cardName] })),
	restartGame: () =>
		set({
			userCurrentName: "",
			userCurrentGuessedCards: [],
			userCurrentPoints: 0,
			difficultyLevel: "",
			userCurrentMoves: 0,
			photosToFields: [],
		}),
}));

export default useUserCurrentDataState;

import { create } from "zustand";
import EASY_PHOTOS from "../components/dashboard-components/fields-difficulties-components/Easy";
import MEDIUM_PHOTOS from "../components/dashboard-components/fields-difficulties-components/Medium";
import HARD_PHOTOS from "../components/dashboard-components/fields-difficulties-components/Hard";

const DIFFICULTY_LEVELS = {
	easy: { images: EASY_PHOTOS },
	medium: { images: MEDIUM_PHOTOS },
	hard: { images: HARD_PHOTOS },
};

interface userCurrentDataState {
	userCurrentName: string;
	userCurrentGuessedCards: number[];
	difficultyLevel: string;
	userCurrentMoves: number;
	currentTimer: Date;
	photosToFields: { id: number; photo: string }[];

	setUserCurrentName: (name: string) => void;
	setDifficultyLevel: (level: string) => void;
	incrementMoves: () => void;
	guessCard: (cardId: number) => void;
	restartGame: () => void;
}

const useUserCurrentDataState = create<userCurrentDataState>(set => ({
	userCurrentName: "",
	userCurrentGuessedCards: [],
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
	incrementMoves: () => set(state => ({ userCurrentMoves: state.userCurrentMoves + 1 })),
	guessCard: cardId => set(state => ({ userCurrentGuessedCards: [...state.userCurrentGuessedCards, cardId] })),
	restartGame: () =>
		set({
			userCurrentName: "",
			userCurrentGuessedCards: [],
			difficultyLevel: "",
			userCurrentMoves: 0,
			photosToFields: [],
		}),
}));

export default useUserCurrentDataState;

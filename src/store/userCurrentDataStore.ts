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
	photosToFields: string[];
	isTimerRunning: boolean;
	timeOfTheGame: number;
	isFocusDifficultyLevel: string | null;
	userHistoryGameStorage: {
		userName: string;
		userMoves: number;
		gameDuration: number;
		dataOfTheGame: Date;
	};

	setUserCurrentName: (name: string) => void;
	setDifficultyLevel: (level: string) => void;
	setUserCurrentPoints: (point: number) => void;
	incrementMoves: () => void;
	guessCard: (cardName: string) => void;
	setTimeOfTheGame: () => void;
	setStartTimer: () => void;
	setStopTimer: () => void;
	setIsFocusDifficultyLevel: (level: string | null) => void;
	restartGame: () => void;

	setUserHistoryGameStorage: (userData: {
		userName: string;
		userMoves: number;
		gameDuration: number;
		dataOfTheGame: Date;
	}) => void;
}

const useUserCurrentDataState = create<userCurrentDataState>(set => ({
	userCurrentName: "",
	userCurrentGuessedCards: [],
	userCurrentPoints: 0,
	difficultyLevel: "",
	userCurrentMoves: 0,
	photosToFields: [],
	isTimerRunning: false,
	timeOfTheGame: 0,
	isFocusDifficultyLevel: null,
	userHistoryGameStorage: {
		userName: "",
		userMoves: 0,
		gameDuration: 0,
		dataOfTheGame: new Date(),
	},

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

	setTimeOfTheGame: () => set(state => ({ timeOfTheGame: state.timeOfTheGame + 1 })),
	setStartTimer: () => set(() => ({ isTimerRunning: true })),
	setStopTimer: () => set(() => ({ isTimerRunning: false })),

	setIsFocusDifficultyLevel: level => set(() => ({ isFocusDifficultyLevel: level })),
	restartGame: () =>
		set({
			userCurrentName: "",
			userCurrentGuessedCards: [],
			userCurrentPoints: 0,
			difficultyLevel: "",
			userCurrentMoves: 0,
			photosToFields: [],
			isTimerRunning: false,
			timeOfTheGame: 0,
			isFocusDifficultyLevel: null,
		}),
	setUserHistoryGameStorage: userData =>
		set(state => ({
			userHistoryGameStorage: {
				...state.userHistoryGameStorage,
			},
		})),
}));

export default useUserCurrentDataState;

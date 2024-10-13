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
	isUserWon: boolean;
	userHistoryGameStorage: {
		userName: string;
		userMoves: number;
		userPoints: number;
		difficultyLevel: string;
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
	setIsUserWon: (status: boolean) => void;
	restartGame: (status: boolean) => void;

	setUserHistoryGameStorage: (userData: {
		userName: string;
		userMoves: number;
		userPoints: number;
		difficultyLevel: string;
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
	isUserWon: false,
	userHistoryGameStorage: {
		userName: "",
		userMoves: 0,
		userPoints: 0,
		difficultyLevel: "",
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
	setIsUserWon: status => set(() => ({ isUserWon: status })),
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
			isUserWon: false,
		}),
	setUserHistoryGameStorage: (userData: {
		userName: string;
		userMoves: number;
		userPoints: number;
		difficultyLevel: string;
		gameDuration: number;
		dataOfTheGame: Date;
	}) => {
		set(() => ({
			userHistoryGameStorage: userData,
		}));
		const userDataExisting = localStorage.getItem("userData");
		let users: {
			userName: string;
			userMoves: number;
			userPoints: number;
			difficultyLevel: string;
			gameDuration: number;
			dataOfTheGame: Date;
		}[] = userDataExisting ? JSON.parse(userDataExisting) : [];

		const userExisting = users.find(user => user.userName === userData.userName);
		if (userExisting) {
			Object.assign(userExisting, userData);
		} else {
			users.push(userData);
		}
		localStorage.setItem("userData", JSON.stringify(users));
	},
}));

export default useUserCurrentDataState;

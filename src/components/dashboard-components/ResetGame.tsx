import useUserCurrentDataState from "../../store/userCurrentDataStore";

const ResetGame: React.FC = () => {
	const {
		userCurrentName,
		// userCurrentGuessedCards,
		// difficultyLevel,
		// userCurrentMoves,
		// setUserCurrentName,
		// setDifficultyLevel,
		// incrementMoves,
		// guessCard,
		// resetGame,
	} = useUserCurrentDataState();

	return <div></div>;
};
export default ResetGame;

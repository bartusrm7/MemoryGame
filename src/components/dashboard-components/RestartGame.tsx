import useUserCurrentDataState from "../../store/userCurrentDataStore";
import Button from "../shared-components/Button";

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
		// restartGame,
	} = useUserCurrentDataState();

	return (
		<div>
			<Button title='Restart Game' />
		</div>
	);
};
export default ResetGame;

import "../../sass/dashboard-styles/game-board.scss";
import useUserCurrentDataState from "../../store/userCurrentDataStore";

const GameBoard: React.FC = () => {
	const {
		// userCurrentGuessedCards,
		// difficultyLevel,
		// userCurrentMoves,
		// setDifficultyLevel,
		// incrementMoves,
		// guessCard,
	} = useUserCurrentDataState();

	return (
		<div>
			<div className='game-board'></div>
		</div>
	);
};
export default GameBoard;

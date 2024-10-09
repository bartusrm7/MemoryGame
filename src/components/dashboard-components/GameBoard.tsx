import "../../sass/dashboard-styles/game-board.scss";
import useUserCurrentDataState from "../../store/userCurrentDataStore";

const GameBoard: React.FC = () => {
	const { userCurrentGuessedCards, difficultyLevel, userCurrentMoves } = useUserCurrentDataState();

	return (
		<div>
			<div className='game-board'>
				<div className='game-board__main-container'>
					<div className='game-board__container-label'>User results:</div>
					<div className='game-board__container'>
						<div className='game-board__short-description'></div>
						<div className='game-board__user-results'>{userCurrentGuessedCards}</div>
					</div>
					<div className='game-board__container'>
						<div className='game-board__short-description'></div>
						<div className='game-board__user-results'>{difficultyLevel}</div>
					</div>
					<div className='game-board__container'>
						<div className='game-board__short-description'></div>
						<div className='game-board__user-results'>{userCurrentMoves}</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default GameBoard;

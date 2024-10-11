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
						<div className='game-board__short-description'>Difficulty level:</div>
						<div className='game-board__user-results'>{difficultyLevel}</div>
					</div>
					<div className='game-board__container'>
						<div className='game-board__short-description'>Moves amount:</div>
						<div className='game-board__user-results'>{userCurrentMoves}</div>
					</div>
					<div className='game-board__container'>
						<div className='game-board__short-description'>Points amount:</div>
						<div className='game-board__user-results'>{userCurrentGuessedCards.length}</div>
					</div>
					<div className='game-board__container'>
						<div className='game-board__short-description'>Time game:</div>
						<div className='game-board__user-results'></div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default GameBoard;

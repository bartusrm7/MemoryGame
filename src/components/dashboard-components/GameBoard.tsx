import "../../sass/dashboard-styles/game-board.scss";
import useUserCurrentDataState from "../../store/userCurrentDataStore";

const GameBoard: React.FC = () => {
	const { userCurrentGuessedCards, difficultyLevel, userCurrentMoves, timeOfTheGame } = useUserCurrentDataState();

	return (
		<div>
			<div className='game-board'>
				<div className='game-board__main-container'>
					<div className='game-board__container-label'>
						<h3 className='game-board__short-description' data-user-result>
							User results:
						</h3>
					</div>
					<div className='game-board__container'>
						<div className='game-board__short-description' data-font-weight>
							Difficulty level:
						</div>
						<div className='game-board__user-results'>{difficultyLevel}</div>
					</div>
					<div className='game-board__container'>
						<div className='game-board__short-description' data-font-weight>
							Moves amount:
						</div>
						<div className='game-board__user-results'>{userCurrentMoves}</div>
					</div>
					<div className='game-board__container'>
						<div className='game-board__short-description' data-font-weight>
							Points amount:
						</div>
						<div className='game-board__user-results'>{userCurrentGuessedCards.length}</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default GameBoard;

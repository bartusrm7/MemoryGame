import useUserCurrentDataState from "../../store/userCurrentDataStore";
import "../../sass/dashboard-styles/game-time.scss";

const GameTime: React.FC = () => {
	const { timeOfTheGame } = useUserCurrentDataState();

	return (
		<div className='game-time'>
			<div className='game-time__container'>
				<h3 className='game-time__short-description' data-small-margin>
					Time game:
				</h3>
				<div className='game-time__user-results'>
					{timeOfTheGame < 10 ? `0${timeOfTheGame}` : timeOfTheGame}:
					{timeOfTheGame < 10 ? `0${timeOfTheGame}` : timeOfTheGame}:
					{timeOfTheGame < 10 ? `0${timeOfTheGame}` : timeOfTheGame}
				</div>
			</div>
		</div>
	);
};
export default GameTime;

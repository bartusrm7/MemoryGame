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
					{timeOfTheGame.minutes < 10 ? `0${timeOfTheGame.minutes}` : timeOfTheGame.minutes}:
					{timeOfTheGame.seconds < 10 ? `0${timeOfTheGame.seconds}` : timeOfTheGame.seconds}:
					{timeOfTheGame.hundredths < 10 ? `0${timeOfTheGame.hundredths}` : timeOfTheGame.hundredths}
				</div>
			</div>
		</div>
	);
};
export default GameTime;

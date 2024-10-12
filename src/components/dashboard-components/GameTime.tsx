import useUserCurrentDataState from "../../store/userCurrentDataStore";
import "../../sass/dashboard-styles/game-time.scss";

const GameTime: React.FC = () => {
	const { timeOfTheGame } = useUserCurrentDataState();

	const minutes = Math.floor(timeOfTheGame / 60);
	const seconds = timeOfTheGame % 60;

	return (
		<div className='game-time'>
			<div className='game-time__container'>
				<h3 className='game-time__short-description' data-small-margin>
					Time game:
				</h3>
				<div className='game-time__user-results'>
					{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
				</div>
			</div>
		</div>
	);
};
export default GameTime;

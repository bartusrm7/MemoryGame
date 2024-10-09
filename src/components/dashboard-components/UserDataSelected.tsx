import "../../sass/dashboard-styles/user-data-selected.scss";
import useUserCurrentDataState from "../../store/userCurrentDataStore";

const UserDataSelected: React.FC = () => {
	const { userCurrentName, difficultyLevel } = useUserCurrentDataState();

	return (
		<div>
			<div className='user-data-selected'>
				<div className='user-data-selected__user-name'>
					Welcome, <span>{userCurrentName}</span>! Let's play the game!
				</div>
				<div className='user-data-selected__user-name'>
					You selected <span>{difficultyLevel}</span> level of the game.
				</div>
			</div>
		</div>
	);
};
export default UserDataSelected;

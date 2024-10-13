import "../../sass/dashboard-styles/user-data-selected.scss";
import useUserCurrentDataState from "../../store/userCurrentDataStore";

const UserDataSelected: React.FC = () => {
	const { userCurrentName, isUserWon } = useUserCurrentDataState();

	return (
		<div>
			<div className='user-data-selected'>
				{isUserWon ? (
					<h2 className='user-data-selected__user-name'>Congratulations, {userCurrentName}! You won!</h2>
				) : (
					<h2 className='user-data-selected__user-name'>Welcome, {userCurrentName}! Let's play the game!</h2>
				)}
			</div>
		</div>
	);
};
export default UserDataSelected;

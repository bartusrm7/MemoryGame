import useUserCurrentDataState from "../../store/userCurrentDataStore";

const UserDataSelected: React.FC = () => {
	const { userCurrentName, difficultyLevel } = useUserCurrentDataState();

	return (
		<div>
			<div className='user-data-selected'>
				<div className='user-data-selected__user-name'>Welcome, {userCurrentName}! Let's play the game!</div>
				<div className='user-data-selected__difficulty-container'></div>
			</div>
		</div>
	);
};
export default UserDataSelected;

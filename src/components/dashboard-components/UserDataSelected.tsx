import useUserCurrentDataState from "../../store/userCurrentDataStore";

const UserDataSelected: React.FC = () => {
	const { userCurrentName, difficultyLevel } = useUserCurrentDataState();

	return (
		<div>
			<div className='user-data-selected'>
                
            </div>
		</div>
	);
};
export default UserDataSelected;

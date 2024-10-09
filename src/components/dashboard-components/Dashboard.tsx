import { useState } from "react";
import "../../sass/dashboard-styles/dashboard.scss";
import StartComponent from "../StartComponent";
import ResetGame from "./RestartGame";
import UserDataSelected from "./UserDataSelected";

const Dashboard: React.FC = () => {
	const [isStartComponentOpen, setIsStartComponentOpen] = useState<boolean>(true);

	const handleShowTheGame = () => {
		setIsStartComponentOpen(!isStartComponentOpen);
	};

	return (
		<div>
			<StartComponent isOpen={isStartComponentOpen} startGame={handleShowTheGame} />
			<ResetGame resetToStartComponent={handleShowTheGame} />
			<UserDataSelected />
		</div>
	);
};
export default Dashboard;

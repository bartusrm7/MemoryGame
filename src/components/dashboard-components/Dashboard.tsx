import { useState } from "react";
import "../../sass/dashboard-styles/dashboard.scss";
import StartComponent from "../StartComponent";
import ResetGame from "./RestartGame";

const Dashboard: React.FC = () => {
	const [isStartComponentOpen, setIsStartComponentOpen] = useState<boolean>(true);

	const handleShowTheGame = () => {
		setIsStartComponentOpen(!isStartComponentOpen);
	};

	return (
		<div>
			<StartComponent isOpen={isStartComponentOpen} startGame={handleShowTheGame} />
			<ResetGame />
		</div>
	);
};
export default Dashboard;

import { useState } from "react";
import "../../sass/dashboard-styles/dashboard.scss";
import StartComponent from "../StartComponent";
import ResetGame from "./RestartGame";
import UserDataSelected from "./UserDataSelected";
import GameBoard from "./GameBoard";
import Card from "../shared-components/Card";

const Dashboard: React.FC = () => {
	const [isStartComponentOpen, setIsStartComponentOpen] = useState<boolean>(true);

	const handleShowTheGame = () => {
		setIsStartComponentOpen(!isStartComponentOpen);
	};

	return (
		<div className='dashboard'>
			<StartComponent isOpen={isStartComponentOpen} startGame={handleShowTheGame} />
			<UserDataSelected />
			<GameBoard />
			<Card />
			<ResetGame resetToStartComponent={handleShowTheGame} />
		</div>
	);
};
export default Dashboard;

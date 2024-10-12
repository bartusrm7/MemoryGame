import { useState } from "react";
import "../../sass/dashboard-styles/dashboard.scss";
import StartComponent from "../StartComponent";
import ResetGame from "./RestartGame";
import UserDataSelected from "./UserDataSelected";
import GameBoard from "./GameBoard";
import Card from "../shared-components/Card";
import GameTime from "./GameTime";

const Dashboard: React.FC = () => {
	const [isStartComponentOpen, setIsStartComponentOpen] = useState<boolean>(true);

	const handleShowTheGame = () => {
		setIsStartComponentOpen(!isStartComponentOpen);
	};

	return (
		<div className='dashboard'>
			<StartComponent isOpen={isStartComponentOpen} startGame={handleShowTheGame} />
			<div>
				<UserDataSelected />
				<div data-dashboard-small-container>
					<GameBoard />
					<ResetGame resetToStartComponent={handleShowTheGame} />
				</div>
			</div>
			<GameTime />
			<Card />
		</div>
	);
};
export default Dashboard;

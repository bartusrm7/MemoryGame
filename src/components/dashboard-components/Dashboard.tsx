import { useState } from "react";
import "../../sass/dashboard-styles/dashboard.scss";
import StartComponent from "../StartComponent";

const Dashboard: React.FC = () => {
	const [isStartComponentOpen, setIsStartComponentOpen] = useState<boolean>(true);

	const handleShowTheGame = () => {
		setIsStartComponentOpen(!isStartComponentOpen);
	};

	return (
		<div>
			<StartComponent isOpen={isStartComponentOpen} startGame={handleShowTheGame} />
		</div>
	);
};
export default Dashboard;

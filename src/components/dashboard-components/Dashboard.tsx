import { useState } from "react";
import "../../sass/dashboard-styles/dashboard.scss";
import StartComponent from "../StartComponent";
import useUserCurrentDataState from "../../store/userCurrentDataStore";

const Dashboard: React.FC = () => {
	const [isStartComponentOpen, setIsStartComponentOpen] = useState<boolean>(true);

	const handleShowTheGame = () => {
		setIsStartComponentOpen(!isStartComponentOpen);
	};

	return (
		<div>
			TRZEBA UTWORZYC store W NASZYM STANIE ODNOSNIE TEGO JAKI USER TERAZ GRA, ILE MA RUCHOW ITD ITD
			<StartComponent isOpen={isStartComponentOpen} startGame={handleShowTheGame} />
		</div>
	);
};
export default Dashboard;

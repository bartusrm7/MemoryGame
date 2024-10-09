import useUserCurrentDataState from "../../store/userCurrentDataStore";
import Button from "../shared-components/Button";

interface RestartGameProps {
	resetToStartComponent: () => void;
}

const ResetGame: React.FC<RestartGameProps> = ({ resetToStartComponent }: RestartGameProps) => {
	const { restartGame } = useUserCurrentDataState();

	return (
		<div>
			<Button
				title='Restart Game'
				onClick={() => {
					restartGame();
					resetToStartComponent();
				}}
			/>
		</div>
	);
};
export default ResetGame;

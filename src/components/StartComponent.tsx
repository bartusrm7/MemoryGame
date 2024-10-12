import "../sass/start-component.scss";
import Button from "./shared-components/Button";
import useUserCurrentDataState from "../store/userCurrentDataStore";

interface StartComponentProps {
	isOpen: boolean;
	startGame: () => void;
}

const StartComponent: React.FC<StartComponentProps> = ({ isOpen, startGame }: StartComponentProps) => {
	const { userCurrentName, setUserCurrentName, setDifficultyLevel, isFocusDifficultyLevel, setIsFocusDifficultyLevel } =
		useUserCurrentDataState();

	const handleDidNotSelected = () => {
		if (!userCurrentName || (!userCurrentName.trim() && !isFocusDifficultyLevel)) {
			return;
		} else {
			startGame();
		}
	};

	return (
		<div>
			{isOpen && (
				<div className='start-component hide-component'>
					<div className='start-component__main-container'>
						<div className='start-component__container'>
							<div className='start-component__user-name-container containers'>
								<div className='start-component__short-description'>Sign your name:</div>
								<input
									type='text'
									className='input'
									value={userCurrentName}
									onChange={e => setUserCurrentName(e.target.value)}
								/>
							</div>
							<div className='start-component__difficulty-level-container containers'>
								<div className='start-component__short-description'>Select difficulty level:</div>
								<Button
									isActive={isFocusDifficultyLevel === "Sports"}
									title='Sports'
									message=' (easy)'
									onClick={() => {
										setIsFocusDifficultyLevel("Sports");
										setDifficultyLevel("easy");
									}}
								/>
								<Button
									isActive={isFocusDifficultyLevel === "Animals"}
									title='Animals'
									message=' (medium)'
									onClick={() => {
										setIsFocusDifficultyLevel("Animals");
										setDifficultyLevel("medium");
									}}
								/>
								<Button
									isActive={isFocusDifficultyLevel === "Languages"}
									title='Languages'
									message=' (hard)'
									onClick={() => {
										setIsFocusDifficultyLevel("Languages");
										setDifficultyLevel("hard");
									}}
								/>
							</div>
							<div className='start-component__accept-button-container containers'>
								<div className='start-component__short-description'>Press button to start the game.</div>
								<Button title="Let's start the game!" onClick={handleDidNotSelected} />
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
export default StartComponent;

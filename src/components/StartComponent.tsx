import { useState } from "react";
import "../sass/start-component.scss";
import Button from "./shared-components/Button";
import useUserCurrentDataState from "../store/userCurrentDataStore";

interface StartComponentProps {
	isOpen: boolean;
	startGame: () => void;
}

const StartComponent: React.FC<StartComponentProps> = ({ isOpen, startGame }: StartComponentProps) => {
	const [isFocusDifficultyLevel, setIsFocusDifficultyLevel] = useState<string | null>(null);
	const { userCurrentName, setUserCurrentName, setDifficultyLevel } = useUserCurrentDataState();

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
										setDifficultyLevel("Easy");
									}}
								/>
								<Button
									isActive={isFocusDifficultyLevel === "Cars"}
									title='Cars'
									message=' (medium)'
									onClick={() => {
										setIsFocusDifficultyLevel("Sports");
										setDifficultyLevel("Medium");
									}}
								/>
								<Button
									isActive={isFocusDifficultyLevel === "Languages"}
									title='Languages'
									message=' (hard)'
									onClick={() => {
										setIsFocusDifficultyLevel("Sports");
										setDifficultyLevel("Hard");
									}}
								/>
							</div>
							<div className='start-component__accept-button-container containers'>
								<div className='start-component__short-description'>Press button to start the game.</div>
								<Button title="Let's start the game!" onClick={startGame} />
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
export default StartComponent;

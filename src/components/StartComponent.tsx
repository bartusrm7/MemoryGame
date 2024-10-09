import { useState } from "react";
import "../sass/start-component.scss";
import Button from "./shared-components/Button";

interface StartComponentProps {
	isOpen: boolean;
	startGame: () => void;
}

const StartComponent: React.FC<StartComponentProps> = ({ isOpen, startGame }: StartComponentProps) => {
	const [isFocusDifficultyLevel, setIsFocusDifficultyLevel] = useState<string | null>(null);

	return (
		<div>
			{isOpen && (
				<div className='start-component hide-component'>
					<div className='start-component__main-container'>
						<div className='start-component__container'>
							<div className='start-component__user-name-container containers'>
								<div className='start-component__short-description'>Sign your name:</div>
								<input type='text' className='input' />
							</div>
							<div className='start-component__difficulty-level-container containers'>
								<div className='start-component__short-description'>Select difficulty level:</div>
								<Button
									isActive={isFocusDifficultyLevel === "Sports"}
									title='Sports'
									message=' (easy)'
									onClick={() => setIsFocusDifficultyLevel("Sports")}></Button>
								<Button
									isActive={isFocusDifficultyLevel === "Cars"}
									title='Cars'
									message=' (medium)'
									onClick={() => setIsFocusDifficultyLevel("Cars")}></Button>
								<Button
									isActive={isFocusDifficultyLevel === "Languages"}
									title='Languages'
									message=' (hard)'
									onClick={() => setIsFocusDifficultyLevel("Languages")}></Button>
							</div>
							<div className='start-component__accept-button-container containers'>
								<div className='start-component__short-description'>Press button to start the game.</div>
								<Button title="Let's start the game!" onClick={startGame}></Button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
export default StartComponent;

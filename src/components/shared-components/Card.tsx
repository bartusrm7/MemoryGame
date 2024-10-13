import { useEffect, useState } from "react";
import "../../sass/shared-styles/card.scss";
import useUserCurrentDataState from "../../store/userCurrentDataStore";

const Card: React.FC = () => {
	const {
		userCurrentGuessedCards,
		photosToFields,
		incrementMoves,
		setTimeOfTheGame,
		isTimerRunning,
		setStartTimer,
		setStopTimer,
		setUserHistoryGameStorage,
		userCurrentName,
		userCurrentMoves,
		timeOfTheGame,
		difficultyLevel,
		guessCard,
	} = useUserCurrentDataState();
	const [isCardRotated, setIsCardRotated] = useState<boolean[]>(Array(photosToFields.length).fill(false));
	const [flippedCards, setFlippedCards] = useState<number[]>([]);
	const [isMatchedCards, setIsMatchedCards] = useState<number[]>([]);
	const [currentDate] = useState<Date>(new Date());

	const userLocalStorageData = {
		userName: userCurrentName,
		userMoves: userCurrentMoves,
		userPoints: userCurrentGuessedCards.length,
		difficultyLevel: difficultyLevel,
		gameDuration: timeOfTheGame,
		dataOfTheGame: currentDate,
	};

	const handleRotateParticularCard = (index: number) => {
		if (isMatchedCards.includes(index) || flippedCards.includes(index)) return;

		const spreadWholeRotatedCards = [...isCardRotated];
		spreadWholeRotatedCards[index] = !spreadWholeRotatedCards[index];
		setIsCardRotated(spreadWholeRotatedCards);

		if (spreadWholeRotatedCards[index]) {
			setFlippedCards(prevState => [...prevState, index]);

			if (flippedCards.length === 1) {
				const firstPair = photosToFields[flippedCards[0]];
				const secondPair = photosToFields[index];

				if (firstPair === secondPair) {
					userCurrentGuessedCards.push(firstPair, secondPair);
					setIsMatchedCards(prevState => [...prevState, flippedCards[0], index]);

					if (userCurrentGuessedCards.length === photosToFields.length) {
						setStopTimer();
						setUserHistoryGameStorage(userLocalStorageData);
					}
				} else {
					incrementMoves();
					setTimeout(() => {
						setIsCardRotated(prevState => {
							const newState = [...prevState];
							newState[flippedCards[0]] = false;
							newState[index] = false;
							return newState;
						});
					}, 700);
				}
				setFlippedCards([]);
			} else if (flippedCards.length === 0) {
				setFlippedCards([index]);
			}
		}
	};

	useEffect(() => {
		const timerInterval = setInterval(() => {
			if (isTimerRunning) {
				setTimeOfTheGame();
			}
		}, 1000);
		return () => clearInterval(timerInterval);
	}, [isTimerRunning]);

	useEffect(() => {
		setIsCardRotated(Array(photosToFields.length).fill(false));
	}, [photosToFields]);

	return (
		<div className='card'>
			{photosToFields.map((photo, index) => (
				<div
					key={index}
					className='card__main-container'
					onClick={() => {
						handleRotateParticularCard(index);
						setStartTimer();
					}}>
					<div className={`card__container ${isCardRotated[index] ? "rotate" : ""}`}>
						<div className='card__front-side'>
							<img className='card__front-side-view front-back-side-card' src={photo} alt={`Photos number ${index}`} />
						</div>
						<div className='card__back-side'>
							<div className='card__back-side-view front-back-side-card'></div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
export default Card;

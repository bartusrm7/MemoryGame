import { useEffect, useState } from "react";
import "../../sass/shared-styles/card.scss";
import useUserCurrentDataState from "../../store/userCurrentDataStore";

const Card: React.FC = () => {
	const { userCurrentGuessedCards, photosToFields, incrementMoves } = useUserCurrentDataState();
	const [isCardRotated, setIsCardRotated] = useState<boolean[]>(Array(photosToFields.length).fill(false));
	const [flippedCards, setFlippedCards] = useState<number[]>([]);
	const [isMatchedCards, setIsMatchedCards] = useState<string[]>([]);

	const handleRotateParticularCard = (index: number) => {
		const spreadWholeRotatedCards = [...isCardRotated];
		spreadWholeRotatedCards[index] = !spreadWholeRotatedCards[index];
		setIsCardRotated(spreadWholeRotatedCards);

		if (spreadWholeRotatedCards[index]) {
			setFlippedCards(prevState => [...prevState, index]);
		}
		if (flippedCards.length === 2) {
			const firstPair = photosToFields[flippedCards[0]];
			const secondPair = photosToFields[flippedCards[1]];

			if (firstPair === secondPair) {
				userCurrentGuessedCards.push(firstPair, secondPair);
				setIsMatchedCards(prevState => [...prevState, firstPair, secondPair]);
				//NAPISAĆ KOD DO TEGO, ABY MOŻNA BYŁO ZOSTAWIAĆ KARTY OTWARTE JEŻELI SĄ ONE MATCH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			}
			incrementMoves();
			setFlippedCards([]);
			setTimeout(() => {
				setIsCardRotated(Array(photosToFields.length).fill(false));
			}, 300);
		}
	};

	useEffect(() => {
		setIsCardRotated(Array(photosToFields.length).fill(false));
	}, [photosToFields, isMatchedCards]);

	return (
		<div className='card'>
			{photosToFields.map((photo, index) => (
				<div key={index} className='card__main-container' onClick={() => handleRotateParticularCard(index)}>
					<div className={`card__container ${isCardRotated[index] ? "rotate" : ""}`}>
						<div className={`card__front-side ${isMatchedCards.includes(photo) ? "koko" : ""}`}>
							<img className='card__front-side-view front-back-side-card' src={photo} alt={`Photos number ${index}`} />
						</div>
						<div className='card__back-side'>
							<div className='card__back-side-view front-back-side-card'></div>
						</div>
					</div>
					<div></div>
				</div>
			))}
		</div>
	);
};
export default Card;

import { useState } from "react";
import "../../sass/shared-styles/card.scss";
import useUserCurrentDataState from "../../store/userCurrentDataStore";

const Card: React.FC = () => {
	const { photosToFields } = useUserCurrentDataState();
	const [isCardRotated, setIsCardRotated] = useState<boolean[]>(Array(photosToFields.length).fill(false));

	const handleRotateParticularCard = (index: number) => {
		const spreadWholeRotatedCards = [...isCardRotated];
		spreadWholeRotatedCards[index] = !spreadWholeRotatedCards[index];
		setIsCardRotated(spreadWholeRotatedCards);
	};

	return (
		<div className='card'>
			{photosToFields.map((photo, index) => (
				<div key={index} className='card__main-container' onClick={() => handleRotateParticularCard(index)}>
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

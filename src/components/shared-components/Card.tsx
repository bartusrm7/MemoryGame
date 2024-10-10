import "../../sass/shared-styles/card.scss";
import useUserCurrentDataState from "../../store/userCurrentDataStore";

const Card: React.FC = () => {
	const { photosToFields } = useUserCurrentDataState();

	return (
		<div className='card'>
			{photosToFields.map((photo, index) => (
				<div className='card__main-container'>
					<div className='card__container'>
						<div className='card__front-side'>
							<img className='card__front-side-view' key={index} src={photo} alt={`Photos number ${index}`} />
						</div>
						<div className='card__back-side'>
							<div className='card__back-side-view'></div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
export default Card;

import "../../sass/shared-styles/fields.scss";
import useUserCurrentDataState from "../../store/userCurrentDataStore";

const Fields: React.FC = () => {
	const { squareToFields, photosToFields } = useUserCurrentDataState();

	return (
		<div className='fields'>
			{squareToFields.map((square, index) => (
				<div className='square' key={index}>
					<div>
						{square}
						{photosToFields.map((photo, index) => (
							<img src={photo} alt='' key={index} />
						))}
					</div>
				</div>
			))}
		</div>
	);
};
export default Fields;

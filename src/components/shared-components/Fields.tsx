import "../../sass/shared-styles/fields.scss";
import useUserCurrentDataState from "../../store/userCurrentDataStore";

interface FieldsProps {
	image?: string;
}

const Fields: React.FC<FieldsProps> = ({ image }: FieldsProps) => {
	const { squareToFields } = useUserCurrentDataState();

	return (
		<div className='fields'>
			{squareToFields.map((square, index) => (
				<div className='square' key={index}>
					<img src={image} />
					{square}
				</div>
			))}
		</div>
	);
};
export default Fields;

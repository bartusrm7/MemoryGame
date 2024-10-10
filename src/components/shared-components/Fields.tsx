import useUserCurrentDataState from "../../store/userCurrentDataStore";

interface FieldsProps {
	id: number[];
	image?: string;
}

const Fields: React.FC<FieldsProps> = ({ id, image }: FieldsProps) => {
	const { squareToFields } = useUserCurrentDataState();

	return (
		<div className='fields'>
			<img src={image} alt={`Fields ${id}`} />
		</div>
	);
};
export default Fields;

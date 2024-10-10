import useUserCurrentDataState from "../../store/userCurrentDataStore";
import Fields from "../shared-components/Fields";

const FieldsContainer: React.FC = () => {
	const { squareToFields } = useUserCurrentDataState();

	return (
		<div className='fields-container'>
			<Fields id={squareToFields} />
		</div>
	);
};
export default FieldsContainer;

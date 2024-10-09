interface FieldsProps {
	id: number;
	image: string;
}

const Fields: React.FC<FieldsProps> = ({ id, image }: FieldsProps) => {
	return (
		<div className='fields'>
			<img src={image} alt={`Fields ${id}`} />
		</div>
	);
};
export default Fields;

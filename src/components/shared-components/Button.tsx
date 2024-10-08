import "../../sass/shared-styles/button.scss";

interface ButtonProps {
	focus?: boolean;
	title: string;
	message?: string;
	onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ focus, title, message, onClick }: ButtonProps) => {
	return (
		<button className='button' data-focus={focus} onClick={onClick}>
			{title}
			{message}
		</button>
	);
};
export default Button;

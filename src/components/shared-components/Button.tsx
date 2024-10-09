import "../../sass/shared-styles/button.scss";

interface ButtonProps {
	isActive?: boolean;
	title: string;
	message?: string;
	onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ isActive, title, message, onClick }: ButtonProps) => {
	return (
		<button className={`button ${isActive ? "active-btn" : ""}`} onClick={onClick}>
			{title}
			{message}
		</button>
	);
};
export default Button;

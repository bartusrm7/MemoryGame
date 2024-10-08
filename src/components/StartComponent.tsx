import "../sass/start-component.scss";

const StartComponent: React.FC = () => {
	return (
		<div>
			<div className='start-component'>
				<div className='start-component__main-container'>
					<div className='start-component__user-name-container'>
						<div>Sign your name:</div>
					</div>
					<div className='start-component__difficulty-level-container'></div>
				</div>
			</div>
		</div>
	);
};
export default StartComponent;

import "../sass/start-component.scss";

const StartComponent: React.FC = () => {
	return (
		<div>
			<div className='start-component'>
				<div className='start-component__main-container'>
					<div className='start-component__container'>
						<div className='start-component__user-name-container containers'>
							<div>Sign your name:</div>
							<input type='text' />
						</div>
						<div className='start-component__difficulty-level-container containers'>
							<div>Select difficulty level:</div>
							<button>Sports</button>
							<button>Cars</button>
							<button>Languages</button>
						</div>
						<div className='start-component__accept-button-container containers'>
							<div>Press button if you wanna start the game.</div>
							<button>Let's start the game!</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default StartComponent;

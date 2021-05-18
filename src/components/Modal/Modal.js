import React from 'react';

export const Modal = ({ isOpened, content, style, handleCloseModal }) => {
	const defaultStyles = {
		overlay: {
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: 'rgba(0, 0, 0, 0.75)',
		},
		content: {
			position: 'absolute',
			top: '40px',
			left: '40px',
			right: '40px',
			bottom: '40px',
			background: '#fff',
			overflow: 'auto',
			borderRadius: '4px',
			outline: 'none',
			padding: '20px',
		},
	};

	if (!isOpened) {
		return null;
	}

	return (
		<div
			className='overlay'
			style={
				style && style.overlay ? style.overlay : defaultStyles.overlay
			}
		>
			<div
				className='modal'
				style={
					style && style.content
						? style.content
						: defaultStyles.content
				}
			>
				{content}
				<button
					onClick={handleCloseModal}
					style={
						style && style.closeButton
							? style.closeButton
							: defaultStyles.closeButton
					}
				>
					Close Modal
				</button>
			</div>
		</div>
	);
};

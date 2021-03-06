# ya-basic-react-modal

[npm link](https://www.npmjs.com/package/ya-basic-react-modal)

## Installation

```sh
npm i ya-basic-react-modal
```

```sh
import { Modal } from 'ya-basic-react-modal';
```

## Configuration

The most basic use of the Modal can be described with :

```jsx
<Modal
	isOpened={isModalOpened}
	content='Example'
	handleCloseModal={handleCloseModal}
	buttonContent='Example'
/>
```

```sh
isOpened takes a boolean value
content takes a string
handleCloseModal takes a function
buttonContent takes a string
```

You can also add a `style` prop :

```jsx
	const customStyle = {
        overlay: {
            backgroundColor: 'rgba(116, 87, 12, 0.75)'
        }
		content: {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			backgroundColor: 'white',
			padding: '15px 30px',
			borderRadius: '10px',
		},
		closeButton: {
			border: 'none',
		},
	};

<Modal
	isOpened={isModalOpened}
	content='Example'
	handleCloseModal={handleCloseModal}
	buttonContent='Example'
	style={customStyle}
/>
```

import React from 'react';
import './App.css';

export class Product extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			products: []
		};
	}

	getProducts() {
		const url = 'http://localhost:4000/product';
 		const endpoint = `${url}`;
		fetch(endpoint)
			.then(res => res.json())
			.then(res => this.setState({products: res.data}))
			.catch(err => err);
	}

	componentWillMount() {
		this.getProducts();
	}

	render() {
		return (
			<div>
				<h1>Products</h1>
			 	{this.state.products.map(({id, ten, photo}) => {
			 		return (
			 			<div key={id}>
			 				<h3>{ten}</h3>
			 				<img src={photo} className="img-fluid" />
			 			</div>
			 		)
			 	})}
			</div>
	  	);
	}

  
}

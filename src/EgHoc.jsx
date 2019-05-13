import React, { Component } from 'react';

function api(url) {
	return 'Sample api return text';
}

export default function EgHOC(WrappedComponent, url) {
	return class extends Component {
		state = {
			data: null,
		};
		componentDidMount() {
			document.addEventListener('keydown', () => { this.setState({ data: api(url) }); }, false);
		}

		render() {
			const { data } = this.state;
			return <WrappedComponent data={data} {...this.props} />;
		}
	};
}
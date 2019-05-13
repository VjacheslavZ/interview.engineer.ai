import React from 'react';
import EgHOC from './EgHoc';

const EgAPICall = function (props) {
	return <div> {props.data}</div>;
};

export default EgHOC(EgAPICall, '/api/eg-test');
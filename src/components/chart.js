import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


export default (props) => {
	return (
		<div>
		   <Sparklines svgHeight={180} svgWidth={200} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
           </Sparklines>
		</div>
	);
}
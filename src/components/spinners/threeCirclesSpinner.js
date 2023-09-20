import { useSelector } from 'react-redux';
import {ThreeCircles} from 'react-loader-spinner';



export const ThreeCirclesSpinner = () => {

	const spinner = useSelector(state => state.FormPageReducer.isSpinner)
		//console.log('spinner >>>', spinner)

	return (
		<div  className="loader-styles">
			<ThreeCircles
				height="80"
				width="80"
				color="darkgray"
				wrapperStyle={{}}
				wrapperClass=""
				visible={spinner}
				ariaLabel="three-circles-rotating"
				outerCircleColor=""
				innerCircleColor=""
				middleCircleColor=""
			/>
		</div>
	)
}
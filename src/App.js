import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import NavigationBar from './components/NavigationBar'
import MainMenu from './views/main-menu'
import Simple from './views/simple-calculator'
import Scientific from './views/scientific-calculator'
import Graphing from './views/graphing-calculator'
import Finance from './views/finance-calculator'
import './styles/App.scss'

class App extends React.Component {
	render() {
		return(
			<Router>
        <div>
					<NavigationBar />
					{/* <Route path="/introduction" component={IntroductionPage} /> */}
					<Route path="/" exact component={MainMenu} />
					<Route path="/simple-calculator" component = {Simple} />
					<Route path="/scientific-calculator" component={Scientific} />
					<Route path="/graphing-calculator" component ={Graphing} />
					<Route path = "/finance-calculator" component = {Finance} />
				</div>
			</Router>
		);
	}
}

export default App;
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Upload } from './pages/Upload';
import { Header } from './components/Header';

import './App.css';

function App() {
	return (
		<div className='App'>
			<HashRouter>
				<Header />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/upload' component={Upload} />
				</Switch>
			</HashRouter>
		</div>
	);
}

export default App;

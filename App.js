import React, { Component } from 'react'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Asset } from 'expo-asset'

import AppNavigation from './src/navigation/AppNavigation'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isLoading: true
		}
	}

	_loadResourcesAsync = async () => {
		return Promise.all([
			Font.loadAsync({
				'GillSans-Heavy': require('@assets/fonts/GillSans-Heavy.otf'),
				'GillSans-Light': require('@assets/fonts/GillSans-Light.otf'),
				'GillSans-Medium': require('@assets/fonts/GillSans-Medium.otf')
			}),
			Asset.loadAsync([
				require('@assets/images/woman-notebook.png'),
				require('@assets/images/man-looking.png'),
				require('@assets/images/house-lawn.png'),
			])
		])
	}

	_handleOnFinish = () => {
		this.setState(() => ({ isLoading: false }))
	}

	_handleOnError = (err) => {
		console.warn('Error', err)
	}

	render() {
		if (this.state.isLoading) {
			return (
				<AppLoading
					startAsync={this._loadResourcesAsync}
					onFinish={this._handleOnFinish}
					onError={this._handleOnError}
				/>
			)
		}

		return <AppNavigation />
	}
}

export default App
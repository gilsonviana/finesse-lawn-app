import { createStackNavigator } from 'react-navigation'

import CreateProjectAddress from '../screens/NewProject/CreateProjectAddress'

export default createStackNavigator({
    CreateProjectAddress: {
        screen: CreateProjectAddress,
        navigationOptions: {
            title: 'Create project',
            headerTransparent: true,
            headerTitleStyle: {
                color: '#707070',
                marginLeft: 'auto',
                marginRight: 'auto'
            }
        }
    },
    // CreateProjectAnimation1: {
    //     screen: '',
    //     navigationOptions: {
    //         header: null
    //     }
    // },
    // CreateProjectDescription: {
    //     screen: '',
    //     navigationOptions: {
    //         title: 'Create project',
    //         headerTransparent: true,
    //         headerTitleStyle: {
    //             color: '#707070',
    //             marginLeft: 'auto',
    //             marginRight: 'auto'
    //         }
    //     }
    // },    
    // CreateProjectPictures: {
    //     screen: '',
    //     navigationOptions: {
    //         title: 'Create project',
    //         headerTransparent: true,
    //         headerTitleStyle: {
    //             color: '#707070',
    //             marginLeft: 'auto',
    //             marginRight: 'auto'
    //         }
    //     }
    // },
    // CreateProjectCategory: {
    //     screen: '',
    //     navigationOptions: {
    //         title: 'Create project',
    //         headerTransparent: true,
    //         headerTitleStyle: {
    //             color: '#707070',
    //             marginLeft: 'auto',
    //             marginRight: 'auto'
    //         }
    //     }
    // },
    // CreateProjectAnimation2: {
    //     screen: '',
    //     navigationOptions: {
    //         header: null
    //     }
    // },
    // CreateProjectDate: {
    //     screen: '',
    //     navigationOptions: {
    //         title: 'Create project',
    //         headerTransparent: true,
    //         headerTitleStyle: {
    //             color: '#707070',
    //             marginLeft: 'auto',
    //             marginRight: 'auto'
    //         }
    //     }
    // },
    // CreateProjectAnimation3: {
    //     screen: '',
    //     navigationOptions: {
    //         header: null
    //     }
    // },
}, {
    initialRouteName: 'CreateProjectAddress'
})
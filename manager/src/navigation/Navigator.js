import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginForm from '../components/LoginForm';
import EmployeeList from '../components/EmployeeList';
import EmployeeCreate from "../components/EmployeeCreate";

const Navigator = createStackNavigator(
    {
        Home: LoginForm,
        EmployeeList: EmployeeList,
        EmployeeCreate: EmployeeCreate
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#F8F8F8'
            }
        }
    }
);

export default createAppContainer(Navigator);

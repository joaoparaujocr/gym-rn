import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import HomeSvg from '@assets/home.svg'
import ProfileSvg from '@assets/profile.svg'
import HistorySvg from '@assets/history.svg'
import { Home } from '@screens/Home'
import { Exercise } from '@screens/Exercise'
import { History } from '@screens/History'
import { Profile } from '@screens/Profile'
import { useToken } from '@gluestack-style/react'
import { Platform } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

type TabsRoutes = {
  home: undefined,
  history: undefined,
  profile: undefined,
  exercise: undefined
}

type AppRoutes = {
  Tabs: undefined
  exercise: undefined
}

type AllRoutes = TabsRoutes & AppRoutes

export type AuthNavigatorRoutesProps = BottomTabNavigationProp<AllRoutes>

const { Navigator, Screen } = createBottomTabNavigator<TabsRoutes>()
const Stack = createNativeStackNavigator<AppRoutes>()

export function Tabs() {
  const iconSize = useToken('space', '6')
  const iconColorInactive = useToken('colors', 'gray200')
  const iconColorActive = useToken('colors', 'green500')

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: iconColorActive,
        tabBarInactiveTintColor: iconColorInactive,
        tabBarStyle: {
          backgroundColor: useToken('colors', 'gray600'),
          borderTopWidth: 0,
          height: Platform.OS === "android" ? "auto" : 96,
          paddingBottom: useToken('space', '16'),
          paddingTop: useToken('space', '4'),
        }
      }}
    >
      <Screen
        name='home'
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <HomeSvg fill={color} width={iconSize} height={iconSize} />
        }}
      />

      <Screen
        name='history'
        component={History}
        options={{
          tabBarIcon: ({ color }) => <HistorySvg fill={color} width={iconSize} height={iconSize} />
        }}
      />

      <Screen
        name='profile'
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <ProfileSvg fill={color} width={iconSize} height={iconSize} />
        }}
      />
    </Navigator>
  )
}

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="exercise" component={Exercise} />
    </Stack.Navigator>
  )
}
import React from "react";
import {} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Home from "../screens/Home";
import Shelf from "../screens/Shelf";
import Diary from "../screens/Diary";
import Profile from "../screens/Profile";
import Add from "../screens/Add";

interface Props {}

const Tab = createBottomTabNavigator();

const Navigator = ({}: Props) => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                    tabBarLabelStyle: {
                        fontSize: 10,
                    },
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Feather name="home" size={18} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Shelf"
                    component={Shelf}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Feather name="archive" size={18} color={color} />
                        ),
                    }}
                />
                {/* Replace with modal eventually */}
                <Tab.Screen
                    name="Add"
                    component={Add}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Feather name="music" size={18} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Diary"
                    component={Diary}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Feather name="calendar" size={18} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Feather name="user" size={18} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;

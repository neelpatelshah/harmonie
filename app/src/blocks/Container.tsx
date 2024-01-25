import React, { ReactNode } from "react";
import styled from "styled-components/native";
import { Theme } from "../styles/tokens";

interface Props {
    centerVert?: boolean;
    centerHor?: boolean;
    children?: ReactNode;
}

const Container = ({
    centerVert = false,
    centerHor = false,
    children,
}: Props) => {
    return (
        <View centerVert={centerVert} centerHor={centerHor}>
            {children}
        </View>
    );
};

const View = styled.View<{ centerVert: boolean; centerHor: boolean }>`
    flex: 1;
    background-color: ${Theme.defaultbg};
    ${(props) => props.centerVert && `justify-content: center;`}
    ${(props) => props.centerHor && `align-items: center;`}
`;

export default Container;

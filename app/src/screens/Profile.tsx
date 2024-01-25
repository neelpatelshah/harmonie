import React from "react";
import {} from "react-native";
import styled from "styled-components/native";
import Container from "../blocks/Container";

const url =
    "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg";

interface Props {}

const Profile = ({}: Props) => {
    return (
        <Container centerHor>
            <ProfilePicture src={url} />
            <Name>paulbufanno</Name>
            <InfoRow>
                <Info>
                    <InfoValue>6.9k</InfoValue>
                    <InfoText>minutes listened</InfoText>
                </Info>
                <Info>
                    <InfoValue>69</InfoValue>
                    <InfoText>minutes listened</InfoText>
                </Info>
                <Info>
                    <InfoValue>69</InfoValue>
                    <InfoText>minutes listened</InfoText>
                </Info>
            </InfoRow>
        </Container>
    );
};

const ProfilePicture = styled.Image`
    width: 175px;
    height: 175px;
    border-radius: 175px;
    margin-top: 120px;
    margin-bottom: 24px;
`;

const Name = styled.Text`
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    color: white;
`;

const InfoText = styled.Text`
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    color: white;
`;

const InfoValue = styled.Text`
    font-size: 48px;
    font-weight: 800;
    text-align: center;
    color: white;
`;

const Info = styled.TouchableOpacity`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const InfoRow = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 12px;
`;

export default Profile;

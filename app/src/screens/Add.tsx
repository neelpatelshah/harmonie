import React, { useState } from "react";
import { Text, TextInput, TouchableHighlight } from "react-native";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import Container from "../blocks/Container";

const url =
    "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg";

interface Props {}

const Add = ({}: Props) => {
    const [search, setSearch] = useState("");

    const handleSearch = (text: string) => {
        setSearch(text);
        console.log(text);
    };

    return (
        <Container centerHor>
            {/* <SearchBar>
                <TextInput
                    placeholder="search music..."
                    onChangeText={handleSearch}
                    placeholderTextColor={"white"}
                    style={{ color: "white" }}
                    value={search}
                />
                <TouchableHighlight>
                    <Feather name="search" color="white" size={30} />
                </TouchableHighlight>
            </SearchBar> */}
            <AlbumImage src={url} />
            <AlbumInfo>
                <AlbumTitle>Watching Movies with the Sound Off</AlbumTitle>
                <AlbumArtist>Mac Miller • 2014</AlbumArtist>
            </AlbumInfo>
            {/** maybe this could be a volume slider looking thing */}
            <RatingRow>
                <Feather name="disc" color="white" size={60} />
                <Feather name="disc" color="white" size={60} />
                <Feather name="disc" color="white" size={60} />
                <Feather name="disc" color="white" size={60} />
                <Feather name="disc" color="white" size={60} />
            </RatingRow>
            <ReviewContainer>
                <Review
                    placeholder="write your review..."
                    placeholderTextColor="white"
                    numberOfLines={15}
                />
            </ReviewContainer>
            <ActionsRow>
                <ActionButton>
                    <Feather name="plus-circle" color="white" size={60} />
                    <ActionButtonText>Add to list</ActionButtonText>
                </ActionButton>
                <ActionButton>
                    <Feather name="repeat" color="white" size={60} />
                    <ActionButtonText>Re-listen</ActionButtonText>
                </ActionButton>
                <ActionButton>
                    <Feather name="heart" color="white" size={60} />
                    <ActionButtonText>Favorite</ActionButtonText>
                </ActionButton>
            </ActionsRow>
        </Container>
    );
};

const SearchBar = styled.View`
    margin-top: 100px;
    height: 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
`;

const AlbumImage = styled.Image`
    height: 200px;
    width: 200px;
    resize-mode: cover;
    margin-top: 120px;
`;

const AlbumInfo = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-vertical: 18px;
`;

const AlbumTitle = styled.Text`
    font-size: 24px;
    font-weight: 600;
    color: white;
`;

const AlbumArtist = styled.Text`
    font-size: 20px;
    font-weight: 400;
    color: white;
`;

const RatingRow = styled.View`
    height: 75px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 36px;
    padding-right: 36px;
`;

const ReviewContainer = styled.View`
    width: 100%;
    padding: 12px;
    flex: 1;
    display: flex;
`;

const Review = styled.TextInput`
    color: white;
`;

const ActionsRow = styled.View`
    height: 75px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 36px;
    padding-right: 36px;
    margin-bottom: 12px;
`;

const ActionButton = styled.TouchableOpacity`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ActionButtonText = styled.Text`
    font-size: 14px;
    color: white;
    text-align: center;
    margin-vertical: 4px;
`;

export default Add;

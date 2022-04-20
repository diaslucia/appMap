import React, { useEffect } from 'react';
import { FlatList } from 'react-native';

/* Styles */
import styles from "./styles";

/* Redux */
import { useSelector, useDispatch } from "react-redux";
import * as addressAction from "../../store/action/placeAction";

/* Components */
import PlaceItem from "../../components/molecules/placeItem/index";

const PlaceList = ({ navigation }) => {
    const dispatch = useDispatch();
    const places = useSelector(state => state.places.places);

    const onSelectDetail = () => {
        navigation.navigate("PlaceDetail");
    }

    useEffect(() => {
        dispatch(addressAction.loadAddress());
    }, [])

    const renderItem = ({ item }) => (
        <PlaceItem
            name={item.name}
            image={item.image}
            address="Avenida Siempre Vivas"
            onSelect={() => onSelectDetail()}
        />
    )

    console.warn(places);

    return (
        <FlatList
            data={places}
            keyExtractor={item => item.id}
            renderItem={renderItem}
        />
    );
}

export default PlaceList;
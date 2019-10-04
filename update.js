import React from 'react';
import { FlatList, ActivityIndicator, Text, View, TouchableOpacity  } from 'react-native';

import codePush from "react-native-code-push";

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

export default class Update extends React.Component {


    render() {
        return (
            <View>

                    <Text>Actualizarile sunt adaugate automat</Text>

            </View>
        )
    }
}

Update = codePush(codePushOptions)(Update);
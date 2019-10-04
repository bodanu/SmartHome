import React from 'react';
import { FlatList, ActivityIndicator, Text, View, TouchableOpacity  } from 'react-native';

import codePush from "react-native-code-push";

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

export default class Update extends React.Component {
    onButtonPress() {
        codePush.sync({
            updateDialog: true,
            installMode: codePush.InstallMode.IMMEDIATE
        });
    }

    render() {
        return (
            <View>
                <TouchableOpacity >
                    <Text>Verifica</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

Update = codePush(codePushOptions)(Update);
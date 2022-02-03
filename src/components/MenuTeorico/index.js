
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,FlatList} from 'react-native';
import api from '../../services/api';

export default function MenuTeorico(props) {
    const [menus, setMenus] = useState({});
    const LoadMenus = [];

    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    keyExtractor={ranking => String(ranking.id)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item: ranking }) => 
                    (
                    <View>
                        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Area')}>
                            <Text style={styles.title}>Portifólio</Text>
                        </TouchableOpacity>
                    </View>
                    )}
                >
                </FlatList>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
 
});

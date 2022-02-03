import React from 'react';
import Menu from '../../components/MenuTeorico';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';

export default function Area({ navigation }) {
  const areaInfo = [
    {
        title: 'Desenvolvimento',
        description: 'asdadadasdsadadasdadadadasdasdasdsada'
    },
    {
        title: 'Cargos',
        link: 'asdadadasdsadadasdadadadasdasdasdsada'
    },
    {
        title: 'Faixa salarial',
        link: 'asdadadasdsadadasdadadadasdasdasdsada'
    },
    {
        title: 'Habilidades buscadas',
        link: 'asdadadasdsadadasdadadadasdasdasdsada'
    },
  ];

  return (
      <View style={styles.container}>
          <Menu />
          <View style={styles.area_infos}>
            <FlatList
                  data={areaInfo}
                  style={styles.menus}
                  keyExtractor={option => String(option.title)}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item: option }) =>
                  (
                    <View style={styles.about}>
                      <Text style={styles.title}>{option.title}</Text>
                      <Text style={styles.description}>{option.description}</Text>
                    </View>
                  )}
              >
            </FlatList>            
          </View>
      </View>
    );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

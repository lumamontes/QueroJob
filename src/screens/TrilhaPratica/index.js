import React from 'react';
import Menu from '../../components/MenuTeorico';
import Curriculo from '../../components/Curriculo';
import Portfolio from '../../components/Portfolio';
import Vagas from '../../components/Vagas';
import { findNodeHandle, StyleSheet, Text, View, TouchableOpacity, Image, FlatList,Animated, Dimensions} from 'react-native';
import { validateYupSchema } from 'formik';

const {width, height} = Dimensions.get('screen');
const menus = {
  Desafios:
    <Menu/>,
  Entrevistas:
    <Curriculo/>,
};
const data = Object.keys(menus).map((i) => ({
  key: i,
  title: i,
  content: menus[i],
  ref: React.createRef(),
}))
const Tab = React.forwardRef(({item, onItemPress}, ref) => {
  return (
    <TouchableOpacity onPress={onItemPress}>
      <View ref={ref}>
        <Text style={{ fontSize: 60/data.length, color: '#4E9F3D', fontSize: 21  }}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  )
});

const Indicator = ({measures, scrollx }) =>{
  const inputRange = data.map((_, i) => i * width);
  const indicatorWidth = scrollx.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.width)
  })
  const translateX = scrollx.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.x),
  })
  return (
   <Animated.View 
      style={{ 
        position:'absolute', 
        height: 4, 
        width: indicatorWidth, 
        left: 0, 
        backgroundColor: '#1E5128', 
        bottom: -10,
        transform: [
          {
            translateX
          }
        ]
      }}
      />
  );
};
const Tabs =({data,scrollx, onItemPress}) =>{
  const [measures, setMeasures]= React.useState([]);
  const containerRef= React.useRef();
  React.useEffect(() => {
    const m = []
    data.forEach((item => {
      item.ref.current.measureLayout(containerRef.current, (x,y,width, height) => {
        m.push({
          x,y,width,height,
        });
        if(m.length === data.length) {
          setMeasures(m);
        }
      }
      )
    })
  )}, [])
  return <View style={{ position: 'absolute', top: 100, width,
}}>
    <View 
    ref={containerRef} 
    style={{ justifyContent: 'space-evenly', flex: 1, flexDirection: 'row'}}>
      {data.map((item, index) => {
        return <Tab key={item.title} item={item} ref={item.ref} onItemPress={() => onItemPress(index)}/>;
      })}
    </View>
    {measures.length > 0 && <Indicator  measures={measures} scrollx={scrollx} />}
  </View>
}
export default function Area({ navigation }) {
  const scrollx = React.useRef(new Animated.Value(0)).current;
  const ref = React.useRef();
  const onItemPress = React.useCallback(itemIndex => {
    ref?.current.scrollToOffset({
      offset: itemIndex * width
    })
  })
  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={ref}
        data={data}
        horizontal
        // scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: { contentOffset: {x: scrollx }}}],
          {useNativeDriver: false}
        )}
        keyExtractor={menu => String(menu.title)}
        renderItem={({ item: menu }) => {
          return <View style={{ width, height, marginTop: 150, alignItems: 'center'}}>
            <React.Fragment>{menu.content}</React.Fragment>
          </View>
        }}
      />
      <Tabs scrollx={scrollx} data={data} onItemPress={onItemPress}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

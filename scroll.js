import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {main} from '../data/mainData';
import Octicons from 'react-native-vector-icons/Octicons';

const Body = ({navigation}) => {
  const [active, setActive] = useState(0);
  const autoSlide = () => {
    let cloneActive = active + 1;
    if (cloneActive >= main.length) {
      cloneActive = 0;
    }
    setActive(cloneActive);
  };
  setTimeout(autoSlide, 10000);
  return (
    <View>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/header.png')}
          style={{width: 150, height: 35}}
        />
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Octicons
            name={'three-bars'}
            size={34}
            color="#324352"
            style={styles.menu}
          />
        </TouchableOpacity>
      </View>
      {main.map((desc, index) => (
        <View
          key={desc.id}
          style={active === index ? {alignItems: 'center'} : {display: 'none'}}>
          <Image source={desc.img} style={styles.mainImg} />
          <Text style={styles.mainHeading}>{desc.heading}</Text>
          <Text style={styles.mainText}>{desc.text}</Text>
          <Text style={styles.mainParagraph}>{desc.paragraph}</Text>
        </View>
      ))}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.ariza}
          onPress={() => navigation.navigate('Ariza')}>
          <Text style={styles.arizaBtn}>Ariza Yuborish</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ariza}
          onPress={() => navigation.navigate('Stack')}>
          <Text style={styles.arizaBtn}>Kreditni hisoblash</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ariza}>
          <Text style={styles.arizaBtn}>Ariza holatini tekshirish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  mainImg: {
    width: '100%',
    height: '60%',
  },
  mainHeading: {
    color: '#324352',
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    marginTop: 10,
  },
  mainParagraph: {
    color: '#5d6677',
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    marginTop: 10,
  },
  mainText: {
    color: '#56678f',
    textAlign: 'center',
    marginTop: 5,
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
  },
  header: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  icon: {
    marginRight: 10,
  },
  ariza: {
    width: '40%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#00C695',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginTop: 10,
  },
  arizaBtn: {
    color: '#00C695',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
});

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inner_container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
  },
  info_container: {
    flexDirection: 'row',
  },
  year: {
    fontSize: 12,
    marginLeft: 10,
    color: 'grey',
    fontWeight: 'bold',
  },
});

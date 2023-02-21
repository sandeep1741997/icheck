import { Dimensions, StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  tabIconSize: { width: 25, height: 25 },

  tabBarStyle: { backgroundColor: '#2B3583', paddingBottom: 0 },

  flxRow: { flexDirection: 'row' },

  flxAlgnRgt: { flexDirection: 'row', marginLeft: 'auto' },

  customInpContainer: {
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#A7A7A7',
    height: 56,
    marginVertical: 4,
  },

  customTxtInpTtl: {
    position: 'absolute',
    marginTop: -10,
    fontSize: 13,
    backgroundColor: '#FFFFFF',
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#757575',
    left: 3,
    paddingHorizontal: 4,
  },

  customTextInput: {
    fontSize: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
    color: 'black',
    width: Dimensions.get('screen').width,
  },
  logout: {
    color: 'red',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#808080',
    width: '95%',
    marginLeft: 16,
    marginRight: 16,
  },
  flxDir: { flexDirection: 'row' },
  mgTop8: { marginTop: 8 },
  mgTop16: { marginTop: 16 },
  mgTop24: { marginTop: 24 },
  mgTop32: { marginTop: 32 },

  mgLft8: { marginLeft: 8 },
  pdngHrz8: { paddingHorizontal: 8 },
  pdngV12: { paddingVertical: 12 },
  wd80prcn: { width: '80%' },
  mgLftAuto: { marginLeft: 'auto' },
  algnRght: { flexDirection: 'row', marginLeft: 'auto' },
});

export default Styles;

/* @flow weak */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Styles from '../global/Styles';

function GetColor(value) {
  if (value === 'success') {
    return 'green';
  }
  if (value === 'failed') {
    return 'red';
  }
  if (value === 'none') {
    return 'white';
  }
}

const calnMnts = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

const mnthRep = month => {
  return (
    <View
      style={[
        styles.repView,
        {
          backgroundColor: GetColor(month),
        },
      ]}
    />
  );
};

export const YearMonthView = ({item}) => {
  return (
    <View style={styles.monthCon}>
      <View style={styles.lftCont}>
        <Text>{item.year}</Text>
      </View>
      <View style={styles.rghtCont}>
        <View style={styles.mainCont}>
          {mnthRep(item.months.jan)}
          {mnthRep(item.months.feb)}
          {mnthRep(item.months.mar)}
          {mnthRep(item.months.apr)}
          {mnthRep(item.months.may)}
          {mnthRep(item.months.jun)}
          {mnthRep(item.months.jul)}
          {mnthRep(item.months.aug)}
          {mnthRep(item.months.sep)}
          {mnthRep(item.months.oct)}
          {mnthRep(item.months.nov)}
          {mnthRep(item.months.dec)}
        </View>
      </View>
    </View>
  );
};

const monthView = monthAbb => {
  return <Text style={styles.monthView}>{monthAbb}</Text>;
};

const YearlyReport = ({paymentHistory}) => {
  console.log('Payment-History:', paymentHistory);
  return (
    <View style={styles.pymntHstRoot}>
      <View style={styles.pymntHstLft}>
        <View style={styles.lftCont} />
        <View style={styles.rghtCont}>
          <View style={styles.mainCont}>
            {calnMnts.map(month => {
              return monthView(month);
            })}
          </View>
        </View>
      </View>

      <View>
        {paymentHistory.map((item, key) => (
          <View key={key}>
            <YearMonthView item={item} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pymntHstRoot: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'gray',
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginTop: 24,
  },
  pymntHstLft: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    flex: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 8,
  },
  repView: {
    flex: 1,
    height: 15,
    width: 15,
    borderRadius: 2,
    marginHorizontal: 2,
  },
  monthView: {
    flex: 1,
    backgroundColor: 'white',
    textAlign: 'center',
    fontWeight: '600',
  },
  monthCon: {
    backgroundColor: 'white',
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    flex: 10,
    flexDirection: 'row',
    marginTop: 12,
  },
  mainCont: {flex: 12, flexDirection: 'row'},
  lftCont: {flex: 2},
  rghtCont: {flex: 8, flexDirection: 'row'},
});

export default YearlyReport;

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  LayoutAnimation,
  StyleSheet,
  View,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {
  REPORT_ADDRESS_CONTENT,
  REPORT_DEROGATORY_CONTENT,
  REPORT_EMPLOYMENT_CONTENT,
  REPORT_FINANCIAL_CONTENT,
} from '../../../global/DummyContent';
import { ReportDetailsBody } from '../../../views';
import ReportDetailsHeader from '../../../views/ReportDetailsHeader';

const ExpandableComponent = ({ item, onClickFunction, viewType, RedirectToSubmitDisputeForm }) => {
  //Custom Component for the Expandable List
  const [layoutHeight, setLayoutHeight] = useState(0);

  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);

  return (
    <View>
      {/*Header of the Expandable List Item*/}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={styles.header}>
        <ReportDetailsHeader viewType={viewType} item_header={item} />
      </TouchableOpacity>
      <View
        style={{
          height: layoutHeight,
          overflow: 'hidden',
        }}>
        {/*Content under the header of the Expandable List Item*/}
        <TouchableOpacity style={styles.content}>
          <ReportDetailsBody
            viewType={viewType}
            item={item.subcategory}
            RedirectToSubmitDisputeForm={RedirectToSubmitDisputeForm} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

function fetchData(viewType) {

  if (viewType === 'Address') {
    return REPORT_ADDRESS_CONTENT;
  }
  if (viewType === 'Employment') {
    return REPORT_EMPLOYMENT_CONTENT;
  }
  if (viewType === 'Derogatory') {
    return REPORT_DEROGATORY_CONTENT;
  }
  if (viewType === 'Financial') {
    return REPORT_FINANCIAL_CONTENT;
  }
}

const ReportListComp = props => {
  const [listDataSource, setListDataSource] = useState(
    fetchData(props.viewType),
  );
  const [multiSelect, setMultiSelect] = useState(true);

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const updateLayout = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    if (multiSelect) {
      // If multiple select is enabled
      array[index]['isExpanded'] = !array[index]['isExpanded'];
    } else {
      // If single select is enabled
      array.map((value, placeindex) =>
        placeindex === index
          ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
          : (array[placeindex]['isExpanded'] = false),
      );
    }
    setListDataSource(array);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView>
          {console.warn("listDataSource", listDataSource)}
          {listDataSource.map((item, key) => (
            <ExpandableComponent
              viewType={props.viewType}
              key={item.category_name}
              onClickFunction={() => {
                updateLayout(key);
              }}
              item={item}
              RedirectToSubmitDisputeForm={props.RedirectToSubmitDisputeForm}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ReportListComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },
  header: {},
  content: {},

  titleText: {
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
  },
  text: {
    fontSize: 16,
    color: '#606070',
    padding: 10,
  },
});

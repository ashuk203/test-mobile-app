import {colors} from 'react-native-elements';

const theme = {
  colors: {
    background: 'black',
    borderColor: 'white',
    textColor: 'white',
    hintColor: colors.greyOutline,
  },
  Input: {
    inputContainerStyle: {borderColor: 'white'},
    inputStyle: {color: 'white'},
    labelStyle: {color: 'white'},
  },
  CheckBox: {
    textStyle: {color: 'white'},
    wrapperStyle: {backgroundColor: 'black'},
    containerStyle: {backgroundColor: 'black'},
  },
  Text: {
    style: {color: 'white'},
  },
  ListItem: {
    titleStyle: {color: 'white'},
    containerStyle: {backgroundColor: 'black'},
  },
  ButtonGroup: {
    selectedButtonStyle: {backgroundColor: colors.primary},
    selectedTextStyle: {color: 'white'},
    containerStyle: {backgroundColor: 'black'},
    textStyle: {color: 'white'},
  },
  Overlay: {
    overlayStyle: {
      backgroundColor: colors.greyOutline,
    },
  },
  SearchBar: {
    containerStyle: {
      backgroundColor: colors.grey2,
    },
    inputContainerStyle: {
      backgroundColor: colors.grey0,
    },
  },
  Card: {
    containerStyle: {
      backgroundColor: 'black',
    },
  },
};

export default theme;

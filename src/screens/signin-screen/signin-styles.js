import {StyleSheet} from 'react-native';
import colors from '../../services/colors';
import {mvs} from '../../services/metrices';

export const Signin_Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  body: {
    flex: 1,
    paddingHorizontal: mvs(22),
    paddingTop: mvs(150),
    backgroundColor: colors.white,
  },
  forgotBtn: {
    alignSelf: 'flex-end',
    marginTop: mvs(13),
    marginRight: mvs(5),
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: mvs(40),
  },
});

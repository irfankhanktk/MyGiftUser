import {StyleSheet} from 'react-native';
import colors from '../../services/colors';
import {mvs} from '../../services/metrices';

const styles = StyleSheet.create({
  container:{
    flex:1,
   backgroundColor:colors.background,
 },
 body:{
     flex:1,
     paddingHorizontal:mvs(22),
     paddingTop:mvs(25),
 }
});
export default styles;

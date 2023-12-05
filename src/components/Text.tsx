import {Text} from 'react-native';
export interface text {
  userToken: string;
}
const Texts = ({userToken}: text) => {
  return <Text style={{color: 'black', fontWeight: 'bold'}}>{userToken}</Text>;
};
export default Texts;

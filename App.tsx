/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import tw from 'twrnc';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Btn from './src/components/Button';
import Texts from './src/components/Text';

const App = () => {
  const [userToken, setUserToken] = useState('');
  const [todo, setTodo] = useState<Array<string>>([]);
  const [update, setUpdate] = useState(false);
  const [updateIndex, setIndexIndex] = useState<number>(-1);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            // flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: 20,
          }}>
          <Text style={{fontSize: 50, marginBottom: 20}}>Todo List </Text>
          {/* input and button  */}
          <TextInput
            style={{
              borderWidth: 1,
              width: '100%',
              padding: 10,
              borderRadius: 5,
              borderColor: 'lightgrey',
              backgroundColor: 'white',
              height: 60,
              marginBottom: 10,
            }}
            value={userToken}
            onChangeText={text => setUserToken(text)}
            placeholder="Enter Value"
          />
          <View
            style={[
              tw`mt-2`,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: todo.length > 0 ? '100%' : null,
              },
            ]}>
            <Btn
              // style={{marginTop: 20, borderRadius: 10}}
              title={update ? 'Update' : 'Submit'}
              onPress={() => {
                if (update) {
                  // const updateTodo = [...todo];
                  // updateTodo[updateIndex] = userToken;
                  // setTodo(updateTodo);
                  // setTodo(prev=>[...prev ,prev[updateIndex]=userToken])
                  setTodo(prev =>
                    prev.map((x, i) => (i == updateIndex ? userToken : x)),
                  );
                  // ignor this
                  // setTodo(prev => [
                  //   (prev[updateIndex] = userToken),
                  //   ...prev.filter((x, i) => i != updateIndex),
                  // ]);
                  setUserToken('');
                  setIndexIndex(-1);
                  setUpdate(false);
                } else {
                  if (userToken === '') return Alert.alert('Enter Value');
                  setTodo(prev => [...prev, userToken]);
                  setUserToken('');
                }
              }}
            />
            {todo.length > 0 && (
              <Btn
                style={{marginTop: 20, borderRadius: 10}}
                title="All Clear"
                onPress={() => {
                  setTodo([]);
                }}
              />
            )}
          </View>
          {/* Todo List  */}
          {/* <ScrollView> */}
          {todo &&
            todo.map((item, index) => {
              return (
                <View style={[styles.view, {width: '100%'}]}>
                  <Texts userToken={item} />
                  <View style={tw`flex-row gap-3`}>
                    <Btn
                      style={{marginRight: 10, width: 40, borderRadius: 10}}
                      title="Delete"
                      textStyle={{color: 'red'}}
                      onPress={() => {
                        const deleteTodo = todo.filter((_, i) => i !== index);
                        setTodo(deleteTodo);
                      }}
                    />
                    <Btn
                      title="Update"
                      textStyle={{color: 'black'}}
                      style={{width: 40, borderRadius: 10}}
                      onPress={() => {
                        setUserToken(item);
                        setIndexIndex(index);
                        setUpdate(true);
                      }}
                    />
                  </View>
                </View>
              );
            })}
          {/* </ScrollView> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingHorizontal: 10,
    marginBottom: 10,
    // marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginTop: 20,
    elevation: 5,
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {MD3DarkTheme, PaperProvider} from 'react-native-paper';
import Navigator from './Navigator';

const App: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <NavigationContainer>
      <PaperProvider theme={MD3DarkTheme}>
        <Navigator />
        {children}
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;

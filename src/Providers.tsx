import {NavigationContainer} from '@react-navigation/native';
import React, {FC, PropsWithChildren} from 'react';
import {MD3DarkTheme, PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {store} from './redux/store';

let persistor = persistStore(store);

const Providers: FC<PropsWithChildren> = ({children}) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <PaperProvider theme={MD3DarkTheme}>{children}</PaperProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default Providers;

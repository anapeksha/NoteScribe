import React, {FC, PropsWithChildren} from 'react';
import Navigator from './Navigator';
import Providers from './Providers';

const App: FC<PropsWithChildren> = ({children}) => {
  return (
    <Providers>
      <Navigator />
      {children}
    </Providers>
  );
};

export default App;

import React, {createContext, useState} from 'react';

const defaultSampleContextValues = {
  data: 'testing',
};

export const SampleContext = createContext(defaultSampleContextValues);

export const SampleContextProvider = ({children}) => {
  const [data, setData] = useState('testing');

  return (
    <SampleContext.Provider
      value={{
        data,
        setData
      }}>
      {children}
    </SampleContext.Provider>
  );
};

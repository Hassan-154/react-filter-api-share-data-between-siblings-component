import React, { useEffect, useState } from 'react';
import ComponentA from './SiblingsComponent/ComponentA';
import ComponentB from './SiblingsComponent/ComponentB';

const App = () => {
  const [sendDataToComponentB, setSendDataToComponentB] = useState(null);
  const [sendDataToComponentA, setSendDataToComponentA] = useState(null);

  const handleShareRowdata = (rowData) => {
    setSendDataToComponentB(rowData);
  };

  const sendDataToParent = (data) => {
    setSendDataToComponentB(null)
    setSendDataToComponentA(data)
  };

  return (
    <div>
      {sendDataToComponentB ? (
        <div>
          <hr className='hr'></hr>
          <ComponentB receivedData={sendDataToComponentB} sendDataToParent={sendDataToParent} />
        </div>
      ) : (
        <ComponentA shareRowdata={handleShareRowdata} shareDataFromComponentB={sendDataToComponentA} />
      )}
    </div>
  );
};

export default App;


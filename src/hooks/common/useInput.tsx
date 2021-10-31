import {useCallback, useState} from 'react';

const UseInput = (initialVal = '') => {
  const [value, setValue] = useState(initialVal);

  const onChangeInput = useCallback(e => {
    setValue(e);
  }, []);

  return [value, onChangeInput];
};

export default UseInput;

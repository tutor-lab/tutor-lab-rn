import {useCallback, useState} from 'react';

const useToggleModal = (initialVal = false) => {
  const [isTrue, setIsTrue] = useState(initialVal);

  const toggleModal = useCallback(() => {
    setIsTrue(!isTrue);
  }, [isTrue]);

  return [isTrue, toggleModal];
};

export default useToggleModal;

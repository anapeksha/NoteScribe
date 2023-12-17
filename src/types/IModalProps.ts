import {Dispatch, SetStateAction} from 'react';

interface IModalProps {
  isVisible: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
  onSave: () => void;
}

export default IModalProps;

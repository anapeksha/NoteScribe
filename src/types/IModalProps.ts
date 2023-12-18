import {Dispatch, SetStateAction} from 'react';
import {INotes} from '.';

interface IModalProps {
  isVisible: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
  onSave: (note: INotes) => void;
  data: INotes | undefined;
  dataSetter: Dispatch<SetStateAction<INotes | undefined>>;
}

export default IModalProps;

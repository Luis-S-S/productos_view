import { loadingTrue } from '../store/actions';
import { useGlobalContext } from '../store';

const { dispatch } = useGlobalContext();

const handlerOnClick = () => {
  dispatch(loadingTrue());
};

export default handlerOnClick;

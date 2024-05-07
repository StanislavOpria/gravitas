import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <InfinitySpin
      visible={true}
      width="200"
      color='#7B7B7B'
      ariaLabel="infinity-spin-loading"
    />
  );
};

export default Loader;

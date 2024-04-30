import { Blocks } from "react-loader-spinner";

const Spinner = () => {
    return (
        <div className=" inset-0  h-screen max-w-[1920px] flex justify-center items-center p-5">
            <Blocks
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  visible={true}
  />
        </div>
    );
};

export default Spinner;
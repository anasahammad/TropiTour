import { Blocks } from "react-loader-spinner";

const Spinner = () => {
    return (
        <div className="flex justify-center items-center z-[10] mt-[10%]">
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
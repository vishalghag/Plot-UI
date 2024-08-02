// eslint-disable-next-line react/prop-types
const CommonBtn = ({ btnLabel, btnClick }) => {
  return (
    <div className="w-auto h-auto">
      <button
        className="w-[186px] h-auto border-2 border-[#ac8038] rounded-[12px] bg-transparent text-[#b27e02] mt-2.5 cursor-pointer py-4 font-medium font-poppins hover:bg-[#b27e02] hover:text-white"
        onClick={btnClick}
      >
        {btnLabel}
      </button>
    </div>
  );
};

export default CommonBtn;

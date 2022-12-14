export const TodoSearch = ({ setSearchValue }) => {
  const onChangeSearchValue = ({ target }) => {
    setSearchValue(target.value);
  };

  return (
    <>
      <input
        className="bg-main-white border-2 border-main-black border-solid focus:outline-main-cian font-montserrat font-normal h-16 mx-6 placeholder-main-gray rounded-md shadow-2xl
        text-2xl text-center text-main-dark w-[calc(100%-62px)]"
        onChange={onChangeSearchValue}
        placeholder="Search TODO!"
      />
    </>
  );
};

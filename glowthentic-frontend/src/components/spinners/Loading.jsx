const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-primary z-[999]">
      <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-secondary"></div>
      <img
        src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
        className="rounded-full h-28 w-28"
      />
    </div>
  );
};

export default Loading;

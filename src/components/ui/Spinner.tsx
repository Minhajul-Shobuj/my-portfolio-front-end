const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-black border-t-white rounded-full animate-spin"></div>

        <div className="absolute inset-3 border-4 border-black border-t-white rounded-full animate-spin-slow"></div>
      </div>
    </div>
  );
};

export default Spinner;

const PageContainer = ({ children }) => {
  return (
    <div className="px-4 flex justify-center text-brandBlue">
      <div className="w-full max-w-6xl bg-white/70 rounded-3xl shadow-xl p-6 sm:p-10 border border-brandBlue/10 backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
};

export default PageContainer;

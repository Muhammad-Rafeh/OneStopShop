export const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <img src="/logo.jpeg" alt="logo" className="w-40 h-40 object-contain" />
      <p className="scroll-m-20 text-2xl md:text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        PEC - Pakistan Engineering Consultancy
      </p>
    </div>
  );
};

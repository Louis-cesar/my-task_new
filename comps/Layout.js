import Navbar from "./Navbar";

const NumberLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default NumberLayout;

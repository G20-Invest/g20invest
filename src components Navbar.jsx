import logo from "/logo.png";

export default function Navbar() {
  const registerForm = "https://docs.google.com/forms/d/e/1FAIpQLSfF9iAsaVJIQBcRvpfS8tfmGPz-FmEwS0wY10Hl6aHHu861Pw/viewform";

  const openForm = () => window.open(registerForm, "_blank");

  return (
    <nav className="bg-gradient-to-r from-cyan-900 to-purple-900 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="G20Invest" className="h-10 w-10" />
          <span className="text-2xl font-bold">G20Invest</span>
        </div>
        <button
          onClick={openForm}
          className="px-6 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 font-medium"
        >
          Register & Pay
        </button>
      </div>
    </nav>
  );
}
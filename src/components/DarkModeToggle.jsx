export default function DarkModeToggle() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded"
    >
      Toggle Dark Mode
    </button>
  );
}

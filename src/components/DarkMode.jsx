function DarkMode({ isDarkModeEnabled, handleToggleDarkMode }) {
  return (
    <button
      onClick={handleToggleDarkMode}
      type="button"
      className="fixed p-6 z-10 right-20 top-4 bg-violet-300 text-lg rounded-full"
    >
      {isDarkModeEnabled ? 'sun' : 'moon' }
    </button>
  );
}

export default DarkMode;

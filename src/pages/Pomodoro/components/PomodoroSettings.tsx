import PreferencesSection from "./PreferencesSection";
import TimerSettingsSection from "./TimerSettingsSection";

const PomodoroSettings = () => {

  return (
    <div>
      <div className="mb-6 grid gap-6 lg:grid-cols-2">
        <TimerSettingsSection />

        <PreferencesSection />
      </div>
      <div className="flex justify-center">
        <button className="text-primary-dark w-full max-w-2xl cursor-pointer rounded-xl bg-blue-500 px-5 py-2 font-medium">
          Salvar Alterações
        </button>
      </div>
    </div>
  );
};

export default PomodoroSettings;

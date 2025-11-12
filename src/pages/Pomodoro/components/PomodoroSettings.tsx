import ActionButton from "../../../components/ActionButton";
import PreferencesSection from "./PreferencesSection";
import TimerSettingsSection from "./TimerSettingsSection";

const PomodoroSettings = () => {
  return (
    <div>
      <div className="mb-6 grid gap-6 lg:grid-cols-2">
        <TimerSettingsSection />

        <PreferencesSection />
      </div>
      <div className="flex md:justify-start justify-center">
        <ActionButton label="Salvar Alterações" />
      </div>
    </div>
  );
};

export default PomodoroSettings;

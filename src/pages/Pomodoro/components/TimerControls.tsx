import ActionButton from "../../../components/ActionButton";

interface TimerControlsProps {
  play: () => void;
  reset: () => void;
  pause: () => void;
  timerStatus: string;
}

const TimerControls = ({
  play,
  reset,
  pause,
  timerStatus,
}: TimerControlsProps) => {
  return (
    <div className="grid w-full max-w-96 grid-cols-2 gap-3">
      {timerStatus === "not_started" && (
        <ActionButton icon="bi bi-play" label="Iniciar" onClick={play} />
      )}

      {timerStatus === "running" && (
        <ActionButton icon="bi bi-pause" label="Pausar" onClick={pause} />
      )}

      {timerStatus === "paused" && (
        <ActionButton icon="bi bi-play" label="Retomar" onClick={play} />
      )}

      <ActionButton
        icon="bi bi-arrow-counterclockwise"
        label="Reset"
        onClick={reset}
      />
    </div>
  );
};

export default TimerControls;

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
        <button
          className={`text-primary-dark cursor-pointer rounded-xl bg-blue-700 px-6 py-2`}
          onClick={play}
        >
          <i className="bi bi-play" /> Iniciar
        </button>
      )}

      {timerStatus === "running" && (
        <button
          className={`text-primary-dark cursor-pointer rounded-xl bg-blue-700 px-6 py-2`}
          onClick={pause}
        >
          Pausar
        </button>
      )}

      {timerStatus === "paused" && (
        <button
          className={`text-primary-dark cursor-pointer rounded-xl bg-blue-700 px-6 py-2`}
          onClick={play}
        >
          Retomar
        </button>
      )}

      <button
        className={`text-primary-dark cursor-pointer rounded-xl bg-blue-700 px-6 py-2`}
        onClick={reset}
      >
        <i className="bi bi-arrow-counterclockwise" /> Reset
      </button>
    </div>
  );
};

export default TimerControls;

import { useDarkTheme } from "../../../hooks/UseDarkTheme";
import MoodRecordCard from "./MoodRecordCard";

const MoodHistory = () => {
  const { darkTheme } = useDarkTheme();

  const moodRecords = [
    {
      mood: "Feliz",
      date: "segunda-feira, 13 de janeiro de 2025",
      note: "Consegui completar todas as tarefas planejadas. Ótimo dia de estudos!",
      factors: ["Estudos", "Sono"],
    },
    {
      mood: "Motivado",
      date: "terça-feira, 14 de janeiro de 2025",
      note: "Dia produtivo e cheio de energia! Fiz exercícios e estudei bem.",
      factors: ["Exercício", "Foco"],
    },
  ];

  return (
    <div
      className={`rounded-xl p-6 ${darkTheme ? "bg-surface-dark" : "bg-surface-light"}`}
    >
      <div className="mb-5">
        <h2
          className={`text-xl sm:text-2xl font-semibold ${darkTheme ? "text-primary-dark" : "text-primary-light"}`}
        >
          Histórico de Humor
        </h2>
        <p
          className={`${darkTheme ? "text-muted-dark" : "text-muted-light"} text-sm`}
        >
          Acompanhe a evolução do seu bem-estar ao longo do tempo
        </p>
      </div>
      <div className={`grid gap-4 lg:grid-cols-2`}>
        {moodRecords.map((moodRecord, index) => {
          return (
            <MoodRecordCard
              key={index}
              date={moodRecord.date}
              mood={moodRecord.mood}
              note={moodRecord.note}
              factors={moodRecord.factors}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MoodHistory;

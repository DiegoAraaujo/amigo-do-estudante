import { useDarkTheme } from "../../../hooks/UseDarkTheme";
import SchedulePreviewItem from "./SchedulePreviewItem";

const items = [
  {
    hour: "09:00",
    matter: "Matemática",
    description: "Revisão de Álgebra Linear",
    status: true,
  },
  {
    hour: "10:30",
    matter: "Física",
    description: "Estudo de Cinemática",
    status: false,
  },
  {
    hour: "12:00",
    matter: "Química",
    description: "Experimentos em laboratório",
    status: false,
  },
  {
    hour: "14:00",
    matter: "História",
    description: "Leitura sobre Revolução Industrial",
    status: true,
  },
];

const SchedulePreview = () => {
  const { darkTheme } = useDarkTheme();
  return (
    <section>
      <div
        className={`${
          darkTheme ? "bg-surface-dark" : "bg-surface-light"
        } flex flex-col gap-6 rounded-2xl p-6`}
      >
        <div className="flex flex-col justify-between sm:flex-row">
          <div className="flex items-center justify-start gap-4">
            <i className="bi bi-calendar text-xl text-purple-700" />
            <h1
              className={`text-2xl font-semibold ${
                darkTheme ? "text-primary-dark" : "text-primary-light"
              }`}
            >
              Cronograma de Hoje
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {items.map((item, index) => {
            return (
              <SchedulePreviewItem
                key={index}
                hour={item.hour}
                matter={item.matter}
                description={item.description}
                status={item.status}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SchedulePreview;

import ScheduleForm from "./ScheduleForm";
import ScheduleList from "./ScheduleList";

const MyScheduleSection = () => {
  return (
    <section className="md:grid-cols-[2fr_1fr] grid gap-6">
      <ScheduleForm />
      <ScheduleList />
    </section>
  );
};

export default MyScheduleSection;

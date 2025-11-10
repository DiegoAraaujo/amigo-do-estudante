import MyTasksForm from "./MyTasksForm";
import TasksList from "./TasksList";

const MyTasksSection = () => {
  return (
    <section className="lg:grid-cols-[2fr_1fr] grid gap-6">
      <MyTasksForm />
      <TasksList />
    </section>
  );
};

export default MyTasksSection;

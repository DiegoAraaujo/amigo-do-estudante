import { useParams } from "react-router-dom";
import CreateQuestion from "./components/CreateQuestion";
import QuickActions from "./components/QuickActions";
import TopUsers from "./components/TopUsers";
import AllQuestions from "./components/AllQuestions";
import MyQuestions from "./components/MyQuestions";
import MyAnswers from "./components/MyAnswers";

const Community = () => {
  const { subpage } = useParams();
  const selectedSubpage = subpage || "allquestions";
  return (
    <section className="p-6">
      <div className="m-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[400px_auto]">
        <div className="flex flex-col gap-6 sm:flex-row lg:flex-col">
            <TopUsers />
            <QuickActions selectedSubpage={selectedSubpage} />
          </div>
        <div>
          {selectedSubpage === "allquestions" && <AllQuestions />}
          {selectedSubpage === "createquestion" && <CreateQuestion />}
          {selectedSubpage === "myquestions" && <MyQuestions />}
          {selectedSubpage === "myanswers" && <MyAnswers />}
        </div>
      </div>
    </section>
  );
};

export default Community;

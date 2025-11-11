import { useDarkTheme } from "../../../hooks/UseDarkTheme";
import CommunityPreviewItem from "./CommunityPreviewItem";

const CommunityPreview = () => {
  const { darkTheme } = useDarkTheme();
  return (
    <section>
      <div
        className={`flex flex-col rounded-xl ${
          darkTheme ? "bg-surface-dark" : "bg-surface-light"
        } p-6 gap-6`}
      >
        <div className="flex items-center justify-start gap-4">
          <i className="bi bi-people-fill text-xl text-purple-700" />
          <h2
            className={`${
              darkTheme ? "text-primary-dark" : "text-primary-light"
            } text-xl font-semibold`}
          >
            Destaques da Comunidade
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <CommunityPreviewItem />
          <CommunityPreviewItem />
        </div>
        <button className="w-full cursor-pointer rounded-2xl border border-gray-300 bg-[#F9F9FA] py-2 text-center text-sm font-medium hover:bg-[#5AA6F2] hover:text-white">
          <i className="bi bi-people-fill"></i> Participar da comunidade
        </button>
      </div>
    </section>
  );
};

export default CommunityPreview;

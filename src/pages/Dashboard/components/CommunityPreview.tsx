import { useDarkTheme } from "../../../hooks/UseDarkTheme";
import CommunityPreviewItem from "./CommunityPreviewItem";

const CommunityPreview = () => {
  const { darkTheme } = useDarkTheme();
  return (
    <section>
      <div
        className={`flex flex-col gap-5 rounded-2xl ${
          darkTheme ? "bg-surface-dark" : "bg-surface-light"
        } p-6`}
      >
        <div className="flex items-center justify-start gap-4">
          <i className="bi bi-people-fill text-xl text-purple-700" />
          <h1
            className={`${
              darkTheme ? "text-primary-dark" : "text-primary-light"
            } text-2xl font-semibold`}
          >
            Destaques da Comunidade
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <CommunityPreviewItem />
          <CommunityPreviewItem />
          <button className="w-full cursor-pointer rounded-2xl border border-gray-300 bg-[#F9F9FA] py-2 text-center text-sm font-medium hover:bg-[#5AA6F2] hover:text-white">
            <i className="bi bi-people-fill"></i> Participar da comunidade
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunityPreview;

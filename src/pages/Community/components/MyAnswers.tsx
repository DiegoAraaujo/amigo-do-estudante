import AnswerCard from "./AnswerCard";

const MyAnswers: React.FC = () => {
  return (
    <section>
      <AnswerCard
        author="Prof.Carlos"
        timeAgo="Há 11 meses"
        answer="A regra da cadeia é fundamental! Basicamente, se você tem f(g(x)), a derivada é f'(g(x)) * g'(x). Um exemplo: se f(x) = (3x + 1)², então f'(x) = 2(3x + 1) * 3 = 6(3x + 1)."
        likes={6}
      />
    </section>
  );
};

export default MyAnswers;

import QuestionCard from "./QuestionCard";
import SearchBar from "./SearchBar";

const MyQuestions = () => {
  const questions = [
    {
      title: "Leis de Newton na prática",
      description:
        "Como aplicar as três leis de Newton em exercícios? Sempre me confundo com a segunda lei especificamente.",
      tags: ["newton", "mecanica", "forças"],
      data_postagem: "10 meses",
      likes: 15,
      respostas: 8,
    },
    {
      title: "Diferença entre mitose e meiose",
      description:
        "Quais são as principais diferenças entre mitose e meiose e em quais situações cada uma ocorre?",
      tags: ["biologia", "células", "divisão celular"],
      data_postagem: "2 semanas",
      likes: 22,
      respostas: 10,
    },
    {
      title: "Como calcular o valor de uma resistência equivalente?",
      description:
        "Tenho dúvidas sobre quando devo somar ou inverter os valores das resistências. Como saber quando estão em série ou em paralelo?",
      tags: ["eletricidade", "resistores", "física"],
      data_postagem: "1 mês",
      likes: 12,
      respostas: 6,
    },
    {
      title: "Diferença entre velocidade média e instantânea",
      description:
        "Nos exercícios de movimento uniforme, às vezes pedem velocidade média e às vezes instantânea. Como distinguir e calcular cada uma?",
      tags: ["cinemática", "movimento", "física"],

      data_postagem: "3 meses",
      likes: 18,
      respostas: 5,
    },
    {
      title: "Como simplificar expressões com frações algébricas?",
      description:
        "Alguém poderia explicar passo a passo como simplificar frações com variáveis e denominadores diferentes?",
      tags: ["matemática", "álgebra", "frações"],
      data_postagem: "5 dias",
      likes: 30,
      respostas: 14,
    },
    {
      title: "O que é a entropia na termodinâmica?",
      description:
        "Sempre vejo o termo entropia, mas não entendo direito o que ele representa fisicamente. Poderiam explicar de forma intuitiva?",
      tags: ["termodinâmica", "entropia", "energia"],

      data_postagem: "7 meses",
      likes: 25,
      respostas: 9,
    },
  ];

  return (
    <div className="flex flex-col">
      <SearchBar />
      <div className="flex flex-col gap-3 rounded-xl">
        {questions.map((question, index) => {
          return (
            <QuestionCard
              description={question.description}
              madeIn={question.data_postagem}
              likes={question.likes}
              tags={question.tags}
              numberOfResponses={question.respostas}
              title={question.title}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyQuestions;

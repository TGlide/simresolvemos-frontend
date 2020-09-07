export default function About() {
  return (
    <div>
      <div className="relative lg:flex items-center mt-2 lg:mt-8">
        <img
          src="/vectors/about.svg"
          alt="About"
          className="block max-w-md w-64 lg:w-auto mx-auto"
        />
        <div className="z-10 relative px-2 text-center lg:text-left lg:ml-4 ">
          <h1 className="font-header font-bold text-4xl  ">
            De alunos,
            <br />
            Para alunos.
          </h1>
          <p className=" text-sm lg:text-base">
            Você já fez um trabalho importante e precisou de alguém
            especializado no assunto para tirar uma dúvida? Precisou do gabarito
            de uma lista na véspera da prova e não conseguiu? Muitos estudantes
            passam por essas dificuldades diversas vezes. Nós funcionamos como
            uma monitoria online que funciona 24 horas, durante os 7 dias da
            semana.
          </p>
        </div>
      </div>
    </div>
  );
}

import Slider from "react-slick";

export default function About() {
  const reviewsSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const videosSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative lg:container lg:px-12 flex-grow">
      <div className="h-full">
        <div>
          <div className="relative lg:flex items-center mt-2 lg:mt-8">
            <img
              src="/vectors/about.svg"
              alt="About"
              className="block max-w-md w-64 lg:w-auto mx-auto"
            />
            <div className="z-10 relative px-2 text-center lg:text-left lg:ml-4 ">
              <h1 className="font-header font-bold text-5xl  ">
                De alunos,
                <br />
                Para alunos.
              </h1>
              <p className=" text-sm lg:text-lg">
                Você já fez um trabalho importante e precisou de alguém
                especializado no assunto para tirar uma dúvida? Precisou do
                gabarito de uma lista na véspera da prova e não conseguiu?
                Muitos estudantes passam por essas dificuldades diversas vezes.
                Nós funcionamos como uma monitoria online que funciona 24 horas,
                durante os 7 dias da semana.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center mt-16">
            <img src="/images/reviewer.png" alt="Usuário" className="w-64" />
            <div className="px-4" style={{ maxWidth: "80%" }}>
              <Slider {...reviewsSliderSettings}>
                <div className="font-bold text-2xl">
                  Me deram uma ajuda muito boa no meu trabalho de matemática,
                  gostei muito do serviço.
                </div>
                <div className="font-bold text-2xl">
                  Me ajudou muito a entender minha lista de cálculo, estava com
                  muitas dúvidas e o professor não tinha passado o gabarito
                  passo a passo.
                </div>
              </Slider>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center mt-16 mb-16">
            <div className="px-2 text-center lg:text-right lg:ml-4 ">
              <h1 className="font-header font-bold text-4xl lg:text-5xl">
                Trazendo ótimas experiências aos nossos usuários.
              </h1>
              <p className=" text-sm lg:text-lg">
                A SimResolvemos busca auxiliar os alunos em seus estudos por
                meio de resoluções e vídeos explicativos,trazendo praticidade à
                todos. Conosco você tem acesso à profissionais que oferecem
                recursos e suporte para que você possa obter sucesso em sua
                jornada acadêmica. Nossa equipe é formada por
                professores/monitores de alta qualidade,com pleno conhecimento
                dos métodos de cada faculdade/escola e suas particularidades.
              </p>
            </div>
            <div className="max-w-xs lg:max-w-lg mt-4 lg:mt-0 lg:ml-4">
              <Slider {...videosSliderSettings}>
                <video controls playsInline>
                  <source src="/videos/review.mp4" type="video/mp4" />
                </video>
                <video controls playsInline>
                  <source src="/videos/review_main.mp4" type="video/mp4" />
                  <source src="/videos/review_main.webm" type="video/webm" />
                </video>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const redirectTask = () => {
    return (window.location.href = "/tasks");
  };

  return (
    <>
      <div className={styles.mainImage}>
        <div className={styles.textButtonWrapper}>
          <div className={styles.textWrapper}>
            <h1>Precisa de ajuda acadêmica?</h1>
            <h4>Encontre o professor ideal para você.</h4>
          </div>
          <button
            className={styles.buttonWrapper}
            onClick={() => redirectTask()}
          >
            <div>
              <p>Solicite seu serviço</p>
              <img src="/vectors/arrow-right-blue.svg" />
            </div>
          </button>
        </div>
      </div>
      <div className={styles.monitoriaWrapper}>
        <h2>Monitoria Acadêmica Online 24 horas</h2>
        <div className={styles.monitoriaImageWrapper}>
          <div>
            <div className={styles.monitoriaImageText}>
              <img
                src="/vectors/vector-background-mulher.svg"
                alt=""
                className="hidden sm:hidden md:flex lg:flex xl:flex"
              />
              <div>
                <p>
                  A SimResolvemos é uma plataforma educacional que tem como
                  objetivo auxiliar o estudante e melhorar seu desempenho
                  acadêmico por meio de materiais de estudo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.paraquemSimResolvemosWrapper}>
          <h2>Para quem é a SimResolvemos?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          <div className={styles.checklistWrapper}>
            <div className={styles.checklistCheck}>
              <img src="/vectors/checkbox.svg" alt="" />
            </div>
            <div className={styles.checklistText}>
              <p>Graduação</p>
            </div>
          </div>
          <div
            className={`${styles.checklistWrapper} mt-12 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0`}
          >
            <div className={styles.checklistCheck}>
              <img src="/vectors/checkbox.svg" alt="" />
            </div>
            <div className={styles.checklistText}>
              <p>Ensino Fundamental</p>
            </div>
          </div>
          <div
            className={`${styles.checklistWrapper} mt-12 sm:mt-12 md:mt-0 lg:mt-0 xl:mt-0`}
          >
            <div className={styles.checklistCheck}>
              <img src="/vectors/checkbox.svg" alt="" />
            </div>
            <div className={styles.checklistText}>
              <p>Ensino médio (1-2EM)</p>
            </div>
          </div>
          <div className={`${styles.checklistWrapper} mt-12`}>
            <div className={styles.checklistCheck}>
              <img src="/vectors/checkbox.svg" alt="" />
            </div>
            <div className={styles.checklistText}>
              <p>Pós Graduação</p>
            </div>
          </div>
          <div className={`${styles.checklistWrapper} mt-12`}>
            <div className={styles.checklistCheck}>
              <img src="/vectors/checkbox.svg" alt="" />
            </div>
            <div className={styles.checklistText}>
              <p>Pré-Vestibular</p>
            </div>
          </div>
          <div className={`${styles.checklistWrapper} mt-12`}>
            <div className={styles.checklistCheck}>
              <img src="/vectors/checkbox.svg" alt="" />
            </div>
            <div className={styles.checklistText}>
              <p>Concurso Públicos</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.headerTriangle}>
          <h2>Serviços</h2>
        </div>
        <div className={styles.centerContent}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 items-center content-center justify-center">
            {/* First Services */}
            <div className={styles.serviciosInfo}>
              <h3>Resolução passo a passo de listas de exercícios</h3>
              <div className={styles.serviciosInfoImage}>
                <img src="/vectors/steps.svg" alt="" />
                <p>
                  Te enviamos a resolução completa dos exercícios. É sempre bom
                  ter as respostas bem explicadas, né !?<div className=""></div>
                </p>
              </div>
            </div>
            {/* Second Services */}
            <div className={styles.serviciosInfo}>
              <h3>Aulas Particulares</h3>
              <div className={styles.serviciosInfoImage}>
                <img src="/vectors/training.svg" alt="" />
                <p>
                  Tenha acesso aos melhores tutores para te ajudar em tempo
                  real. Agende um horário agora mesmo!
                </p>
              </div>
            </div>
            {/* Thirdth Services */}
            <div className={styles.serviciosInfo}>
              <h3>Trabalhos Acadêmicos</h3>
              <div className={styles.serviciosInfoImage}>
                <img src="/vectors/academic.svg" alt="" />
                <p>
                  Comentamos gabaritos de questões múltipla escolha, explicamos
                  as alternativas corretas marcadas e justificamos as
                  incorretas.
                </p>
              </div>
            </div>
            {/* Fourth Services */}
            <div className={styles.serviciosInfo}>
              <h3>Explicações em vídeo para as suas dúvidas</h3>
              <div className={styles.serviciosInfoImage}>
                <img src="/vectors/document.svg" alt="" />
                <div className={styles.read__more__main}>
                  <input
                    type="checkbox"
                    className={styles.read__more__state}
                    id="post-2"
                  />

                  <p className={styles.read__more__wrap}>
                    Não perca mais tempo procurando por vídeos mal esclarecidos
                    no YouTube. Agora ficou muito simples,basta nos enviar o
                    assunto e você receberá um vídeo{" "}
                    <span className={styles.read__more__target}>
                      personalizado para a sua dúvida.
                    </span>
                  </p>
                  <label
                    htmlFor="post-2"
                    className={styles.read__more__trigger}
                  ></label>
                </div>
              </div>
            </div>
            {/* Fiveth Services */}
            <div
              className={`${styles.serviciosInfo} ${styles.serviciosInfoSecondGrid}`}
            >
              <h3>Gabarito comentado de questões múltipla escolha</h3>

              <div className={styles.serviciosInfoImage}>
                <img src="/vectors/elearning.svg" alt="" />
                <div className={styles.read__more__main}>
                  <input
                    type="checkbox"
                    className={styles.read__more__state}
                    id="post-3"
                  />

                  <p className={styles.read__more__wrap}>
                    Comentamos gabaritos de questões múltipla escolha explicando
                    as alternativas corretas marcadas e também comentando as
                    alternativas incorretas.{" "}
                    <span className={styles.read__more__target}>
                      "Sempre tem umas alternativas muito parecidas, né… Não se
                      preocupe aqui a gente explica elas.".
                    </span>
                  </p>
                  <label
                    htmlFor="post-3"
                    className={styles.read__more__trigger}
                  ></label>
                </div>
              </div>
            </div>
            {/* Sixth Services */}
            <div
              className={`${styles.serviciosInfo} ${styles.serviciosInfoSecondGrid}`}
            >
              <h3>Resolução de questões</h3>
              <div className={styles.serviciosInfoImage}>
                <img src="/vectors/chat2.svg" alt="" />
                <p>
                  Resolvemos questões de exatas, humanas e biológicas. É só
                  mandar que a gente te ajuda.
                </p>
              </div>
            </div>
            {/* Seventh Services */}
            <div
              className={`${styles.serviciosInfo} ${styles.serviciosInfoSecondGrid}`}
            >
              <h3>Revisão/Formatação de Textos e Correção de redações</h3>
              <div className={styles.serviciosInfoImage}>
                <img src="/vectors/procurar.svg" alt="" />
                <p>
                  Corrigimos textos, analisando erros gramaticais e a formulação
                  das frases. Também corrigimos redação em português inglês e
                  espanhol.
                </p>
              </div>
            </div>
            {/* Eighth Services */}
            <div
              className={`${styles.serviciosInfo} ${styles.serviciosInfoSecondGrid}`}
            >
              <h3>Correção de exercícios</h3>
              <div className={styles.serviciosInfoImage}>
                <img src="/vectors/verification-list.svg" alt="" />
                <p>
                  Também corrigimos questões e listas de exercícios. Aquela
                  insegurança após fazer os exercícios não vai mais fazer parte
                  da sua rotina de estudos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.headerTriangle}>
          <h2>Como Funciona</h2>
        </div>
        <div className={styles.centerContent}>
          <div
            className="grid grid-col sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4"
            style={{
              padding: "0px 60px 0px 60px",
            }}
          >
            <div className={styles.optionsHowWork}>
              <div className={styles.optionImageText}>
                <img src="/vectors/click.svg" alt="" />
                <p>
                  Clique em <b>Solitcite seu serviço</b>
                </p>
              </div>
              <div className={styles.optionAddText}>
                No formulário, especifique da maneira mais detalhada possível o
                seu pedido. Isso é essencial para que não ocorra erros, e
                possamos encontrar o monitor adequado para a sua tarefa.
              </div>
            </div>

            <div className={styles.optionsHowWork}>
              <img src="/vectors/send.svg" alt="" />
              <p>Enviaremos o orçamento do serviço via WhatsApp ou E-mail</p>
            </div>

            <div className={styles.optionsHowWork}>
              <div className={styles.optionImageText}>
                <img src="/vectors/flag.svg" alt="" />
                <p>
                  Assim que o pagamento for efetuado damos início ao pedido.
                </p>
              </div>
              <div className={styles.optionAddText}>
                Formas de Pagamento: Transferência Bancária(TED), Boleto,
                MercadoPago, PagSeguro, Paypal.
              </div>
            </div>

            <div className={styles.optionsHowWork}>
              <div className={styles.optionImageText}>
                <img src="/vectors/conver.svg" alt="" />
                <p>Receba o seu pedido por WhatsApp ou E-mail</p>
              </div>
              <div className={styles.optionAddText}>
                Na maioria das vezes te enviamos o que foi solicitado antes do
                prazo!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.headerCommon}>
          <h2>Nossas Skills</h2>
        </div>
        <div className={`${styles.centerContent} mt-4 mb-12`}>
          <div
            className={`${styles.nossasSkillsMain} grid grid-col sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3`}
          >
            <div className={styles.nossasSkillsWrapper}>
              <img src="/vectors/tiempo-rapido.svg" alt="tempo" />
              <div className={styles.nossasSkillsInfo}>
                <h5>Agilidade</h5>
                <p>Entregamos tudo no prazo determinado pelo aluno.</p>
              </div>
            </div>
            <div className={styles.nossasSkillsWrapper}>
              <img src="/vectors/gemas.svg" alt="gemas" />
              <div className={styles.nossasSkillsInfo}>
                <h5>Qualidade</h5>
                <p>
                  Nossa equipe é formada por monitores e mentores das melhores
                  universidades do Brasil.
                </p>
              </div>
            </div>
            <div className={styles.nossasSkillsWrapper}>
              <img src="/vectors/books.svg" alt="books" />
              <div className={styles.nossasSkillsInfo}>
                <h5>Diversidade</h5>
                <p>
                  Qualquer que seja o caso, temos o profissional certo para
                  você, atendendo do ensino fundamental ao superior.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Preguntas Frequentes */}
      <div className={styles.frequentQuestionsMain}>
        <h2>Perguntas Frequentes</h2>
        <div className={`${styles.centerContent} mt-12 mb-12`}>
          <div
            className={`${styles.freqOptionWrapper} grid grid-col sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1`}
          >
            <div className={styles.row}>
              <div className={styles.col}>
                <div className={styles.tabs}>
                  <div className={styles.tab}>
                    <input
                      type="radio"
                      id="rd1"
                      name="rd"
                      style={{ display: "none" }}
                    />
                    <label className={styles.tab__label} htmlFor="rd1">
                      Quem são nossos monitores?
                    </label>
                    <div className={styles.tab__content}>
                      São professores formados ou monitores que
                      estudam/estudaram nas melhores universidades do país e
                      possuem excelentes notas nas matérias que são habilitados
                      a trabalhar.
                    </div>
                  </div>

                  <div className={styles.tab}>
                    <input
                      type="radio"
                      id="rd2"
                      name="rd"
                      style={{ display: "none" }}
                    />
                    <label className={styles.tab__label} htmlFor="rd2">
                      Quanto custa um serviço? Existe preço tabelado?
                    </label>
                    <div className={styles.tab__content}>
                      Não! Não existe um padrão de preços. O preço varia com o
                      tamanho, complexidade, área e prazo determinado para o
                      serviço.
                    </div>
                  </div>

                  <div className={styles.tab}>
                    <input
                      type="radio"
                      id="rd3"
                      name="rd"
                      style={{ display: "none" }}
                    />
                    <label className={styles.tab__label} htmlFor="rd3">
                      Como posso trabalhar como monitor na SimResolvemos?
                    </label>
                    <div className={styles.tab__content}>
                      Você deve preencher o Formulário no link
                      <a href="/hiring">
                        <b> aqui</b>
                      </a>
                      . Nossa equipe de Recrutamento irá analisar seu currículo
                      e logo em seguida entraremos em contato via WhatsApp.
                      Professores de todos os cursos são bem vindos!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={`${styles.wave} hidden lg:block`}>
        <picture>
          <source srcSet="/images/wave.webp" type="image/webp" />
          <source srcSet="/images/wave.png" type="image/png" />
          <img src="/images/wave.png" alt="Onda" className="block" />
        </picture>
      </div>

      <div
        className={`${styles.home} bg-sea-blue bg-opacity-75 lg:bg-transparent -mt-40 lg:mt-0`}
      >
        <div className="">
          <div className="flex justify-center items-center py-40">
            <picture className="hidden lg:block w-5/12">
              <source srcSet="/images/photo.webp" type="image/webp" />
              <source srcSet="/images/photo_1.png" type="image/png" />
              <img src="/images/photo_1.png" alt="garota estudando" />
            </picture>
            <div className="text-center lg:text-left text-paper-white lg:text-study-black lg:ml-8 mt-32 lg:mt-0">
              <h1 className="font-header font-semibold text-xl md:text-2xl lg:text-4.5xl">
                Precisa de ajuda acadêmica?
              </h1>
              <p className="text-xl lg:text-2.5xl">
                Encontre o professor ideal para você.
              </p>
              <Link href="/tasks">
                <button className="bg-land-green lg:bg-sea-blue hover:bg-opacity-75 rounded-full font-bold text-paper-white text-xl lg:text-2xl px-6 py-2 mt-4">
                  Me ajuda!
                </button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch w-full pb-20">
            <div className="flex flex-1 items-center lg:items-start bg-white shadow-lg rounded-md px-4  py-6 lg:py-8">
              <div className="flex justify-center items-center h-20 w-20 flex-shrink-0">
                <img src="/vectors/speed.svg" alt="Relógio" />
              </div>
              <div className="ml-4">
                <h2 className="font-header text-2xl lg:text-3xl">Agilidade</h2>
                <p className="font-light text-md lg:text-xl">
                  Entregamos tudo no prazo determinado pelo aluno.
                </p>
              </div>
            </div>
            <div className="flex flex-1 items-center lg:items-start bg-white shadow-lg rounded-md px-4  py-6 lg:py-8 mt-4 lg:mt-0 lg:ml-4">
              <div className="flex justify-center items-center h-20 w-20 flex-shrink-0">
                <img
                  src="/vectors/diamond.svg"
                  alt="Diamante"
                  className="-mt-4"
                />
              </div>
              <div className="ml-4">
                <h2 className="font-header text-2xl lg:text-3xl">Qualidade</h2>
                <p className="font-light text-md lg:text-xl">
                  Nossa equipe é formada por professores & mentores das melhores
                  universidades do Brasil.
                </p>
              </div>
            </div>
            <div className="flex flex-1 items-center lg:items-start bg-white shadow-lg rounded-md px-4  py-6 lg:py-8 mt-4 lg:mt-0 lg:ml-4">
              <div className=" flex justify-center items-center h-20 w-20 flex-shrink-0">
                <img src="/vectors/people.svg" alt="Pessoas" />
              </div>
              <div className="ml-4">
                <h2 className="font-header text-2xl lg:text-3xl">
                  Diversidade
                </h2>
                <p className="font-light text-md lg:text-xl">
                  Qualquer que seja o caso, temos o profissional certo para
                  você, atendendo do ensino fundamental ao superior.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

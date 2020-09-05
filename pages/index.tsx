import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={`${styles.wave} hidden lg:block`}>
        <img src="/images/wave.png" alt="Onda" className="block" />
      </div>

      <div
        className={`${styles.home} bg-sea-blue bg-opacity-75 lg:bg-transparent -mt-40 lg:mt-0`}
      >
        <div className="">
          <div className="flex justify-center items-center py-40">
            <img
              src="/images/photo_1.png"
              alt="garota estudando"
              className="hidden lg:block w-5/12"
            />
            <div className="text-center lg:text-left text-paper-white lg:text-study-black lg:ml-8 mt-32 lg:mt-0">
              <h1 className="font-header font-semibold md:text-2xl lg:text-4.5xl">
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
      </div>
    </>
  );
}

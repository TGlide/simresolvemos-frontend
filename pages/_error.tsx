import Link from "next/link";

export default function Error() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <img src="/vectors/404.svg" alt="404" className="max-w-lg mt-32" />
      <h1 className="font-header font-bold text-3xl mt-6">Está perdido?</h1>
      <p className="font-semibold text-center mt-2">
        Vamos resolver isso ai! Clique{" "}
        <Link href="/">
          <a className="text-sea-blue underline hover:opacity-75">aqui</a>
        </Link>{" "}
        para voltar para a página inicial.
      </p>
    </div>
  );
}

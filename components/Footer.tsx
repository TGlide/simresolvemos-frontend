export function Footer() {
  return (
    <div style={{ background: "#f2f9fe" }}>
      <div className="lg:container flex flex-col lg:flex-row justify-center items-center px-12 py-4 lg:py-6 bg-opacity-25 mt-auto w-full">
        <span className="flex-grow text-center lg:text-left opacity-75 pb-2 lg:pb-0 border-b lg:border-none">
          2020 © SimResolvemos
        </span>
        <div className="flex flex-col lg:flex-row items-center mx-auto mt-4 lg:mt-0">
          <a
            href="mailto:suporte@simresolvemos.com.br"
            className="flex items-center text-sea-blue opacity-75 hover:opacity-50"
          >
            <img src="/vectors/mail.svg" alt="Email" />
            <span className="ml-2">suporte@simresolvemos.com.br</span>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5521972922006"
            target="_blank"
            className="flex items-center text-sea-blue opacity-75 hover:opacity-50 mt-2 lg:mt-0 lg:ml-8"
          >
            <img src="/vectors/wpp.svg" alt="Whatsapp" />
            <span className="ml-2">+55 21 97292-2006</span>
          </a>
          <a
            href="https://www.instagram.com/simresolvemos/"
            target="_blank"
            className="flex items-center text-sea-blue opacity-75 hover:opacity-50 mt-2 lg:mt-0 lg:ml-8"
          >
            <img src="/vectors/instagram.svg" alt="Instagram" />
            <span className="ml-2">@simresolvemos</span>
          </a>
        </div>
      </div>
    </div>
  );
}

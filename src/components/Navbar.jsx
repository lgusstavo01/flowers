import { useState } from "react";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 start-0 z-50 w-full border-b border-red-100/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        
        {/* Logo da Floricultura */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Logo da Floricultura"
          />
          <span className="self-center whitespace-nowrap text-xl font-serif font-bold text-gray-900">
            Malu <span className="text-red-600">Flores</span>
          </span>
        </a>

        {/* Botão CTA Principal e Menu Hamburguer */}
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-red-600 px-5 py-2.5 text-center text-sm font-bold text-white shadow-md shadow-red-600/30 transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-700/40 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-red-200"
          >
            Fazer Pedido
          </a>

          {/* Botão do menu mobile com animação de transformação para "X" */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-200 md:hidden transition-colors"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Abrir menu principal</span>
            <div className="relative flex h-4 w-5 flex-col items-center justify-between">
              <span
                className={`h-0.5 w-full transform rounded bg-current transition-all duration-300 ease-in-out ${
                  isOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded bg-current transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-0.5 w-full transform rounded bg-current transition-all duration-300 ease-in-out ${
                  isOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Links de Navegação */}
        <div
          className={`w-full overflow-hidden transition-all duration-300 ease-in-out md:order-1 md:flex md:max-h-none md:w-auto md:opacity-100 ${
            isOpen ? "mt-4 max-h-96 opacity-100 md:mt-0" : "max-h-0 opacity-0"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col rounded-2xl border border-red-100 bg-red-50/50 p-3 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:p-0 rtl:space-x-reverse">
            <li>
              <a
                href="#home"
                className="block rounded-lg px-3 py-2 text-red-600 font-semibold md:bg-transparent md:p-0"
                aria-current="page"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                className="block rounded-lg px-3 py-2 text-gray-700 hover:bg-red-100/60 hover:text-red-600 md:p-0 md:hover:bg-transparent md:hover:text-red-600 transition-colors"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#servicos"
                className="block rounded-lg px-3 py-2 text-gray-700 hover:bg-red-100/60 hover:text-red-600 md:p-0 md:hover:bg-transparent md:hover:text-red-600 transition-colors"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#galeria"
                className="block rounded-lg px-3 py-2 text-gray-700 hover:bg-red-100/60 hover:text-red-600 md:p-0 md:hover:bg-transparent md:hover:text-red-600 transition-colors"
              >
                Galeria
              </a>
            </li>
            <li>
              <a
                href="#depoimentos"
                className="block rounded-lg px-3 py-2 text-gray-700 hover:bg-red-100/60 hover:text-red-600 md:p-0 md:hover:bg-transparent md:hover:text-red-600 transition-colors"
              >
                Depoimentos
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="block rounded-lg px-3 py-2 text-gray-700 hover:bg-red-100/60 hover:text-red-600 md:p-0 md:hover:bg-transparent md:hover:text-red-600 transition-colors"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
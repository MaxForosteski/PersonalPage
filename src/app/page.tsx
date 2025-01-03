import Image from "next/image";
import React from 'react';
import Navbar from "../../public/components/navbar";
import Console from "../../public/components/console";
import Footer from "../../public/components/footer";


export default function Home() {
    return (
        <div className="main">
            <header>
                <Navbar />
            </header>

            <main className="w-100">
                <div className="container">
                    <Console />
                    <div className="sobremim mt-8 text-justify">
                        <h1 className="text-5xl ml-8 m-4">Sobre mim</h1>
                        <div className="perfil flex items-center w-100">
                            <div className="img-perfil w-3/12 relative m-12">
                                <Image
                                    src="/profile.png"
                                    alt="Profile_Pic"
                                    width={280}
                                    height={280}
                                />
                            </div>
                            <div className="w-1/12">
                            </div>
                            <p className="w-8/12">
                                Meu nome é Marcos Max Forosteski da Silva, nascido e criado em Santa Catarina, Brasil. Desde a adolescência, sempre tive um grande interesse pela área de desenvolvimento de software.
                            </p>
                        </div>
                        <div className="estudos w-100 flex items-center m-12">
                            <p className="w-9/12">
                                Esse entusiasmo me levou a cursar um técnico em Tecnologia da Informação, que abriu portas para uma trajetória ainda mais sólida. Atualmente, estou cursando Bacharelado em Sistemas de Informação, ampliando meus conhecimentos e habilidades.
                            </p>
                            <div className="img-estudos w-3/12">
                                <Image
                                    src="/tecnologica.png"
                                    alt="avanço nos estudos"
                                    width={280}
                                    height={280}
                                />
                            </div>
                        </div>
                        <div className="profissional flex items-center w-100 m-12">
                            <div className="profissional-img w-3/12">
                                <Image
                                    src="/machine-learning.png"
                                    alt="Evolução da mente"
                                    width={280}
                                    height={280}
                                />
                            </div>
                            <p className="w-9/12">
                                Minha jornada profissional começou como estagiário, evoluindo rapidamente para a posição de desenvolvedor web, onde atuo há 2 anos. Durante esse período, participei de uma variedade de projetos, desde soluções simples até desafios críticos, sempre buscando a melhor performance e qualidade nos resultados.
                            </p>
                        </div>

                    </div>
                    <div className="projetos">
                        <h1 className="text-5xl ml-8 m-4">Projetos</h1>
                        <div className="projetos-cards m-12">
                            <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Paper Management System (PMS)</h5>
                                <p className="font-normal text-justify text-gray-700 dark:text-gray-400">Sistema de gerenciamento de produção de papel feito para a empresa Adami S/A junto a uma equipe de 4 desenvolvedores, 1 tech lead, 1 product owner e 1 project leader</p>
                            </a>
                        </div>
                    </div>
                    <div className="servicos">
                        <h1 className="text-5xl ml-8 m-4">Serviços</h1>
                        <ul className="ml-16 m-8 text-2xl">
                            <li className="flex items-center m-3">
                                <Image
                                    src="/endereco-do-website.png"
                                    alt="Desenvolvimento de paginas web"
                                    width={40}
                                    height={40}
                                />
                                Desenvolvimento de Websites personalizados
                            </li>
                            <p className="text-base ml-16">Criação de sites responsivos e otimizados para todos os dispositivos.
                                Design exclusivo para atender às necessidades do seu negócio.
                                Integração com ferramentas modernas, como chatbots, formulários e APIs.</p>
                            <li className="flex items-center m-3">
                                <Image
                                    src="/aplicacao-de-software.png"
                                    alt="Desenvolvimento de Software Sistemas Web"
                                    width={40}
                                    height={40}
                                />
                                Desenvolvimento de Aplicações Web
                            </li>
                            <p className="text-base ml-16">
                                Construção de plataformas robustas para gestão empresarial, e-commerce, ou comunidades online.
                                Soluções escaláveis, seguras e integradas a bancos de dados eficientes.
                                Suporte a tecnologias modernas como React, Angular, Node.js, e mais.
                            </p>
                        </ul>
                    </div>
                    <div className="contatos">
                        <h1 className="text-5xl ml-8 m-4">Contatos</h1>
                        <ul className="ml-16 m-8 flex text-2xl">
                            <li className="flex flex-row items-center ">
                                <Image
                                    src="/gmail.png"
                                    alt="gmail"
                                    width={40}
                                    height={40}
                                />
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=max.forosteski.dev@gmail.com" target="_blank" className="ml-5">max.forosteski.dev@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </div>

    );
}


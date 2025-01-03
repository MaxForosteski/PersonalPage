"use client"

import Image from "next/image"
import { useEffect } from "react";
import CreateTriangles from "../scripts/bg-triangle-nav-generator";
export default function Navbar() {
    useEffect(() => {
        CreateTriangles();
    }, [])
    return (
        <div className="navbar">
            <nav id="navbar" className="bg-gray-50 usu-bg-nav w-full">
                <div className="max-w-screen-xl px-4 ">
                    <div className="flex items-center">

                        <ul className="w-full flex justify-evenly usu-list-nav flex flex-row items-center font-medium mt-0 space-x-8 rtl:space-x-reverse text-lg m-5">
                            <li>
                                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl m-4">
                                    <a className="z-10 flex items-center space-x-3 rtl:space-x-reverse">
                                        <Image
                                            src="/LINCEY-newlogo.png"
                                            alt="Lincey Logo"
                                            width={100}
                                            height={100}
                                            style={{ borderRadius: "20px", zIndex: "10" }}
                                        />
                                    </a>
                                </div>
                            </li>
                            <li className="navoption">
                                <a className="text-gray-900 dark:text-white hover:underline z-10 relative" aria-current="page">Home</a>
                            </li>
                            <li className="navoption">
                                <a className="z-10 text-gray-900 dark:text-white hover:underline relative">Sobre mim</a>
                            </li>
                            <li className="navoption">
                                <a className="z-10 text-gray-900 dark:text-white hover:underline relative">Projetos</a>
                            </li>
                            <li className="navoption">
                                <a className="z-10 text-gray-900 dark:text-white hover:underline relative">Serviços</a>
                            </li>
                            <li className="navoption">
                                <a className="z-10 text-gray-900 dark:text-white hover:underline relative">Contatos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    )
}
import Corpo from "@/components/layout/Corpo";
import Menu from "@/components/layout/Menu";
import styles from "../styles/Escola.module.css";
import Rodape from "@/components/layout/Rodape";
import Logo from "@/components/layout/Logo";
import { useRouter } from "next/router";
import ListaAlunos from "@/components/Alunos/ListaAlunos";
import Login from "@/components/Login";
import { useState } from "react";
import Logout from "@/components/Logout";
import AuthService from "@/services/AuthService";
import { useLocalStorage } from "@/data/context/LocalStorageContext";
import { useAppContext } from "@/data/context/AppContext";

export default function escola() {


    const router = useRouter();
    const id = router.query.id; {/* Usa o id da rota para capturar o acesso */}

    const [currentUser, setCurrentUser] = useState(undefined)
    const localStorageData = useLocalStorage()

    const renderiza = () => {
        if (!id) {              {/* se o id for diferente, quer dizer que nao esta logado, ou seja, nabd*/}
            return (
                <Corpo titulo="Bem vindo!">
                    <div>
                        Cadastro de alunos, cursos e carômetro
                    </div>
                </Corpo>
            )
        }

        if (id === "login") {
            return (
                <Login />
            )
        }

        if (id === "logout") {
            return (
                <Logout />
            )
        }

        if (localStorage.getItem("user")) {
            if (id === "alunos") {

                return (
                    <Corpo titulo="Cadastro de Alunos">
                        <ListaAlunos />
                    </Corpo>
                )
            }

            if (id === "cursos") {
                return (
                    <Corpo titulo="Cadastro de Cursos">
                        <div>
                            Cadastro de Cursos
                        </div>
                    </Corpo>
                )
            }
            
            if (id === "carometro") {
                return (
                    <Corpo titulo="Carômetro">
                        <div>
                            Carômetro
                        </div>
                    </Corpo>
                )
            }
        }
        else {
            return (
                <Corpo titulo="Não autorizado">
                    <div>
                        Verifique suas credenciais para usar esse recurso.
                    </div>
                </Corpo>
            )
        }
    }

    return (
        <div className={styles.escola}> 
        
        {/* logo + menu + (corpo + login + logout) + rodapé */}

            <Logo />
            <Menu />
            {renderiza()}
            <Rodape />
        </div>
    )
}
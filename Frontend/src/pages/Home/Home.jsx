import { useState} from "react";
import GraficoAlunosAtivos from "../../components/graficoAlunosAtivos/graficoAlunosAtivos";
import GraficoAlunosDesligados from "../../components/graficoAlunosDesligados/graficoAlunosDesligados";
import FiltroAlunos from "../../components/filtroAlunosAtivos/filtroAlunosAtivos";
import FiltroDesligados from "../../components/filtroAlunosDesligados/filtroAlunosDesligados";
import dadosAlunos from "../../data/dadosAlunos.js";
import "./Home.css";

function HomePage() {
    // Receber e guardar filtros selecionados
    const [unidadeSelecionada, setUnidadeSelecionada] = useState("");
    const [unidadeSelecionada2, setUnidadeSelecionada2] = useState("");
    const [cursoSelecionado, setCursoSelecionado] = useState("");
    const [cursoSelecionado2, setCursoSelecionado2] = useState("");
    const [profSelecionado, setProfSelecionado] = useState("");
    const [profSelecionado2, setProfSelecionado2] = useState("");

    // Alterar os filtros selecionados (ex: filtrar por professr desseleciona filtro de curso)
    function filtrarUnidade(filtro) {
        setUnidadeSelecionada(filtro);
        if (filtro !== "") {
            setProfSelecionado(""); 
        }
    }

    function filtrarCurso(filtro) {
        setCursoSelecionado(filtro);
        if (filtro !== "") {
            setProfSelecionado(""); 
        }
    }

    function filtrarProfessor(filtro) {
        setProfSelecionado(filtro);
        if (filtro !== "") {
            setUnidadeSelecionada(""); 
            setCursoSelecionado("");  
        }
    }

    function filtrarUnidade2(filtro) {
        setUnidadeSelecionada2(filtro);
        if (filtro !== "") {
            setProfSelecionado2(""); 
        }
    }

    function filtrarCurso2(filtro) {
        setCursoSelecionado2(filtro);
        if (filtro !== "") {
            setProfSelecionado2(""); 
        }
    }

    function filtrarProfessor2(filtro) {
        setProfSelecionado2(filtro);
        if (filtro !== "") {
            setUnidadeSelecionada2(""); 
            setCursoSelecionado2("");  
        }
    }

    // Estados dos dropdowns (aberto/fechado)
    const [unidadeAberto, setUnidadeAberto] = useState(false);
    const [unidade2Aberto, setUnidade2Aberto] = useState(false);
    const [cursoAberto, setCursoAberto] = useState(false);
    const [curso2Aberto, setCurso2Aberto] = useState(false);
    const [profAberto, setProfAberto] = useState(false);
    const [prof2Aberto, setProf2Aberto] = useState(false);

    // Abrir um drop e fechar os outros
    function alternarDropdown(tipoFiltro) {
        if (tipoFiltro === "unidade" || tipoFiltro === "curso") {
            setUnidade2Aberto(false);
            setCurso2Aberto(false);
            setProfAberto(false);
            setProf2Aberto(false);

            if (tipoFiltro === "unidade") setUnidadeAberto(!unidadeAberto);
            else setCursoAberto(!cursoAberto);
        }
        else if (tipoFiltro === "unidade2" || tipoFiltro === "curso2") {
            setUnidadeAberto(false);
            setCursoAberto(false);
            setProfAberto(false);
            setProf2Aberto(false);

            if (tipoFiltro === "unidade2") setUnidade2Aberto(!unidade2Aberto);
            else setCurso2Aberto(!curso2Aberto);
        }
        else if (tipoFiltro === "prof" || tipoFiltro === "prof2") {
            setUnidadeAberto(false);
            setUnidade2Aberto(false);
            setCursoAberto(false);
            setCurso2Aberto(false);

            if (tipoFiltro === "prof") {
                setProf2Aberto(false);
                setProfAberto(!profAberto);
            }
            else {
                setProfAberto(false);
                setProf2Aberto(!prof2Aberto);
            }
        }
    }

    return (
        <main className="conteudoPrincipal">
            <section className="secao">
                <h1>Quantidade de Alunos Ativos</h1>
                <div className="display">
                    <GraficoAlunosAtivos 
                        dadosAlunos = {dadosAlunos}
                        unidadeSelecionada = {unidadeSelecionada}
                        cursoSelecionado = {cursoSelecionado}
                        profSelecionado = {profSelecionado}
                    />

                    <FiltroAlunos 
                        unidadeSelecionada = {unidadeSelecionada}
                        setUnidadeSelecionada = {filtrarUnidade}
                        cursoSelecionado = {cursoSelecionado}
                        setCursoSelecionado = {filtrarCurso}
                        profSelecionado = {profSelecionado}
                        setProfSelecionado = {filtrarProfessor}
                        aberto = {{
                            unidade: unidadeAberto,
                            curso: cursoAberto,
                            prof: profAberto,
                        }}
                        alternarVisibilidade = {alternarDropdown}
                    />
                </div>
            </section>

            <section className="secao">
                <h1>Quantidade de Alunos Desligados</h1>
                <div className="display">
                    <GraficoAlunosDesligados 
                        dadosAlunos = {dadosAlunos}
                        unidadeSelecionada2 = {unidadeSelecionada2}
                        cursoSelecionado2 = {cursoSelecionado2}
                        profSelecionado2 = {profSelecionado2}
                    />

                    <FiltroDesligados 
                        unidadeSelecionada2 = {unidadeSelecionada2}
                        setUnidadeSelecionada2 = {filtrarUnidade2}
                        cursoSelecionado2 = {cursoSelecionado2}
                        setCursoSelecionado2 = {filtrarCurso2}
                        profSelecionado2 = {profSelecionado2}
                        setProfSelecionado2 = {filtrarProfessor2}
                        aberto = {{
                            unidade: unidade2Aberto,
                            curso: curso2Aberto,
                            prof: prof2Aberto,
                        }}
                        alternarVisibilidade = {alternarDropdown}
                    />
                </div>
            </section>
        </main>
    )
}

export default HomePage;
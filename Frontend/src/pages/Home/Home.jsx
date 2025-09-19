import { useState} from "react";
import GraficoAlunosAtivos from "../../components/graficoAlunosAtivos/graficoAlunosAtivos";
import GraficoAlunosDesligados from "../../components/graficoAlunosDesligados/graficoDesligados";
import FiltroAlunos from "../../components/filtroAlunos";
import FiltroDesligados from "../../components/filtroDesligados";
import dadosAlunos from "../../data/dadosAlunos";
import "./Home.css";

function HomePage() {
    // Receber e guardar filtros selecionados
    const [unidadeSelecionada, setUnidadeSelecionada] = useState("");
    const [unidadeSelecionada2, setUnidadeSelecionada2] = useState("");
    const [cursoSelecionado, setCursoSelecionado] = useState("");
    const [cursoSelecionado2, setCursoSelecionado2] = useState("");
    const [profSelecionado, setProfSelecionado] = useState("");
    const [profSelecionado2, setProfSelecionado2] = useState("");

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
                        setUnidadeSelecionada = {setUnidadeSelecionada}
                        cursoSelecionado = {cursoSelecionado}
                        setCursoSelecionado = {setCursoSelecionado}
                        profSelecionado = {profSelecionado}
                        setProfSelecionado = {setProfSelecionado}
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
                        setUnidadeSelecionada2 = {setUnidadeSelecionada2}
                        cursoSelecionado2 = {cursoSelecionado2}
                        setCursoSelecionado2 = {setCursoSelecionado2}
                        profSelecionado2 = {profSelecionado2}
                        setProfSelecionado2 = {setProfSelecionado2}
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
import DropdownFiltro from "../dropFiltros/dropFiltros.jsx";
import BotaoLimpar from "../botaoLimpar/botaoLimpar.jsx";
import TituloFiltrar from "../tituloFiltrar/tituloFiltrar.jsx";
import unidadesCursos from "../../data/lista_unidadesCursos.js";
import professores from "../../data/lista_professores.js";
import "./filtroAlunosAtivos.css";

function FiltroAlunos ({
    unidadeSelecionada,
    setUnidadeSelecionada,
    cursoSelecionado,
    setCursoSelecionado,
    profSelecionado,
    setProfSelecionado,
    aberto,
    alternarVisibilidade
}) {
    // Guardar unidades
    const unidades = Object.keys(unidadesCursos);
    // Guardar cursos relacionados ao filtro de unidade selecionado
    const cursos = unidadeSelecionada ? unidadesCursos[unidadeSelecionada] : [];

    // Função do botão limpar
    function limparFiltros() {
        setUnidadeSelecionada("");
        setCursoSelecionado("");
        setProfSelecionado("");
    }

    return (
        <aside className="filtroCompleto">
            <TituloFiltrar/>
            <br/>

            <DropdownFiltro 
                titulo="Unidade"
                opcoes={unidades}
                selecionado={unidadeSelecionada}
                setSelecionado={setUnidadeSelecionada}
                chipClass="chipAzul"
                aberto={aberto.unidade}
                alternarVisibilidade={() => alternarVisibilidade("unidade")} // passa o parâmetro para a função do pai
            />

            {unidadeSelecionada && (
                <DropdownFiltro 
                    titulo="Curso"
                    opcoes={cursos}
                    selecionado={cursoSelecionado}
                    setSelecionado={setCursoSelecionado}
                    chipClass="chipAzul"
                    aberto={aberto.curso}
                    alternarVisibilidade={() => alternarVisibilidade("curso")}
                />
            )}

            <DropdownFiltro 
                titulo="Professor"
                opcoes={professores}
                selecionado={profSelecionado}
                setSelecionado={setProfSelecionado}
                chipClass="chipAzul"
                aberto={aberto.prof}
                alternarVisibilidade={() => alternarVisibilidade("prof")}
            />

            <div className="linhaAbaixo"></div>
            <BotaoLimpar onClick={limparFiltros} corBotao={"botaoAzul"}/>
        </aside>
    )
}

export default FiltroAlunos;
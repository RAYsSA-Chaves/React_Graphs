import DropdownFiltro from "../dropFiltros/dropFiltros.jsx";
import BotaoLimpar from "../botaoLimpar/botaoLimpar.jsx";
import TituloFiltrar from "../tituloFiltrar/tituloFiltrar.jsx";
import unidadesCursos from "../../data/lista_unidadesCursos.js";
import professores from "../../data/lista_professores.js";
import "../filtroAlunosAtivos/filtroAlunosAtivos.css";

function FiltroDesligados ({
    unidadeSelecionada2,
    setUnidadeSelecionada2,
    cursoSelecionado2,
    setCursoSelecionado2,
    profSelecionado2,
    setProfSelecionado2,
    aberto,
    alternarVisibilidade
}) {
    // Guardar unidades
    const unidades = Object.keys(unidadesCursos);
    // Guardar cursos relacionados ao filtro de unidade selecionado
    const cursos = unidadeSelecionada2 ? unidadesCursos[unidadeSelecionada2] : [];

    // Função do botão limpar
    function limparFiltros() {
        setUnidadeSelecionada2("");
        setCursoSelecionado2("");
        setProfSelecionado2("");
    }

    return (
        <aside className="filtroCompleto">
            <TituloFiltrar/>
            <br/>

            <DropdownFiltro 
                titulo="Unidade"
                opcoes={unidades}
                selecionado={unidadeSelecionada2}
                setSelecionado={setUnidadeSelecionada2}
                chipClass="chipVerde"
                aberto={aberto.unidade}
                alternarVisibilidade={() => alternarVisibilidade("unidade2")} // passa o parâmetro para a função do pai
            />

            {unidadeSelecionada2 && (
                <DropdownFiltro 
                    titulo="Curso"
                    opcoes={cursos}
                    selecionado={cursoSelecionado2}
                    setSelecionado={setCursoSelecionado2}
                    chipClass="chipVerde"
                    aberto={aberto.curso}
                    alternarVisibilidade={() => alternarVisibilidade("curso2")}
                />
            )}

            <DropdownFiltro 
                titulo="Professor"
                opcoes={professores}
                selecionado={profSelecionado2}
                setSelecionado={setProfSelecionado2}
                chipClass="chipVerde"
                aberto={aberto.prof}
                alternarVisibilidade={() => alternarVisibilidade("prof2")}
            />

            <div className="linhaAbaixo"></div>
            <BotaoLimpar onClick={limparFiltros} corBotao={"botaoVerde"}/>
        </aside>
    )
}

export default FiltroDesligados;
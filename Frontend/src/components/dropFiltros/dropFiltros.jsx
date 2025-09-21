import "./dropFiltros.css";
import { ChevronDown, ChevronUp, X} from "lucide-react";

function DropdownFiltro({ titulo, opcoes, selecionado, setSelecionado, chipClass, aberto, alternarVisibilidade }) {
    // Desselecionar o filtro
    function limpar(event) {
        event.stopPropagation(); // impede que o evento dispare outros eventos
        setSelecionado("");
    }

    return (
        <div className="filtrosContainer">
            <div className="tituloFiltro" onClick={alternarVisibilidade}>
                <h3>{titulo}</h3>
                {aberto ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}
            </div>

            {aberto && (
                <div className="containerChips">
                    {opcoes.map((opcao, index) => {
                        const estaAtivo = opcao === selecionado;
                        return (
                            <p
                                key={index}
                                className={estaAtivo ? `${chipClass}Ativo` : chipClass}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    if (estaAtivo) {
                                        limpar(event);
                                    }
                                    else {
                                        setSelecionado(opcao);
                                    }
                                }}
                            >
                                {opcao}
                                {estaAtivo && <X size={14} className="iconeX" onClick={limpar} />}
                            </p>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default DropdownFiltro;
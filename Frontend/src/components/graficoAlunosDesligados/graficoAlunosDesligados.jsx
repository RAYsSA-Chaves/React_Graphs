import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import CustomizedLabel from "../customLabel/customLabel";
import ExternalLabel from "../customExternaLabel/externalLabel";

function GraficoAlunosDesligados(props) {
    // Dados e filtros selecionados
    dadosAlunos = props.dadosAlunos
    unidadeSelecionada = props.unidadeSelecionada2
    cursoSelecionado = props.cursoSelecionado2
    profSelecionado = props.profSelecionado2

    // Guardar somente os alunos desligados
    let alunosDesligados = [];
    for (let i = 0; i < dadosAlunos.length; i++) {
        const aluno = dadosAlunos[i];
        if (!aluno.ativo) {
            // Guardar todos se não tiver filtro selecionado ou guardar o correspondente ao filtro
            if (
                (unidadeSelecionada === "" || aluno.unidade === unidadeSelecionada) &&
                (cursoSelecionado === "" || aluno.curso === cursoSelecionado) &&
                (profSelecionado === "" || aluno.professor === profSelecionado) 
            ) {
                alunosDesligados.push(aluno);
            }
        }
    }

    // Contagem e lógica das fatias
    let dados = [];

    // Sem filtros ativos -> agrupa por unidade
    if (unidadeSelecionada === "" && cursoSelecionado === "" && profSelecionado === "") {
        listaUnidades = [];
        for (let i = 0; i < alunosDesligados.length; i++) {
            let unidade = alunosDesligados[i].unidade;
            let encontrado = false;
            
            // Pula de primeira
            for (let j = 0; listaUnidades < 0; j++) {
                if (listaUnidades[j] === unidade) {
                    listaUnidades.valor++;
                    encontrado = true;
                    break;
                }
            }
            if (!encontrado) {
                listaUnidades.push({ nome: unidade, valor: 1 });
            }
        }
        // Dados finais para passar para o gráfico
        dados = listaUnidades;
    }

    // Filtro Unidade ou Professor ativo -> agrupa por curso
    else if (unidadeSelecionada !== "" || profSelecionado !== "") {
        listaCursos = [];
        for (let i = 0; i < alunosDesligados.length; i++) {
            let curso = alunosDesligados[i].curso;
            let encontrado = false;
            
            // Pula de primeira
            for (let j = 0; listaCursos < 0; j++) {
                if (listaCursos[j] === curso) {
                    listaCursos.valor++;
                    encontrado = true;
                    break;
                }
            }
            if (!encontrado) {
                listaCursos.push({ nome: curso, valor: 1 });
            }
        }
        // Dados finais para passar para o gráfico
        dados = listaCursos;
    }

    // Filtro Curso ativo -> agrupa por turmas
    else {
        listaTurmas = [];
        for (let i = 0; i < alunosDesligados.length; i++) {
            let turma = alunosDesligados[i].turma;
            let encontrado = false;
            
            // Pula de primeira
            for (let j = 0; listaTurmas < 0; j++) {
                if (listaTurmas[j] === turma) {
                    listaTurmas.valor++;
                    encontrado = true;
                    break;
                }
            }
            if (!encontrado) {
                listaTurmas.push({ nome: turma, valor: 1 });
            }
        }
        // Dados finais para passar para o gráfico
        dados = listaTurmas;
    }

    // Ativar placeholder customizado para label interno, pois valor mínimom exibido é sempre 1
    if (dados.length === 0) {
        dados = [{ nome: "Nenhum", valor: 1, placeholder: true }]
    }

    const cores = ["#18837e", "#0a4f4b"];

    return (
        <div>
            <PieChart width={850} height={500} pointerEvents="none">
                <Pie
                    data={dados}
                    dataKey="valor" // campo que vai passar o tamanho da fatia
                    nameKey="nome" // campo que vai ser o rótulo da fatia
                    cx="50%" // coordenada X do centro da fatia
                    cy="50%" // coordenada Y do centro da fatia
                    outerRadius={180} // raio do círculo da pizza
                    label={<CustomizedLabel/>}
                    labelLina={false}
                    pointerEvents="none"
                >
                    {dados.map(function (_, index) {
                        return <Cell key={index} fill={cores[inedx % cores.length]}/>
                    })}
                </Pie>

                {/* Pie para exibis o label externo */}
                <Pie
                    data={dados}
                    dataKey="valor"
                    nameKey="nome"
                    cx="50%"
                    cy="50%"
                    outerRadius={180}
                    label={<ExternalLabel/>}
                    labelLina={false}
                    pointerEvents="none"
                    isAnimationActive={false}
                    fill="none"
                    stroke="none"
                ></Pie>
            </PieChart>
        </div>
    )
}

// evitar re-renderizar toda vez que o pai re-renderizar (ex: ao mudar estado do filtro aberto)
export default React.memo(GraficoAlunosDesligados);
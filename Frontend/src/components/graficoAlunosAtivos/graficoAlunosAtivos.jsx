import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import CustomizedLabel from "../customLabel/customLabel";
import ExternalLabel from "../customExternalLabel/externalLabel";

function GraficoAlunosAtivos(props) {
    // Dados e filtros selecionados
    const dadosAlunos = props.dadosAlunos;
    let unidadeSelecionada = props.unidadeSelecionada;
    let cursoSelecionado = props.cursoSelecionado;
    let profSelecionado = props.profSelecionado;

    // Guardar somente os alunos ativos
    let alunosAtivos = [];
    for (let i = 0; i < dadosAlunos.length; i++) {
        const aluno = dadosAlunos[i];
        if (aluno.ativo) {
            // Guardar todos se não tiver filtro selecionado ou guardar o correspondente ao filtro
            if (
                (unidadeSelecionada === "" || aluno.unidade === unidadeSelecionada) &&
                (cursoSelecionado === "" || aluno.curso === cursoSelecionado) &&
                (profSelecionado === "" || aluno.professor === profSelecionado) 
            ) {
                alunosAtivos.push(aluno);
            }
        }
    }

    // Contagem e lógica das fatias
    let dados = [];

    // Sem filtros ativos -> agrupa por unidade
    if (unidadeSelecionada === "" && cursoSelecionado === "" && profSelecionado === "") {
        let listaUnidades = [];
        for (let i = 0; i < alunosAtivos.length; i++) {
            let unidade = alunosAtivos[i].unidade;
            let encontrado = false;
            
            // Pula de primeira
            for (let j = 0; j < listaUnidades.length; j++) {
                if (listaUnidades[j].nome === unidade) {
                    listaUnidades[j].valor++;
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

    // Filtro Curso ativo -> agrupa por turmas
    else if (unidadeSelecionada !== "" && cursoSelecionado !== "") {
        let listaTurmas = [];
        for (let i = 0; i < alunosAtivos.length; i++) {
            let turma = alunosAtivos[i].turma;
            let encontrado = false;
            
            // Pula de primeira
            for (let j = 0; j < listaTurmas.length; j++) {
                if (listaTurmas[j].nome === turma) {
                    listaTurmas[j].valor++;
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

    // Filtro Unidade ou Professor ativo -> agrupa por curso
    else if (unidadeSelecionada !== "" || profSelecionado !== "") {
        let listaCursos = [];
        for (let i = 0; i < alunosAtivos.length; i++) {
            let curso = alunosAtivos[i].curso;
            let encontrado = false;
            
            // Pula de primeira
            for (let j = 0; j < listaCursos.length; j++) {
                if (listaCursos[j].nome === curso) {
                    listaCursos[j].valor++;
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

    // Ativar placeholder customizado para label interno, pois valor mínimom exibido é sempre 1
    if (dados.length === 0) {
        dados = [{ nome: "Nenhum", valor: 1, placeholder: true }]
    }

    const cores = ["#007bc0", "#004975"];

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
                    labelLine={false}
                    label={<CustomizedLabel/>}
                    pointerEvents="none"
                >
                    {dados.map(function (_, index) {
                        return <Cell key={index} fill={cores[index % cores.length]}/>
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
                    labelLine={false}
                    label={<ExternalLabel/>}
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
export default React.memo(GraficoAlunosAtivos);
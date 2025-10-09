// d) Declara a constante de tarefas (use let para permitir modificações)
let tarefas = [];

// e) Declara a função listar
function listar() {
    return tarefas;
}

// i) Declara a função buscarPeloId
function buscarPeloId(tarefaId) {
    return tarefas.find(t => t.id === tarefaId) || null;
}

// l) Declara a função criar
function criar(tarefa) {
    const novaTarefa = {
        ...tarefa,
        id: Math.random().toString(36).substr(2, 9) // Gera um ID aleatório
    };
    tarefas.push(novaTarefa);
    return novaTarefa;
}

// p) Declara a função atualizar
function atualizar(tarefaId, tarefa) {
    const index = tarefas.findIndex(t => t.id === tarefaId);
    if (index === -1) {
        return null;
    }
    tarefas[index] = { ...tarefas[index], ...tarefa };
    return tarefas[index];
}

// t) Declara a função remover
function remover(tarefaId) {
    const index = tarefas.findIndex(t => t.id === tarefaId);
    if (index === -1) {
        return null;
    }
    const [tarefaRemovida] = tarefas.splice(index, 1);
    return tarefaRemovida;
}

// f, j, m, q, u) Exporta todas as funções
module.exports = {
    listar,
    buscarPeloId,
    criar,
    atualizar,
    remover
};
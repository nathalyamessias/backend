// d) Declara a função listar
const listar = (req, res) => {
    res.json([]);
};

// g) Declara a função buscarPeloId
const buscarPeloId = (req, res) => {
    // i) Adiciona condição para idTarefa igual a 1
    if (req.params.tarefaId === '1') {
        return res.status(404).json({ msg: "Tarefa não encontrada" });
    }
    res.json({});
};

// k) Declara a função criar
const criar = (req, res) => {
    res.status(201).json({ id: "1a2b" });
};

// n) Declara a função atualizar
const atualizar = (req, res) => {
    // p) Adiciona condição para idTarefa igual a 1
    if (req.params.tarefaId === '1') {
        return res.status(404).json({ msg: "Tarefa não encontrada" });
    }
    res.json({ id: "1a2b" });
};

// r) Declara a função remover
const remover = (req, res) => {
    // t) Adiciona condição para idTarefa igual a 1
    if (req.params.tarefaId === '1') {
        return res.status(404).json({ msg: "Tarefa não encontrada" });
    }
    res.status(204).send();
};

// e, h, l, o, s) Exporta todas as funções
module.exports = {
    listar,
    buscarPeloId,
    criar,
    atualizar,
    remover,
};

const express = require('express');
const router = express.Router();

// a) Importa o controller
const tarefaController = require('../controllers/tarefaController');

// b) Altera a rota para usar o controller
router.get('/', tarefaController.listar);

// j) Altera a rota para usar o controller
router.post('/', tarefaController.criar);

// f) Altera a rota para usar o controller
router.get('/:tarefaId', tarefaController.buscarPeloId);

// m) Altera a rota para usar o controller
router.put('/:tarefaId', tarefaController.atualizar);

// q) Altera a rota para usar o controller
router.delete('/:tarefaId', tarefaController.remover);

module.exports = router;


let tarefas = [
    "Estudar JavaScript",
    "Fazer exercícios de arrays",
    "Preparar apresentação",
    "Enviar relatório",
    "Terminar modulo 4 - Feito",
    "Aprender html e css - Feito"
  ];

  //QUESTÃO 01
  console.log("Lista de tarefas: ")
  for (let i = 0; i < tarefas.length; i++){
    console.log(`Posição ${i+1} - ${tarefas[i]}`);
  }

  //QUESTÃO 02
  function verificaTarefas (tarefas) {
    return !tarefas.includes("Feito");
  }

  let tarefasPendentes = tarefas.filter(verificaTarefas);
  console.log("Tarefas pendentes: ");
  console.log(tarefasPendentes);

  //QUESTÃO 03
  let tarefasOrdenadas = tarefas.sort();
  console.log("Tarefas ordenadas: ");
  console.log(tarefasOrdenadas);

  //QUESTÃO 04
  let tarefasIniciais = tarefas.slice(0,2);
  console.log("Primeiras tarefas: ");
  console.log(tarefasIniciais);

  //QUESTÃO 05
  let tarefasSemAUltima = tarefas.pop();
  console.log("Tarefas com a última tarefa removida: ");
  console.log(tarefas);

  //QUESTÃO 06
  let tarefaAdicionada = tarefas.push("Ler livro novo");
  console.log("Tarefas atualizadas com a tarefa adicionada: ");
  console.log(tarefas);
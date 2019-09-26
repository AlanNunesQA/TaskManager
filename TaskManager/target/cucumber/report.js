$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/task/com/TaskManager/cucumber/TaskManager.feature");
formatter.feature({
  "line": 1,
  "name": "My Tasks",
  "description": "",
  "id": "my-tasks",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Validar My Tasks menu",
  "description": "",
  "id": "my-tasks;validar-my-tasks-menu",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "o usuario navegar para a seguinte tela \"\u003ctela\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "o sistema deve manter o menu visivel",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "my-tasks;validar-my-tasks-menu;",
  "rows": [
    {
      "cells": [
        "tela"
      ],
      "line": 11,
      "id": "my-tasks;validar-my-tasks-menu;;1"
    },
    {
      "cells": [
        "user-instructions"
      ],
      "line": 12,
      "id": "my-tasks;validar-my-tasks-menu;;2"
    },
    {
      "cells": [
        "user-stories"
      ],
      "line": 13,
      "id": "my-tasks;validar-my-tasks-menu;;3"
    },
    {
      "cells": [
        "tasks"
      ],
      "line": 14,
      "id": "my-tasks;validar-my-tasks-menu;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 15320966000,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Validar My Tasks menu",
  "description": "",
  "id": "my-tasks;validar-my-tasks-menu;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "o usuario navegar para a seguinte tela \"user-instructions\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "o sistema deve manter o menu visivel",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user-instructions",
      "offset": 40
    }
  ],
  "location": "TaskManager.o_usuario_navegar_para_a_seguinte_tela(String)"
});
formatter.result({
  "duration": 2177735100,
  "status": "passed"
});
formatter.match({
  "location": "TaskManager.o_sistema_deve_manter_o_menu_visivel()"
});
formatter.result({
  "duration": 63639500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 14351135500,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Validar My Tasks menu",
  "description": "",
  "id": "my-tasks;validar-my-tasks-menu;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "o usuario navegar para a seguinte tela \"user-stories\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "o sistema deve manter o menu visivel",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user-stories",
      "offset": 40
    }
  ],
  "location": "TaskManager.o_usuario_navegar_para_a_seguinte_tela(String)"
});
formatter.result({
  "duration": 3515244700,
  "status": "passed"
});
formatter.match({
  "location": "TaskManager.o_sistema_deve_manter_o_menu_visivel()"
});
formatter.result({
  "duration": 64178500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 12280700900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Validar My Tasks menu",
  "description": "",
  "id": "my-tasks;validar-my-tasks-menu;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "o usuario navegar para a seguinte tela \"tasks\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "o sistema deve manter o menu visivel",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "tasks",
      "offset": 40
    }
  ],
  "location": "TaskManager.o_usuario_navegar_para_a_seguinte_tela(String)"
});
formatter.result({
  "duration": 2876372200,
  "status": "passed"
});
formatter.match({
  "location": "TaskManager.o_sistema_deve_manter_o_menu_visivel()"
});
formatter.result({
  "duration": 66479700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 13565827800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Mensagem de aviso ao usuario",
  "description": "",
  "id": "my-tasks;mensagem-de-aviso-ao-usuario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "o sistema deve apresentar a mensagem \"Hey John, this is your todo list for today:\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TaskManager.o_usuario_estiver_na_tela_de_My_Tasks()"
});
formatter.result({
  "duration": 2066924600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hey John, this is your todo list for today:",
      "offset": 38
    }
  ],
  "location": "TaskManager.o_sistema_deve_apresentar_a_mensagem(String)"
});
formatter.result({
  "duration": 615798000,
  "error_message": "task.com.TaskManager.util.TestException: Mensagem diferente da esperada\r\n\tat task.com.TaskManager.task.TaskManager.o_sistema_deve_apresentar_a_mensagem(TaskManager.java:88)\r\n\tat ✽.Then o sistema deve apresentar a mensagem \"Hey John, this is your todo list for today:\"(src/test/java/task/com/TaskManager/cucumber/TaskManager.feature:18)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Insercao de nova Task",
  "description": "",
  "id": "my-tasks;insercao-de-nova-task",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "o usuario inserir o nome da task",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "clicar no botao \"\u003cbotao\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "o sistema deve criar uma nova tarefa",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "my-tasks;insercao-de-nova-task;",
  "rows": [
    {
      "cells": [
        "botao"
      ],
      "line": 27,
      "id": "my-tasks;insercao-de-nova-task;;1"
    },
    {
      "cells": [
        "enter"
      ],
      "line": 28,
      "id": "my-tasks;insercao-de-nova-task;;2"
    },
    {
      "cells": [
        "Adicionar Tarefa"
      ],
      "line": 29,
      "id": "my-tasks;insercao-de-nova-task;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 13327947100,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Insercao de nova Task",
  "description": "",
  "id": "my-tasks;insercao-de-nova-task;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "o usuario inserir o nome da task",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "clicar no botao \"enter\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "o sistema deve criar uma nova tarefa",
  "keyword": "Then "
});
formatter.match({
  "location": "TaskManager.o_usuario_estiver_na_tela_de_My_Tasks()"
});
formatter.result({
  "duration": 2116551200,
  "status": "passed"
});
formatter.match({
  "location": "TaskManager.o_usuario_inserir_o_nome_da_task()"
});
formatter.result({
  "duration": 59186000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enter",
      "offset": 17
    }
  ],
  "location": "TaskManager.clicar_no_botao(String)"
});
formatter.result({
  "duration": 37612400,
  "status": "passed"
});
formatter.match({
  "location": "TaskManager.o_sistema_deve_criar_uma_nova_tarefa()"
});
formatter.result({
  "duration": 68526600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 12993648100,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Insercao de nova Task",
  "description": "",
  "id": "my-tasks;insercao-de-nova-task;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "o usuario inserir o nome da task",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "clicar no botao \"Adicionar Tarefa\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "o sistema deve criar uma nova tarefa",
  "keyword": "Then "
});
formatter.match({
  "location": "TaskManager.o_usuario_estiver_na_tela_de_My_Tasks()"
});
formatter.result({
  "duration": 3268391200,
  "status": "passed"
});
formatter.match({
  "location": "TaskManager.o_usuario_inserir_o_nome_da_task()"
});
formatter.result({
  "duration": 64746100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adicionar Tarefa",
      "offset": 17
    }
  ],
  "location": "TaskManager.clicar_no_botao(String)"
});
formatter.result({
  "duration": 50279400,
  "status": "passed"
});
formatter.match({
  "location": "TaskManager.o_sistema_deve_criar_uma_nova_tarefa()"
});
formatter.result({
  "duration": 67241400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 15053172600,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Botao Gerenciar Tarefas",
  "description": "",
  "id": "my-tasks;botao-gerenciar-tarefas",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "o usuario possuir uma task cadastrada",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "o sistema deve apresentar o botao \"Manage Subtasks\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TaskManager.o_usuario_estiver_na_tela_de_My_Tasks()"
});
formatter.result({
  "duration": 2247175000,
  "status": "passed"
});
formatter.match({
  "location": "TaskManager.o_usuario_possuir_uma_task_cadastrada()"
});
formatter.result({
  "duration": 20785900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manage Subtasks",
      "offset": 35
    }
  ],
  "location": "TaskManager.o_sistema_deve_apresentar_o_botao(String)"
});
formatter.result({
  "duration": 65916700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 13063067200,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Abertura modal sub tarefas",
  "description": "",
  "id": "my-tasks;abertura-modal-sub-tarefas",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "o usuario clicar na opcao Manage Subtasks",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "o sistema deve abrir a modal de subtasks",
  "keyword": "Then "
});
formatter.match({
  "location": "TaskManager.o_usuario_estiver_na_tela_de_My_Tasks()"
});
formatter.result({
  "duration": 2349108200,
  "status": "passed"
});
formatter.match({
  "location": "TaskManager.o_usuario_clicar_na_opcao()"
});
formatter.result({
  "duration": 70225300,
  "status": "passed"
});
formatter.match({
  "location": "TaskManager.o_sistema_deve_abrir_a_modal_de_subtasks()"
});
formatter.result({
  "duration": 582412000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 41,
  "name": "Insercao de nova subtask",
  "description": "",
  "id": "my-tasks;insercao-de-nova-subtask",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "o usuario clicar na opcao Manage Subtasks",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "o usuario inserir o nome \"\u003cnome\u003e\" da subtask",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "o usuario inserir a data \"\u003cdata\u003e\" da subtask",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "clicar no botao \"\u003cbotao\u003e\" para criacao de subtask",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "o sistema deve \"\u003copcao\u003e\" a criacao da subtask",
  "keyword": "Then "
});
formatter.examples({
  "line": 49,
  "name": "",
  "description": "",
  "id": "my-tasks;insercao-de-nova-subtask;",
  "rows": [
    {
      "cells": [
        "nome",
        "data",
        "botao",
        "opcao"
      ],
      "line": 50,
      "id": "my-tasks;insercao-de-nova-subtask;;1"
    },
    {
      "comments": [
        {
          "line": 51,
          "value": "##      | espaco                                                                                                                                                                                                                                                      | 03/30/1994 | enter            | impedir  |"
        },
        {
          "line": 52,
          "value": "##      | ab                                                                                                                                                                                                                                                          | 03/30/1994 | enter            | impedir  |"
        },
        {
          "line": 53,
          "value": "##      |                                                                                                                                                                                                                                                             | 03/30/1994 | enter            | impedir  |"
        },
        {
          "line": 54,
          "value": "##      | Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste | 03/30/1994 | enter            | impedir  |"
        }
      ],
      "cells": [
        "espaco",
        "03/30/1994",
        "Adicionar Tarefa",
        "impedir"
      ],
      "line": 55,
      "id": "my-tasks;insercao-de-nova-subtask;;2"
    },
    {
      "cells": [
        "ab",
        "03/30/1994",
        "Adicionar Tarefa",
        "impedir"
      ],
      "line": 56,
      "id": "my-tasks;insercao-de-nova-subtask;;3"
    },
    {
      "cells": [
        "",
        "03/30/1994",
        "Adicionar Tarefa",
        "impedir"
      ],
      "line": 57,
      "id": "my-tasks;insercao-de-nova-subtask;;4"
    },
    {
      "cells": [
        "Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Taste Teste Teste",
        "03/30/1994",
        "Adicionar Tarefa",
        "impedir"
      ],
      "line": 58,
      "id": "my-tasks;insercao-de-nova-subtask;;5"
    },
    {
      "comments": [
        {
          "line": 59,
          "value": "##      | abc                                                                                                                                                                                                                                                         | 03/30/1994 | enter            | impedir  |"
        },
        {
          "line": 60,
          "value": "##      | Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Tbste Teste Tes   | 03/30/1994 | enter            | impedir  |"
        }
      ],
      "cells": [
        "abcd",
        "03/30/1994",
        "Adicionar Tarefa",
        "permitir"
      ],
      "line": 61,
      "id": "my-tasks;insercao-de-nova-subtask;;6"
    },
    {
      "cells": [
        "Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Tcste Teste Tes",
        "03/30/1994",
        "Adicionar Tarefa",
        "permitir"
      ],
      "line": 62,
      "id": "my-tasks;insercao-de-nova-subtask;;7"
    },
    {
      "cells": [
        "abcde",
        "30/03/1994",
        "Adicionar Tarefa",
        "impedir"
      ],
      "line": 63,
      "id": "my-tasks;insercao-de-nova-subtask;;8"
    },
    {
      "cells": [
        "abcdf",
        "abc",
        "Adicionar Tarefa",
        "impedir"
      ],
      "line": 64,
      "id": "my-tasks;insercao-de-nova-subtask;;9"
    },
    {
      "cells": [
        "abcdg",
        "...",
        "Adicionar Tarefa",
        "impedir"
      ],
      "line": 65,
      "id": "my-tasks;insercao-de-nova-subtask;;10"
    },
    {
      "cells": [
        "abcdh",
        "1994/03/30",
        "Adicionar Tarefa",
        "impedir"
      ],
      "line": 66,
      "id": "my-tasks;insercao-de-nova-subtask;;11"
    },
    {
      "cells": [
        "abcdi",
        "1994/30/03",
        "Adicionar Tarefa",
        "impedir"
      ],
      "line": 67,
      "id": "my-tasks;insercao-de-nova-subtask;;12"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 12998157700,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 51,
      "value": "##      | espaco                                                                                                                                                                                                                                                      | 03/30/1994 | enter            | impedir  |"
    },
    {
      "line": 52,
      "value": "##      | ab                                                                                                                                                                                                                                                          | 03/30/1994 | enter            | impedir  |"
    },
    {
      "line": 53,
      "value": "##      |                                                                                                                                                                                                                                                             | 03/30/1994 | enter            | impedir  |"
    },
    {
      "line": 54,
      "value": "##      | Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste | 03/30/1994 | enter            | impedir  |"
    }
  ],
  "line": 55,
  "name": "Insercao de nova subtask",
  "description": "",
  "id": "my-tasks;insercao-de-nova-subtask;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "o usuario clicar na opcao Manage Subtasks",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "o usuario inserir o nome \"espaco\" da subtask",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "o usuario inserir a data \"03/30/1994\" da subtask",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "clicar no botao \"Adicionar Tarefa\" para criacao de subtask",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "o sistema deve \"impedir\" a criacao da subtask",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaskManager.o_usuario_estiver_na_tela_de_My_Tasks()"
});
formatter.result({
  "duration": 2243299200,
  "status": "passed"
});
formatter.match({
  "location": "TaskManager.o_usuario_clicar_na_opcao()"
});
formatter.result({
  "duration": 892702800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "espaco",
      "offset": 26
    }
  ],
  "location": "TaskManager.o_usuario_inserir_o_nome_da_subtask(String)"
});
formatter.result({
  "duration": 40048700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "03/30/1994",
      "offset": 26
    }
  ],
  "location": "TaskManager.o_usuario_inserir_a_data_da_subtask(String)"
});
formatter.result({
  "duration": 86804300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adicionar Tarefa",
      "offset": 17
    }
  ],
  "location": "TaskManager.clicar_no_botao_para_criacao_de_subtask(String)"
});
formatter.result({
  "duration": 62370900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "impedir",
      "offset": 16
    }
  ],
  "location": "TaskManager.o_sistema_deve_a_criacao_da_subtask(String)"
});
formatter.result({
  "duration": 39176100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 14417696600,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Insercao de nova subtask",
  "description": "",
  "id": "my-tasks;insercao-de-nova-subtask;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "o usuario clicar na opcao Manage Subtasks",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "o usuario inserir o nome \"ab\" da subtask",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "o usuario inserir a data \"03/30/1994\" da subtask",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "clicar no botao \"Adicionar Tarefa\" para criacao de subtask",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "o sistema deve \"impedir\" a criacao da subtask",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaskManager.o_usuario_estiver_na_tela_de_My_Tasks()"
});
formatter.result({
  "duration": 2062533300,
  "status": "passed"
});
formatter.match({
  "location": "TaskManager.o_usuario_clicar_na_opcao()"
});
formatter.result({
  "duration": 66668900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ab",
      "offset": 26
    }
  ],
  "location": "TaskManager.o_usuario_inserir_o_nome_da_subtask(String)"
});
formatter.result({
  "duration": 46111200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "03/30/1994",
      "offset": 26
    }
  ],
  "location": "TaskManager.o_usuario_inserir_a_data_da_subtask(String)"
});
formatter.result({
  "duration": 89913300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adicionar Tarefa",
      "offset": 17
    }
  ],
  "location": "TaskManager.clicar_no_botao_para_criacao_de_subtask(String)"
});
formatter.result({
  "duration": 50711900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "impedir",
      "offset": 16
    }
  ],
  "location": "TaskManager.o_sistema_deve_a_criacao_da_subtask(String)"
});
formatter.result({
  "duration": 620137100,
  "error_message": "task.com.TaskManager.util.TestException: Task  cadastrado erroneamente\r\n\tat task.com.TaskManager.task.TaskManager.o_sistema_deve_a_criacao_da_subtask(TaskManager.java:266)\r\n\tat ✽.Then o sistema deve \"impedir\" a criacao da subtask(src/test/java/task/com/TaskManager/cucumber/TaskManager.feature:47)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 13071718500,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Insercao de nova subtask",
  "description": "",
  "id": "my-tasks;insercao-de-nova-subtask;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "o usuario clicar na opcao Manage Subtasks",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "o usuario inserir o nome \"\" da subtask",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "o usuario inserir a data \"03/30/1994\" da subtask",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "clicar no botao \"Adicionar Tarefa\" para criacao de subtask",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "o sistema deve \"impedir\" a criacao da subtask",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaskManager.o_usuario_estiver_na_tela_de_My_Tasks()"
});
formatter.result({
  "duration": 2494662300,
  "status": "passed"
});
formatter.match({
  "location": "TaskManager.o_usuario_clicar_na_opcao()"
});
formatter.result({
  "duration": 663515500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "TaskManager.o_usuario_inserir_o_nome_da_subtask(String)"
});
formatter.result({
  "duration": 46611900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "03/30/1994",
      "offset": 26
    }
  ],
  "location": "TaskManager.o_usuario_inserir_a_data_da_subtask(String)"
});
formatter.result({
  "duration": 84802600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adicionar Tarefa",
      "offset": 17
    }
  ],
  "location": "TaskManager.clicar_no_botao_para_criacao_de_subtask(String)"
});
formatter.result({
  "duration": 54268700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "impedir",
      "offset": 16
    }
  ],
  "location": "TaskManager.o_sistema_deve_a_criacao_da_subtask(String)"
});
formatter.result({
  "duration": 612544500,
  "error_message": "task.com.TaskManager.util.TestException: Task  cadastrado erroneamente\r\n\tat task.com.TaskManager.task.TaskManager.o_sistema_deve_a_criacao_da_subtask(TaskManager.java:266)\r\n\tat ✽.Then o sistema deve \"impedir\" a criacao da subtask(src/test/java/task/com/TaskManager/cucumber/TaskManager.feature:47)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 13066265400,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Insercao de nova subtask",
  "description": "",
  "id": "my-tasks;insercao-de-nova-subtask;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "o usuario clicar na opcao Manage Subtasks",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "o usuario inserir o nome \"Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Taste Teste Teste\" da subtask",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "o usuario inserir a data \"03/30/1994\" da subtask",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "clicar no botao \"Adicionar Tarefa\" para criacao de subtask",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "o sistema deve \"impedir\" a criacao da subtask",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaskManager.o_usuario_estiver_na_tela_de_My_Tasks()"
});
formatter.result({
  "duration": 2742188500,
  "status": "passed"
});
formatter.match({
  "location": "TaskManager.o_usuario_clicar_na_opcao()"
});
formatter.result({
  "duration": 79325900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Taste Teste Teste",
      "offset": 26
    }
  ],
  "location": "TaskManager.o_usuario_inserir_o_nome_da_subtask(String)"
});
formatter.result({
  "duration": 570115800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "03/30/1994",
      "offset": 26
    }
  ],
  "location": "TaskManager.o_usuario_inserir_a_data_da_subtask(String)"
});
formatter.result({
  "duration": 84649700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adicionar Tarefa",
      "offset": 17
    }
  ],
  "location": "TaskManager.clicar_no_botao_para_criacao_de_subtask(String)"
});
formatter.result({
  "duration": 58885700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "impedir",
      "offset": 16
    }
  ],
  "location": "TaskManager.o_sistema_deve_a_criacao_da_subtask(String)"
});
formatter.result({
  "duration": 625720100,
  "error_message": "task.com.TaskManager.util.TestException: Task  cadastrado erroneamente\r\n\tat task.com.TaskManager.task.TaskManager.o_sistema_deve_a_criacao_da_subtask(TaskManager.java:266)\r\n\tat ✽.Then o sistema deve \"impedir\" a criacao da subtask(src/test/java/task/com/TaskManager/cucumber/TaskManager.feature:47)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 13073432200,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 59,
      "value": "##      | abc                                                                                                                                                                                                                                                         | 03/30/1994 | enter            | impedir  |"
    },
    {
      "line": 60,
      "value": "##      | Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Tbste Teste Tes   | 03/30/1994 | enter            | impedir  |"
    }
  ],
  "line": 61,
  "name": "Insercao de nova subtask",
  "description": "",
  "id": "my-tasks;insercao-de-nova-subtask;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "o usuario clicar na opcao Manage Subtasks",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "o usuario inserir o nome \"abcd\" da subtask",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "o usuario inserir a data \"03/30/1994\" da subtask",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "clicar no botao \"Adicionar Tarefa\" para criacao de subtask",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "o sistema deve \"permitir\" a criacao da subtask",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaskManager.o_usuario_estiver_na_tela_de_My_Tasks()"
});
formatter.result({
  "duration": 2159322500,
  "status": "passed"
});
formatter.match({
  "location": "TaskManager.o_usuario_clicar_na_opcao()"
});
formatter.result({
  "duration": 78233700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd",
      "offset": 26
    }
  ],
  "location": "TaskManager.o_usuario_inserir_o_nome_da_subtask(String)"
});
formatter.result({
  "duration": 52343500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "03/30/1994",
      "offset": 26
    }
  ],
  "location": "TaskManager.o_usuario_inserir_a_data_da_subtask(String)"
});
formatter.result({
  "duration": 87780100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adicionar Tarefa",
      "offset": 17
    }
  ],
  "location": "TaskManager.clicar_no_botao_para_criacao_de_subtask(String)"
});
formatter.result({
  "duration": 61802000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "permitir",
      "offset": 16
    }
  ],
  "location": "TaskManager.o_sistema_deve_a_criacao_da_subtask(String)"
});
formatter.result({
  "duration": 76481300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 12538878000,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Insercao de nova subtask",
  "description": "",
  "id": "my-tasks;insercao-de-nova-subtask;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "o usuario clicar na opcao Manage Subtasks",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "o usuario inserir o nome \"Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Tcste Teste Tes\" da subtask",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "o usuario inserir a data \"03/30/1994\" da subtask",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "clicar no botao \"Adicionar Tarefa\" para criacao de subtask",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "o sistema deve \"permitir\" a criacao da subtask",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaskManager.o_usuario_estiver_na_tela_de_My_Tasks()"
});
formatter.result({
  "duration": 3121700900,
  "status": "passed"
});
formatter.match({
  "location": "TaskManager.o_usuario_clicar_na_opcao()"
});
formatter.result({
  "duration": 76339500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Tcste Teste Tes",
      "offset": 26
    }
  ],
  "location": "TaskManager.o_usuario_inserir_o_nome_da_subtask(String)"
});
formatter.result({
  "duration": 503808300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "03/30/1994",
      "offset": 26
    }
  ],
  "location": "TaskManager.o_usuario_inserir_a_data_da_subtask(String)"
});
formatter.result({
  "duration": 80261600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adicionar Tarefa",
      "offset": 17
    }
  ],
  "location": "TaskManager.clicar_no_botao_para_criacao_de_subtask(String)"
});
formatter.result({
  "duration": 55377700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "permitir",
      "offset": 16
    }
  ],
  "location": "TaskManager.o_sistema_deve_a_criacao_da_subtask(String)"
});
formatter.result({
  "duration": 65726300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 12567731800,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Insercao de nova subtask",
  "description": "",
  "id": "my-tasks;insercao-de-nova-subtask;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "o usuario clicar na opcao Manage Subtasks",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "o usuario inserir o nome \"abcde\" da subtask",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "o usuario inserir a data \"30/03/1994\" da subtask",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "clicar no botao \"Adicionar Tarefa\" para criacao de subtask",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "o sistema deve \"impedir\" a criacao da subtask",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaskManager.o_usuario_estiver_na_tela_de_My_Tasks()"
});
formatter.result({
  "duration": 2339633300,
  "status": "passed"
});
formatter.match({
  "location": "TaskManager.o_usuario_clicar_na_opcao()"
});
formatter.result({
  "duration": 74459700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcde",
      "offset": 26
    }
  ],
  "location": "TaskManager.o_usuario_inserir_o_nome_da_subtask(String)"
});
formatter.result({
  "duration": 56736200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30/03/1994",
      "offset": 26
    }
  ],
  "location": "TaskManager.o_usuario_inserir_a_data_da_subtask(String)"
});
formatter.result({
  "duration": 106035400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adicionar Tarefa",
      "offset": 17
    }
  ],
  "location": "TaskManager.clicar_no_botao_para_criacao_de_subtask(String)"
});
formatter.result({
  "duration": 97732500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "impedir",
      "offset": 16
    }
  ],
  "location": "TaskManager.o_sistema_deve_a_criacao_da_subtask(String)"
});
formatter.result({
  "duration": 635247100,
  "error_message": "task.com.TaskManager.util.TestException: Task  cadastrado erroneamente\r\n\tat task.com.TaskManager.task.TaskManager.o_sistema_deve_a_criacao_da_subtask(TaskManager.java:266)\r\n\tat ✽.Then o sistema deve \"impedir\" a criacao da subtask(src/test/java/task/com/TaskManager/cucumber/TaskManager.feature:47)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 15360488000,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Insercao de nova subtask",
  "description": "",
  "id": "my-tasks;insercao-de-nova-subtask;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "o usuario clicar na opcao Manage Subtasks",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "o usuario inserir o nome \"abcdf\" da subtask",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "o usuario inserir a data \"abc\" da subtask",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "clicar no botao \"Adicionar Tarefa\" para criacao de subtask",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "o sistema deve \"impedir\" a criacao da subtask",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaskManager.o_usuario_estiver_na_tela_de_My_Tasks()"
});
formatter.result({
  "duration": 2150554000,
  "status": "passed"
});
formatter.match({
  "location": "TaskManager.o_usuario_clicar_na_opcao()"
});
formatter.result({
  "duration": 403712100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcdf",
      "offset": 26
    }
  ],
  "location": "TaskManager.o_usuario_inserir_o_nome_da_subtask(String)"
});
formatter.result({
  "duration": 54502600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 26
    }
  ],
  "location": "TaskManager.o_usuario_inserir_a_data_da_subtask(String)"
});
formatter.result({
  "duration": 74020600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adicionar Tarefa",
      "offset": 17
    }
  ],
  "location": "TaskManager.clicar_no_botao_para_criacao_de_subtask(String)"
});
formatter.result({
  "duration": 58431200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "impedir",
      "offset": 16
    }
  ],
  "location": "TaskManager.o_sistema_deve_a_criacao_da_subtask(String)"
});
formatter.result({
  "duration": 611403100,
  "error_message": "task.com.TaskManager.util.TestException: Task  cadastrado erroneamente\r\n\tat task.com.TaskManager.task.TaskManager.o_sistema_deve_a_criacao_da_subtask(TaskManager.java:266)\r\n\tat ✽.Then o sistema deve \"impedir\" a criacao da subtask(src/test/java/task/com/TaskManager/cucumber/TaskManager.feature:47)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 13338616000,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Insercao de nova subtask",
  "description": "",
  "id": "my-tasks;insercao-de-nova-subtask;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "o usuario clicar na opcao Manage Subtasks",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "o usuario inserir o nome \"abcdg\" da subtask",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "o usuario inserir a data \"...\" da subtask",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "clicar no botao \"Adicionar Tarefa\" para criacao de subtask",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "o sistema deve \"impedir\" a criacao da subtask",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaskManager.o_usuario_estiver_na_tela_de_My_Tasks()"
});
formatter.result({
  "duration": 2563887300,
  "status": "passed"
});
formatter.match({
  "location": "TaskManager.o_usuario_clicar_na_opcao()"
});
formatter.result({
  "duration": 85825300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcdg",
      "offset": 26
    }
  ],
  "location": "TaskManager.o_usuario_inserir_o_nome_da_subtask(String)"
});
formatter.result({
  "duration": 54232200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "...",
      "offset": 26
    }
  ],
  "location": "TaskManager.o_usuario_inserir_a_data_da_subtask(String)"
});
formatter.result({
  "duration": 84049000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adicionar Tarefa",
      "offset": 17
    }
  ],
  "location": "TaskManager.clicar_no_botao_para_criacao_de_subtask(String)"
});
formatter.result({
  "duration": 64225900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "impedir",
      "offset": 16
    }
  ],
  "location": "TaskManager.o_sistema_deve_a_criacao_da_subtask(String)"
});
formatter.result({
  "duration": 616579300,
  "error_message": "task.com.TaskManager.util.TestException: Task  cadastrado erroneamente\r\n\tat task.com.TaskManager.task.TaskManager.o_sistema_deve_a_criacao_da_subtask(TaskManager.java:266)\r\n\tat ✽.Then o sistema deve \"impedir\" a criacao da subtask(src/test/java/task/com/TaskManager/cucumber/TaskManager.feature:47)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 12527007300,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Insercao de nova subtask",
  "description": "",
  "id": "my-tasks;insercao-de-nova-subtask;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "o usuario clicar na opcao Manage Subtasks",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "o usuario inserir o nome \"abcdh\" da subtask",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "o usuario inserir a data \"1994/03/30\" da subtask",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "clicar no botao \"Adicionar Tarefa\" para criacao de subtask",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "o sistema deve \"impedir\" a criacao da subtask",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaskManager.o_usuario_estiver_na_tela_de_My_Tasks()"
});
formatter.result({
  "duration": 3260290500,
  "status": "passed"
});
formatter.match({
  "location": "TaskManager.o_usuario_clicar_na_opcao()"
});
formatter.result({
  "duration": 78672100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcdh",
      "offset": 26
    }
  ],
  "location": "TaskManager.o_usuario_inserir_o_nome_da_subtask(String)"
});
formatter.result({
  "duration": 60554100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1994/03/30",
      "offset": 26
    }
  ],
  "location": "TaskManager.o_usuario_inserir_a_data_da_subtask(String)"
});
formatter.result({
  "duration": 90978200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adicionar Tarefa",
      "offset": 17
    }
  ],
  "location": "TaskManager.clicar_no_botao_para_criacao_de_subtask(String)"
});
formatter.result({
  "duration": 50125700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "impedir",
      "offset": 16
    }
  ],
  "location": "TaskManager.o_sistema_deve_a_criacao_da_subtask(String)"
});
formatter.result({
  "duration": 611907200,
  "error_message": "task.com.TaskManager.util.TestException: Task  cadastrado erroneamente\r\n\tat task.com.TaskManager.task.TaskManager.o_sistema_deve_a_criacao_da_subtask(TaskManager.java:266)\r\n\tat ✽.Then o sistema deve \"impedir\" a criacao da subtask(src/test/java/task/com/TaskManager/cucumber/TaskManager.feature:47)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 15451044900,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "Insercao de nova subtask",
  "description": "",
  "id": "my-tasks;insercao-de-nova-subtask;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "o usuario clicar na opcao Manage Subtasks",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "o usuario inserir o nome \"abcdi\" da subtask",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "o usuario inserir a data \"1994/30/03\" da subtask",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "clicar no botao \"Adicionar Tarefa\" para criacao de subtask",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "o sistema deve \"impedir\" a criacao da subtask",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaskManager.o_usuario_estiver_na_tela_de_My_Tasks()"
});
formatter.result({
  "duration": 2977894300,
  "status": "passed"
});
formatter.match({
  "location": "TaskManager.o_usuario_clicar_na_opcao()"
});
formatter.result({
  "duration": 84259400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcdi",
      "offset": 26
    }
  ],
  "location": "TaskManager.o_usuario_inserir_o_nome_da_subtask(String)"
});
formatter.result({
  "duration": 55268800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1994/30/03",
      "offset": 26
    }
  ],
  "location": "TaskManager.o_usuario_inserir_a_data_da_subtask(String)"
});
formatter.result({
  "duration": 91624200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adicionar Tarefa",
      "offset": 17
    }
  ],
  "location": "TaskManager.clicar_no_botao_para_criacao_de_subtask(String)"
});
formatter.result({
  "duration": 58904400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "impedir",
      "offset": 16
    }
  ],
  "location": "TaskManager.o_sistema_deve_a_criacao_da_subtask(String)"
});
formatter.result({
  "duration": 624142600,
  "error_message": "task.com.TaskManager.util.TestException: Task  cadastrado erroneamente\r\n\tat task.com.TaskManager.task.TaskManager.o_sistema_deve_a_criacao_da_subtask(TaskManager.java:266)\r\n\tat ✽.Then o sistema deve \"impedir\" a criacao da subtask(src/test/java/task/com/TaskManager/cucumber/TaskManager.feature:47)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 14717506900,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "Validacao numero subtarefas",
  "description": "",
  "id": "my-tasks;validacao-numero-subtarefas",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 70,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "o sistema apresentar o botao \"Manage Subtasks\"",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "o sistema deve apresentar o numero de subtarefas dessa tarefa",
  "keyword": "Then "
});
formatter.match({
  "location": "TaskManager.o_usuario_estiver_na_tela_de_My_Tasks()"
});
formatter.result({
  "duration": 2451000500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manage Subtasks",
      "offset": 30
    }
  ],
  "location": "TaskManager.o_sistema_apresentar_o_botao(String)"
});
formatter.result({
  "duration": 22572800,
  "status": "passed"
});
formatter.match({
  "location": "TaskManager.o_sistema_deve_apresentar_o_numero_de_subtarefas_dessa_tarefa()"
});
formatter.result({
  "duration": 54863200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 74,
  "name": "Validacao criacao tasks",
  "description": "",
  "id": "my-tasks;validacao-criacao-tasks",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "o usuario inserir o nome da task \"\u003cnome\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "clicar no botao \"\u003cbotao\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "o sistema deve \"\u003copcao\u003e\" a criacao da task",
  "keyword": "Then "
});
formatter.examples({
  "line": 80,
  "name": "",
  "description": "",
  "id": "my-tasks;validacao-criacao-tasks;",
  "rows": [
    {
      "cells": [
        "nome",
        "botao",
        "opcao"
      ],
      "line": 81,
      "id": "my-tasks;validacao-criacao-tasks;;1"
    },
    {
      "cells": [
        "espaco",
        "enter",
        "impedir"
      ],
      "line": 82,
      "id": "my-tasks;validacao-criacao-tasks;;2"
    },
    {
      "cells": [
        "ab",
        "enter",
        "impedir"
      ],
      "line": 83,
      "id": "my-tasks;validacao-criacao-tasks;;3"
    },
    {
      "cells": [
        "",
        "enter",
        "impedir"
      ],
      "line": 84,
      "id": "my-tasks;validacao-criacao-tasks;;4"
    },
    {
      "cells": [
        "Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste",
        "enter",
        "impedir"
      ],
      "line": 85,
      "id": "my-tasks;validacao-criacao-tasks;;5"
    },
    {
      "cells": [
        "espaco",
        "Adicionar Tarefa",
        "impedir"
      ],
      "line": 86,
      "id": "my-tasks;validacao-criacao-tasks;;6"
    },
    {
      "cells": [
        "ab",
        "Adicionar Tarefa",
        "impedir"
      ],
      "line": 87,
      "id": "my-tasks;validacao-criacao-tasks;;7"
    },
    {
      "cells": [
        "",
        "Adicionar Tarefa",
        "impedir"
      ],
      "line": 88,
      "id": "my-tasks;validacao-criacao-tasks;;8"
    },
    {
      "cells": [
        "Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Taste Teste Teste",
        "Adicionar Tarefa",
        "impedir"
      ],
      "line": 89,
      "id": "my-tasks;validacao-criacao-tasks;;9"
    },
    {
      "cells": [
        "abc",
        "enter",
        "permitir"
      ],
      "line": 90,
      "id": "my-tasks;validacao-criacao-tasks;;10"
    },
    {
      "cells": [
        "Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Tbste Teste Tes",
        "enter",
        "permitir"
      ],
      "line": 91,
      "id": "my-tasks;validacao-criacao-tasks;;11"
    },
    {
      "cells": [
        "abcd",
        "Adicionar Tarefa",
        "permitir"
      ],
      "line": 92,
      "id": "my-tasks;validacao-criacao-tasks;;12"
    },
    {
      "cells": [
        "Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Tcste Teste Tes",
        "Adicionar Tarefa",
        "permitir"
      ],
      "line": 93,
      "id": "my-tasks;validacao-criacao-tasks;;13"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 13634830200,
  "status": "passed"
});
formatter.scenario({
  "line": 82,
  "name": "Validacao criacao tasks",
  "description": "",
  "id": "my-tasks;validacao-criacao-tasks;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "o usuario inserir o nome da task \"espaco\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "clicar no botao \"enter\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "o sistema deve \"impedir\" a criacao da task",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaskManager.o_usuario_estiver_na_tela_de_My_Tasks()"
});
formatter.result({
  "duration": 2583680900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "espaco",
      "offset": 34
    }
  ],
  "location": "TaskManager.o_usuario_inserir_o_nome_da_task(String)"
});
formatter.result({
  "duration": 50257800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enter",
      "offset": 17
    }
  ],
  "location": "TaskManager.clicar_no_botao(String)"
});
formatter.result({
  "duration": 404597900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "impedir",
      "offset": 16
    }
  ],
  "location": "TaskManager.o_sistema_deve_a_criacao_da_task(String)"
});
formatter.result({
  "duration": 5651594200,
  "error_message": "task.com.TaskManager.util.TestException: Elemento nao encontrado\r\n\tat task.com.TaskManager.task.TaskManager.o_sistema_deve_a_criacao_da_task(TaskManager.java:161)\r\n\tat ✽.Then o sistema deve \"impedir\" a criacao da task(src/test/java/task/com/TaskManager/cucumber/TaskManager.feature:78)\r\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //*[contains(@class, \u0027task_body col-md-7 limit-word-size\u0027)] (tried for 3 second(s) with 500 MILLISECONDS interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\r\n\tat task.com.TaskManager.task.TaskManager.o_sistema_deve_a_criacao_da_task(TaskManager.java:154)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[contains(@class, \u0027task_body col-md-7 limit-word-size\u0027)]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027DESKTOP-GSVR56V\u0027, ip: \u0027192.168.15.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:882)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:881)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\t... 57 more\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 14817388900,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "Validacao criacao tasks",
  "description": "",
  "id": "my-tasks;validacao-criacao-tasks;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "o usuario inserir o nome da task \"ab\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "clicar no botao \"enter\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "o sistema deve \"impedir\" a criacao da task",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaskManager.o_usuario_estiver_na_tela_de_My_Tasks()"
});
formatter.result({
  "duration": 2861496700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ab",
      "offset": 34
    }
  ],
  "location": "TaskManager.o_usuario_inserir_o_nome_da_task(String)"
});
formatter.result({
  "duration": 42805400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enter",
      "offset": 17
    }
  ],
  "location": "TaskManager.clicar_no_botao(String)"
});
formatter.result({
  "duration": 33232400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "impedir",
      "offset": 16
    }
  ],
  "location": "TaskManager.o_sistema_deve_a_criacao_da_task(String)"
});
formatter.result({
  "duration": 643914900,
  "error_message": "task.com.TaskManager.util.TestException: Task ab cadastrado erroneamente\r\n\tat task.com.TaskManager.task.TaskManager.o_sistema_deve_a_criacao_da_task(TaskManager.java:158)\r\n\tat ✽.Then o sistema deve \"impedir\" a criacao da task(src/test/java/task/com/TaskManager/cucumber/TaskManager.feature:78)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 15140227400,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "Validacao criacao tasks",
  "description": "",
  "id": "my-tasks;validacao-criacao-tasks;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "o usuario inserir o nome da task \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "clicar no botao \"enter\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "o sistema deve \"impedir\" a criacao da task",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaskManager.o_usuario_estiver_na_tela_de_My_Tasks()"
});
formatter.result({
  "duration": 2320785500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 34
    }
  ],
  "location": "TaskManager.o_usuario_inserir_o_nome_da_task(String)"
});
formatter.result({
  "duration": 31509400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enter",
      "offset": 17
    }
  ],
  "location": "TaskManager.clicar_no_botao(String)"
});
formatter.result({
  "duration": 39837900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "impedir",
      "offset": 16
    }
  ],
  "location": "TaskManager.o_sistema_deve_a_criacao_da_task(String)"
});
formatter.result({
  "duration": 635383200,
  "error_message": "task.com.TaskManager.util.TestException: Task  cadastrado erroneamente\r\n\tat task.com.TaskManager.task.TaskManager.o_sistema_deve_a_criacao_da_task(TaskManager.java:158)\r\n\tat ✽.Then o sistema deve \"impedir\" a criacao da task(src/test/java/task/com/TaskManager/cucumber/TaskManager.feature:78)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 13533499500,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "Validacao criacao tasks",
  "description": "",
  "id": "my-tasks;validacao-criacao-tasks;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "o usuario inserir o nome da task \"Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "clicar no botao \"enter\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "o sistema deve \"impedir\" a criacao da task",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaskManager.o_usuario_estiver_na_tela_de_My_Tasks()"
});
formatter.result({
  "duration": 2170061100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste",
      "offset": 34
    }
  ],
  "location": "TaskManager.o_usuario_inserir_o_nome_da_task(String)"
});
formatter.result({
  "duration": 465666600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enter",
      "offset": 17
    }
  ],
  "location": "TaskManager.clicar_no_botao(String)"
});
formatter.result({
  "duration": 31536600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "impedir",
      "offset": 16
    }
  ],
  "location": "TaskManager.o_sistema_deve_a_criacao_da_task(String)"
});
formatter.result({
  "duration": 653721500,
  "error_message": "task.com.TaskManager.util.TestException: Task Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste cadastrado erroneamente\r\n\tat task.com.TaskManager.task.TaskManager.o_sistema_deve_a_criacao_da_task(TaskManager.java:158)\r\n\tat ✽.Then o sistema deve \"impedir\" a criacao da task(src/test/java/task/com/TaskManager/cucumber/TaskManager.feature:78)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 13287621100,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
  "name": "Validacao criacao tasks",
  "description": "",
  "id": "my-tasks;validacao-criacao-tasks;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "o usuario inserir o nome da task \"espaco\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "clicar no botao \"Adicionar Tarefa\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "o sistema deve \"impedir\" a criacao da task",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaskManager.o_usuario_estiver_na_tela_de_My_Tasks()"
});
formatter.result({
  "duration": 3092270500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "espaco",
      "offset": 34
    }
  ],
  "location": "TaskManager.o_usuario_inserir_o_nome_da_task(String)"
});
formatter.result({
  "duration": 38850600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adicionar Tarefa",
      "offset": 17
    }
  ],
  "location": "TaskManager.clicar_no_botao(String)"
});
formatter.result({
  "duration": 72446900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "impedir",
      "offset": 16
    }
  ],
  "location": "TaskManager.o_sistema_deve_a_criacao_da_task(String)"
});
formatter.result({
  "duration": 30891100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 14566693600,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "Validacao criacao tasks",
  "description": "",
  "id": "my-tasks;validacao-criacao-tasks;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "o usuario inserir o nome da task \"ab\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "clicar no botao \"Adicionar Tarefa\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "o sistema deve \"impedir\" a criacao da task",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaskManager.o_usuario_estiver_na_tela_de_My_Tasks()"
});
formatter.result({
  "duration": 2271630300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ab",
      "offset": 34
    }
  ],
  "location": "TaskManager.o_usuario_inserir_o_nome_da_task(String)"
});
formatter.result({
  "duration": 38372800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adicionar Tarefa",
      "offset": 17
    }
  ],
  "location": "TaskManager.clicar_no_botao(String)"
});
formatter.result({
  "duration": 67988800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "impedir",
      "offset": 16
    }
  ],
  "location": "TaskManager.o_sistema_deve_a_criacao_da_task(String)"
});
formatter.result({
  "duration": 607478500,
  "error_message": "task.com.TaskManager.util.TestException: Task ab cadastrado erroneamente\r\n\tat task.com.TaskManager.task.TaskManager.o_sistema_deve_a_criacao_da_task(TaskManager.java:158)\r\n\tat ✽.Then o sistema deve \"impedir\" a criacao da task(src/test/java/task/com/TaskManager/cucumber/TaskManager.feature:78)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 15403353600,
  "status": "passed"
});
formatter.scenario({
  "line": 88,
  "name": "Validacao criacao tasks",
  "description": "",
  "id": "my-tasks;validacao-criacao-tasks;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "o usuario inserir o nome da task \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "clicar no botao \"Adicionar Tarefa\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "o sistema deve \"impedir\" a criacao da task",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaskManager.o_usuario_estiver_na_tela_de_My_Tasks()"
});
formatter.result({
  "duration": 2175455900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 34
    }
  ],
  "location": "TaskManager.o_usuario_inserir_o_nome_da_task(String)"
});
formatter.result({
  "duration": 32619700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adicionar Tarefa",
      "offset": 17
    }
  ],
  "location": "TaskManager.clicar_no_botao(String)"
});
formatter.result({
  "duration": 77105600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "impedir",
      "offset": 16
    }
  ],
  "location": "TaskManager.o_sistema_deve_a_criacao_da_task(String)"
});
formatter.result({
  "duration": 624788000,
  "error_message": "task.com.TaskManager.util.TestException: Task  cadastrado erroneamente\r\n\tat task.com.TaskManager.task.TaskManager.o_sistema_deve_a_criacao_da_task(TaskManager.java:158)\r\n\tat ✽.Then o sistema deve \"impedir\" a criacao da task(src/test/java/task/com/TaskManager/cucumber/TaskManager.feature:78)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 13795517500,
  "status": "passed"
});
formatter.scenario({
  "line": 89,
  "name": "Validacao criacao tasks",
  "description": "",
  "id": "my-tasks;validacao-criacao-tasks;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "o usuario inserir o nome da task \"Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Taste Teste Teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "clicar no botao \"Adicionar Tarefa\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "o sistema deve \"impedir\" a criacao da task",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaskManager.o_usuario_estiver_na_tela_de_My_Tasks()"
});
formatter.result({
  "duration": 3070351000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Taste Teste Teste",
      "offset": 34
    }
  ],
  "location": "TaskManager.o_usuario_inserir_o_nome_da_task(String)"
});
formatter.result({
  "duration": 460269800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adicionar Tarefa",
      "offset": 17
    }
  ],
  "location": "TaskManager.clicar_no_botao(String)"
});
formatter.result({
  "duration": 39482400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "impedir",
      "offset": 16
    }
  ],
  "location": "TaskManager.o_sistema_deve_a_criacao_da_task(String)"
});
formatter.result({
  "duration": 618948200,
  "error_message": "task.com.TaskManager.util.TestException: Task Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Taste Teste Teste cadastrado erroneamente\r\n\tat task.com.TaskManager.task.TaskManager.o_sistema_deve_a_criacao_da_task(TaskManager.java:158)\r\n\tat ✽.Then o sistema deve \"impedir\" a criacao da task(src/test/java/task/com/TaskManager/cucumber/TaskManager.feature:78)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 13577587800,
  "status": "passed"
});
formatter.scenario({
  "line": 90,
  "name": "Validacao criacao tasks",
  "description": "",
  "id": "my-tasks;validacao-criacao-tasks;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "o usuario inserir o nome da task \"abc\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "clicar no botao \"enter\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "o sistema deve \"permitir\" a criacao da task",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaskManager.o_usuario_estiver_na_tela_de_My_Tasks()"
});
formatter.result({
  "duration": 3356990500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 34
    }
  ],
  "location": "TaskManager.o_usuario_inserir_o_nome_da_task(String)"
});
formatter.result({
  "duration": 38254300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enter",
      "offset": 17
    }
  ],
  "location": "TaskManager.clicar_no_botao(String)"
});
formatter.result({
  "duration": 28894900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "permitir",
      "offset": 16
    }
  ],
  "location": "TaskManager.o_sistema_deve_a_criacao_da_task(String)"
});
formatter.result({
  "duration": 68240700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 14216888400,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "Validacao criacao tasks",
  "description": "",
  "id": "my-tasks;validacao-criacao-tasks;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "o usuario inserir o nome da task \"Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Tbste Teste Tes\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "clicar no botao \"enter\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "o sistema deve \"permitir\" a criacao da task",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaskManager.o_usuario_estiver_na_tela_de_My_Tasks()"
});
formatter.result({
  "duration": 2354011800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Tbste Teste Tes",
      "offset": 34
    }
  ],
  "location": "TaskManager.o_usuario_inserir_o_nome_da_task(String)"
});
formatter.result({
  "duration": 483639600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enter",
      "offset": 17
    }
  ],
  "location": "TaskManager.clicar_no_botao(String)"
});
formatter.result({
  "duration": 27066000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "permitir",
      "offset": 16
    }
  ],
  "location": "TaskManager.o_sistema_deve_a_criacao_da_task(String)"
});
formatter.result({
  "duration": 60840600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 15586977000,
  "status": "passed"
});
formatter.scenario({
  "line": 92,
  "name": "Validacao criacao tasks",
  "description": "",
  "id": "my-tasks;validacao-criacao-tasks;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "o usuario inserir o nome da task \"abcd\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "clicar no botao \"Adicionar Tarefa\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "o sistema deve \"permitir\" a criacao da task",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaskManager.o_usuario_estiver_na_tela_de_My_Tasks()"
});
formatter.result({
  "duration": 2337087700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd",
      "offset": 34
    }
  ],
  "location": "TaskManager.o_usuario_inserir_o_nome_da_task(String)"
});
formatter.result({
  "duration": 39990700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adicionar Tarefa",
      "offset": 17
    }
  ],
  "location": "TaskManager.clicar_no_botao(String)"
});
formatter.result({
  "duration": 65290600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "permitir",
      "offset": 16
    }
  ],
  "location": "TaskManager.o_sistema_deve_a_criacao_da_task(String)"
});
formatter.result({
  "duration": 82416000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "que o usuario esteja logado no sistema",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskManager.que_o_usuario_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 13044605800,
  "status": "passed"
});
formatter.scenario({
  "line": 93,
  "name": "Validacao criacao tasks",
  "description": "",
  "id": "my-tasks;validacao-criacao-tasks;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "o usuario estiver na tela de My Tasks",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "o usuario inserir o nome da task \"Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Tcste Teste Tes\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "clicar no botao \"Adicionar Tarefa\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "o sistema deve \"permitir\" a criacao da task",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TaskManager.o_usuario_estiver_na_tela_de_My_Tasks()"
});
formatter.result({
  "duration": 3380442400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Tcste Teste Tes",
      "offset": 34
    }
  ],
  "location": "TaskManager.o_usuario_inserir_o_nome_da_task(String)"
});
formatter.result({
  "duration": 476777300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adicionar Tarefa",
      "offset": 17
    }
  ],
  "location": "TaskManager.clicar_no_botao(String)"
});
formatter.result({
  "duration": 40938600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "permitir",
      "offset": 16
    }
  ],
  "location": "TaskManager.o_sistema_deve_a_criacao_da_task(String)"
});
formatter.result({
  "duration": 64087000,
  "status": "passed"
});
});
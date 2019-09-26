Feature: My Tasks

  Background: 
    Given que o usuario esteja logado no sistema

  Scenario Outline: Validar My Tasks menu
    When o usuario navegar para a seguinte tela "<tela>"
    Then o sistema deve manter o menu visivel

    Examples: 
      | tela              |
      | user-instructions |
      | user-stories      |
      | tasks             |

  Scenario: Mensagem de aviso ao usuario
    When o usuario estiver na tela de My Tasks
    Then o sistema deve apresentar a mensagem "Hey John, this is your todo list for today:"

  Scenario Outline: Insercao de nova Task
    And o usuario estiver na tela de My Tasks
    When o usuario inserir o nome da task
    And clicar no botao "<botao>"
    Then o sistema deve criar uma nova tarefa

    Examples: 
      | botao            |
      | enter            |
      | Adicionar Tarefa |

  Scenario: Botao Gerenciar Tarefas
    And o usuario estiver na tela de My Tasks
    When o usuario possuir uma task cadastrada
    Then o sistema deve apresentar o botao "Manage Subtasks"

  Scenario: Abertura modal sub tarefas
    And o usuario estiver na tela de My Tasks
    When o usuario clicar na opcao Manage Subtasks
    Then o sistema deve abrir a modal de subtasks

  Scenario Outline: Insercao de nova subtask
    And o usuario estiver na tela de My Tasks
    And o usuario clicar na opcao Manage Subtasks
    When o usuario inserir o nome "<nome>" da subtask
    And o usuario inserir a data "<data>" da subtask
    And clicar no botao "<botao>" para criacao de subtask
    Then o sistema deve "<opcao>" a criacao da subtask

    Examples: 
      | nome                                                                                                                                                                                                                                                        | data       | botao            | opcao    |
      ##      | espaco                                                                                                                                                                                                                                                      | 03/30/1994 | enter            | impedir  |
      ##      | ab                                                                                                                                                                                                                                                          | 03/30/1994 | enter            | impedir  |
      ##      |                                                                                                                                                                                                                                                             | 03/30/1994 | enter            | impedir  |
      ##      | Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste | 03/30/1994 | enter            | impedir  |
      | espaco                                                                                                                                                                                                                                                      | 03/30/1994 | Adicionar Tarefa | impedir  |
      | ab                                                                                                                                                                                                                                                          | 03/30/1994 | Adicionar Tarefa | impedir  |
      |                                                                                                                                                                                                                                                             | 03/30/1994 | Adicionar Tarefa | impedir  |
      | Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Taste Teste Teste | 03/30/1994 | Adicionar Tarefa | impedir  |
      ##      | abc                                                                                                                                                                                                                                                         | 03/30/1994 | enter            | impedir  |
      ##      | Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Tbste Teste Tes   | 03/30/1994 | enter            | impedir  |
      | abcd                                                                                                                                                                                                                                                        | 03/30/1994 | Adicionar Tarefa | permitir |
      | Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Tcste Teste Tes   | 03/30/1994 | Adicionar Tarefa | permitir |
      | abcde                                                                                                                                                                                                                                                       | 30/03/1994 | Adicionar Tarefa | impedir  |
      | abcdf                                                                                                                                                                                                                                                       | abc        | Adicionar Tarefa | impedir  |
      | abcdg                                                                                                                                                                                                                                                       | ...        | Adicionar Tarefa | impedir  |
      | abcdh                                                                                                                                                                                                                                                       | 1994/03/30 | Adicionar Tarefa | impedir  |
      | abcdi                                                                                                                                                                                                                                                       | 1994/30/03 | Adicionar Tarefa | impedir  |

  Scenario: Validacao numero subtarefas
    And o usuario estiver na tela de My Tasks
    When o sistema apresentar o botao "Manage Subtasks"
    Then o sistema deve apresentar o numero de subtarefas dessa tarefa

  Scenario Outline: Validacao criacao tasks
    And o usuario estiver na tela de My Tasks
    When o usuario inserir o nome da task "<nome>"
    And clicar no botao "<botao>"
    Then o sistema deve "<opcao>" a criacao da task

    Examples: 
      | nome                                                                                                                                                                                                                                                        | botao            | opcao    |
      | espaco                                                                                                                                                                                                                                                      | enter            | impedir  |
      | ab                                                                                                                                                                                                                                                          | enter            | impedir  |
      |                                                                                                                                                                                                                                                             | enter            | impedir  |
      | Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste | enter            | impedir  |
      | espaco                                                                                                                                                                                                                                                      | Adicionar Tarefa | impedir  |
      | ab                                                                                                                                                                                                                                                          | Adicionar Tarefa | impedir  |
      |                                                                                                                                                                                                                                                             | Adicionar Tarefa | impedir  |
      | Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Taste Teste Teste | Adicionar Tarefa | impedir  |
      | abc                                                                                                                                                                                                                                                         | enter            | permitir |
      | Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Tbste Teste Tes   | enter            | permitir |
      | abcd                                                                                                                                                                                                                                                        | Adicionar Tarefa | permitir |
      | Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Tcste Teste Tes   | Adicionar Tarefa | permitir |

package task.com.TaskManager.task;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import task.com.TaskManager.util.TestException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class TaskManager {

	private WebDriver driver;
	private WebDriverWait wait;
	private String nomeList = "";


	public TaskManager() {
		// Chrome Driver para executar os testes em um servidor autonomo, altere o caminho na variavel chrome conforme onde for salvo o driver
		System.setProperty("webdriver.chrome.driver", Elements.chrome);
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		driver.get(Elements.OPENSITELOGIN);
	}

	@Given("^que o usuario esteja logado no sistema$")
	public void que_o_usuario_esteja_logado_no_sistema() throws Throwable {
		wait = new WebDriverWait(driver, 3);
		try {
			wait.until(ExpectedConditions.presenceOfElementLocated(By.id(Elements.view_email_id))).sendKeys(Elements.user_email);
			driver.findElement(By.id(Elements.view_senha_id)).sendKeys(Elements.user_password);
			driver.findElement(By.xpath(Elements.view_signbutton_xpath)).click();
			wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(Elements.view_signed_in_xpath))).isEnabled();
		} catch (NoSuchElementException | TimeoutException e) {
			throw new TestException("Nao foi possivel encontrar o elemento", e, driver);
		}
	}

	@When("^o usuario navegar para a seguinte tela \"([^\"]*)\"$")
	public void o_usuario_navegar_para_a_seguinte_tela(String screen) throws Throwable {
		try {			
			driver.get(Elements.OPENSITE+"/"+screen);	    	
		} catch (NoSuchElementException | TimeoutException e) {
			throw new TestException("Nao foi possivel encontrar a pagina", e, driver);
		}

	}

	@Then("^o sistema deve manter o menu visivel$")
	public void o_sistema_deve_manter_o_menu_visivel() throws Throwable {
		wait = new WebDriverWait(driver,3);
		try {
			wait.until(ExpectedConditions.elementToBeClickable(By.id(Elements.view_mytask_menu_id)));
			driver.close();
		} catch (NoSuchElementException | TimeoutException e) {
			throw new TestException("O elemento My Tasks nao foi encontrado", e, driver);
		}
	}

	@When("^o usuario estiver na tela de My Tasks$")
	public void o_usuario_estiver_na_tela_de_My_Tasks() throws Throwable {
		try {
			driver.get(Elements.page_task);
		} catch (NoSuchElementException | TimeoutException e) {
			throw new TestException("A pagina nao foi encontrada", e, driver);
		}
	}

	@Then("^o sistema deve apresentar a mensagem \"([^\"]*)\"$")
	public void o_sistema_deve_apresentar_a_mensagem(String mensagem) throws Throwable {
		wait = new WebDriverWait(driver,3);
		try {
			String telaMensagem = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Elements.view_mensagem_xpath))).getText().trim();
			if(telaMensagem.equals(mensagem)){
				driver.close();
			}else{
				throw new TestException("Mensagem diferente da esperada", driver);
			}
		} catch (NoSuchElementException | TimeoutException e) {
			throw new TestException("Mensagem nao encontrada", e, driver);
		}
	}

	@When("^o usuario inserir o nome da task$")
	public void o_usuario_inserir_o_nome_da_task() throws Throwable {
		wait = new WebDriverWait(driver,3);
		try {
			wait.until(ExpectedConditions.presenceOfElementLocated(By.id(Elements.view_newtask_field_id))).sendKeys("Task Automatizada");
		} catch (NoSuchElementException | TimeoutException e) {
			throw new TestException("Elemento Task Field nao encontrado", e, driver);
		}
	}

	@When("^clicar no botao \"([^\"]*)\"$")
	public void clicar_no_botao(String botao) throws Throwable {
		wait = new WebDriverWait(driver,3);
		try {
			if(botao.equals("enter")){
				driver.findElement(By.id(Elements.view_newtask_field_id)).sendKeys(Keys.ENTER);
			} else {
				driver.findElement(By.xpath(Elements.view_addtaskbutton_xpath)).click();
			}
		} catch (NoSuchElementException | TimeoutException e) {
			throw new TestException("Elementos nao encontrados", e, driver);
		}
	}

	@Then("^o sistema deve criar uma nova tarefa$")
	public void o_sistema_deve_criar_uma_nova_tarefa() throws Throwable {
		wait = new WebDriverWait(driver,3);
		try {

			String values = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Elements.view_tasklist_xpath))).getText();
			if (values.equals("Task Automatizada")){
				driver.close();
			} else {
				throw new TestException("Task nao encontrada", driver);
			}
		} catch (NoSuchElementException | TimeoutException e) {
			throw new TestException("Elementos nao encontrados", e, driver);
		}
	}

	@When("^o usuario inserir o nome da task \"([^\"]*)\"$")
	public void o_usuario_inserir_o_nome_da_task(String nome) throws Throwable {
		wait = new WebDriverWait(driver,3);
		nomeList = nome;
		try {
			if(nome.equals("espaco")){
				nomeList = "   ";
				wait.until(ExpectedConditions.presenceOfElementLocated(By.id(Elements.view_newtask_field_id))).sendKeys("   ");
			}else {
				wait.until(ExpectedConditions.presenceOfElementLocated(By.id(Elements.view_newtask_field_id))).sendKeys(nome);
			}
		} catch (NoSuchElementException | TimeoutException e) {
			throw new TestException("Elemento Task Field nao encontrado", e, driver);	
		}
	}
	@Then("^o sistema deve \"([^\"]*)\" a criacao da task$")
	public void o_sistema_deve_a_criacao_da_task(String condicao) throws Throwable {
		wait = new WebDriverWait(driver,3);
		try {
			String values = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Elements.view_tasklist_xpath))).getText();
			if(condicao.equals("permitir") && values.contains(nomeList)){
				driver.close();
			} else if (condicao.equals("impedir") && values.contains(nomeList)){
				throw new TestException("Task "+nomeList+" cadastrado erroneamente", driver);
			}
		} catch (NoSuchElementException | TimeoutException e) {
			throw new TestException("Elemento nao encontrado", e, driver);	
		}
	}


	@When("^o usuario possuir uma task cadastrada$")
	public void o_usuario_possuir_uma_task_cadastrada() throws Throwable {
		wait = new WebDriverWait(driver, 3);	    
		try {
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Elements.view_tasklist_xpath)));
		} catch (NoSuchElementException | TimeoutException e) {
			throw new TestException("Task nao encontrada", e, driver);	
		}
	}

	@Then("^o sistema deve apresentar o botao \"([^\"]*)\"$")
	public void o_sistema_deve_apresentar_o_botao(String nomeBotao) throws Throwable {
		wait = new WebDriverWait(driver, 3);    
		try {
			String botaoValor = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Elements.view_manage_subtasks_xpath))).getText();
			if(botaoValor.contains(nomeBotao)){
				driver.close();
			} else {
				throw new TestException("Nome do botao nao confere", driver);	
			}
		} catch (NoSuchElementException | TimeoutException e) {
			throw new TestException("Botao nao encontrado", e, driver);	
		}
	}

	@When("^o usuario clicar na opcao Manage Subtasks$")
	public void o_usuario_clicar_na_opcao() throws Throwable {
		wait = new WebDriverWait(driver,3);
		try {
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Elements.view_manage_subtasks_xpath))).click();
		} catch (NoSuchElementException | TimeoutException e) {
			throw new TestException("Botao nao encontrado", e, driver);	
		}
	}

	@Then("^o sistema deve abrir a modal de subtasks$")
	public void o_sistema_deve_abrir_a_modal_de_subtasks() throws Throwable {
		wait = new WebDriverWait(driver,3);
		try {
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Elements.modal_xpath))).isDisplayed();
			driver.close();
		} catch (NoSuchElementException | TimeoutException e) {
			throw new TestException("Botao nao encontrado", e, driver);	
		}
	}

	@When("^o usuario inserir o nome \"([^\"]*)\" da subtask$")
	public void o_usuario_inserir_o_nome_da_subtask(String nome) throws Throwable {
		wait = new WebDriverWait(driver,3);
		try {
			if(nome.equals("espaco")){
				nomeList = "   ";
				wait.until(ExpectedConditions.presenceOfElementLocated(By.id(Elements.view_newtask_field_id))).sendKeys("   ");
			}else{
				wait.until(ExpectedConditions.visibilityOfElementLocated(By.id(Elements.modal_nome_id))).sendKeys(nome);
			}
		} catch (NoSuchElementException | TimeoutException e) {
			throw new TestException("Botao nao encontrado", e, driver);	
		}
	}

	@When("^o usuario inserir a data \"([^\"]*)\" da subtask$")
	public void o_usuario_inserir_a_data_da_subtask(String data) throws Throwable {
		wait = new WebDriverWait(driver,3);
		try {
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.id(Elements.modal_data_id))).clear();
			driver.findElement(By.id(Elements.modal_data_id)).sendKeys(data);
		} catch (NoSuchElementException | TimeoutException e) {
			throw new TestException("Botao nao encontrado", e, driver);	
		}
	}

	@When("^clicar no botao \"([^\"]*)\" para criacao de subtask$")
	public void clicar_no_botao_para_criacao_de_subtask(String botao) throws Throwable {
		wait = new WebDriverWait(driver,3);
		try {
			//Feito a automacao tentando clicar no Enter porem como e uma modal ele joga para a pagina e solicita a insercao d eum nome de task nao permitindo automatizar o Enter para subtask
			//			if(botao.equals("enter")){
			//				driver.findElement(By.id(Elements.view_newtask_field_id)).sendKeys(Keys.ENTER);
			//			} else {
			driver.findElement(By.id(Elements.modal_addButton_id)).click();
			//			}
		} catch (NoSuchElementException | TimeoutException e) {
			throw new TestException("Elemento nao encontrado", e, driver);
		}
	}

	@Then("^o sistema deve \"([^\"]*)\" a criacao da subtask$")
	public void o_sistema_deve_a_criacao_da_subtask(String condicao) throws Throwable {
		wait = new WebDriverWait(driver,3);
		String values = "";
		try {
			if(condicao.equals("empty")){
				values = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Elements.modal_subtasklist_empty_xpath))).getText();
			} else {
				values = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Elements.modal_subtasklist_xpath))).getText();
			}
			if(condicao.equals("permitir") && values.contains(nomeList)){
				driver.close();
			} else if (condicao.equals("impedir") && values.contains(nomeList) || values.contains("empty")){
				throw new TestException("Task "+nomeList+" cadastrado erroneamente", driver);
			}
		} catch (NoSuchElementException | TimeoutException e) {
			throw new TestException("Elemento nao encontrado", e, driver);	
		}
	}

	@When("^o sistema apresentar o botao \"([^\"]*)\"$")
	public void o_sistema_apresentar_o_botao(String nomeBotao) throws Throwable {
		wait = new WebDriverWait(driver, 3);    
		try {
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Elements.view_manage_subtasks_xpath)));

		} catch (NoSuchElementException | TimeoutException e) {
			throw new TestException("Botao nao encontrado", e, driver);	
		}
	}

	@Then("^o sistema deve apresentar o numero de subtarefas dessa tarefa$")
	public void o_sistema_deve_apresentar_o_numero_de_subtarefas_dessa_tarefa() throws Throwable {
		wait = new WebDriverWait(driver, 3);    
		try {
			String botaoQuantidade = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Elements.view_manage_subtasks_xpath))).getText();
			if(botaoQuantidade.contains("2")){
				//valor 2 pois dos cenarios criados com os defeitos que ha no sistema apenas 1 subtarefa ira se manter
				driver.close();
			} else {
				throw new TestException("Nome do botao nao confere", driver);	
			}
		} catch (NoSuchElementException | TimeoutException e) {
			throw new TestException("Botao nao encontrado", e, driver);	
		}
	}	



}
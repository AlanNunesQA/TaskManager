package task.com.TaskManager.task;

public class Elements {

	public static final String OPENSITELOGIN = "https://qa-test.avenuecode.com/users/sign_in";
	public static final String OPENSITE = "https://qa-test.avenuecode.com/";
	public static final String page_task = "https://qa-test.avenuecode.com/tasks";
	public static final String chrome = "C:/Users/Alan PC/Documents/workspace/TaskManager/chromedriver.exe";
	public static String view_email_id = "user_email";
	public static String view_senha_id = "user_password";
	public static String view_signbutton_xpath = "//*[contains(@type, 'submit')]";
	public static String user_email = "alancechinelnunes@gmail.com";
	public static String user_password = "Alan2019";
	public static String view_signed_in_xpath = "//*[contains(text(), 'Signed in successfully.')]";
	public static String view_mensagem_xpath = "/html/body/div[1]/h1";
	public static String view_mytask_menu_id = "my_task";
	public static String view_newtask_field_id = "new_task";
	public static String view_addtaskbutton_xpath = "//*[contains(@ng-click, 'addTask()')]";
	public static String view_tasklist_xpath = "//*[contains(@class, 'task_body col-md-7 limit-word-size')]";
	public static String view_manage_subtasks_xpath = "//*[contains(@ng-click, 'editModal(task)')]";
	public static String modal_xpath = "//*[contains(@class, 'modal-content')]";
	public static String modal_nome_id = "new_sub_task";
	public static String modal_data_id = "dueDate";
	public static String modal_addButton_id = "add-subtask";
	public static String modal_subtasklist_empty_xpath = "//*[contains(@class, 'ng-scope ng-binding editable editable-click editable-empty')]";
	public static String modal_subtasklist_xpath = "//*[contains(@class, 'ng-scope ng-binding editable editable-click')]";
}

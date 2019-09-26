package task.com.TaskManager.task;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

//Runner method of running the tests
@RunWith(Cucumber.class)
@CucumberOptions(
plugin = { "pretty", "html:target/cucumber", "json:target/cucumber.json" }, 
features = "src/test/java/task/com/TaskManager/cucumber/TaskManager.feature", 
glue = {"task.com.TaskManager.task" })

public class Runner {
}

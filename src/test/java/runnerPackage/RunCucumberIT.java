package runnerPackage;


import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "classpath:featuresPackage", glue = "stepDefinitionPackage", monochrome = true,
dryRun = false,
	strict = true, plugin = { "pretty", "html:test-output", "json:test-output/op.json" })
public class RunCucumberIT {
	



}

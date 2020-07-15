$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:featuresPackage/features1.feature");
formatter.feature({
  "name": "First Fearture",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "run the BackGround method",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Run the Background method",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionClass.run_the_background_method()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Try First Scenario",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "First Method test",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionClass.first_method_test()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Second method test with args \"Hi\" and \" everybody\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.second_method_test_with_args_something_and_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Method with args1 and args2",
  "rows": [
    {
      "cells": [
        "First",
        "argument"
      ]
    },
    {
      "cells": [
        "Second",
        "argument"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.method_with_args1_and_args2(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Method for testing Maps",
  "rows": [
    {
      "cells": [
        "Keys1",
        "Keys2"
      ]
    },
    {
      "cells": [
        "Value 1",
        "value a"
      ]
    },
    {
      "cells": [
        "Value 2",
        "Value b"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.method_for_testing_maps(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Complete the Scenario",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.complete_the_scenario()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("classpath:featuresPackage/features2.feature");
formatter.feature({
  "name": "First Fearture",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Try Second Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Intro method for Examples testing",
  "keyword": "Given "
});
formatter.step({
  "name": "Try passing args\"\u003cArg1\u003e\" and \"\u003cArg2\u003e\" using Examples keyword",
  "keyword": "When "
});
formatter.step({
  "name": "Complete testing this scenario",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Arg1",
        "Arg2"
      ]
    },
    {
      "cells": [
        "Value A",
        "Value B"
      ]
    },
    {
      "cells": [
        "value C",
        "Value D"
      ]
    },
    {
      "cells": [
        "Value E",
        "value F"
      ]
    }
  ]
});
formatter.background({
  "name": "run the BackGround method",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Run the Background method",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionClass.run_the_background_method()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Try Second Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Intro method for Examples testing",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionClass.intro_method_for_examples_testing()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Try passing args\"Value A\" and \"Value B\" using Examples keyword",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.try_passing_argssomething_and_something_using_examples_keyword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Complete testing this scenario",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.complete_testing_this_scenario()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "run the BackGround method",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Run the Background method",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionClass.run_the_background_method()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Try Second Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Intro method for Examples testing",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionClass.intro_method_for_examples_testing()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Try passing args\"value C\" and \"Value D\" using Examples keyword",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.try_passing_argssomething_and_something_using_examples_keyword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Complete testing this scenario",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.complete_testing_this_scenario()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "run the BackGround method",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Run the Background method",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionClass.run_the_background_method()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Try Second Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Intro method for Examples testing",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionClass.intro_method_for_examples_testing()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Try passing args\"Value E\" and \"value F\" using Examples keyword",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.try_passing_argssomething_and_something_using_examples_keyword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Complete testing this scenario",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.complete_testing_this_scenario()"
});
formatter.result({
  "status": "passed"
});
});
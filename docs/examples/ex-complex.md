# Complex Examples

1. [Transport FOB destination](#transportation-with-transfer)
1. [Production using stage and state](#manufacturing-and-workflow)

#### Transportation with transfer

Bob purchases 30kg of apples from Alice and Claudia transports them (FOB destination)

![transport diagram](https://raw.githubusercontent.com/valueflows/valueflows/master/release-doc-in-process/transport-transfer.png)

[import, lang:"yaml"](../../examples/transport-with-transfer.yaml)

#### Manufacturing and workflow

A component is produced (manufacturing pattern) and tested (workflow pattern).  QT ("quality testing") gives pass and/or fail outputs.  The failed components are passed back into a source resource (because it can be re-used as an input as part of the QT process, to be used in this or the next manufacturing run.

The QT needs the stage and state of the input component resource, because QT would only be done on components that are made and not tested yet.  By the same token, components would only be sent into the next assembly process if they have passed the QT process/stage (not part of this example).

This example includes recipe, plan, and actuals.

![stage-state diagram](https://raw.githubusercontent.com/valueflows/valueflows/master/release-doc-in-process/stage-state.png)

[import, lang:"yaml"](../../examples/workflow-stage-state.yaml)

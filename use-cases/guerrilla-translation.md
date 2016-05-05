# [Guerrilla Translation](http://www.guerrillatranslation.org/)

One feature of this use case is the same resource as both input and output to a series of processes.

## Processes

Input  | Process | Output
------------- | ------------- | -----------
Source document  | Translate | Translation
Translation  | Edit | Translation
Translation | Proofread | Translation
Translation | Publish | Translation

In this use case, we need to determine at what stage in the process flow the Translation is in. 
In NRP, we do that by connecting it to the ProcessType of the last Process it came out of. 
And then, the Input requirement for the next Process is the Translation at the previous stage.

We use ProcessType instead of Process because then a Translation at the same stage 
can be used as an input to other Processes of the same next ProcessType.

We are working on Recipes that combine Processes and Exchanges, 
or value flows that consist only of a series of Exchanges.
In those cases, it would be better to use InteractionType as a superclass of ProcessType and ExchangeType 
and use the last InteractionType as the stage of the Resource.

I'll add some screen shots of a Guerrilla Translation Recipe and process flow soon.

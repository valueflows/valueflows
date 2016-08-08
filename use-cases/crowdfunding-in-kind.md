# Crowdfunding In-kind

See: https://en.wikipedia.org/wiki/Gifts_in_kind

Crowdfinding In-kind has many different requirement than crowdfunding based on some monetary currency.

* Instead of requesting a number of credits in monetary currency. One describes the project as top-level *vf:Process* and requests all resources planned as inputs. In practice such campaign represents all the *vf:Request* intents casted and based on requiremetns for the execution of that top-level process. See: [relating Intent to a Process, and to other resources via its inputs/outputs](https://github.com/valueflows/valueflows/issues/118).
* Similar to a 'threshold' used in monetary currency based crowdfunding. People can make commitments to provide requested resource with condition of all required inputs having commitments. Some inputs can get marked as 'optional' which works similar as 'optimal' amount of credits - higher than minimum 'threshold'. A checklist, with one item per 'resource type' replaces the numeric progress bar.
* One can use [Dependent Demand -
a Business Pattern for Balancing Supply and Demand](http://hillside.net/plop/plop97/Proceedings/haugen.pdf) to aggregate inputs of the top-level 'project process'

## Variants

### In-kind + Monetary Hybrid

See: [modeling various matches between vf:Offer and vf:Request](https://github.com/valueflows/intent/issues/7)

Hybrid variants combines in-kind and monetary currency based crowdfunding. For each *vf:Request* one can add matching *vf:Offer* which requires reciprocal transfer of monetary currency. Those offers act as fallback and requested ammount of monetary currency represent sum of all the fallback offers for requests which didn't find commitment of donation in-kind. For each new commitment of donating required resource in-kind, the requested amount of monetary currency gets decremented by the amount in fallback offer.

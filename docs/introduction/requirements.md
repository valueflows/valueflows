# Requirements

## Quantitative values

### Real time tracking of resources, and planning

*present*, *future*

It involves `vf:currentQuantity` as well as *available quantity*. They might differ for example when ongoing *use* event(s) involves certain quantity of resource. *Available quantity* would equal `vf:currentQuantity` minus all the quantities currently involved in *use* event(s). Similar for planning at any time in the future projected `vf:currentQuantity` and *available quantity* might differ based on existing commitments.

Use cases:

* Ouikit
* Transportation

### Planning schedules

*future*

It mostly relate to flows with *use* and *work* action, but it may also come into play for other actions. For example *load* and *unload* might require very specific scheduling. Last but not least it might play role in *service quotas*, for example grid utilities providers might need to play different volumes of *consume* in different time periods. For *consume* and *produce* precise scheduling might play greater role for resources with limited buffering. Mentioned grid utilities or perishable products give two examples. Also [*just in time manufacturing*](https://en.wikipedia.org/wiki/Just-in-time_manufacturing) would have stricter scheduling requirements.

Use cases:

* Ouikit
* Harvesting
* Metered electricity
* Shared studios

### Social accounting

*past*, *future*

It plays role when agents make agreements which involve reciprocity. For *use* it might combine quantity of used resource and duration of the usage. For *service* it might depend on various factors and specific Terms of Service. In some cases it might involve quantities like *number of words*, *distance* etc.

Use cases:

* Ouikit
* Translation service
* Transportation (taxi)
* Accommodation (hoter, BnB)

### Reports and analysis

*past*

Agents might want to track various metrics to analyze trends, efficiency etc. In some cases it might involve quantities like *number of words*, *distance* etc.

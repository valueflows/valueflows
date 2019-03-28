# Planning scenarios

## Types of planning

### Demand-driven

Demand-driven planning starts with the final outputs or deliverables that the plan is supposed to create, and schedules backwards in time from the required end dates.

Most products that are assembled from components use demand-driven planning.

### Supply-driven

Supply-driven planning starts with the source materials and plans what to do with them, scheduling forward in time from the start date. Somewhere in the flow, supply meets demand and the supply flows at that stage need to be separated to meet the various demands.

Agricultural crops are the prototypical example of supply-driven planning: the crop is ripe in the field and will rot unless harvested.

Another supply-driven example is a paper mill.

# Recipes

Most types of planning use something like a recipe or work breakdown structure to guide the planning algorithm.

# Supply-driven example: Fresh Salads 

See video at https://www.freshexpress.com/fresh/fresh-at-every-step

As they say, "coolness is key" and they claim to be "cold-chain obsessed". 

That means crews of pickers go out in the early morning to pick greens, and put them through a conveyor into a refrigerated truck waiting in the field.

Then they get culled, washed, dried, separated into sets for salad kits, and bagged, as fast as possible, in cool temperatures all the time. Refrigerated trucks of salad kits head out for distribution channels and supermarkets every day.

The "cold chain" means they stay cool at every step in their journey (at least according to the company's claims).

# Supply-driven example: Paper mill

A paper mill is an example of a continuous process. See https://en.wikipedia.org/wiki/Paper_machine

The mill typically runs 24 hours 7 days a week for 4 weeks, and then shuts down, cleans up, and restarts for another 4 weeks.

During that time, it produces one continuous sheet of paper, as you can see here:
![paper machine](https://www.scrapmonster.com/uploads/news/2015/1/1420536825.jpg) 

For those 4 weeks, the paper machine needs to be fed constantly with wood and/or rag and/or recycled paper pulp. 

In an integrated mill, the paper mill is fed by an attached pulp mill which mashes the feed stock into pulp.

Part of the planning process for a paper mill is getting the required feedstock at the right time.

When the roll at the end grows to the largest size the equipment can handle, the paper machine crew slits it sideways and removes it to the rewinder station, and they start another roll.

## The rewinder station is where supply meets demand. 

Demand-driven example: bicycle manufacturing

See http://www.madehow.com/Volume-2/Bicycle.html

The demands for bicycles might come from stores or individual customers.

Each bicycle model will have a recipe, usually in the form of a multi-level bill of materials and routing (sequence of manufacturing processes). In ValueFlows, we combine them into the same structure called a Recipe.

The algorithm for planning is called a dependent demand explosion, which you can read about in some detail in this pattern: https://hillside.net/plop/plop97/Proceedings/haugen.pdf

The recipe is called the Knowledge Level in that pattern.

# Demand-driven example: bicycle manufacturing

See http://www.madehow.com/Volume-2/Bicycle.html 

The demands for bicycles might come from stores or individual customers.

Each bicycle model will have a recipe, usually in the form of a multi-level bill of materials and routing (sequence of manufacturing processes). In ValueFlows, we combine them into the same structure called a Recipe.

The algorithm for planning is called a dependent demand explosion, which you can read about in some detail in this pattern: https://hillside.net/plop/plop97/Proceedings/haugen.pdf

The recipe is called the Knowledge Level in that pattern.

More detail on the bicycles, from http://www.madehow.com/Volume-2/Bicycle.html

Given a demand for a bicycle, the dependent demand algorithm will start backwards from the last process, attaching the components to the frame. 

> The components, such as wheels, derailleurs, brakes, and chains, are usually made of stainless steel. These components are generally made elsewhere and purchased by the bicycle manufacturer.

In that case, the dependent demand algorithm will plan the assembly process, and then look for the components.

If bicycle manufacturer has all the components in stock, this can go quickly. If any of them will need to be ordered and delivered from external suppliers, the lead time for order and receipt will need to be added to the schedule. This may push the bicycle delivery date farther into the future.

Then the algo will plan the frame manufacturing process. This will require not only blocks of steel but also some equipment for drawing out the tubes and assembling them together, as well as some workers with the required skills.
> Seamless frame tubes are constructed from solid blocks of steel that are pierced and "drawn" into tubes through several stages. These are usually superior to seamed tubes, which are made by drawing flat steel strip stock, wrapping it into a tube, and welding it together along the length of the tube. Seamless tubes may then be further manipulated to increase their strength and decrease their weight by butting, or altering the thickness of the tube walls. Butting involves increasing the thickness of the walls at the joints, or ends of the tube, where the most stress is delivered, and thinning the walls at the center of the tube, where there is relatively little stress. Butted tubing also improves the resiliency of the frame.

The steel might exist in-house, or again, need to be ordered and delivered. 

At the end of the backscheduling for all the processes and component procurement, the whole series of processes might have been backscheduled into the past, which means they all need to be shifted into the future by at least as much time as they are now scheduled into the past.

# What We Think ValueFlows Might Be Useful For

## Interconnecting current apps that people are using in the same situations

For example, the [Madison WI Mutual Aid Network](http://www.mutualaidnetwork.org/) uses two different systems: a mutual credit system and a marketplace system, both of which have different platforms, code bases and developers. They want to intertrade between both of those systems, responding to offers and wants and transferring hour-based currencies between accounts.

## Developing "native" Value Flows apps

The other, possibly more interesting direction, is developing new tools where the value flows vocab and protocols are "native", and composing systems out of those VF-native apps, or using them to interact with each other. 
That was the original idea of the Open Apps Ecosystem. The current examples of this direction are Holodex, Personator, and the Linked Data Browser.

Following this direction, we will need to figure out the sweet spots for component size and shape for Value Flows Open Apps. If we do that well, many people should be able to create variations on any of the components, and they might be able to work together with any of the other variations. (Depending on devils in details...)

### Two possible patterns of native VF apps:

#### Composing bigger apps from many smaller apps

This means assembling a bunch of smaller apps into some kind of whole, like a network resource planning or social network platform made out of many components, but presenting themselves to users as a unified system.

People are doing this now; sometimes called microservices. This is what the [Open Apps Ecosystem](https://docs.google.com/document/d/1lfy9Q2OdssTMPm-mZ23UVDutfsCYhH_z0qz1bpsOfco/edit?usp=sharing) was thinking about.

#### Networks of apps interacting with one another

This would be something completely different. For example, 
* Think of the [Personator](https://github.com/holodex/personator) expanded to become your personal agent.
* It would interact with other personal agents on the open Web. 
    * They might form groups, which would be instantiated as a different kind of agent on the Web.
    * Those personal agents and their groups could be visualized by [Holodex](https://github.com/open-app/holodex), but each of the agents and the group would have separate URLs in different domains.
* They might engage in conversations for action with other agents.
* Those conversations might result in plans for processes, which would be instantiated as another kind of thing on the web.
    * Each of the agents involved in the process would post events to the process.
    * The process would notify each of the agents about what was happening, what the process required, what had been created, whether it was on schedule or not, etc.
* Those conversations might result in plans for transfers or exchanges. The exchanges would be instantiated as yet another kind of thing on the web. The transfers might just stay between the giving and taking agents.

The [Indie Web](https://indiewebcamp.com/Projects) is sorta going in this direction, but they are mostly focusing on publishing personal blogs and tweet-style messages. [Portable Linked Profiles](https://github.com/hackers4peace/plp-docs) go farther in that direction. 

Email and messaging accounts are probably the personal agents that most people are familiar with. Note the array of extra services that are being added to (for example) Gmail. But all those services live in the Google context, not the context of "your personal agent" (which would be what the Indie Web and PLP gangs would want).

**One main difference** between a system composed of apps vs a network of interactions between personal agents and other things on the open Web, is that the composed system would know you by your user account and login credentials, which would most likely be single-signon. Your personal agent would introduce you to the other agents you interact with. No login, no user account. 

**Another interesting use case detailed on another page:** [Provenance](https://github.com/valueflows/valueflows/wiki/Provenance)


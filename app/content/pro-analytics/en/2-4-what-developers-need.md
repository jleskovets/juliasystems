
There is one question I would recommend that every analyst ask whenever they join a new team:

**"How do you prefer to work with requirements?"**

The question might seem odd, given that templates, standards, best practices, and an enormous number of recommendations on how to write requirements correctly all exist — but the problem is that **correct does not always mean convenient**.

Over the years I have worked with very different teams and very different approaches to documentation. There were developers who simply did not engage with long text and preferred looking at diagrams. In that kind of team I had to make diagrams more detailed and use them as essentially the primary way of explaining a solution. There were also developers for whom, on the contrary, having a thorough written description was important. In those cases diagrams remained high-level — to show the overall picture, the relationships between components, and the main scenario.

Both of these approaches can work perfectly well.

That is why, when joining a new team, I would not immediately open a favourite template and say: "This is how we'll write requirements from now on." First I would talk to the developers, testers, and other team members, and ask what information they need and in what form they find it most useful to work with — because we do not write requirements for the sake of the document itself.

We write them in order to **convey an understanding of the future solution to other people.**

And here another small challenge appears for the analyst. Developers — who need enough information to implement a solution without having to figure it out themselves — are not the only people who will read our requirements. There is the business client, who needs to understand whether we have correctly grasped their task and to verify that the proposed solution matches the original idea and all the agreements reached. There are the testers, who need to understand what behaviour of the system is expected and exactly what needs to be checked.

And this, in my view, is where a **good requirement** comes into being.

It must be understandable not only to the analyst who wrote it, but also to the people who will use that information further down the line — though this does not mean the same text needs to serve everyone. A single document can comfortably accommodate different ways of presenting information: written descriptions, tables, examples, diagrams, flowcharts, API contracts, and other artefacts. The key is to understand why each of them is needed and who it helps.

That is why I am not a big fan of universal rules like "always use this template" or "requirements must look exactly like this".

What works perfectly in one team can be completely useless in another.

The same applies to the systems themselves. A minor enhancement does not necessarily call for a full set of UML diagrams, while a complex integration may make a single text description entirely insufficient.

In my view, the analyst's job is not to collect as many artefacts as possible and fill documentation with them, but to ensure that the team reaches a shared understanding of what we are building, why we are building it, and how it should work.

The specific way we achieve that depends on the particular team, the particular system, and the particular task.

And so, perhaps the most useful requirements template to bring to a new project is a very simple one:

**"How would you prefer to read this?"**

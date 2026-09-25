So, we have covered what requirements are, what kinds exist, and how to ask the right questions. But the next question arises: **where do all these requirements actually come from?**

Unfortunately, a client rarely walks up to an analyst with a ready-made 50-page document and says: "Here, everything you need to know is in here." And when they do, at most a quarter of it tends to be genuinely useful — or after careful analysis you find yourself changing half of it anyway.

Most of the time it goes something like this:

"We need to add the ability to book appointments online."

And that's it. The analyst's work begins.

BABOK describes quite a few requirements elicitation techniques: interviews, workshops, brainstorming, observation, document analysis, surveys, prototyping, and others.

I think it is useful to know these techniques exist, but trying to memorise them all and apply them strictly by the book makes little sense. In practice I usually use a combination of several approaches, and that combination turns out slightly different each time depending on the scope of the changes or the subject domain.

### **Interviews**

The most obvious approach — talk to people.

We already covered how to ask the right questions, so I will not repeat that here. I will only add that an interview is far from always a one-on-one conversation with a business client.

You may need to speak with a user, a developer, a tester, a system owner, an architect, or someone who has worked in this domain for many years — and each of them will hold a different piece of the picture.

### **Observation**

Sometimes conversations are not enough. Especially when we are analysing a process that already exists.

You can ask someone: "How do you process a request?"

And get the answer: "Well, I open the request, check the data, and process it."

Then you watch them actually do it — and discover five different systems, an Excel file, manual data copying, and an email to a colleague. The person may not even consider all of that part of the process. It is such routine work for them that they simply will not mention those steps unless specifically asked.

That is why sometimes the best way to understand a process is to **simply watch how people work**.

### **Analysis of existing information**

Another enormous source of requirements is everything that already exists. Documentation, instructions, old requirements, regulations, contracts, interfaces, APIs, data structures, reports — all of this can tell us a great deal. Especially when we are not building a system from scratch but modifying one that is already in place.

I firmly believe that before asking people how a system works, it is very useful to first look at what is already there on your own. After that, the questions you ask become much more precise.

### **Workshops**

Sometimes talking to each person separately is not enough. If a process touches several departments or systems, it makes sense to bring everyone together. In a workshop you can simultaneously work through the process, discuss points of disagreement, and reach agreement on how the future solution should work.

But there is one important point here: if five people are simultaneously saying five different things, the analyst's job is not simply to write down all five versions. The goal is to understand **why the contradiction arose**. Perhaps different people genuinely work differently. Perhaps the process has never been documented anywhere. Or perhaps the participants simply interpret the same rule in different ways.

That is why a workshop always requires thorough preparation. An analyst cannot walk into the meeting, listen to everyone, try to analyse on the fly, and hope it will all be easy to make sense of afterwards. The analyst should already arrive with a rough plan and an understanding of how the process works.

### **Prototyping**

Some things are very difficult to explain in words. You can spend half an hour discussing with a user what a screen should look like, then show them a simple sketch — and hear:

"No, move this here, remove that button entirely, and I need to see two more fields right here."

In that case the prototype is not a final design — it is **a way of talking to the user in a language they find more intuitive**, explaining through concrete examples.

Prototypes can be sketched on a napkin, but it is better to use more specialised tools for this — personally I am very fond of Miro, [draw.io](http://draw.io), and anything else that lets you quickly throw together mockups.

---

And perhaps the most important thing I have learned over the years: **requirements are not sitting somewhere in one place waiting to be collected**. They live in people's heads, in existing systems, documentation, processes, interfaces, conversations, and sometimes even in things that nobody ever considered worth documenting.

That is why I do not think of requirements elicitation as "gathering the client's wish list." For me it is more like an investigation. We ask questions, listen to the answers, observe how things currently work, read documents, talk to different participants, and gradually piece together the full picture from separate fragments.

And sometimes the most valuable thing we discover in the process is not a new requirement at all, but the realisation that **we had been misunderstanding the original problem all along**. And that is when it becomes especially clear why an analyst is needed in the first place.

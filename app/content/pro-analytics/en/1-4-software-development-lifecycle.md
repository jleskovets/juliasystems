

Now that we have established that an analyst helps reduce uncertainty, the next question arises — **where exactly does that happen?** It happens across almost the entire span of software development, because software does not appear out of thin air.

At some point someone has an idea; the idea turns into a need. The need turns into a concrete task. The task turns into a solution. The solution turns into code. The code turns into a working system. And the working system then lives on for a long time, changing, evolving, and occasionally breaking.

That adds up to an entire lifecycle. And I think it is very useful to look at it as a whole, just once.

---

### **From idea to working product**

Imagine a completely ordinary situation.

Someone in the company says: "What if we let customers book a service appointment online?"

At this point we have an idea, but no system yet. What's more, it is not even clear yet what exactly needs to be built:

- Who should be able to book?
- Where?
- For what time?
- Which services can be selected?

And many other questions. And very quickly it becomes apparent that the phrase "let's build online booking" is not a task for a developer at all. It is only a beginning.

---

### **Idea and need**

The first stage typically starts with some kind of need. Does the business see a problem or an opportunity?

- Customers cannot book conveniently;
- Staff spend too much time on manual work;
- The company wants to automate an existing process;
- A new product or service is being launched;
- Integration with another system is required.

At this stage there may be no solution at all. There is only a problem and a desire to change something.

And there is a very important point here — poor development often starts with an attempt to jump straight to a solution: Do we need a button? Do we need a new API? Do we need to add a field? A separate service?

Good analysis starts a little earlier: What problem are we actually trying to solve?

---

### **Research and analysis**

This is where an analyst appears and begins asking questions.

- Who is the user?
- What is their problem?
- How does the process work today?
- Which systems already exist?
- What data is used?
- Who owns that data?
- What constraints are there?
- What can the existing system already do?
- What will need to change?
- And most importantly: **do we actually need to build something new?**

Sometimes analysis reveals that the problem can be solved by changing an existing process; sometimes new functionality is needed; sometimes integration with another system; and sometimes the original idea turns out not to be the one that solves the real problem at all.

That is precisely why analysis is not preparation for development — it is already part of development.

---

### **Defining requirements**

As we start to understand the problem better, the need arises to describe exactly what the system should do.

This is where requirements emerge:

- Functional.
- Non-functional.
- Business rules.
- Constraints.
- Use cases.
- Data models.
- Integrations.

And many other things — I will cover them in more detail later.

This is the stage where a business requirement begins to transform into system behaviour and our intended business process. And it is one of the most interesting parts of an analyst's work.

---

### **Solution design**

Once we understand what the system should do, we need to figure out how it will do it. At this point the analyst is again at the centre of the process, but now working alongside architects and developers.

Many questions arise, and this is where the difference between simply "gathering requirements" and truly understanding the system becomes especially visible. A good system analyst must see not just an individual feature — they must understand **how it lives inside the entire system**.

---

> **For example**, a user clicks the "Book" button.
>
>
> From their perspective it is a single action.
>
> From the system's perspective it may be an entire chain:
>
> client → interface → backend → booking service → integration layer → external dealer system → availability check → record creation → response back to the user.
>
> If the analyst only understands the "Book" button, they see a tiny piece of the process. But if they understand the entire chain, they can ask the right questions:
>
> - What happens if the external service returns an error?
> - What happens if the slot has become unavailable?
> - At what point is the booking considered created?
> - How do we know that two systems are in the same state?
> - What data do we send onwards, and in what format?
>
> That is systems thinking.
>

---

### **Development**

Once the solution has been worked through well enough, the developers take over. They turn the description into working code — but the analyst does not disappear at this stage. On the contrary, it is often during development that questions arise that could not have been anticipated in advance.

A developer asks follow-up questions, and the analyst goes back to investigate — with the business, with the architect, with other systems, with documentation — and returns with an answer.

An analyst, therefore, is not someone who writes requirements once and hands them over to developers. They accompany the solution throughout the entire process.

---

### Тesting

When the first working version appears, it needs to be verified — and again it turns out that requirements are not just documentation. Requirements become the basis for checking:

Did we get exactly what we set out to build?

A tester walks through various scenarios, and at this point the analyst helps answer the fundamental question: what behaviour of the system is correct? Because a tester may discover something unexpected, but to know whether it is a bug or intended behaviour you need to know the business rule and the system's context.

---

### **Release**

Finally we can ship the new functionality — but the story does not end here either. A system working in a test environment has to reach production. And again, questions arise that the analyst must answer.

Then, after the release, we finally get what the whole thing was started for: genuinely working functionality.

---

### **And then life begins**

There is one thing that is often forgotten when people talk about the software development lifecycle.

**Release is not the end.**

The system starts to live. Users begin using it. New requirements emerge. Bugs are found. Legislation changes. The business changes. New integrations appear. Old systems are upgraded. Processes change. And so on.

And one day someone says again: "What if we added one small feature…"

And we return to the beginning.

A need arises again, questions appear, analysis is needed, a solution is designed, development happens, testing, release. It turns out to be not so much a line as a cycle.

---

### **And where is the analyst in all of this?**

Looking at the entire process as a whole, it becomes clear why the analyst sits roughly at the centre of the team. They do not replace the business, do not write code instead of the developer, do not test the system instead of QA, and do not design the architecture instead of the architect. But they must **understand how all these parts connect**.

The business says what problem needs to be solved; the developer knows how to implement a specific part of the solution; the tester knows how to verify it; the architect understands the technical structure of the system; and the analyst must hold the connection between all of it in their head.

- What we are building.
- Why we are building it.
- How it should work.
- How it relates to the existing system.
- What will change after the implementation.

That is precisely why I think of the analyst as a kind of connective layer within the team. They are constantly moving between levels:

- From business need **→** to system behaviour.
- From system behaviour **→** to data.
- From data **→** to API.
- From API **→** to the specific implementation.

And then back — while not losing sight of the original meaning:

why are we building all this in the first place?

---

### **From idea to outcome**

If we simplify the entire lifecycle as much as possible, the chain looks roughly like this:

**Idea → problem → analysis → requirements → solution → development → testing → release → working system → new changes.**

But the most important thing here is not even the sequence of stages — it is that information is constantly flowing between them. That is why a good analyst looks not at an individual task, but at the system as a whole. They must understand where a need came from, why a particular feature exists, what processes it supports, what data flows through it, which systems it interacts with, and what will happen if even one part changes. And the more complex the system, the more important this systemic view becomes.

And that is exactly why we come back to our original definition: **an analyst reduces uncertainty.** Only now we can see how far that idea extends:

From the first idea — to a working system. And from a working system — to the next idea.

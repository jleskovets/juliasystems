Once we understand what a business process is, a natural question arises: how do you draw it in a way that other people will understand?

For this an analyst has quite a few tools and notations available. One of the most widely used is BPMN (Business Process Model and Notation). In simple terms, BPMN is a standard set of graphical elements that can be used to show how a business process is carried out.

Why not just draw a regular flowchart? You can. Sometimes for a very simple process that is perfectly sufficient. But BPMN provides a defined set of rules and elements that make a diagram easier to read, discuss, and pass between different people and teams. That, in my view, is the main advantage of BPMN.

An analyst can draw a process, a client can look at it and say: "No, here we check the payment first and only then create the order." A developer can see at what point the system needs to do something. A tester can understand the possible scenarios. In other words, a single diagram becomes a shared language for different participants in the process.

### **What does BPMN consist of?**

At the most basic level we only need a few types of elements.

**Events**

An event shows that something has happened or is expected to happen.

On a diagram an event is represented by a circle. The simplest is the Start Event — the event that begins the process.

For example:

Order received → …

At the end of the process there may be an End Event — an event showing that the process has finished.

For example:

Order delivered → process complete.

There are also Intermediate Events, which occur somewhere inside the process. They can represent, for example, receiving a message, a timer, or other events that affect how the process continues.

When first learning BPMN I would not try to memorise every type of event straight away. For most everyday tasks it is enough to understand the principle: a circle represents an event that starts, changes, or ends the process.

**Activities**

Rectangles with rounded corners represent actions performed within the process.

For example:

Verify customer data, create an order, send a notification, check payment, and so on.

An action may be performed by a person, a system, or another process participant.

If an action is itself a sufficiently complex process, it can be represented as a Sub-process and detailed separately.

**Gateways — decision points**

A diamond shape on a BPMN diagram shows that the process can proceed in different directions.

For example:

Payment successful?

→ Yes → Create order

→ No → Send error message

This is a very important element, because gateways allow us to show not only the "happy path" of a process but also alternative scenarios. In real life those are often the most interesting part of the process.

**Sequence Flow**

Arrows show the order in which actions are performed.

For example:

Receive order → Check stock availability → Check payment → Create order

Without sequence, individual actions do not add up to a process.

**Pools and Lanes**

This is where BPMN becomes especially useful for an analyst. A Pool is typically used to represent a distinct process participant or organisation. Inside a Pool, Lanes can be used to divide responsibility between different participants.

For example:

Customer | Online Shop | Payment System | Warehouse

This makes it possible to show who performs each action.

For example:

Customer: place an order

↓

Online Shop: create an order

↓

Payment System: process the payment

↓

Online Shop: confirm the order

↓

Warehouse: begin picking

It immediately becomes much clearer where the responsibility of one party ends and the responsibility of another begins.

**Message Flow**

Another important element is Message Flow. It is used to show the exchange of messages between different process participants.

For example, an online shop sends a request to the payment system, and the payment system returns a result. It is important not to confuse Sequence Flow and Message Flow. Sequence Flow shows the order of actions within a process, while Message Flow shows the exchange of messages between participants.

### Why draw BPMN at all?

I think it is important not to fall into the trap of "analysts should use BPMN because BPMN is best practice". No — BPMN is a tool.

If a process consists of three simple actions, sometimes writing them out in text or drawing a simple sketch is enough. But if we have twenty participants, several systems, various conditions, exceptions, and alternative scenarios, text very quickly becomes inconvenient.

And then a diagram can show the full picture much more effectively.

I typically use BPMN when I need to:

- understand an existing process
- explain a process to other participants
- identify bottlenecks and unnecessary steps
- describe the AS IS — how the process works now — and design the TO BE — how it should work after the change
- find automation opportunities
- understand where and how people and systems need to interact

What's more, BPMN is useful not only as a deliverable from the analyst — the very act of drawing it often helps you understand the process. When you try to put a conversation that lasted several hours onto a single diagram, you suddenly discover that some steps nobody can really explain, responsibility is not defined anywhere, and one of the stages is done "because that's how we've always done it".

### What tools should you use?

There are quite a few options. You can use dedicated BPMN editors, Visio, various online services, and other tools.

For starters I would not overcomplicate things:

[draw.io](http://draw.io) ([diagrams.net](http://diagrams.net)) — one of those tools that is more than sufficient for most analyst tasks. It lets you create BPMN diagrams, use ready-made elements, add text, connect blocks, and assemble even quite large diagrams fairly quickly.

Its most important quality is simplicity: you do not need to spend much time learning the tool itself before you can start drawing.

One more practical advantage — [draw.io](http://draw.io) lets you use the same tool for more than just BPMN. You can create UML diagrams, architecture diagrams, ER diagrams, and many other kinds of visualisation in the same place.

⸻

### One more piece of practical advice

Do not try to make your BPMN as detailed as possible just because you know how to use all of its elements. A diagram always has a specific purpose and a specific reader. If you want to show the business the overall order process, they do not need to see every check, every API call, and every internal condition. But if you are describing a specific process for the development team, a diagram that is too high-level may be completely useless.

So before you start drawing, I would ask three questions:

- What exactly do I want to show?
- Who am I showing it to?
- What decision should the person make, or what understanding should they gain, after viewing the diagram?

Only then would I choose the level of detail — because a good BPMN diagram is one that leaves the reader with a clearer understanding of how the process works.

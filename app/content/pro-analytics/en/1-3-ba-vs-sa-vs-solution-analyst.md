Now let's explore what kinds of analysts actually exist in product development. I want to start with a small caveat: **job titles can vary enormously from company to company**. Over my career I have come across quite a few variations — in some places one person is called a Business Analyst but does the work of several analysts; in others there are separate System Analysts and Business Analysts; and in large enterprise companies you may also encounter a Solution Analyst or similar roles. So there is no point in getting too attached to job titles. What matters far more is understanding **which part of the analytical work a person actually performs**.

If I simplify things quite a bit, I would identify three main directions: **Business Analyst, System Analyst, and Solution Analyst**. In some companies and projects you may also encounter Product Analyst as a closely related or overlapping role, though there are nuances here — the title means quite different things in different organizations.

Let's try to understand where the boundaries between these roles lie.

### **Business Analyst**

If we simplify quite a bit, a business analyst answers the questions:

**Why do we need this? What business problem are we solving? What exactly needs to change?**

They are closest to the business and to the users. A business analyst understands the subject domain, the existing business processes, and the needs of users and stakeholders. They help clarify what problem we are trying to solve and what outcome we want to achieve.

For example, the business says: "We want customers to be able to book a service appointment on their own."

A business analyst will investigate:

- Why is this needed?
- How does a customer book an appointment right now?
- What is wrong with the current process?
- Who else is involved in this process?
- What should the new process look like?
- How will we know the change has actually been beneficial?

In other words, the primary focus here is on **the business need and the process**.

### **System Analyst**

Then the next question arises:

Alright, we understand what the business wants. But how do we implement it in the system?

This is where systems analysis begins. A system analyst goes much deeper into **how the information system must work** in order to fulfil the stated goal:

- What data do we need?
- What changes occur inside the system?
- Which APIs need to be changed or added?
- Which other systems must it interact with?
- What happens in various scenarios?
- What constraints does the existing system have?

Continuing our booking example, the system analyst would work out what should happen after the customer selects a date and time: what data is sent, where it goes, what validations are performed, which systems are involved, and what response the user receives.

If the business analyst helps answer the question **"what and why do we need to change?"**, the system analyst is primarily concerned with the question **"how should it work inside the system?"**.

### **Solution Analyst**

Now imagine a large enterprise project where there is not one small system but an entire complex: a CRM, a mobile app, several backend systems, a payment gateway, external services, databases, and a dozen other components that all have to work together.

Another level emerges — it is no longer enough to understand what a single system should do. We need to understand **how the solution as a whole should work**. This is where I have encountered the Solution Analyst role — a person who views the task at the level of the entire solution and connects the business need to multiple systems and components.

They may analyse system interactions, boundaries of responsibility, integrations, implementation options, and how individual changes will affect the entire landscape. The boundary between Solution Analyst and System Analyst is often far from clear-cut. In one company these will be two distinct people; in another, a system analyst will comfortably perform both functions.

The situation with Product Analyst is even more varied. In some companies this role is indeed close to solution analysis and product evolution, but in others a Product Analyst is an entirely separate story — one primarily concerned with product analytics, metrics, user behaviour, and product decision-making. So again, I would not argue about the right title. **Look at the actual responsibilities.**

### **Where do the boundaries lie?**

If you try to sketch these roles roughly, you get something like the following chain:

**Business Analyst**

*Why? What does the business need? What problem are we solving?*

↓

**System Analyst**

*What should the system do? How should it work?*

↓

**Solution Analyst**

*How should all the parts of the solution work together?*

But these are not three separate and sharply divided functions — they overlap a great deal. A good system analyst must understand the business process, otherwise it will be very hard to understand why the system needs a particular behaviour at all. A business analyst also benefits from understanding the constraints and capabilities of systems, otherwise they may design a wonderful business solution that is impossible or prohibitively expensive to implement. And a Solution Analyst cannot design a good solution without understanding either the business problem or the requirements of the individual systems.

So I would rather picture these roles as three areas that partially overlap, rather than a strict sequence in which a task is handed from one person to the next.

### **Who works in the team, then?**

In one company there may be **three separate specialists**: a Business Analyst who deals with the business and its processes, a System Analyst who elaborates requirements for the systems, and a Solution Analyst who looks at the solution as a whole. In another company, **one person** may do all of this.

The number of analysts and the distribution of responsibility depends on the size of the company, the complexity of the product, the number of systems, the maturity of processes, and simply on how a particular organization is used to working.

So if you join a team where the job posting says **Business Analyst**, do not be surprised to find after a week that you are also expected to deal with APIs, integrations, UML, system descriptions, and architecture discussions with developers.

And conversely: if you call yourself a **System Analyst**, that does not mean you can afford not to know what business process lies behind the system you are describing.

**In practice, a good analyst constantly steps beyond the boundaries of their formal role.**

This is especially important to understand if you are the only analyst in the team. In that case, be prepared to combine all three roles in one person: talk to the business, understand the process, shape the requirements, grasp how the system is built, think through the integrations, and work together with developers to find a suitable solution.

That is why I would advise analysts who are just starting out not to worry too much about the question:

"Am I a Business Analyst or a System Analyst right now?"

Far more useful is to ask:

**"What problem am I solving right now, and what level of analysis does it require?"**

Because your job title may change the moment you move to a different company, but the ability to understand a business need, grasp a process, reason about a system, and think through a proposed solution will stay with you — regardless of what is written in your email signature.

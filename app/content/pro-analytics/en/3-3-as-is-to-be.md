Once we have learned to describe business processes, the next logical question arises: what do we actually do with a process once we have it?

In real projects an analyst rarely draws a process simply to record its existence. There is usually a reason: the process needs to be changed, automated, simplified, sped up, made cheaper, or completely restructured. This is where two very common terms come into play — **AS IS** and **TO BE**.

**AS IS** — the current state of the process, meaning how the process works right now.

**TO BE** — the target state, meaning how the process should work after the changes have been made.

In practice there is another important stage between them — **Gap Analysis**: an analysis of the gaps between the current and target states.

Simplified, it looks like this: *AS IS → analysis of problems and gaps → TO BE*

And only after that can we move on to requirements for the future solution.

### **AS IS — understanding how things work now**

The word "now" is very important here.

AS IS is a description of the **real current state of the process** — not how the process is supposed to work according to the manual, and not how the client imagines it works.

That is precisely why building an AS IS often turns out to be a far more interesting task than it first appears. It is a kind of investigation. When an analyst begins unpacking a process, they find out who participates, what actions are performed, which systems are used, what data is passed between participants, where decisions are made, what exceptions exist, and what happens when errors occur. The real process can differ quite substantially from the one formally described. Employees may have developed additional steps, manual workarounds, Excel files, emails, or other ways of solving problems that the original process never anticipated. That is exactly what interests the analyst.

So AS IS is not simply "draw the current process" — it is more of an attempt to **understand how the process actually works**.

### **What are we looking for in the AS IS?**

Once the current process has been described, you can start looking for its problem areas. This is where the concept of **pain points** comes in.

These might include:

- manual operations
- duplication of actions or data
- long waiting times
- excessive numbers of approvals
- errors
- missing information
- multiple systems between which data has to be transferred manually
- steps that create no value but have remained in the process for historical reasons

But identifying a pain point does not automatically mean it must be eliminated. That too is part of the analyst's job. It is necessary to understand whether the problem genuinely affects the business outcome, the user, the cost, or the speed of the process. Sometimes a step that looks inconvenient is a necessary control; sometimes an entire stage exists simply because "that's how it's always been done".

### **TO BE — what the process should become**

Once we understand the current state and have identified what we want to change, we can move on to **TO BE**.

TO BE describes the target state of the process — but it is **not a description of the new system**. It is a description of **how the process should work** after the changes. The system may be part of that process, but it is not its only content.

We may reassign responsibilities between participants, remove unnecessary steps, change the sequence of actions, automate certain operations, add controls, or change how systems interact. That is why starting the TO BE purely with the question "what should the system do?" is not always the right approach. First you need to understand **what the process itself should look like and what outcome we want to achieve** — and only then determine what role the system will play in that process.

### **Gap Analysis**

**Gap Analysis** — an analysis of the gaps between the AS IS and the TO BE.

We compare the current and target states and try to understand: **what exactly needs to change for us to move from one state to the other?**

Sometimes the gap is small: for example, one manual operation should become automated. Other times the TO BE requires quite significant changes — new process participants, new rules, integrations between systems, data changes, or a complete restructuring of certain stages.

In essence, Gap Analysis helps move from a general desire to improve the process to a concrete understanding: "Here is what we have now, here is what the process should become, and here are the changes that will be required."

Those changes gradually turn into requirements.

### **AS IS and TO BE as a way of reaching agreement**

There is another reason why AS IS and TO BE are so useful for an analyst: every process participant usually has their own picture of what is happening. The business sees the process from one angle, the user from another, the developer looks at it through the lens of the existing system, and different departments may have completely different ideas about where their responsibility begins and ends.

When we describe the AS IS, a shared model of the current state emerges. When we describe the TO BE, a shared vision of where we are heading appears — and this greatly simplifies discussion. Instead of lengthy arguments about "how everything should be", you can look at the two diagrams and discuss concretely **what is changing between them and why**.

### **Back to requirements**

For the analyst the chain here is quite elegant:

**Business Need → AS IS → Pain Points → Gap Analysis → TO BE → Requirements**

First we understand why changes are needed at all. Then we work out how the process currently functions, find the problems and constraints, determine what the target state should look like, and only after that start formulating requirements for the solution.

I think this is one of those cases where a diagram is not just an analyst's artefact.

AS IS and TO BE help us **think about the process**. Until we understand the current state, it is quite difficult to determine what exactly needs to change. And if we do not understand the target state, requirements very easily become nothing more than a list of features someone asked to add to the system. This is, in a sense, the transition **from understanding the existing reality to consciously designing change**.

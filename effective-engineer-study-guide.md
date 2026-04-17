# The Effective Engineer: A Study Guide from Reddit

A distilled reader on how to grow as a staff-track software engineer, stay
awake in your career, avoid the mistakes that stall most senior devs, and
adapt to the AI era — built from 26 high-signal threads on r/ExperiencedDevs
with the most upvoted comments on each.

Every lesson is anchored to a quote from a practicing engineer and links back
to the thread. The guide is focused on **8+ YOE / senior → staff / principal**
growth, but most of it applies earlier too.

---

## How to use this guide

- **Read it once end-to-end.** Four parts, each short. Build a mental model,
  don't memorize.
- **Skim the checklists at the end.** Pin them somewhere you'll see them.
- **Click through to threads** for any topic that's biting you right now.
- **Revisit quarterly.** Career advice decays fast — especially the AI parts.

---

## Core principles (the spine of everything below)

Four ideas show up everywhere.

1. **Past senior, the game changes.** The skills that got you to senior — raw
   technical execution — are a small fraction of what gets you to staff and
   beyond. If you keep optimizing for code, you'll cap out.
2. **Visibility is not optional, and it's not marketing.** If nobody knows
   what you've shipped, you haven't shipped it as far as your career is
   concerned. This is a leadership failure *and* yours to fix.
3. **Culture eats effort for breakfast.** A dysfunctional team will burn you
   out no matter how hard you work. The single highest-leverage career move
   is often changing teams or companies.
4. **AI is not the threat you think it is — but *how* you use it is.** AI
   amplifies whatever judgment you already have. Bad engineers become bad
   faster; good engineers become force multipliers. The dangerous middle is
   engineers who let their judgment atrophy.

---

# Part 1 — Technical habits & craft

## 1.1 What "senior" actually means after 8 years

The consensus definition from the threads, distilled: a senior-plus engineer
is someone who gets things done with little oversight, identifies the right
problems to solve, and *makes the people around them more effective*.

> *"I'm looking for high agency engineers who need as little oversight as
> possible, understand the domain and can get shit done. When they see
> something that needs improving they call it out and improve it. When they
> need new skills they identify those skills and build them. … Good engineers
> don't just deliver code. They use code as a tool to solve problems and
> create value. The best engineers identify those problems and opportunities
> and basically need zero oversight besides a manager/director to clear the
> way for them."*
> — [r/ExperiencedDevs — "What 'non-coding' skill made the biggest difference in your career?"](https://www.reddit.com/r/ExperiencedDevs/comments/1rpo0gt/senior_engineers_what_noncoding_skill_made_the/)

Two widely-shared one-liners that capture the mature craft stance:

> *"Good code is code that can be understood by a junior engineer. Great
> code can be understood by a first year CS freshman. The best code is no
> code at all."*

> *"Being a good engineer means knowing best practices. Being a senior
> engineer means knowing when to break best practices."*
> — [r/ExperiencedDevs — "Drunk Post: Things I've learned as a Sr Engineer"](https://www.reddit.com/r/ExperiencedDevs/comments/nmodyl/drunk_post_things_ive_learned_as_a_sr_engineer/)

## 1.2 The habits that separate compound-growth engineers from plateau'd ones

The most useful thread on "how do I become that super driven person" ends
with a surprisingly concrete list of habits:

> *"Build micro-habits. Start with the smallest step. … Stop treating
> deadlines like a trigger to start working. Break tasks down and build like
> someone who cares about the long game. … Speak up. Share what's stuck,
> even if it feels small. Strong engineers care about the outcome more than
> their ego. … After every major feature or bug fix, write a quick summary.
> … Consult early. Consult often. A 10-minute chat can save you hours of
> wasted work. … Every few months, pick one new thing to explore. Growth
> compounds, but only if you keep feeding it. … Start small. Take on the
> annoying bug no one wants to fix. Each time you step up, you build trust."*
> — [r/ExperiencedDevs — "How can an average engineer become that super driven person?"](https://www.reddit.com/r/ExperiencedDevs/comments/1mzcqbp/how_can_an_average_engineer_become_that_super/)

The same thread surfaces an uncomfortable counter-point from experienced
devs: **you may not be able to force drive onto yourself.**

> *"I've never, ever seen someone force themselves into a driven person.
> They either are driven, or they aren't. … There's not really a secret
> sauce to promotions. Aim for the next rung on the ladder in your current
> company. Unless your company is withholding promotions, you're not likely
> to suddenly become a Senior by job hopping."*
> — same thread

Translation: habits compound, but the underlying engine is caring about the
outcome. If you don't care, no productivity stack will fix it — and that's a
signal, not a failing. Either find what you care about, or accept a
deliberate coast.

## 1.3 Deep work is your moat

A post that's close to gospel on r/ExperiencedDevs:

> *"High value work is differentiated work. It's your moat. Not everyone has
> the grit, the attitude, the determination, and the ability to focus on
> challenging problems involving abstract concepts, especially when there is
> no immediate gratification, and when there is significant adversity in the
> environment. … Most people refuse to read. Most people refuse to do
> research. Most people panic when they see big log messages or stack
> traces. … If you're the opposite of that kind of person, you will always
> be valuable in development."*
> — [r/ExperiencedDevs — "All high value work is deep work, and all motivation is based on belief"](https://www.reddit.com/r/ExperiencedDevs/comments/1lpyimz/all_high_value_work_is_deep_work_and_all/)

The same post's other half — that **all motivation is based on belief** — is
worth sitting with. Find what genuinely drives you (flow, gratitude, praise,
social bond, financial goal) and be honest about it. Fake motivation burns
out fast.

A manager's view from the same thread:

> *"My team is at its very best when I am out of the way and doing
> everything in my power to give them the space and safety needed for the
> deep work you are talking about. … If your managers are not doing the
> above for you, then find ways to ask for those things in your 1:1s."*

## 1.4 Common system design mistakes — don't make these

From a thread where hundreds of senior engineers confessed their worst
architectural calls:

**Over-distributing systems too early.**
> *"Having too many micro services. Having a microservice per single API or
> a function. In some cases it has benefits, but the lifecycle, version and
> other management of too many entities is usually awful. … Don't split
> logic to separate deployable entities without a good reason, just
> modularize it inside and be prepared to split."*
> — [r/ExperiencedDevs — "What's a system design mistake you made in your career?"](https://www.reddit.com/r/ExperiencedDevs/comments/1ls88k9/whats_a_system_design_mistake_you_made_in_your/)

> *"Having more microservices than actual users."* — same thread.

**Premature "future-proofing."**
> *"'Future proofing' abstractions. Most of the time the future does
> something different and now your abstractions are in the way. Better to
> plan for a rewrite than try to avoid it."*
> — same thread

**Meta-configuration systems that only you will ever configure.**
> *"Now I believe code should stay code, and that configuration should be
> thought of as another type of API aimed in a different direction from
> your user facing API. Design it to be as simple as possible, but not
> simpler. I tend to err towards 'specific' rather than 'abstraction' these
> days."*
> — same thread

**Picking trendy tech over boring tech.**
> *"Including Kafka in the first iteration of a feature. Made it stupidly
> complex for no reason and ended up being the complete downfall. All we
> really had to do was work with the PM and reduce the scope of the
> feature."*
> — same thread

**Treating data mistakes like code mistakes.**
> *"Oh and not thinking about data early enough. Code mistakes are easy to
> fix. Data mistakes not so much."*
> — same thread

**The full rewrite trap.**
> *"As tempting as it might seem a full rewrite is probably never the right
> thing to do. Often you can only generate value/gain any traction once you
> have feature parity with the product you are replacing, while you also
> need to plan for and support other new features."*
> — same thread

The through-line: **choose boring, specific, integrated over cutting-edge,
abstract, distributed** unless you have a very concrete reason that scales
with the product today — not with your hypothetical roadmap.

## 1.5 Writing and documentation — the most underrated senior skill

From the single most-upvoted r/ExperiencedDevs post of all time:

> *"The most underrated skill to learn as an engineer is how to document.
> Fuck, someone please teach me how to write good documentation."*
> — [r/ExperiencedDevs — "Drunk Post: Things I've learned as a Sr Engineer"](https://www.reddit.com/r/ExperiencedDevs/comments/nmodyl/drunk_post_things_ive_learned_as_a_sr_engineer/)

Docs are a leverage multiplier: every design doc, ADR, or runbook you write
replaces N meetings and protects N future engineers from the mistake you
already made. From the top reply in the visibility thread:

> *"At stand-up, don't say 'I closed issue #4383,' say 'I found and fixed
> the intermittent memory starvation problem in the Order system.'"*
> — [r/ExperiencedDevs — "Things I did to help me get more 'visibility'"](https://www.reddit.com/r/ExperiencedDevs/comments/1pwfx9l/things_i_did_to_help_me_get_more_visibility_as_a/)

Concrete practice that repeatedly shows up:

- **Proposal docs for any non-trivial change.** Write it before you write
  the code; review it with stakeholders; keep it after.
- **Post-mortems for incidents you were involved in**, even if no one asks.
- **Weekly summary of what changed in your area** sent to your team
  channel. Short, high-signal, and it incidentally builds visibility (Part 2).
- **Runbooks for anything that paged you once.** You will get paged again.

## 1.6 AI as a craft multiplier — used right

The most carefully argued AI thread in the corpus lands on this: AI is most
useful for *experienced* developers because they know what they don't know.

> *"AI tools are a force multiplier. Not for codegen, but for (imo) the
> hardest part of software development: learning new things, and applying
> them appropriately. … Their best use case is natural language
> understanding. … It feels really empowering; for me, my biggest sense of
> dread in my career has been grappling with not knowing enough. With AI as
> a swiss army knife, I don't feel as intimidated/pre-fatigued to pick up
> topics on the weekends anymore."*
> — [r/ExperiencedDevs — "AI tools are ironically way more useful for experienced devs than novices"](https://www.reddit.com/r/ExperiencedDevs/comments/1jzpzkm/ai_tools_are_ironically_way_more_useful_for/)

A sharp warning from the same thread that reframes how to evaluate AI
productivity claims:

> *"AI seems to multiply the quality of code that someone would write
> without AI. Bad programmer × AI = Lots of bad code. Medium programmer ×
> AI = Lots of medium code. Great programmer × AI = Lots of great code."*

The graybeard dev's take, widely cited as "the" calm post on the topic:

> *"Every company needs a way to stand out from their competitors. They
> can't do it by simply using the same tools their competition does. …
> There can never be a scenario where everyone just adopts the same tools
> and rests on their laurels. Learn how AI tools can help your velocity,
> and improve your code's reliability, readability, testability. … At the
> end of the day, what will matter is how far YOU take it, not how far it
> goes by itself."*
> — [r/ExperiencedDevs — "A Graybeard Dev's Guide to Coping With A.I."](https://www.reddit.com/r/ExperiencedDevs/comments/1i2cdfc/a_graybeard_devs_guide_to_coping_with_ai/)

What this looks like in practice for an 8+ YOE engineer:

- **Use it to ramp on unfamiliar stacks fast.** Don't waste days fumbling
  with idiomatic syntax — that was never the interesting part of your job.
- **Use it to rubber-duck design decisions**, especially when you want to
  stress-test an architecture before committing.
- **Don't use it to skip understanding.** If you can't explain the code
  without saying "Claude did it," you can't defend it, extend it, or debug
  it. (See section 3.4 for why this is career-limiting.)
- **Calibrate against cost.** Some engineers report a ~10% productivity
  lift; some find it negative on deep work. Measure yourself.

## 1.7 Keep manual craft alive — it's your calibration

> *"I've gotten more intentional about keeping some manual coding practice
> alive. Not because the output is necessarily better, but because the
> process keeps my intuitions calibrated. It's like staying physically
> active even when your job doesn't require it — you do it because the
> capability matters even when you're not actively using it."*
> — [r/ExperiencedDevs — "Anyone else feeling like they're losing their craft?"](https://www.reddit.com/r/ExperiencedDevs/comments/1rtbvvo/anyone_else_feeling_like_theyre_losing_their_craft/)

> *"Officially I'm in senior management but I keep my skills sharp because
> I see value in them, not from a job or coding perspective (although
> handy) I find it keeps one's thinking sharp and logical."*
> — same thread

A small, ritualized amount of hand-written, un-assisted code per week —
even 30 minutes — keeps your reviewer intuition accurate and your debugging
skills from atrophying. This matters more as your title goes up, not less.

## 1.8 Craft vs. impact — the trap and the resolution

A perennial tension: the "craft" engineer who cares about clean code vs. the
"impact" engineer who cares about delivery. Reddit's answer is consistently
that **the best engineers do both**, adjusting to context.

> *"Extremes of both ends are bad. 'Craft' slows down product delivery.
> 'Impact' makes you have sloppy code. The best engineers balance both. …
> Developing core business/service logic — you better craft the shit out
> of that. Developing a tactical feature — impact matters here, get that
> shit done ASAP."*
> — [r/ExperiencedDevs — "How do you reconcile being a 'craft' engineer at a company that values 'impact' way more?"](https://www.reddit.com/r/ExperiencedDevs/comments/ozqrdy/how_do_you_reconcile_being_a_craft_engineer_at_a/)

> *"In my experience the engineers that cared about code quality,
> maintainability etc. cared a lot about the business impact. They just
> thought they were looking at the long term picture."*
> — [r/ExperiencedDevs — "Code is a Craft, not a Competition"](https://www.reddit.com/r/ExperiencedDevs/comments/wgc8s6/code_is_a_craft_not_a_competition_and_why_it/)

A pragmatic way to frame craft to non-technical stakeholders:

> *"A big reason why old code doesn't work is because it makes it more
> difficult to add new features. Therefore, be on the lookout for when new
> features are an excuse to fix old infrastructure. Managers just want to
> see that your improvements are bringing business value, so frame code
> quality as an enabler to velocity and current feature work."*
> — [r/ExperiencedDevs — "I'm giving up; Becoming a yes man"](https://www.reddit.com/r/ExperiencedDevs/comments/1sgcy1e/im_giving_up_becoming_a_yes_man/)

---

# Part 2 — Career progression & visibility

## 2.1 The brag doc — the single most-cited career habit on Reddit

If there's one habit repeated across more threads than any other, it's
keeping a running log of your accomplishments.

> *"Update your brag document on a weekly basis. You can set it as a
> recurring event on your calendar. The biggest benefit of this is that it
> forces you to scrutinize your output on a regular basis and allows you
> to be proactive about focusing on the work you want to do."*
> — [r/ExperiencedDevs — "Keep a Brag Document"](https://www.reddit.com/r/ExperiencedDevs/comments/h972k3/keep_a_brag_document/)

The updated template that's become the de facto Reddit standard:

> *"- **win:** shipped X / fixed Y*
> *- **before / after:** 310ms / 190ms*
> *- **metric:***
> *- **who benefited:***
> *- **evidence:** link/screenshot"*
> — [r/ExperiencedDevs — "A 5 min weekly habit completely changed my performance review"](https://www.reddit.com/r/ExperiencedDevs/comments/1n7zuba/a_5_min_weekly_habit_completely_changed_my/)

> *"I realized doing it weekly is the hack. Choose the same time every week
> — for me it's Friday at like 3 — and take 5 mins to log the top
> accomplishments from the week. Made it easier to make a habit of it
> rather than forcing myself to write a big review later."*
> — same thread

Why this matters at staff+ levels specifically: promotion packets are
stories, not resumes. The thing that gets you to staff is your ability to
point at concrete, measurable impact over the last 12–18 months. Without a
brag doc, you'll forget 70% of what you did.

A healthy dissent worth knowing:

> *"One of my previous managers also introduced this but it quickly turned
> into a marketing tactic. Basically people showcasing their made up
> accomplishments to get promoted. … It got scrapped after I pointed this
> out. It's management's job to track the work of developers and evaluate
> the performance, not the developer's job to market themselves."*
> — same thread

The truth is somewhere in between: keep the brag doc for yourself; share it
with your manager selectively; don't let it become the point of your work.

## 2.2 Visibility tactics that actually work

A highly-upvoted senior engineer's concrete playbook:

> *"Set up a monthly 1:1 with your skip. Make sure they know: what projects
> you've shipped, what you're currently working on, how you are helping the
> team grow. … Communicate more than feels necessary — early code reviews,
> early design discussions, bring up things that can go wrong early,
> announce when something's been released. … Before picking up
> projects/stories ask yourself: Who benefits from this work? Just me, my
> team, multiple teams, whole org, or the whole company? … Skip-level prep:
> show up with three things — one thing I shipped they might not know
> about, one thing I'm working on that connects to their priorities, one
> question: 'What does great look like for engineers at my level?'"*
> — [r/ExperiencedDevs — "Things I did to help me get more 'visibility' as a software engineer"](https://www.reddit.com/r/ExperiencedDevs/comments/1pwfx9l/things_i_did_to_help_me_get_more_visibility_as_a/)

Additional tactics from the same thread:

> *"Name projects. Sounds stupid, but once people start calling something
> project XYZ, it starts to stick and you get associated with it. …
> Owning and driving resolution of prod breaking bugs. The person who is on
> top of all the details in the sev gets a lot of visibility. … Giving
> kudos and praise in public. Usually highly appreciated and also gives you
> some ethos as someone who is cognizant of the great work going on in the
> org."*

The realist perspective worth internalizing:

> *"If you're trying to optimize for career growth at a large tech
> company, this is all good advice. … Does it suck that you have to self
> promote yourself like this? Yes, it does, but it's also needed at most
> places."*
> — same thread

And the bitter truth about why this falls on the IC:

> *"Half of your points are the job of your manager … but since most
> managers are beyond useless it's sad that you really have to work on
> this too on top of your actual work."*
> — same thread

## 2.3 The non-coding skills that matter more than you think

The thread asking senior engineers which non-coding skill made the biggest
difference has a nearly unanimous answer across hundreds of comments:

> *"Learning to influence without authority."*
> — [r/ExperiencedDevs — "What 'non-coding' skill made the biggest difference in your career?"](https://www.reddit.com/r/ExperiencedDevs/comments/1rpo0gt/senior_engineers_what_noncoding_skill_made_the/)

Other top-rated answers from the same thread:

- **Social skills / being someone people want to work with.** *"I've had 5
  different jobs since graduating. Only my first wasn't a referral. You
  need people to like you to go places."*
- **Writing for different audiences.** *"A large part of my technical
  writing class was getting us used to explaining the same idea to
  different target groups. I know a lot of programmers that by default get
  too deep into the weeds explaining things to non-technical colleagues."*
- **Influence / persuasion / sales.** *"Sales, marketing, copywriting,
  persuasion — call it what you like. A few consultant basics like the
  pyramid principle and SCQA will do more for your career than any library
  or framework."*
- **Agency.** *"I'm looking for high agency engineers … when they see
  something that needs improving they call it out and improve it."*

A more argumentative but often-true claim:

> *"Being successful as a senior software engineer needs more customer
> vision, attention to detail and project management skills than technical
> skills. … The real good engineers have fantastic customer empathy, strong
> design skills, and discipline to manage their own and other's time."*
> — [r/ExperiencedDevs — "Change My View: Being successful as a senior software engineer needs more customer vision…"](https://www.reddit.com/r/ExperiencedDevs/comments/1h2ssi3/change_my_view_being_successful_as_a_senior/)

The rebuttal also worth holding:

> *"Software engineering is incredibly hard, and if you think it isn't,
> you're in a plateau and should go solve something appropriate for your
> skill level."*
> — same thread

Both are true. Past a threshold, *marginal* technical skill has
diminishing returns; *marginal* soft skill has increasing returns. That
threshold lives somewhere around senior. Below it, technical depth still
dominates.

## 2.4 Mentorship — the perk senior engineers leave on the table

> *"'If you're the smartest person in the room, you're in the wrong room.' …
> I reached out to literally the guy who rewrote Facebook's news feed
> infrastructure and he mentored me on how to recruit engineers, create
> success criteria for leadership, and how to spin wins for visibility. …
> People, especially smart and driven engineers, almost always are willing
> to help out and teach others if you take the initiative to ask."*
> — [r/ExperiencedDevs — "Mentorship: underrated perk of big tech"](https://www.reddit.com/r/ExperiencedDevs/comments/1ffe5zd/mentorship_underrated_perk_of_big_tech/)

Crucial detail from the top reply:

> *"This is key. Learning by osmosis. By just being there and observing
> things that can't be formally taught. Like when you are in a terminal,
> you do arrow up, then ctrl-A, change a piece of text to stop and start
> services in a shell. You don't see that in a screen sharing session.
> Little stuff like that blows their mentee's minds when they see it."*

The actionable version: **ask a senior engineer if you can watch them
debug something — not a lecture, just screen-share silence with occasional
questions.** It's the fastest learning experience at this level, and almost
no one asks.

## 2.5 The path to staff is not "more senior"

The clearest, most-upvoted articulation:

> *"A senior engineer continues to push on the things they are good at.
> The code. They find themselves having a stronger voice on architecture
> decisions and also settling into a subject matter role. They continue to
> ship features and products with minimal oversight. They are frankly
> really good at doing this. … After approving promotions for roughly 11
> engineers from senior to staff in the last 3 years … it has not been
> successful for over half of these super talented senior engineers. They
> are not happy because the skills they developed to become a great senior
> engineer are only a portion of what makes a staff engineer successful. …
> A staff engineer is a cross-cutting IC who can span teams and domains
> effectively. … In the end, the output is almost always a set of
> recommendations for other teams to implement while you provide guidance
> and risk mitigations. Rarely are you coding these solutions end to end."*
> — [r/ExperiencedDevs — "Your Career Beyond a Senior Engineer"](https://www.reddit.com/r/ExperiencedDevs/comments/xkenut/your_career_beyond_a_senior_engineer/)

Corollary: **staff is not a reward for being a great senior.** It's a
different job. Before taking a staff promotion, ask yourself honestly
whether you want a job where you code ~20% of your time, not 80%.

> *"Then why do you want to become a Principal Engineer? That's the entire
> point of a Principal: someone who provides real technical leadership,
> especially around architecture."*
> — [r/ExperiencedDevs — "On becoming a 'principal engineer'"](https://www.reddit.com/r/ExperiencedDevs/comments/1f1urrp/on_becoming_a_principal_engineer/)

> *"Senior engineer is a respectable and appropriate title to aim for.
> Staff is a different role, and many people dislike it and return to
> senior because, honestly, it can sometimes be frustrating."*
> — [r/ExperiencedDevs — "Not seen as 'staff engineer material'"](https://www.reddit.com/r/ExperiencedDevs/comments/1plxapk/not_seen_as_staff_engineer_material_because_of_my/)

### What actually drives a senior → staff promo

From someone who made it:

> *"As I gained more experience and became more senior I was tasked more
> and more with translating business requirements → technical requirements.
> Eventually I found that organizational and social constraints were what
> were preventing me from proposing a technical path forward. Going solo
> and building things via heroic efforts in the face of that ended up
> taking a large personal toll. I began to work with managers and directors
> as peers to try to address those issues — getting motivated engineers
> working together, improving hiring, finding space for teams to take
> risks, etc. I relied on the goodwill and capital that I had accrued with
> other engineers through being a strong technical contributor to achieve
> these outcomes. Before I knew it, promotion to principal."*
> — [r/ExperiencedDevs — "On becoming a 'principal engineer'"](https://www.reddit.com/r/ExperiencedDevs/comments/1f1urrp/on_becoming_a_principal_engineer/)

The pattern: **technical credibility → social capital → org-level leverage →
promotion**. Skipping the first two and jumping to "influence work" reads as
a grab and usually fails.

### Title vs. money vs. role — don't conflate them

> *"I've been a senior engineer many times. I've had a staff engineer
> promotion denied before when I was already doing the job and have never
> had that title. … Now I'm a senior engineer again. The odd thing is,
> being a senior engineer at a larger publicly traded company that issues
> RSU grants pays way more than I was making as a principal or architect
> at other large orgs that didn't give stock. So sometimes the next step
> beyond senior engineer.... is to find a much higher paying senior
> engineer job."*
> — [r/ExperiencedDevs — "Your Career Beyond a Senior Engineer"](https://www.reddit.com/r/ExperiencedDevs/comments/xkenut/your_career_beyond_a_senior_engineer/)

Don't chase titles for their own sake. The highest-paid ICs are often
"senior" at one big-tech company, not "principal" at a mid-tier one.

## 2.6 Assertiveness without becoming an asshole

A long, raw thread about being denied staff promotion for "personality"
reasons surfaces useful feedback on how the assertiveness question actually
plays out:

> *"Compare these two answers to the question: 'what frontend framework
> should we pick for this project':*
>
> *A: 'Anything really works, whatever the team is most comfortable with.
> Let's hear what everyone has to say.'*
>
> *B: 'I prefer React, because x, y, z. It fits with our other projects and
> will give us benefits for X. Having said that, this is a group decision
> and we should see what works for the full team.'*
>
> *Both are saying the same underlying thing: 'everyone's opinion is
> valid', but one is taking a specific stance backed by their experience
> and thus they sound more like a leader."*
> — [r/ExperiencedDevs — "Not seen as 'staff engineer material' because of my personality"](https://www.reddit.com/r/ExperiencedDevs/comments/1plxapk/not_seen_as_staff_engineer_material_because_of_my/)

A staff engineer's direct response to the same thread:

> *"Being a leader doesn't mean being loud. But I'm noticing a pattern
> where you lack assertiveness. No, that doesn't mean acting like a rude
> jerk. It doesn't mean interrupting people. It means exactly what it
> says. Try to avoid words like 'dominance' and 'alpha' in your work
> vocabulary. … Promotions are partly political and partly technical, with
> the political aspect being more significant. You need visibility and want
> every senior leader to recognize your name."*
> — same thread

The practical translation: **have an opinion and lead with it**, then open
to discussion. "I recommend X because Y, and I'm open to counter-evidence"
is the senior register. "What do you all think?" with no starting point is
the junior register — even if the underlying opinion is the same.

---

# Part 3 — Mistakes to avoid & staying sharp

## 3.1 Toxic environments rarely change — don't bet your career that they will

The single most-quoted career lesson on r/ExperiencedDevs:

> *"If you've come to the conclusion your team is toxic, there's a high
> chance you're right — it's not a conclusion most people come to lightly. …
> Maybe I'm cynical here, but in my experience, it's easy to convince
> yourself things will change. Problem is, if your environment is truly
> toxic, there is organizational dysfunction levels above your pay grade
> that is unlikely to resolve."*
> — [r/ExperiencedDevs — "A lesson learned the hard way: Toxic environments rarely change"](https://www.reddit.com/r/ExperiencedDevs/comments/1e1ufey/a_lesson_learned_the_hard_way_toxic_environments/)

Four common delusions the same post lists and debunks:

1. *"The next project will be better."* — The same dysfunction will make
   it a death march too.
2. *"I can fix this broken system if I grind."* — If it wasn't a team
   effort to begin with, you're not getting credit and the org doesn't
   value it.
3. *"Leadership will fix this once they see it."* — They already see it.
   Taking action on it is a different problem they're not solving.
4. *"They just hired new people; the load will ease."* — If they had
   effective capacity planning, you wouldn't have been overloaded this
   long.

Top reply from a 30-year veteran:

> *"I'm the kind of guy who always wants to stick around when things are
> getting tough and other people are bailing out, and not once in any
> situation has that tendency ever worked out for me or that loyalty ever
> been rewarded."*
> — same thread

An alternative coping strategy also worth knowing:

> *"You can stay, just don't be emotionally invested. Accept this as their
> final state. When you bring things up, it's just for air cover, should
> people pretend confusion later. Not because you care if they fix it.
> Disengage."*
> — same thread

This is a valid middle path — *conscious* coasting while you line up
something better — but don't confuse it with fixing anything.

## 3.2 Burnout prevention: work at 60%

The most upvoted burnout post on r/ExperiencedDevs is blunt:

> *"My goal is to always be around 50–65% capacity. Now, that doesn't mean
> I half-ass my work. It means I work 4–5 hours a day most days, and it
> takes me a bit longer to do things, but I get them done properly, and
> usually faster than other people because I'm fairly good at this stuff. …
> If your company is loading you up beyond what you can handle at 50–65%
> capacity, say no. You have more power than you think."*
> — [r/ExperiencedDevs — "Burnout Prevention"](https://www.reddit.com/r/ExperiencedDevs/comments/rvauwd/burnout_prevention/)

The argument isn't that 4–5 hours is the "real" workday. It's that
**deep-work hours are a small percentage of any workday**, and pretending
otherwise by padding your schedule with shallow work just hides
understaffing from management and raises the bar on everyone.

> *"With physical jobs there's such direct feedback like feeling tired or
> sore, but we don't get that kind of response for intense mental work.
> Until it's too late."*
> — same thread

A specific tactical list from a senior engineer who has fought burnout
multiple times:

> *"Do not get into the habit of checking work chat or email on your phone
> or personal computer. Ideally don't even hook work chat or email up to
> your phone. Set expectations with your coworkers that you'll check those
> things during business hours, and they need to call/page outside of
> that. … If you get promoted, especially above senior, the nature of your
> work will change. You'll do less hands-on coding, more meeting and
> talking and thinking about problems. If you were good at hands-on coding,
> you might try to convince yourself that you can contribute as much code
> as a senior IC, and also do the staff+ stuff. Don't do this. It's a
> recipe for burnout."*
> — same thread

## 3.3 The "you became too important" trap

A quietly dangerous career state at staff+ levels:

> *"I have been promoted to staff level a little over a year ago, but I have
> been operating as such for over 2 years. Now I find myself responsible
> for way too many topics, I have no one to actually mentor or offload some
> of the responsibilities. Due to various re-orgs, and multiple people
> leaving at the same time, I find myself basically propping up 2 KTLO
> products and I'm expected to also have 'staff level impact' on a new
> one. This is burning me out."*
> — [r/ExperiencedDevs — "Help I've accidentally became too important at work and it is burning me out"](https://www.reddit.com/r/ExperiencedDevs/comments/1ocvar7/help_ive_accidentally_became_too_important_at/)

The universally upvoted fix — **delegate deliberately, even if the quality
drops temporarily**:

> *"One of the highest level engineers started to be spread too thin on
> different projects. He got the managers of the projects together and
> told them he needed a senior dev as a point of contact on each team,
> everyone who needed him would go through this contact. He would mentor
> these devs and empower them to be more independent. It took some time to
> get going, but by the end we never bothered him; the senior he borrowed
> would have the answers we needed."*
> — same thread

> *"A wise manager told me that 'delegation is a love language, and
> sometimes you need to let things fall to the floor.' If the new product
> is super important, then you need to let a few light bulbs on the old
> products burn out."*
> — same thread

The mental shift: **if you're the only person who can do X, that's not a
compliment, that's a single point of failure.** Your highest-leverage move
is to create a deputy who can do X at 80% of your level — even if it takes
a quarter to get there.

## 3.4 The AI-induced skill atrophy trap

The most concerning recurring pattern in senior-level threads right now:

> *"I'm interviewing a potential candidate who looked very promising on
> paper. Ex-FAANG, strong background in python/java. I asked him what his
> development experience was like trying something new instead of his
> usual stack. His response? 'I used Claude to develop it.' That's it.
> Period. Nothing about what he learned, what challenges he faced, what
> he liked or disliked, nothing to show me he has any interest/patience/
> ability to learn something new."*
> — [r/ExperiencedDevs — "Had an existential crisis Friday afternoon at work"](https://www.reddit.com/r/ExperiencedDevs/comments/1nb8svg/had_an_existential_crisis_friday_afternoon_at_work/)

Top-rated rule from the same thread:

> *"I'm perfectly happy with using modern tools to write stuff, but the
> test is can you explain what happened without saying it came out of the
> tool? If you can act like you wrote it yourself, I don't care if Claude
> wrote it. If you can't say anything beyond 'Claude did it,' you're not a
> senior dev."*

A quieter warning from the same thread worth taking seriously:

> *"I have noticed that when I don't want to get too deep into a solution,
> because it would take a long time or a lot of concentration, I will lean
> on Claude to get me at least part of the way there. In that way, I can
> feel my critical thinking skills atrophy from disuse."*

**The career-limiting move is not using AI. It's using AI to avoid the
hard thinking that makes you a staff-level engineer.** The thinking is the
job.

## 3.5 Stop fighting battles you can't win

A painful, widely-resonant lesson:

> *"I'm so tired of fighting for good engineering practices. Clean code,
> high quality tests, pragmatic use of AI, code de-duplication, extensible
> design. … Yes all these things are good — but they have never once
> rewarded me. The only thing I ever see get rewarded are: high volume &
> high quality engagement in meetings; ability to attach metrics to your
> work and then make those metrics look good; creating brand new features
> / tools (improving existing stuff is no-value)."*
> — [r/ExperiencedDevs — "I'm giving up; Becoming a yes man"](https://www.reddit.com/r/ExperiencedDevs/comments/1sgcy1e/im_giving_up_becoming_a_yes_man/)

The most-upvoted response:

> *"My career took off when I stopped fighting. I still strive for personal
> quality but I don't argue with others anymore. It's their money not
> yours. If making crap is more profitable than making something good
> then you're gonna make crap. Learn to embrace it."*

A more nuanced middle ground from the same thread:

> *"If I'm working on something and I notice that it can be improved, I
> just try to fix it, or write a ticket to fix it myself. If you see
> something in someone else's work that can be improved, basically bring
> up your concern once. … The key thing is to bring it up once ONLY, and
> accept whatever outcome. Do not try to argue or convince people."*

> *"often, the slop breaks. Your manager will notice that your code breaks
> way less often than the others and that you tended to be right when you
> brought up concerns that were dismissed."*
> — same thread

Two useful heuristics emerge:

1. **Bring each concern up exactly once**, with clear reasoning. Accept
   the outcome and move on. Your track record over time is your
   credibility.
2. **Sharpen your own work even when the team won't.** You don't need
   permission to write good code in your own PRs.

## 3.6 Work isn't therapy — don't let it become your coping mechanism

A raw, upvoted post from a principal engineer who walked away:

> *"**Prioritize your mental health over everything.** Therapy works but
> only if you take it seriously; just that in itself could take
> weeks/months, even years. **DO NOT let work be your escape from
> reality.** I definitely learned this the hard way. **You can lose
> everything — job, relationship, stability — and still be okay.** **If
> you're going through some serious shit in personal life, DO NOT try to
> power through at work.** I delivered most of my stuff this year, but the
> quality was horrible. Some of my leads noticed a few discrepancies and
> didn't bring it up. They knew I was going through tough times and just
> let them be. This broke my heart, purely from a professional/technical
> perspective."*
> — [r/ExperiencedDevs — "Work isn't therapy. Lessons I learned too late as a Principal SWE"](https://www.reddit.com/r/ExperiencedDevs/comments/1k28kbh/work_isnt_therapy_lessons_i_learned_too_late_as_a/)

A mentor's intervention from a reply that stuck with readers:

> *"My mentor sat me down and said 'You are going through an unreasonable
> amount of stress. Are you talking with someone about it?' That word
> 'unreasonable' was the trigger. It snapped me out of this unhealthy
> individualistic mindset where I thought I needed to deal with it solely
> on my own. Finding someone to talk to that can help navigate things is
> actually a strength, not a weakness."*

The career-preservation argument for taking mental health seriously: your
reputation takes years to build and a few months of silently degraded
output to damage. Short-term disability or a leave of absence will damage
your career less than publishing work that's 30% below your normal bar for
6 months.

## 3.7 The "resource" trap — know which track you're on

> *"I liked my company. I worked hard, they gave me nice promotions, and
> lots of ownership. But now that I'm senior enough to manage people, the
> vibes are off. My 1-on-1s with anyone in management is now about: what
> projects are we funding this quarter? How are we going to frame our
> metrics for leadership? Does person A have bandwidth for this? Do you
> think person B is good? I just came here to build stuff."*
> — [r/ExperiencedDevs — "Aren't you tired of being a 'resource'?"](https://www.reddit.com/r/ExperiencedDevs/comments/1mha63e/arent_you_tired_of_being_a_resource/)

Top-rated response:

> *"You've been offered and accepted a management position. If you prefer
> IC work go back to it. It's not a demotion, it's fundamentally different
> work with a different skillset."*

Most tech companies have parallel IC and manager tracks. If you're at the
senior→staff transition point, **explicitly decide which track you want**
rather than drifting into whichever one the company needs you to fill.
Going back from management to IC is also legitimate, not a step down.

## 3.8 Don't measure self-worth in titles or compensation

> *"My self worth is not a function of or correlated with my total
> compensation. Capitalism is a poor way to determine self-worth."*
> — [r/ExperiencedDevs — "Drunk Post: Things I've learned as a Sr Engineer"](https://www.reddit.com/r/ExperiencedDevs/comments/nmodyl/drunk_post_things_ive_learned_as_a_sr_engineer/)

> *"Titles mostly don't matter. Principal Distinguished Staff Lead
> Engineer from Whatever Company, whatever. What did you do and what did
> you accomplish? That's all people care about."*
> — same thread

This sounds platitudinous until you see the contrast cases in the threads:
engineers who reached their title goals and burned out (3.3), who
sacrificed their relationships for the next rung (3.6), who chased
promotion at companies that wouldn't ever give it (3.1). The title was
never going to be enough.

---

# Part 4 — Soft skills & AI-era adaptation

## 4.1 Influence without authority — the master skill

Voted the single most important non-coding skill by actual experienced
engineers. What does it look like in practice?

From the principal engineer who described his path to promotion:

> *"I began to work with managers and directors as peers to try to address
> those [org] issues — getting motivated engineers working together,
> improving hiring, finding space for teams to take risks. I relied on the
> goodwill and capital that I had accrued with other engineers through
> being a strong technical contributor to achieve these outcomes."*
> — [r/ExperiencedDevs — "On becoming a 'principal engineer'"](https://www.reddit.com/r/ExperiencedDevs/comments/1f1urrp/on_becoming_a_principal_engineer/)

Three concrete practices the threads repeatedly endorse:

- **Build social capital before you need it.** Help people unblocked by
  their current problem even when it's not your job. The bank account
  compounds.
- **Use your technical credibility to land non-technical changes.** Don't
  spend it on another bike-shed fight.
- **Frame every proposal as a business outcome, not a technical one.**
  "This will cut incident response time 40%" beats "this uses a better
  pattern."

## 4.2 Communication is a writing skill

> *"A large part of my technical writing class was getting us used to
> explaining the same idea to different target groups, as well as being
> conscious of when you need to define terms. I know a lot of programmers
> that by default get too deep into the weeds explaining things to
> non-technical colleagues, almost like they're rubber-duck debugging to a
> coworker instead."*
> — [r/ExperiencedDevs — "What 'non-coding' skill made the biggest difference in your career?"](https://www.reddit.com/r/ExperiencedDevs/comments/1rpo0gt/senior_engineers_what_noncoding_skill_made_the/)

Two patterns worth copying:

- **Pyramid principle:** start with the answer/recommendation, then
  reasons, then detail. Not the other way around. Every doc. Every Slack
  message longer than a sentence. Every stand-up update.
- **Audience-check every doc before publishing.** Am I writing for my
  team, my manager's manager, or product? The density of jargon should
  drop sharply as the audience gets further from the code.

## 4.3 Sync when async fails

One of the most reliable senior-engineer moves is recognizing when a text
conversation has hit its useful limit and picking up the phone.

> *"I'd jump on a quick call with the reviewer of a PR … it takes time
> and effort but it sends the message that reviews are held to some
> standard."*

> *"Contentious PRs are best resolved with a synchronous conversation."*

This applies beyond PRs — to any disagreement between senior engineers
that's already seen 2+ rounds in text. Sync cuts through; async loops.

## 4.4 The AI era: what changes, what doesn't

From the graybeard dev who wrote the calmest take on the panic:

> *"There are lots of things that used to be hand-coded that aren't
> anymore. CRUD queries? ORM and scaffolding tools came in. Simple blog
> site? Wordpress cornered the market. Server? AWS got you covered. But
> somehow, we didn't end up working any less after these innovations. The
> needed expertise then just transferred."*
> — [r/ExperiencedDevs — "A Graybeard Dev's Guide to Coping With A.I."](https://www.reddit.com/r/ExperiencedDevs/comments/1i2cdfc/a_graybeard_devs_guide_to_coping_with_ai/)

### What the threads converge on as career-preserving AI use:

- **Use it to learn fast**, especially stacks and domains outside your core
  expertise. This is its genuine killer app.
- **Use it to rubber-duck and stress-test design decisions.** You'll still
  catch more edge cases than it does, but it's a faster sparring partner
  than waiting for a colleague.
- **Use it to write boring boilerplate, tests, and scripts** you'd have
  written by hand. The hour saved is real.
- **Own every line.** If you can't defend the code in a review, you can't
  ship it.
- **Keep manual practice alive.** See 1.7.
- **Calibrate — don't assume 10x.** The Anthropic study cited in several
  threads suggests experienced devs overestimate AI productivity by ~40%.

### What's actively career-limiting:

- **Blindly trusting AI output.** *"The amount of AI garbage I see from jr
  devs is concerning. The true problem I have with it is that they blindly
  trust it without validating or understanding."*
- **Using AI as a substitute for thinking**, especially in interviews or
  reviews.
- **Producing huge PRs with AI** and expecting someone else to review them.
  See the code-review guide's sections on AI slop.
- **Piping PR-review responses through AI.** Breaks trust with your
  reviewers and flags you as not-actually-engaging.

### The opportunity hiding in the mess

> *"For every job lost at a FAANG that became more efficient due to AI,
> two have opened up at a startup that got funding because they vibed up
> a POC. I think the jobs will be there, just going to shift to smaller
> companies hiring."*
> — [r/ExperiencedDevs — "The era of AI slop cleanup has begun"](https://www.reddit.com/r/ExperiencedDevs/comments/1mg2r6y/the_era_of_ai_slop_cleanup_has_begun/)

> *"I have been telling people from the start of this whole AI thing, that
> I am happy keeping my development skills sharp. There will be a huge
> demand for people who can clean up the mess and I will be happy to help
> with it, for a good price."*
> — same thread

If you stay sharp while the market is flooding with AI-generated slop,
you'll be one of a shrinking pool of engineers who can actually clean it
up. That's a career advantage, not a disadvantage.

## 4.5 Detach your identity from your employer

Multiple threads converge on this. You will outlast this job. Your
relationship to the craft, your tools, and your peers will travel with
you; the company's opinion of you won't.

> *"Don't let your job define you either. Create software however you want
> to in your own time. And take pleasure in doing so."*
> — [r/ExperiencedDevs — "Anyone else feeling like they're losing their craft?"](https://www.reddit.com/r/ExperiencedDevs/comments/1rtbvvo/anyone_else_feeling_like_theyre_losing_their_craft/)

> *"People die. Do you want your code to be your legacy? If yes, then
> spend a lot of time on it because that's your legacy and you go! But if
> you are like me, your legacy is surrounded with family, friends, and
> people in your life and not the code you write."*
> — [r/ExperiencedDevs — "Drunk Post"](https://www.reddit.com/r/ExperiencedDevs/comments/nmodyl/drunk_post_things_ive_learned_as_a_sr_engineer/)

This isn't a contradiction of "care about your craft." It's that **the
craft is yours, not your employer's.** Pride in work that your company
throws away (because of a reorg, acquisition, pivot, layoff) is still
pride well-placed — *you* got better.

---

# Quick reference: The weekly operating system

Pin this. Review every Friday.

- [ ] **Brag-doc entry** — one line per significant win, with a metric
      when possible. Five minutes. Non-negotiable.
- [ ] **Monthly: 1:1 with skip manager.** Three things: one thing
      shipped, one thing connected to their priorities, one question about
      what great looks like at the next level.
- [ ] **Quarterly: share brag-doc highlights with your manager.**
- [ ] **Deep work budget.** Target 3–4 hours of genuinely undistracted
      technical work per day. If you're at zero, diagnose why (meetings?
      Slack? picking up others' work?).
- [ ] **Writing cadence.** One design doc, ADR, or post-mortem per
      month. Even if no one asks.
- [ ] **Manual coding time.** At least 30 min/week writing un-assisted
      code. Keeps your intuition calibrated.
- [ ] **One new thing every quarter.** A language, a subsystem, a
      domain. Doesn't need to ship.
- [ ] **Boundary check.** Work chat off your personal phone. Alarm to
      end the workday. Protect weekends for real.

# Quick reference: Career-state audit

Review quarterly. Any two "yes" answers to the right-hand column mean look
for a new job.

| Question | Healthy | Unhealthy |
|---|---|---|
| Am I learning? | New skill / domain / system this quarter | Same stack, same problems, year 3+ |
| Am I respected? | Peers and skip know what I ship | Invisible; manager can't name my last win |
| Is the culture safe? | Can disagree, raise concerns, hear "yes" sometimes | Retaliation for feedback; things "never change" |
| Does the scope grow? | Bigger problems, wider impact over time | Treading water on KTLO only |
| Is my mental state sustainable? | 50–65% capacity is enough to deliver | Constantly at 90%+; health/relationships eroding |
| Am I compensated fairly? | Roughly market or above | Significantly underpaid and no trajectory to fix it |

# Quick reference: The staff+ promotion self-check

Before asking for a staff promotion — or accepting one — honest yes/no:

- [ ] I can name 3–5 projects in the last 12 months with concrete
      business impact, not just shipped features.
- [ ] I've influenced decisions outside my immediate team.
- [ ] I've written design docs that other teams have adopted or built
      on.
- [ ] I've mentored at least one engineer to a higher level.
- [ ] I'm okay coding ~20% of my time and "driving" ~80% (meetings,
      docs, cross-team alignment).
- [ ] My manager knows what I've done and can tell my promotion story
      without notes.
- [ ] I have senior-level peers at other companies I can benchmark
      against.
- [ ] I actually want this job, not just the title.

# Quick reference: The AI-era self-preservation checklist

Every PR, every review, every design you touch:

- [ ] I can explain every line of AI-assisted code without the phrase
      "Claude did it."
- [ ] I read the code end-to-end before asking for review.
- [ ] I asked whether this pattern is the right fit, not just whether
      it works.
- [ ] I kept my manual practice up this week.
- [ ] I used AI to learn something new, not to skip thinking about
      something familiar.
- [ ] I watched my own critical thinking — not atrophying from disuse?

---

# Appendix — Source threads

All 26 threads used in this guide, ordered by score. Click through for the
full discussion.

- [r/ExperiencedDevs — "Drunk Post: Things I've learned as a Sr Engineer" (14882)](https://www.reddit.com/r/ExperiencedDevs/comments/nmodyl/drunk_post_things_ive_learned_as_a_sr_engineer/)
- [r/ExperiencedDevs — "The era of AI slop cleanup has begun" (4253)](https://www.reddit.com/r/ExperiencedDevs/comments/1mg2r6y/the_era_of_ai_slop_cleanup_has_begun/)
- [r/ExperiencedDevs — "A Graybeard Dev's Guide to Coping With A.I." (1983)](https://www.reddit.com/r/ExperiencedDevs/comments/1i2cdfc/a_graybeard_devs_guide_to_coping_with_ai/)
- [r/ExperiencedDevs — "A 5 min weekly habit completely changed my performance review and got me a bigger raise" (1613)](https://www.reddit.com/r/ExperiencedDevs/comments/1n7zuba/a_5_min_weekly_habit_completely_changed_my/)
- [r/ExperiencedDevs — "I'm giving up; Becoming a yes man" (1610)](https://www.reddit.com/r/ExperiencedDevs/comments/1sgcy1e/im_giving_up_becoming_a_yes_man/)
- [r/ExperiencedDevs — "Aren't you tired of being a 'resource'?" (1373)](https://www.reddit.com/r/ExperiencedDevs/comments/1mha63e/arent_you_tired_of_being_a_resource/)
- [r/ExperiencedDevs — "Things I did to help me get more 'visibility' as a software engineer" (1283)](https://www.reddit.com/r/ExperiencedDevs/comments/1pwfx9l/things_i_did_to_help_me_get_more_visibility_as_a/)
- [r/ExperiencedDevs — "Work isn't therapy. Lessons I learned too late as a Principal SWE" (1045)](https://www.reddit.com/r/ExperiencedDevs/comments/1k28kbh/work_isnt_therapy_lessons_i_learned_too_late_as_a/)
- [r/ExperiencedDevs — "All high value work is deep work, and all motivation is based on belief" (920)](https://www.reddit.com/r/ExperiencedDevs/comments/1lpyimz/all_high_value_work_is_deep_work_and_all/)
- [r/ExperiencedDevs — "Had an existential crisis Friday afternoon at work" (865)](https://www.reddit.com/r/ExperiencedDevs/comments/1nb8svg/had_an_existential_crisis_friday_afternoon_at_work/)
- [r/ExperiencedDevs — "AI tools are ironically way more useful for experienced devs than novices" (845)](https://www.reddit.com/r/ExperiencedDevs/comments/1jzpzkm/ai_tools_are_ironically_way_more_useful_for/)
- [r/ExperiencedDevs — "Mentorship: underrated perk of big tech" (877)](https://www.reddit.com/r/ExperiencedDevs/comments/1ffe5zd/mentorship_underrated_perk_of_big_tech/)
- [r/ExperiencedDevs — "Not seen as 'staff engineer material' because of my personality" (744)](https://www.reddit.com/r/ExperiencedDevs/comments/1plxapk/not_seen_as_staff_engineer_material_because_of_my/)
- [r/ExperiencedDevs — "Change My View: Being successful as a senior software engineer needs more customer vision…" (712)](https://www.reddit.com/r/ExperiencedDevs/comments/1h2ssi3/change_my_view_being_successful_as_a_senior/)
- [r/ExperiencedDevs — "Burnout Prevention" (702)](https://www.reddit.com/r/ExperiencedDevs/comments/rvauwd/burnout_prevention/)
- [r/ExperiencedDevs — "Help I've accidentally became too important at work and it is burning me out" (632)](https://www.reddit.com/r/ExperiencedDevs/comments/1ocvar7/help_ive_accidentally_became_too_important_at/)
- [r/ExperiencedDevs — "Anyone else feeling like they're losing their craft?" (609)](https://www.reddit.com/r/ExperiencedDevs/comments/1rtbvvo/anyone_else_feeling_like_theyre_losing_their_craft/)
- [r/ExperiencedDevs — "How can an average engineer become that super driven person?" (522)](https://www.reddit.com/r/ExperiencedDevs/comments/1mzcqbp/how_can_an_average_engineer_become_that_super/)
- [r/ExperiencedDevs — "What's a system design mistake you made in your career?" (501)](https://www.reddit.com/r/ExperiencedDevs/comments/1ls88k9/whats_a_system_design_mistake_you_made_in_your/)
- [r/ExperiencedDevs — "A lesson learned the hard way: Toxic environments rarely change" (468)](https://www.reddit.com/r/ExperiencedDevs/comments/1e1ufey/a_lesson_learned_the_hard_way_toxic_environments/)
- [r/ExperiencedDevs — "Senior engineers: what 'non-coding' skill made the biggest difference in your career?" (429)](https://www.reddit.com/r/ExperiencedDevs/comments/1rpo0gt/senior_engineers_what_noncoding_skill_made_the/)
- [r/ExperiencedDevs — "Keep a Brag Document" (428)](https://www.reddit.com/r/ExperiencedDevs/comments/h972k3/keep_a_brag_document/)
- [r/ExperiencedDevs — "On becoming a 'principal engineer'" (347)](https://www.reddit.com/r/ExperiencedDevs/comments/1f1urrp/on_becoming_a_principal_engineer/)
- [r/ExperiencedDevs — "Code is a Craft, not a Competition — and why it matters" (345)](https://www.reddit.com/r/ExperiencedDevs/comments/wgc8s6/code_is_a_craft_not_a_competition_and_why_it/)
- [r/ExperiencedDevs — "Your Career Beyond a Senior Engineer" (329)](https://www.reddit.com/r/ExperiencedDevs/comments/xkenut/your_career_beyond_a_senior_engineer/)
- [r/ExperiencedDevs — "How do you reconcile being a 'craft' engineer at a company that values 'impact' way more?" (198)](https://www.reddit.com/r/ExperiencedDevs/comments/ozqrdy/how_do_you_reconcile_being_a_craft_engineer_at_a/)

## External resources cited in the threads

- **The Staff Engineer's Path** by Tanya Reilly — the most-recommended book
  on the senior-to-staff transition.
- **Staff Engineer** by Will Larson — the original taxonomy of
  staff-engineer archetypes.
- **Julia Evans's brag-document template** at
  <https://jvns.ca/blog/brag-documents/>
- **plainlanguage.gov** — the single most-cited resource for writing
  better documentation.
- **The Pyramid Principle** and **SCQA** — consulting frameworks for
  structured writing, repeatedly endorsed for technical writing.
- **The Peter Principle** — the classic book on why people get promoted
  to their level of incompetence. Still relevant.

---

*Last generated: 2026-04-17. Sourced from Reddit public JSON endpoints, 26
threads on r/ExperiencedDevs, ~2,500 comment-lines of raw material. Raw
sources preserved in [raw/threads/](raw/threads/) and
[raw/digest.txt](raw/digest.txt).*

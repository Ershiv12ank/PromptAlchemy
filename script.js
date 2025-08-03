document.addEventListener('DOMContentLoaded', () => {
    // --- DATA: Store all prompts here ---
    const promptsData = {
        health: {
            title: "Health & Well-being",
            prompts: [
                "Act as a nutritionist. I want to transition to a [plant-based/Mediterranean/low-carb] diet. Create a 7-day meal plan with recipes and a grocery list for a beginner.",
                "I struggle with sugar cravings. Explain the science behind them and provide 10 practical strategies to manage and reduce these cravings effectively.",
                "Generate a list of 20 high-protein, low-calorie snack ideas that require minimal preparation.",
                "Explain the concept of 'intermittent fasting' for a beginner. Outline the most common methods (16/8, 5:2) and discuss the potential benefits and risks.",
                "I want to improve my gut health. What are prebiotics and probiotics? Provide a list of 10 foods for each category.",
                "Create a guide to reading nutrition labels. What are the key things to look for to make healthier choices at the grocery store?",
                "I have a food intolerance to [dairy/gluten/nuts]. Provide 15 delicious and easy-to-make recipe substitutions for common meals.",
                "Design a hydration plan for me. I am [age] years old, weigh [weight], and exercise [number] times a week. How much water should I drink, and are there other hydrating fluids you'd recommend?",
                "What are micronutrients and why are they important? List 5 crucial micronutrients and the best food sources to get them.",
                "I'm trying to eat healthier on a budget. Create a sample weekly grocery list and meal plan for one person for under [$50/$75].",
                "Act as a personal trainer. I am a beginner and want to start working out at home with no equipment. Design a 4-week full-body workout plan.",
                "My fitness goal is to [run a 5k/increase my flexibility/build upper body strength]. Create a progressive 3-month training program to help me achieve this.",
                "Explain the importance of a warm-up and cool-down. Provide a 5-minute dynamic warm-up routine and a 5-minute static stretching cool-down routine.",
                "I have a desk job and experience back pain. Suggest 10 simple stretches and exercises I can do at my desk throughout the day to alleviate discomfort.",
                "What is High-Intensity Interval Training (HIIT)? Create a 20-minute HIIT workout routine that can be done at home.",
                "I want to improve my posture. What are the common causes of poor posture, and what are 5 corrective exercises I can do daily?",
                "How do I properly perform a [squat/deadlift/push-up]? Provide a step-by-step guide with common mistakes to avoid.",
                "I find cardio boring. Suggest 10 fun and engaging activities that are great for cardiovascular health, besides running on a treadmill.",
                "What is 'active recovery'? Explain its benefits and provide a sample active recovery day workout plan.",
                "Design a workout plan focused on improving core strength to support my back and overall stability.",
                "Act as a therapist. I am feeling overwhelmed and burnt out. Guide me through a reflective journaling session to identify the sources of my stress and brainstorm solutions.",
                "Create a 10-minute guided meditation script for anxiety relief, focusing on breathing and body scan techniques.",
                "Explain the concept of Cognitive Behavioral Therapy (CBT). Provide a simple exercise to help me identify and challenge a negative thought pattern I have about [myself/my abilities].",
                "Generate a list of 20 healthy coping mechanisms for dealing with stress, categorized into physical, mental, and creative outlets.",
                "What is 'imposter syndrome'? Describe its common signs and provide 5 strategies to overcome it.",
                "Design a 'mental health toolkit'. What are 10 things I can prepare in advance to help me on days when I'm feeling low?",
                "I struggle with social anxiety. Provide 5 small, manageable steps I can take to gradually become more comfortable in social situations.",
                "Create a list of 15 powerful affirmations for building self-confidence and a positive self-image.",
                "Explain the 'Pomodoro Technique' and how it can be used to manage focus and reduce procrastination-related anxiety.",
                "Guide me in creating a 'worry journal'. What structure should I use to document my anxieties and reframe them in a more constructive way?",
                "Act as a sleep specialist. I have trouble falling asleep. Analyze my current evening routine: [describe routine] and suggest 5 changes to create an optimal sleep hygiene protocol.",
                "Explain the different stages of sleep (Light, Deep, REM) and why each is important for my health.",
                "Create a 10-minute guided meditation or relaxation script specifically designed to be used before bed to calm a racing mind.",
                "What is the relationship between caffeine, alcohol, and sleep quality? Provide clear guidelines on consumption for better rest.",
                "I often wake up in the middle of the night and can't get back to sleep. What are 5 things I can do to fall back asleep without resorting to my phone?",
                "Generate a list of 10 foods and drinks that are known to promote sleep.",
                "How does light exposure (especially blue light) affect my circadian rhythm? Provide best practices for managing light exposure throughout the day and evening.",
                "Is napping good for you? Provide a guide on how to nap effectively without disrupting nighttime sleep.",
                "Design a 'wind-down' routine for the hour before bed that doesn't involve screens.",
                "I think I might have 'revenge bedtime procrastination'. Explain what this is and provide strategies to overcome it.",
                "Create a simple daily checklist for a healthy lifestyle, covering nutrition, exercise, mental health, and sleep.",
                "Explain the concept of 'mindful eating'. Guide me through a 5-minute exercise to practice it with my next meal.",
                "What are the health benefits of spending time in nature (forest bathing)? Suggest 5 ways to incorporate more nature into my life, even if I live in a city.",
                "I want to build healthier habits. Explain the '2-minute rule' and how I can use it to start new habits like [exercising/meditating/reading].",
                "Generate a list of essential questions to ask my doctor during my next annual check-up to be proactive about my health.",
                "What is the '80/20 rule' in the context of diet and health? How can I apply it to create a sustainable and non-restrictive lifestyle?",
                "Create a plan to reduce my daily screen time by 25%. Analyze my current usage and suggest practical swaps for my phone habits.",
                "Explain the health risks associated with a sedentary lifestyle and provide 10 creative ways to move more throughout the day.",
                "What are some common vitamin deficiencies (like Vitamin D or B12)? What are their symptoms and best food/sunlight sources?",
                "Design a 'digital detox' plan for a weekend. What are the rules, and what are some alternative activities I can do?",
                "How can I create a morning routine that energizes me for the day instead of making me feel rushed?",
                "Explain the benefits of yoga for both physical and mental health. Suggest a 15-minute beginner's yoga flow.",
                "I want to quit [smoking/vaping]. Act as a cessation coach and provide a 30-day step-by-step plan with coping strategies for cravings.",
                "What are the key differences between strength training and cardio? How much of each should I aim for per week for optimal health?",
                "I'm feeling unmotivated to exercise. Provide 10 mindset shifts and practical tips to get me moving when I don't feel like it.",
                "What is 'meal prepping'? Provide a beginner's guide, including essential containers, a sample menu, and tips to make it efficient.",
                "Create a journaling prompt list of 30 questions for a month of self-reflection on my health and well-being.",
                "How can I practice gratitude to improve my mental well-being? Suggest 5 simple gratitude exercises.",
                "Explain the concept of 'body neutrality' as an alternative to body positivity.",
                "I have a high-stress job. Design a 5-minute mindfulness routine I can do at my desk to decompress after a difficult meeting.",
                "What are the benefits of cold exposure (like cold showers)? Provide a safe protocol for a beginner to try it.",
                "I want to drink less alcohol. What are some strategies, and can you suggest 10 sophisticated non-alcoholic drink recipes?",
                "How do I find a therapist that's right for me? What questions should I ask during a consultation?",
                "What is the connection between chronic inflammation and disease? List 10 anti-inflammatory foods I should incorporate into my diet.",
                "Create a 'self-care' menu with ideas categorized by time commitment: 5 minutes, 15 minutes, 30 minutes, and 1 hour.",
                "I want to improve my balance. Design a simple 10-minute routine with exercises to enhance stability.",
                "Explain the 'fight or flight' response and how techniques like deep breathing can activate the 'rest and digest' system.",
                "How can I build a more resilient mindset to bounce back from setbacks and challenges?",
                "What are some healthy ways to process difficult emotions like anger or sadness instead of suppressing them?",
                "Design a healthy travel plan. How can I maintain my diet and exercise routine while on vacation or a business trip?"
            ]
        },
        wealth: {
            title: "Wealth & Financial Growth",
            prompts: [
                "Act as a financial planner. My monthly take-home pay is [$X]. Create a detailed budget for me using the 50/30/20 rule, breaking down needs, wants, and savings.",
                "I want to build an emergency fund to cover 6 months of living expenses. My monthly expenses are [$Y]. Create a realistic savings plan to help me reach this goal in [12/18/24] months.",
                "Generate a list of 20 practical ways to cut down on my monthly expenses without sacrificing my quality of life.",
                "Explain the 'pay yourself first' method. How can I automate this process to ensure I'm consistently saving money?",
                "I'm saving for a major purchase: [a house down payment/a new car/a wedding]. The total cost is [$Z]. Create a savings strategy, including high-yield savings accounts and other tools, to help me get there.",
                "What is a 'sinking fund'? Explain the concept and provide 5 examples of expenses I should create sinking funds for.",
                "Compare and contrast three popular budgeting apps: YNAB, Mint, and EveryDollar. Which one is best for [a beginner/a detailed tracker/a hands-off approach]?",
                "I struggle with impulse spending. Provide 10 psychological tricks and practical habits to curb this behavior.",
                "Create a financial checklist for someone in their [20s/30s/40s]. What are the key financial goals and milestones they should be focused on?",
                "How can I have a 'no-spend challenge' for a week? Create a set of rules and a list of free activities to do during that time.",
                "Act as an investment advisor for a beginner. Explain the difference between stocks, bonds, mutual funds, and ETFs in a simple analogy. My risk tolerance is [low/medium/high].",
                "I have [$1,000] to invest for the first time. Create a simple, diversified portfolio using low-cost index funds or ETFs.",
                "Explain the concept of 'compound interest' and why it's called the eighth wonder of the world. Show me a calculation of how a [$100] monthly investment can grow over [10/20/30] years with an average 8% return.",
                "What is 'dollar-cost averaging'? Explain its benefits for a long-term investor, especially during market volatility.",
                "Describe the difference between a Roth IRA and a Traditional IRA. Which one would be more suitable for me, given my current income is [$X] and I expect my income to [increase/decrease] in the future?",
                "What are dividends? How can I build a portfolio focused on generating dividend income?",
                "I'm interested in socially responsible investing (ESG). What does it mean, and how can I find funds that align with my values?",
                "What is a 'robo-advisor'? Compare platforms like Betterment and Wealthfront. Is this a good option for a beginner?",
                "The stock market is down, and I'm scared. Act as a financial psychologist and provide 5 mindset reminders to help me stay the course and avoid panic selling.",
                "Explain what a 'target-date fund' is and why it's a popular choice for retirement accounts like a 401(k).",
                "I have credit card debt of [$X] with an APR of [Y%]. Compare the 'debt snowball' and 'debt avalanche' methods. Which one should I use, and create a payment plan for me.",
                "How do I improve my credit score? My current score is [score]. Analyze the factors and provide a 6-month action plan to increase it by [50] points.",
                "Explain the pros and cons of debt consolidation. Is a personal loan or a balance transfer credit card a better option for my situation?",
                "I have student loans. Explain the difference between deferment and forbearance. What are the long-term implications of each?",
                "Generate a script I can use to call my credit card company and negotiate a lower interest rate.",
                "What are the 'good debt' vs. 'bad debt' concepts? Provide examples of each.",
                "How can I create a plan to become completely debt-free, including my [mortgage/car loan/student loans], by age [age]?",
                "What are the common mistakes people make when trying to get out of debt? List 5 pitfalls to avoid.",
                "I co-signed a loan for a friend, and they are not paying. What are my legal and financial obligations, and what steps can I take?",
                "Explain how credit utilization ratio works and why it's a major factor in my credit score.",
                "I want to start a side hustle to earn an extra [$500] a month. My skills are [list skills] and my interests are [list interests]. Brainstorm 10 viable ideas and create a startup plan for the most promising one.",
                "Act as a salary negotiation coach. I have a job offer for [$X]. The industry average is [$Y]. Draft a script for me to negotiate a higher salary and better benefits.",
                "What is 'passive income'? Brainstorm 5 realistic passive income ideas for someone with a starting capital of [$1000].",
                "I'm a freelancer in [your field]. How can I raise my rates with existing clients without losing them? Provide a template email.",
                "Generate a list of 10 high-income skills that are in demand today and can be learned online.",
                "I want to ask for a raise at my current job. I have been here for [time] and my key accomplishments are [list accomplishments]. Draft a proposal for my manager.",
                "How can I monetize my hobby of [hobby]? Outline 3 different business models.",
                "Explain the concept of 'scaling a business'. What are the first steps to take a small side hustle and turn it into a full-time business?",
                "I want to create multiple streams of income. My primary income is from my job. Suggest 3 other streams I could build over the next year.",
                "How do I calculate my 'hourly rate' for freelance work? Include factors like taxes, overhead, and desired profit.",
                "Act as a financial therapist. I have a 'scarcity mindset' around money. Provide 5 journaling prompts to help me shift towards an 'abundance mindset'.",
                "What is 'lifestyle inflation' or 'lifestyle creep'? How can I avoid it as my income increases?",
                "I feel guilty when I spend money on myself. Provide 5 mindset shifts to help me enjoy my money without guilt, within my budget.",
                "Generate a list of 15 affirmations for attracting wealth and financial success.",
                "My partner and I have different views on money. Provide a framework for a healthy 'money date' to help us align our financial goals.",
                "What are 'limiting beliefs' about money? Identify 5 common ones and provide a counter-statement for each.",
                "How can I teach my children about money? Create an age-appropriate guide for [ages 5-8 / 9-12 / 13-16].",
                "I associate my self-worth with my income. Guide me through a reflective exercise to decouple these two things.",
                "What does it mean to be 'financially independent'? Create a roadmap with key milestones to achieve financial independence.",
                "I'm afraid of investing because I'm scared of losing money. Reframe this fear and explain the greater risk of not investing due to inflation.",
                "What is a Health Savings Account (HSA)? Explain its triple tax advantage and why it can be a powerful retirement savings tool.",
                "I'm self-employed. How much should I be setting aside for taxes? Explain the basics of quarterly estimated tax payments.",
                "What is a 'sinking fund'? Explain the concept and provide 5 examples of expenses I should create sinking funds for.",
                "Explain the difference between a financial advisor, a financial planner, and a financial coach. Which one do I need?",
                "What is 'net worth'? How do I calculate it, and why is it an important metric to track over time?",
                "Create a 10-step checklist for what to do when you get a financial windfall, like an inheritance or bonus.",
                "What kind of insurance do I actually need at my age [age]? Explain the importance of term life, disability, and renters/homeowners insurance.",
                "How can I use credit card rewards points effectively for travel or cash back without overspending?",
                "I want to retire early (FIRE movement). What are the different types of FIRE (Lean, Fat, Barista), and what are the key strategies to achieve it?",
                "What is a 'fiduciary'? Why is it important to work with one when seeking financial advice?",
                "How do I create an estate plan? Explain the basics of a will, a living trust, and power of attorney.",
                "I'm considering buying a house. What are the hidden costs of homeownership beyond the mortgage payment?",
                "Explain the pros and cons of renting vs. buying a home in today's market, given these factors: [your city, income, and savings].",
                "What is a 'zero-based budget'? Create a template and explain how to implement it for one month.",
                "How can I protect myself from identity theft and financial scams? Provide a checklist of 10 security best practices.",
                "I'm getting married. What is a prenuptial agreement, and what are the key financial conversations we should have before tying the knot?",
                "What are capital gains taxes? Explain the difference between short-term and long-term capital gains.",
                "I want to start a business. Create a simple one-page business plan, including startup costs, revenue projections, and a marketing strategy.",
                "What is the 'latte factor'? Explain the concept and calculate how much I could save and invest over 20 years by cutting a small daily expense of [$5].",
                "Create a list of 5 must-read personal finance books for beginners and summarize the key lesson from each."
            ]
        },
        career: {
            title: "Career Development",
            prompts: [
                "Act as a career coach. I want to apply for the role of [Job Title] at [Company]. Analyze the job description [paste job description] and my resume [paste resume text]. Identify gaps and suggest 5 ways to tailor my resume.",
                "Write a compelling cover letter for the [Job Title] position. Use the job description to highlight how my experience in [Your Experience] makes me a perfect fit. My key achievement was [mention a key achievement].",
                "Optimize my resume. Here is my current resume: [paste resume]. Rewrite my bullet points to be more achievement-oriented using the STAR method (Situation, Task, Action, Result).",
                "Create a 30-day action plan for my job search. Include daily and weekly goals for networking, applying, and skill-building.",
                "Generate 5 different professional summary statements for my resume. My background is in [Your Field] and I'm targeting roles in [Target Field].",
                "I need to write a follow-up email after submitting an application a week ago. Draft a polite and professional template.",
                "What are the most effective ways to find job openings that aren't posted on major job boards? List 5 strategies for uncovering the 'hidden job market'.",
                "Draft a professional and concise LinkedIn connection request message to a hiring manager at a company I admire.",
                "I have a gap in my resume of [duration] due to [reason: travel, family, health]. How should I address this on my resume and in a cover letter?",
                "What are Applicant Tracking Systems (ATS)? Provide 10 tips to optimize my resume to pass through them successfully.",
                "I have an interview for a [Job Title] role. Generate a list of 15 likely behavioral questions (e.g., 'Tell me about a time you handled conflict') and provide a framework for answering them.",
                "Help me prepare an answer for the question, 'Tell me about yourself.' My background is [describe background] and I'm interviewing for a [Job Title] role. The answer should be a concise 90-second pitch.",
                "What are 10 insightful questions I can ask the interviewer at the end of the interview to show my interest and intelligence?",
                "Help me formulate an answer to the 'What is your greatest weakness?' question. My potential weakness is [e.g., public speaking, over-committing]. Frame it constructively.",
                "I have a technical interview for a [e.g., software engineer, data analyst] role. What are the key concepts I should review, and can you provide 5 sample problems?",
                "Draft a thank-you email to send after my interview with [Interviewer's Name]. I want to reiterate my interest in the role and mention something specific we discussed, like [specific topic].",
                "How should I answer the salary expectation question? Research the average salary for a [Job Title] in [City] and provide a diplomatic script.",
                "I have a panel interview with 3 people. What are some strategies to engage with everyone and manage the dynamics of the room?",
                "Create a 30/60/90 day plan for the role of [Job Title]. This will show my proactivity and vision during the interview.",
                "How do I explain why I'm leaving my current job without sounding negative? My reason is [e.g., lack of growth, toxic culture, seeking new challenges].",
                "Act as a leadership coach. I want to get promoted to [Target Role] within the next 18 months. What are the key skills I need to develop, and what projects should I volunteer for?",
                "I want to ask for a raise. I've been in my role for [time] and my key accomplishments include [list 3-5 accomplishments]. Draft a script for a meeting with my manager.",
                "Help me write my annual self-assessment for my performance review. I want to highlight my successes in [Project A] and my development in [Skill B].",
                "How can I find a mentor in my field? Draft an outreach message to a senior professional I admire on LinkedIn.",
                "I need to give constructive feedback to a colleague. The issue is [describe issue]. Provide a script using the 'Situation-Behavior-Impact' model to deliver the feedback effectively.",
                "How can I become a better public speaker? Provide 5 exercises I can practice to improve my confidence and delivery.",
                "I want to improve my time management and productivity. Explain the 'Eisenhower Matrix' and help me categorize my current tasks.",
                "What are the key differences between a manager and a leader? List 5 qualities of an effective leader.",
                "I want to build a stronger professional network. Create a 3-month plan with actionable steps for online and in-person networking.",
                "How do I effectively manage my relationship with my boss? Provide 5 tips for 'managing up'.",
                "Act as a career counselor. I'm feeling unfulfilled in my current field of [Current Field]. My interests are [list interests] and my skills are [list skills]. Suggest 3 alternative career paths that might be a good fit and outline the steps for transition.",
                "I want to learn [New Skill, e.g., Python, digital marketing]. Create a 3-month self-study curriculum using free or low-cost online resources.",
                "How can I build a portfolio to showcase my skills in [Field, e.g., writing, design, coding] when I don't have professional experience yet? Suggest 3 project ideas.",
                "I'm considering going back to school for a [Degree/Certification]. Analyze the potential ROI based on the cost of [$X] and the average salary increase in my field.",
                "Rewrite my LinkedIn 'About' section to reflect my career change from [Old Field] to [New Field]. It should tell a compelling story about my transition.",
                "What are 'transferable skills'? Identify 5 transferable skills from my previous role as a [Previous Role] that are relevant to a [New Role].",
                "I want to start freelancing in [Your Skill]. Create a step-by-step guide to finding my first client.",
                "What are the most in-demand soft skills in the workplace today? List the top 10 and suggest a way to develop each one.",
                "I need to conduct an informational interview with someone in my target industry. Generate a list of 15 questions to ask them about their career path and the industry.",
                "How do I decide between two job offers? Create a decision matrix with criteria like salary, benefits, work-life balance, and growth opportunities.",
                "I'm dealing with a difficult coworker who [describe behavior]. Provide a script for a professional and direct conversation to address the issue.",
                "I'm feeling burnt out at work. Create a 'burnout recovery' plan with strategies for setting boundaries, delegating, and disconnecting after hours.",
                "How can I say 'no' to extra work or projects politely when my plate is already full?",
                "I'm suffering from 'imposter syndrome' in my new role. Provide 5 daily practices to build my confidence.",
                "How can I improve my work-life balance? My current work hours are [describe hours]. Suggest 5 changes to my routine and mindset.",
                "I made a mistake on a project that impacted [describe impact]. Draft a professional email to my manager owning up to the mistake and outlining my plan to fix it.",
                "How can I run more effective meetings? Provide a template for an agenda and a list of best practices.",
                "I work remotely. What are 5 strategies to stay visible and connected with my team and leadership?",
                "My company went through a layoff, and I survived, but I'm feeling 'survivor's guilt' and anxiety. Provide some coping strategies.",
                "How can I create a more ergonomic home office setup to prevent physical strain? Provide a checklist.",
                "I've been laid off. Create a 2-week plan to process the event, update my materials, and kickstart my job search.",
                "How do I write a compelling 'brag document' or 'hype doc' to track my accomplishments throughout the year for performance reviews?",
                "I want to build my personal brand on LinkedIn. What are 5 types of content I can post to establish myself as an expert in [Your Field]?",
                "I'm negotiating a job offer. Besides salary, what are 10 other things I can negotiate (e.g., vacation time, professional development budget, flexible hours)?",
                "I have to give a presentation to leadership. Help me structure my presentation with a clear opening, key points, and a strong call to action.",
                "How can I handle receiving critical feedback without getting defensive? Provide a 4-step process for receiving feedback gracefully.",
                "I'm starting a new job. What are the key things I should do in my first 30 days to make a great impression and set myself up for success?",
                "How do I write a professional resignation letter? Provide a template.",
                "What is the 'Pareto Principle' (80/20 rule) and how can I apply it to my work to focus on the most impactful tasks?",
                "I want to become more innovative and creative in my role. Suggest 5 daily habits to foster creative thinking.",
                "How can I effectively delegate tasks to my team members without coming across as bossy?",
                "I'm re-entering the workforce after a long break. How should I position my experience and address the career gap?",
                "What are the pros and cons of working for a startup vs. a large corporation?",
                "I feel like I'm being micromanaged. How can I address this with my boss in a constructive way?",
                "Create a personal 'board of directors'. Who are the 5 types of people I should have in my professional network for advice and support?",
                "How can I use AI tools like ChatGPT to be more productive at my job? Suggest 5 specific use cases for a [Your Role] professional.",
                "I'm considering a 'portfolio career'. Explain what it is and how to start building one.",
                "How do I prepare for an exit interview? What should I say and what should I avoid saying?",
                "I want to improve my emotional intelligence at work. What are the key components and how can I develop them?",
                "What does 'business acumen' mean? How can I develop it to better understand my company's goals and performance?"
            ]
        },
        healing: {
            title: "Personal Healing",
            prompts: [
                "Act as a self-compassion coach. I made a mistake: [describe mistake]. Guide me through a self-compassion exercise to help me forgive myself and learn from the experience.",
                "I struggle with negative self-talk. My inner critic often says [example of a critical thought]. Help me reframe this thought into a more compassionate and realistic one.",
                "Create a guided meditation script focused on building self-worth and recognizing my inherent value, independent of my achievements.",
                "Generate a list of 20 powerful affirmations for self-love and acceptance. Explain the most effective way to use them.",
                "I often compare myself to others on social media and feel inadequate. Provide 5 mindset shifts and practical tips to stop the comparison trap.",
                "Write a compassionate letter to myself from the perspective of a loving friend, acknowledging my struggles and celebrating my strengths.",
                "What does it mean to 're-parent' yourself? Provide a 3-step guide for a beginner to start meeting their own emotional needs.",
                "I have trouble accepting compliments. Guide me through an exercise to understand this resistance and practice receiving praise gracefully.",
                "Create a 'brag sheet' or 'accomplishment list' for me. Help me brainstorm 10 things I'm proud of, big or small.",
                "Explain the difference between self-esteem and self-compassion. Why is self-compassion often more stable and beneficial?",
                "Act as a therapist. I am feeling a difficult emotion: [anger/sadness/jealousy]. Guide me through a journaling exercise to safely explore this feeling, understand its source, and process it.",
                "What is the 'window of tolerance'? Explain the concepts of hyper-arousal (fight/flight) and hypo-arousal (freeze/shutdown) and provide techniques to return to a regulated state.",
                "Create a 'grounding' toolkit. List 10 sensory techniques (using sight, sound, touch, taste, smell) to help me stay present when I feel anxious or dissociated.",
                "I tend to suppress my emotions. What are the long-term consequences of this? Provide 5 healthy ways to start expressing my feelings.",
                "Explain the 'RAIN' mindfulness practice (Recognize, Allow, Investigate, Nurture) for working with difficult emotions. Guide me through an example using a recent frustration I had.",
                "I'm going through a period of grief after [a loss]. What are the stages of grief, and what are some healthy ways to navigate this process? Acknowledge that it's not a linear process.",
                "How can I differentiate between my intuition and my fear/anxiety?",
                "I overthink and ruminate on past conversations. Provide a 3-step cognitive exercise to break the cycle of rumination.",
                "Create a 'feelings wheel'. List primary emotions and then expand them into more nuanced secondary and tertiary feelings to help me build my emotional vocabulary.",
                "How can physical movement, like dancing or shaking, help release stored emotional energy from the body?",
                "Act as an inner child therapist. Create a guided visualization to meet my inner child in a safe space, listen to their needs, and offer them the comfort they lacked.",
                "I have a recurring trigger related to [a past event]. Help me create a 'trigger plan': 1. Identify the early warning signs. 2. List 3 immediate grounding techniques. 3. List 2 people I can call for support.",
                "What are 'limiting beliefs'? Help me identify a limiting belief I formed in childhood about [love/money/success] and challenge its validity.",
                "Write a letter to my younger self at age [age], offering the wisdom, validation, and reassurance I have now.",
                "How do I identify my unmet childhood needs? Provide a list of common needs (e.g., safety, validation, autonomy) and journaling prompts to explore them.",
                "Explain the concept of 'attachment styles' (Secure, Anxious, Avoidant, Disorganized). Based on my relationship patterns [describe patterns], which style do I most identify with?",
                "I want to heal my 'people-pleasing' tendencies. Where does this behavior often originate from, and what is the first step to honoring my own needs?",
                "Create a journaling exercise to explore my relationship with my [mother/father] and how it has shaped who I am today.",
                "What is 'somatic experiencing'? Explain how trauma can be stored in the body and suggest one simple somatic exercise to practice.",
                "Guide me in creating a 'timeline' of my life, marking significant positive and negative events to see my journey of resilience.",
                "I need to set a boundary with [a friend/family member/coworker] regarding [a specific issue]. Provide 3 clear, kind, and firm scripts I can use.",
                "I feel guilty after setting a boundary. Provide 5 affirmations to reinforce that setting boundaries is healthy and necessary.",
                "Explain the difference between healthy, porous, and rigid boundaries. Provide examples for each.",
                "How do I recognize the signs of an emotionally draining or 'vampiric' relationship?",
                "I'm recovering from a toxic relationship. What are 5 essential steps to take to heal and reclaim my sense of self?",
                "What does it mean to 'hold space' for someone? How can I be a better, more supportive friend without trying to 'fix' their problems?",
                "I am the one who always initiates contact in my friendships. Guide me through a reflection on whether these relationships are reciprocal.",
                "How do I end a friendship that is no longer healthy for me, in a way that is respectful and causes minimal drama?",
                "What are the signs of codependency in a relationship?",
                "Create a 'Relationship Bill of Rights' for myself. What are 10 things I have a right to expect in any healthy relationship (e.g., respect, honesty)?",
                "I am struggling to forgive [person] for [action]. Explain that forgiveness is for me, not for them, and guide me through a journaling process to work towards letting go of the resentment.",
                "Create a symbolic ritual for letting go of a past hurt or a relationship that has ended.",
                "I am holding onto regret about a past decision. Help me write a letter of forgiveness to my past self who made that choice with the information they had at the time.",
                "What is 'radical acceptance'? Explain the concept and how I can apply it to a difficult situation in my life that I cannot change.",
                "Write a 'goodbye' letter to a version of myself I am ready to leave behind (e.g., the anxious self, the self-doubting self).",
                "How is forgiveness different from reconciliation? Can I forgive someone without letting them back into my life?",
                "Guide me in a visualization exercise to cut energetic cords with a person or situation from my past.",
                "I feel stuck in the past. Provide 5 practical daily actions to help me focus on the present moment and build a future I'm excited about.",
                "What are the lessons I can learn from a painful experience I went through? Help me find the 'post-traumatic growth'.",
                "I'm angry at the world/the universe for an injustice. How can I process this anger in a healthy way without letting it make me bitter?",
                "What is a 'trauma response'? Explain the concepts of fight, flight, freeze, and fawn.",
                "How can I create a 'safe space' in my home? A physical corner dedicated to calm and relaxation.",
                "I have a fear of failure that paralyzes me. Guide me through an exercise to redefine what 'failure' means to me.",
                "What is 'shadow work'? Provide 3 journaling prompts for a beginner to safely start exploring their shadow self.",
                "Create a 'joy list'. Help me brainstorm 25 small, simple things that bring me joy.",
                "I feel disconnected from my body. Suggest 5 simple embodiment practices to help me feel more at home in my physical self.",
                "How do I trust people again after being betrayed?",
                "I am my own worst critic. For one day, I want to be my own best friend. What would I do differently?",
                "What does it mean to have a 'secure attachment' with oneself? What are the steps to build it?",
                "I'm afraid of being alone. Guide me through a reflection to understand this fear and find comfort in my own company.",
                "How can creative expression, like painting or writing poetry, be a tool for healing?",
                "I feel like an imposter in my own life. Help me write a list of evidence that proves I am capable and deserving.",
                "What is the 'circle of control'? Help me categorize my current worries into things I can control and things I cannot.",
                "I want to stop seeking external validation. What are 3 ways I can start validating myself?",
                "Create a 'self-soothing' kit. What are 5 items I can put in a box to help me calm down during moments of distress?",
                "I feel lost and without direction. Guide me through an exercise to reconnect with my personal values.",
                "How can I practice 'loving-kindness' meditation for myself and others?",
                "I have a fear of abandonment. Where does this often stem from, and how can I start to build a sense of security within myself?",
                "What does it mean to 'honor your anger'? How can I use anger as a signal or a catalyst for positive change?",
                "Guide me in writing a new story for my life, one where I am the hero who has overcome challenges and is now thriving."
            ]
        },
        relationships: {
            title: "Relationships",
            prompts: [
                "Act as a relationship coach. My partner and I have recurring arguments about [topic, e.g., chores, money]. Explain the 'Nonviolent Communication' (NVC) framework and help me script a conversation using it.",
                "What are 'I statements' and why are they effective? Convert this 'you statement': 'You never listen to me' into three different 'I statements'.",
                "I need to have a difficult conversation with my [friend/partner/family member] about [sensitive topic]. Provide a 5-step guide on how to prepare for and initiate this conversation constructively.",
                "Explain the concept of 'active listening'. What are 5 specific techniques I can use to show my partner I am truly listening and understanding them?",
                "My partner's 'love language' is [e.g., Quality Time], while mine is [e.g., Words of Affirmation]. Suggest 10 ways we can both show love to each other in the language the other understands.",
                "How can we fight fair? Generate a list of 10 'rules for constructive conflict' for a couple to agree on (e.g., no name-calling, take breaks if flooded).",
                "I find it hard to express my needs. Help me phrase a request to my partner for [more emotional support/more help with chores/more quality time] in a positive and non-demanding way.",
                "What is a 'soft startup' to a conversation? Contrast it with a 'harsh startup' and provide an example for bringing up a complaint about finances.",
                "How do I give an effective apology? Outline the key components of a sincere apology that fosters repair.",
                "My partner tends to shut down (stonewall) during arguments. What are some gentle ways to re-engage them or suggest taking a break?",
                "Generate a list of 20 creative and affordable date night ideas, categorized by 'at home' and 'out on the town'.",
                "We feel like we're in a rut. Create a '30-day relationship challenge' with small daily tasks to help us reconnect and build intimacy.",
                "What are the 'Four Horsemen' of relationship apocalypse according to John Gottman? Explain Criticism, Contempt, Defensiveness, and Stonewalling, and provide their antidotes.",
                "Help me write a heartfelt letter to my partner expressing my love and appreciation. I want to mention these specific qualities: [list 3 qualities] and this memory: [describe a memory].",
                "We are considering moving in together. What are 10 important financial and logistical questions we should discuss first?",
                "How can we build a 'relationship vision' or 'mission statement'? Guide us through an exercise to define our shared values and goals as a couple.",
                "I'm single and want to attract a healthy relationship. What are 5 inner work practices I can do to prepare myself to be a great partner?",
                "How do we navigate a major life transition together (e.g., new job, having a baby, moving)?",
                "Explain the concept of 'bids for connection'. Provide 5 examples of small, everyday bids and how to 'turn towards' them.",
                "How can we keep the spark alive in a long-term relationship? Suggest 5 strategies based on novelty and mutual discovery.",
                "I want to deepen my existing friendships. Suggest 10 conversation starters that go beyond small talk.",
                "How do I make new friends as an adult? Provide a 5-step action plan for someone who is [shy/busy/new in town].",
                "I had a misunderstanding with a friend. Draft a text message to open a conversation to clear the air without being accusatory.",
                "How do I support a friend who is going through a tough time, without offering unsolicited advice?",
                "I feel like a friendship has become one-sided. How can I assess the situation and decide whether to address it or let it go?",
                "How do I gracefully end a friendship that is no longer serving me?",
                "What are the key qualities of a strong, healthy friendship?",
                "Generate ideas for a 'friend date' that aren't just getting food or drinks.",
                "My friend and I have different political views. How can we maintain our friendship and have respectful conversations?",
                "How do I celebrate my friends' successes without feeling jealous or competitive?",
                "I need to set a boundary with a [parent/sibling/in-law] about [topic, e.g., unsolicited advice, visiting unannounced]. Provide a clear and respectful script.",
                "How can I navigate difficult conversations during family holidays, especially around sensitive topics like politics or personal life choices?",
                "I feel like I revert to my childhood role when I'm with my family. How can I show up as my adult self?",
                "My partner and my family don't get along. What is my role in mediating this and setting boundaries to protect my partnership?",
                "How do I forgive a family member for a past hurt, even if they haven't apologized?",
                "What are the characteristics of a toxic family dynamic? List 5 signs.",
                "How can I build a better relationship with my adult child?",
                "I'm dealing with a difficult in-law relationship. Provide strategies for maintaining peace while protecting my own family unit.",
                "How do I handle guilt trips from family members effectively?",
                "I'm considering estrangement from a family member. What are the key questions I should ask myself before making this decision?",
                "Explain the different 'attachment styles' (Secure, Anxious, Avoidant) and how they show up in adult romantic relationships.",
                "I identify with an [anxious/avoidant] attachment style. What are 3 practical steps I can take to move towards a more secure attachment style?",
                "What is emotional intimacy? Suggest 5 non-sexual activities a couple can do to build a deeper emotional connection.",
                "I have a fear of vulnerability. Guide me through a journaling exercise to explore the root of this fear.",
                "How can my partner and I improve our physical intimacy, beyond just sex?",
                "What does it mean to build a 'secure base' and a 'safe haven' in a relationship?",
                "How do I rebuild trust in my relationship after it has been broken by [a lie/a betrayal]?",
                "What is the difference between a codependent relationship and a healthy, interdependent one?",
                "I often feel anxious when my partner needs space. Provide some self-soothing techniques and mindset shifts to help me cope.",
                "Generate a list of 36 questions that lead to love, based on the study by Arthur Aron, to foster closeness.",
                "How do I navigate a long-distance relationship successfully? Provide strategies for communication and connection.",
                "What are some 'green flags' I should look for in a new relationship?",
                "How do I handle a breakup in a healthy way? Create a 30-day self-care plan.",
                "My partner and I have different communication styles (e.g., internal vs. external processor). How can we bridge this gap?",
                "What does a healthy apology look like? What are the components?",
                "How do we create shared rituals as a couple to strengthen our bond?",
                "I'm feeling lonely, even though I have friends. What are the different types of loneliness, and how can I address them?",
                "How do I introduce my new partner to my children?",
                "What is the '5-to-1 ratio' in relationships, according to Gottman? How can we increase our positive interactions?",
                "How do I become a better listener?",
                "We need to have a 'state of the union' meeting about our relationship. Provide a template agenda with key topics to cover.",
                "How do I express appreciation for my partner more regularly? Suggest 10 simple ways.",
                "I feel like I've lost my identity in my relationship. How can I reclaim my sense of self while still being a committed partner?",
                "How do we handle disagreements about parenting styles?",
                "What does it mean to 'assume good intent' in a relationship, and how can it de-escalate conflict?",
                "How do I deal with jealousy in a healthy way?",
                "My partner has a friend of the opposite sex that makes me uncomfortable. How do I address this without being controlling?",
                "What are some red flags to watch out for on a first date?",
                "How do I get over a crush on someone who doesn't feel the same way?",
                "Create a list of 10 books on relationships and communication that are worth reading."
            ]
        },
        spiritual: {
            title: "Spiritual Growth",
            prompts: [
                "Act as a spiritual guide. Guide me through a journaling exercise with 5 deep, introspective questions to help me uncover my life's purpose or mission.",
                "Help me identify my core values. Provide a list of 50 common values and guide me through a process to narrow them down to my top 5.",
                "I feel lost and directionless. Guide me through a visualization exercise of my ideal future self in 10 years. What is she/he/they doing? How do they feel?",
                "Explain the Japanese concept of 'Ikigai' (a reason for being). Provide the four questions to help me find my own Ikigai.",
                "I want to live a more value-aligned life. My top value is [e.g., creativity/community/freedom]. Brainstorm 10 ways I can incorporate this value into my daily life.",
                "Write a personal mission statement for me. My key strengths are [list strengths], I'm passionate about [list passions], and I want to contribute to the world by [describe contribution].",
                "How can I find meaning in difficult times or suffering? Explore this from a philosophical and psychological perspective (e.g., Viktor Frankl's logotherapy).",
                "What is the difference between a job, a career, and a calling?",
                "Guide me in a 'life review' exercise. What have been the most significant moments and what have they taught me?",
                "If I knew I could not fail, what would I do with my life?",
                "Create a 30-day gratitude challenge with a unique prompt for each day.",
                "Guide me through a 'gratitude meditation', focusing on appreciating my body, my relationships, and the simple pleasures of life.",
                "How can I practice gratitude even on difficult days? Provide 5 'micro-gratitude' practices.",
                "Write a thank-you letter to someone who has had a positive impact on my life, even if I don't send it.",
                "Create a 'joy list'. Help me brainstorm 50 small, simple things that reliably bring me a sense of joy or contentment.",
                "Explain the concept of 'savoring'. Guide me through an exercise to savor a simple experience, like drinking a cup of tea or listening to a piece of music.",
                "How can I cultivate a sense of awe and wonder in my everyday life?",
                "What is the 'hedonic treadmill'? Explain why achieving goals doesn't always lead to lasting happiness and what does.",
                "Create a plan for a 'perfect day' for me, based on my values and joys, not on external expectations.",
                "How can I find joy in my work, even if it's not my dream job?",
                "Create a guided meditation on 'loving-kindness' (Metta), directing well-wishes to myself, a loved one, a neutral person, a difficult person, and all beings.",
                "I feel disconnected from nature. Suggest 10 practices to help me reconnect with the natural world, even if I live in a city.",
                "Explain the concept of 'interconnectedness' or 'oneness' from a philosophical or spiritual perspective.",
                "How can I practice compassion for people I disagree with or find difficult?",
                "Guide me in a journaling exercise to explore my connection to my ancestors and the legacy I want to leave behind.",
                "What does it mean to live authentically? Provide 5 questions to help me check if I'm living in alignment with my true self.",
                "How can volunteering or acts of service contribute to spiritual growth?",
                "I feel lonely. Guide me through a reflection on the difference between being alone and feeling lonely, and how to cultivate a sense of inner connection.",
                "What is the role of community in a spiritual life?",
                "Create a visualization exercise to feel a sense of connection to the universe or a higher power.",
                "Explain the concept of the 'ego' or the 'observer self' in mindfulness traditions. How can I learn to identify with the observer rather than my thoughts?",
                "What is 'shadow work'? Provide 3 safe journaling prompts for a beginner to start exploring their unacknowledged or repressed parts.",
                "How can I learn to trust my intuition? Provide a practical exercise to strengthen my intuitive muscle.",
                "I'm facing a difficult decision. Guide me through an exercise to tap into my inner wisdom, separate from the noise of fear and external opinions.",
                "What is the 'dark night of the soul'? Explain this spiritual concept and the potential for growth that comes from it.",
                "How can I let go of the need for control and practice surrender?",
                "What are archetypes (e.g., the warrior, the healer, the sage)? Which archetype do I most identify with right now, and which one do I need to cultivate?",
                "I have a recurring dream. Guide me through a process of dream journaling and interpretation to understand its potential message.",
                "How can I embrace uncertainty and the unknown as a part of my spiritual path?",
                "Write a letter to my ego, acknowledging its role in protecting me but also setting boundaries on its influence.",
                "Create a simple morning ritual (under 15 minutes) to set a positive and intentional tone for the day.",
                "Create a simple evening ritual (under 15 minutes) to release the day and prepare for restful sleep.",
                "Explain the philosophy of Stoicism and provide 3 practical Stoic exercises for building resilience.",
                "Explain the core tenets of Buddhism (e.g., The Four Noble Truths) in simple, accessible language.",
                "Explain the core ideas of Taoism (e.g., Wu Wei, Yin & Yang) in simple, accessible language.",
                "What are chakras? Provide a brief overview of the 7 main chakras and a simple meditation to balance them.",
                "How can I create a sacred space or altar in my home?",
                "I am skeptical about spirituality. What is a secular or science-based approach to concepts like mindfulness and compassion?",
                "What is the spiritual significance of solitude?",
                "How can I use journaling as a spiritual practice?",
                "What is a 'vision board'? Guide me through the process of creating one that is aligned with my deepest desires, not just material wants.",
                "How do I deal with a spiritual or existential crisis?",
                "What is the role of ritual in human life? Help me design a personal ritual to mark a significant life change.",
                "I want to read more spiritual or philosophical books. Suggest 5 classic texts for a beginner.",
                "How can I find a spiritual community or 'soul tribe' that feels right for me?",
                "Guide me in a reflection on the concept of death to help me live more fully in the present.",
                "What is synchronicity? How can I pay more attention to meaningful coincidences in my life?",
                "How can I practice 'digital minimalism' as a spiritual practice to reduce noise and increase presence?",
                "What does it mean to be the 'creator of your own reality'?",
                "Write a prayer or intention for the world, focusing on peace, healing, and compassion."
            ]
        }
    };

    // --- DOM Elements ---
    const themeToggle = document.getElementById('theme-toggle');
    const categoryCards = document.querySelectorAll('.category-card');
    const modal = document.getElementById('prompts-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const modalTitle = document.getElementById('modal-title');
    const promptsList = document.getElementById('prompts-list');
    const searchBar = document.getElementById('search-bar');

    // --- THEME TOGGLE ---
    const applyTheme = () => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    };

    applyTheme(); // Apply theme on initial load

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        let theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });

    // --- MODAL LOGIC ---
    function showPrompts(category) {
        const data = promptsData[category];
        if (!data) return;

        modalTitle.textContent = data.title;
        promptsList.innerHTML = ''; // Clear previous prompts

        data.prompts.forEach(promptText => {
            const promptBlock = document.createElement('div');
            promptBlock.className = 'prompt-block';
            
            const p = document.createElement('p');
            p.textContent = promptText;

            const copyBtn = document.createElement('button');
            copyBtn.className = 'copy-btn';
            copyBtn.innerHTML = `<i class="ph ph-copy"></i> Copy`;
            
            copyBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(promptText).then(() => {
                    copyBtn.innerHTML = `<i class="ph ph-check"></i> Copied!`;
                    copyBtn.classList.add('copied');
                    setTimeout(() => {
                        copyBtn.innerHTML = `<i class="ph ph-copy"></i> Copy`;
                        copyBtn.classList.remove('copied');
                    }, 2000);
                });
            });

            promptBlock.appendChild(p);
            promptBlock.appendChild(copyBtn);
            promptsList.appendChild(promptBlock);
        });
        
        // Show modal
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('active'), 10); // For transition
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    }
    
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            showPrompts(category);
        });
    });

    function closeModal() {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            searchBar.value = ''; // Reset search bar on close
            // Restore visibility of all prompts for the next opening
            const allPrompts = promptsList.querySelectorAll('.prompt-block');
            allPrompts.forEach(p => p.style.display = 'flex');
        }, 300); // Match CSS transition duration
    }

    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        // Close modal if overlay is clicked
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // --- SEARCH/FILTER LOGIC ---
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const allPrompts = promptsList.querySelectorAll('.prompt-block');

        allPrompts.forEach(prompt => {
            const text = prompt.querySelector('p').textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                prompt.style.display = 'flex';
            } else {
                prompt.style.display = 'none';
            }
        });
    });
});

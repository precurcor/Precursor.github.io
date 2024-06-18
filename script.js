document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('purityTestForm');
    const questionsContainer = document.getElementById('questions');
    const resultContainer = document.getElementById('result');
    const questions = [
        "Had a dating app?",
        "Experienced online dating success or failure?",
        "Sent a 'streak' on Snapchat?",
        "Made a purchase using cryptocurrency?",
        "Took part in or experienced cyberbullying/online harassment?",
        "Used a VPN to access restricted content?",
        "Been influenced by a social media influencer?",
        "Held hands romantically?",
        "Been on a date?",
        "Been in a relationship?",
        "Been in love with a MPS?",
        "Danced without leaving room for Jesus?",
        "Kissed a non-family member?",
        "Kissed a non-family member on the lips?",
        "French kissed?",
        "French kissed in public?",
        "made out in public?",
        "Kissed on the neck?",
        "Kissed horizontally?",
        "Given or received a hickey?",
        "Kissed or been kissed on the breast?",
        "Kissed someone below the belt?",
        "Kissed for more than two hours consecutively?",
        "Gotten back with/hooked up with an ex?",
        "Played a game involving stripping?",
        "Asked for a stranger’s contact info?",
        "Been asked for your contact info by a stranger?",
        "Seen or been seen by another person in a sensual context?",
        "Masturbated?",
        "Masturbated to a picture or video?",
        "Masturbated while someone else was in the room?",
        "Helped someone masturbate?",
        "Been caught masturbating?",
        "Masturbated with an inanimate object?",
        "Seen or read pornographic material?",
        "Paid for any porn?",
        "Watched porn with mps?",
        "Posted a thirst trap?",
        "Intentionally gas-lit/manipulated someone?",
        "Massaged or been massaged sensually?",
        "'Talked' to 5 or more people at once?",
        "kissed 5 or more people in one night?",
        "Gone through the motions of intercourse while fully dressed?",
        "Undressed or been undressed by a MPS (member of the preferred sex)?",
        "Showered with a MPS?",
        "Fondled or had your butt cheeks fondled?",
        "Fondled or had your breasts fondled?",
        "Fondled or had your genitals fondled?",
        "Had or given “blue balls”?",
        "Had an orgasm due to someone else’s manipulation?",
        "Sent a sexually explicit text or instant message?",
        "Tried sexting with any stranger(s)?",
        "Sent or received sexually explicit photographs?",
        "Engaged in sexually explicit activity over video chat?",
        "Cheated on/by a significant other during a relationship?",
        "Had friends with benefits?",
        "Purchased contraceptives?",
        "Gave oral sex?",
        "Received oral sex?",
        "Ingested someone else’s genital secretion?",
        "Used a sex toy with a partner?",
        "Spent the night with a MPS?",
        "Been walked in on while engaging in a sexual act?",
        "Kicked a roommate out to commit a sexual act?",
        "Gotten with 2+ people in the same friend group?",
        "Stalked someone’s snapchat location?",
        "Ingested alcohol in a non-religious context?",
        "Played a drinking game?",
        "?",
        "Been drunk?",
        "Flirted with a stranger to get a free drink?",
        "Faked sobriety to parents or teachers?",
        "Had a fake ID?",
        "Used a fake to buy alcohol/drugs?",
        "Used a fake to get into a bar/club?",
        "Had a fake ID confiscated?",
        "Blacked out or thrown up as a result of alcohol?",
        "Had severe memory loss due to alcohol?",
        "Used tobacco?",
        "Used marijuana?",
        "Done edibles?",
        "Hit a bong?",
        "Used a Vape?",
        "Finished a Vape?",
        "Used a drug stronger than marijuana?",
        "Used methamphetamine, crack cocaine, PCP, horse tranquilizers or heroin?",
        "Gotten kicked out of a party?",
        "Snuck out?",
        "Been sent to the office of a principal, dean or judicial affairs representative for a disciplinary infraction?",
        "Been put on disciplinary probation or suspended?",
        "Urinated in public?",
        "Gone skinny-dipping?",
        "Gone streaking?",
        "Seen a stripper?",
        "Gotten a tattoo?",
        "Pierced something other than your ears?",
        "Stolen something?",
        "Won a physical fight?",
        "Had the police called on you?",
        "Run from the police?",
        "Had the police question you?",
        "Had the police handcuff you?",
        "Been arrested?",
        "Been convicted of a crime?",
        "Been convicted of a felony?",
        "Committed an act of vandalism?",
        "Had sexual intercourse?",
        "Had sexual intercourse three or more times in one night?",
        "Had sexual intercourse 10 or more times?",
        "Had sexual intercourse in four or more positions?",
        "Had sexual intercourse with a stranger or person you met within 24 hours?",
        "Had a one night stand?",
        "Had sexual intercourse with someone you meet online?",
        "Had sexual intercourse in a motor vehicle?",
        "Had sexual intercourse outdoors?",
        "Had sexual intercourse in public?",
        "Had sexual intercourse in a swimming pool or hot tub?",
        "Had sexual intercourse in a bed not belonging to you or your partner?",
        "Had sexual intercourse with someone who was in a relationship, not with you?",
        "Had sexual intercourse while you or your partner’s parents were in the same home?",
        "Had sexual intercourse with non-participating third party in the same room?",
        "Joined the mile high club?",
        "Participated in a “booty call” with a partner whom you were not in a relationship with?",
        "Traveled 100 or more miles for the primary purpose of sexual intercourse?",
        "Had sexual intercourse with a partner with a 3 or more year age difference?",
        "Had sexual intercourse with a virgin?",
        "Had sexual intercourse without protection?",
        "Had a STI test due to reasonable suspicion?",
        "Had a STI?",
        "Had a threesome?",
        "Attended an orgy?",
        "Had two or more distinct acts of sexual intercourse with two or more people within 24 hours?",
        "Had sexual intercourse with five or more partners?",
        "Been in a polyamorous relationship?",
        "Been photographed or filmed during sexual intercourse by yourself or others?",
        "Participated in or watched a live sex show or cam show?",
        "Had period sex?",
        "Had anal sex?",
        "Had a pregnancy scare?",
        "Impregnated someone or been impregnated?",
        "Paid or been paid for a sexual act?",
        "Illegally pirated content?",
        "Committed an act of voyeurism?",
        "Constructed an illegal device for malicious intent?",
        "Plagiarised significant content?",
        "Texted while driving?",
        "Driven under the influence?",
        "Engaged in bestiality?",
        "Committed an act of incest?",
        "Committed murder?"
    ];


    // Generate questions dynamically
    questions.forEach((question, index) => {
        const div = document.createElement('div');
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.name = `question${index}`;
        label.appendChild(input);
        label.appendChild(document.createTextNode(`${index + 1}. ${question}`));
        div.appendChild(label);
        questionsContainer.appendChild(div);
    });

    form.addEventListener('submit', calculatePurity);

    function calculatePurity(event) {
        event.preventDefault();
        const formData = new FormData(form);
        let checkedCount = 0;

        formData.forEach((value) => {
            if (value === 'on') checkedCount++;
        });

        // Calculate purity percentage
        const totalQuestions = questions.length;
        const purityPercentage = ((totalQuestions - checkedCount) / totalQuestions) * 100;

        // Display result
        resultContainer.textContent = `Your purity score is ${purityPercentage.toFixed(2)}%`;

        // Send result via email using EmailJS
        const templateParams = {
            score: purityPercentage.toFixed(2)
        };

        emailjs.send('service_6cnfw1t', 'template_7n0rzmn', templateParams)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (error) => {
                console.log('FAILED...', error);
            });
    }
});

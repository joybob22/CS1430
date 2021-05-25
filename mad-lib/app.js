$('#Option1').on('click', () => {
    $('#initialState').toggleClass('noDisplay');
    $('#form1').toggleClass('noDisplay');
});

$('#Option2').on('click', () => {
    $('#initialState').toggleClass('noDisplay');
    $('#form2').toggleClass('noDisplay');
})

$('#submitForm1').on('click', () => {
    $('#form1').toggleClass('noDisplay');
    $('#output').toggleClass('noDisplay');
    let adj1 = $('#adj1').val();
    let adj2 = $('#adj2').val();
    let adj3 = $('#adj3').val();
    let noun1 = $('#noun1').val();
    let noun2 = $('#noun2').val();
    let noun3 = $('#noun3').val();
    let plNoun1 = $('#plNoun1').val();
    let plNoun2 = $('#plNoun2').val();
    let plNoun3 = $('#plNoun3').val();
    let plNoun4 = $('#plNoun4').val();
    let verb1 = $('#verb1').val();
    let verb2 = $('#verb2').val();
    let verb3 = $('#verb3').val();
    let verb4 = $('#verb4').val();
    let game = $('#game').val();
    let plant = $('#plant').val();
    let body = $('#body').val();
    let place = $('#place').val();
    let num = $('#num').val();

    $('#output').append(`
        <p>
            A vacation is when you take a trip to some <span class="custom">${adj1}</span> place with your <span class="custom">${adj2}</span> family. 
            Usually you go to some place that is near a/an <span class="custom">${noun1}</span> or up on a/an <span class="custom">${noun2}</span>. 
            A good vacation place is one where you can ride <span class="custom">${plNoun1}</span> or play <span class="custom">${game}</span> or go hunting for <span class="custom">${plNoun2}</span>. 
            I like to spend my time <span class="custom">${verb1}</span> or <span class="custom">${verb2}</span>. 
            When parents go on a vacation, they spend their time eating three <span class="custom">${plNoun3}</span> a day, 
            and father play golf, and mothers sit around <span class="custom">${verb3}</span>.
        </p> 
        <p>
            Last summer, my little brother fell in a/an <span class="custom">${noun3}</span> and got poison <span class="custom">${plant}</span> all over his <span class="custom">${body}</span>. 
            My Family is going to go to (the) <span class="custom">${place}</span>, and i will practice <span class="custom">${verb4}</span>.
            Parents need vacations more than kids because parents are always very <span class="custom">${adj3}</span> 
            and because they have to work <span class="custom">${num}</span> hours every day all year making enough <span class="custom">${plNoun4}</span> to pay for the vacation.
        </p>
    `)
});

$('#submitForm2').on('click', () => {
    $('#form2').toggleClass('noDisplay');
    $('#output').toggleClass('noDisplay');
    let adj4 = $('#adj4').val();
    let adj5 = $('#adj5').val();
    let adj6 = $('#adj6').val();
    let adj7 = $('#adj7').val();
    let adj8 = $('#adj8').val();
    let adj9 = $('#adj9').val();
    let noun4 = $('#noun4').val();
    let noun5 = $('#noun5').val();
    let plNoun5 = $('#plNoun5').val();
    let plNoun6 = $('#plNoun6').val();
    let plNoun7 = $('#plNoun7').val();
    let verb5 = $('#verb5').val();
    let adverb = $('#adverb').val();
    let letter = $('#letter').val();

    $('#output').append(`
        <p>
            <span class="custom">${adj4}</span> teachers always give out <span class="custom">${adj5}</span> assignments.
            But, as everyone knows, if you want to pass all your classes so you can get to a/an <span class="custom">${noun4}</span> 
            and become president of a big international <span class="custom">${noun5}</span> and have millions of <span class="custom">${plNoun5}</span> in the bank, 
            you must do your homework and study <span class="custom">${adverb}</span>. If you just sit around and <span class="custom">${verb5}</span>, 
            you won't get ahead in life. You must learn to pay attention to every <span class="custom">${adj6}</span> 
            thing your teacher says.
        </p>
        <p>
            Do not interrupt or whisper to other <span class="custom">${plNoun6}</span> during class. 
            Be sure to have a nice <span class="custom">${adj7}</span> notebook in which you can write down anything the teacher 
            says that seems <span class="custom">${adj8}</span>. Then go home and memorize all of these <span class="custom">${adj9}</span> notes. And when your 
            teacher gives a surprise quiz, you will know all of the <span class="custom">${plNoun7}</span> and will get a/an <span class="custom">${letter}</span> 
            as a grade for the class.
        </p>
    `)
});
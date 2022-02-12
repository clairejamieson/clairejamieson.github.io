/******************************************************************************/
function onload ()
{
    tipOfTheWeek();
}


/******************************************************************************/
function tipOfTheWeek ()
{
    var tips =
	[
	    {
		header: "Environment",
		text: `Make sure that you are working in a reasonable environment.  If you’re too hot,
	               too comfortable, or have just eaten a large meal, you’ll go to sleep.  If
	               you’re too cold, too uncomfortable, too hungry or there’s too much else going on
	               around you, you’ll be distracted.`
	    },

	    {
		header: "Mental attitude",
		text: `If you have difficulty remembering stuff &mdash; either when you’re listening
	               or when you’re reading &mdash; try approaching the material as though you were
	               intending to pick an argument and wanted to disagree violently with everything
	               being said.  It’s easier to remember things when you have an investment
	               in them, and this is a simple way of arranging to <em>have</em> an investment.`
	    },

	    {
		header: "Physical attitude",
		text: `Normally when we are interested in things, our physical attitide reflects the
	               fact &mdash; we sit up and take notice.  It can work the other way round, too
	               &mdash; sitting forward as though you are interested can help you <em>be</em>
	               interested, while sitting back as though you’re bored and couldn’t
	               care less makes it less likely you’ll take things in.`
	    },
		
	    {
		header: "Split up your time",
		text: `Research shows that you recall things best at the start or end of a learning
		       session.  Take advantage of this by splitting things up so as to create starts
		       and ends artificially &mdash; several shorter sessions of ten to forty minutes,
		       with a break of about ten minutes in between, rather than one long session.`
	    },
		
	    {
		header: "<u>Use</u> what you learn",
		text: `<u>Do</u> something with the information as you learn it.  Trying to explain
                       it to someone else is one of the best ways of fixing it in your mind and
                       making sure you understand it.  (When my daughter was young, she even taught
                       her lessons to her rag dolls!)  But if that’s not an option, at least take
                       brief notes, even if you don’t intend to do anything with them later.`
	    }
	];

    var ix = Math.floor(Math.random() * tips.length);
    $("#tip-of-the-week-header").html("Tip " + (ix + 1) + ": " + tips[ix].header);
    $("#tip-of-the-week-text").html(tips[ix].text);
}


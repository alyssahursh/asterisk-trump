walk(document.body);
setTimeout(function () {
	walk(document.body);
}, 1000);

function walk(node)
{
	// Source: http://is.gd/mwZp7E
	// Source: http://www.donaldjdrumpf.com
	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
		break;
	}
}


function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/(Donald Trump)/gi, "****** *****"); // Replace "****** *****" with any text of your choice
	v = v.replace(/(Donald J\. Trump)/gi, "****** * *****"); // Replace "****** * *****" with any text of your choice
	v = v.replace(/(Trump)/gi, "*****"); // Feel free to replace the "*****" with any text of your choice



	textNode.nodeValue = v;
}



// document.body.innerHTML = document.body.innerHTML.replace(/trump/gi, "idiot");






// Source: http://stoptonymeow.com/

var readyStateCheckInterval = setInterval(function() {
  if (document.readyState === "complete") {
    clearInterval(readyStateCheckInterval);
    $('img').each(function(i,e){
      var $e = $(e);
      if (('' + $e.attr('src') + $e.attr('alt') + $e.attr('title')).match(/(trump|election)/i)) {
      $e.attr('src', 'http://placehold.it/' + $e.width() + 'x' + $e.height())
    }
    });

  }
  }, 10);

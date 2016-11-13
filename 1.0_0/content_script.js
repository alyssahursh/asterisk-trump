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
		case Node.ELEMENT_NODE:
		case Node.DOCUMENT_NODE:
		case Node.DOCUMENT_FRAGMENT_NODE:
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case Node.TEXT_NODE:
			handleText(node);
			break;
	}
}


function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/(Donald Trump)/gi, "****** *****"); // Replace "****** *****" with any text of your choice
	v = v.replace(/(Donald J\. Trump)/gi, "****** * *****"); // Replace "****** * *****" with any text of your choice
	v = v.replace(/(Trump)/gi, "*****"); // Replace the "*****" with any text of your choice



	textNode.nodeValue = v;
}



// Source: http://stoptonymeow.com/

var readyStateCheckInterval = setInterval(function() {
  if (document.readyState === "complete") {
    clearInterval(readyStateCheckInterval);
    $('img').each(function(i,e){
      var $e = $(e);
      if (('' + $e.attr('src') + $e.attr('alt') + $e.attr('title') + $e.attr('data-mediaviewer-caption')).match(/(trump|pence|president|election)/i)) {
      $e.attr('src', 'http://placehold.it/' + $e.width() + 'x' + $e.height()) // Replace placehold.it with any placeholder service of your choice.
    }
    });

  }
  }, 10);

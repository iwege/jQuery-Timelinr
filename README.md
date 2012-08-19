jQuery Timelinr
=============

**Dando vida al tiempo / Giving life to time**

This simple plugin helps you to give more life to the boring timelines. Supports horizontal and vertical layouts, and you can specify parameters for most attributes: speed, transparency, etc...

More info and demos: http://www.csslab.cl/2011/08/18/jquery-timelinr/

![jQuery Timelinr](http://www.csslab.cl/wp-content/uploads/2011/08/Screen-Shot-2012-08-03-at-12.19.30-700x342.png "Dando vida al tiempo / Giving life to time")

Configuration:
-------

Include the jQuery library and this plugin:

	<script src="js/jquery-1.6.1.min.js"></script>
	<script src="js/jquery.timelinr.js"></script>

Inicialize-it with the default parameters:

	$(function(){
   		$("#timeline").timelinr();
	});

Or configure it as preferred:

	$(function(){
		$('#timeline').timelinr({
			orientation: 'horizontal',
			// value: horizontal | vertical, default to horizontal
	
			// value: any HTML tag or #id, default to #timeline
			datesDiv: '.dates',
			// value: any HTML tag or #id, default to #dates
			datesSelectedClass: 'selected',
			// value: any class, default to selected
			datesSpeed: 'normal',
			// value: integer between 100 and 1000 (recommended) or 'slow', 'normal' or 'fast'; default to normal
			issuesDiv : '.issues',
			// value: any HTML tag or #id, default to #issues
			issuesSelectedClass: 'selected',
			// value: any class, default to selected
			issuesSpeed:100,
			// value: integer between 100 and 1000 (recommended) or 'slow', 'normal' or 'fast'; default to fast
			issuesTransparency: 0.2,
			// value: integer between 0 and 1 (recommended), default to 0.2
			issuesTransparencySpeed: 500,
			// value: integer between 100 and 1000 (recommended), default to 500 (normal)
			prevButton: '#prev',
			// value: any HTML tag or #id, default to #prev
			nextButton: '#next',
			// value: any HTML tag or #id, default to #next
			arrowKeys: 'false',
			// value: true/false, default to false
			startAt: 1,
			// value: integer, default to 1 (first)
	});

HTML markup must be as follows:

	<div id="timeline">
	   <ul class="dates">
	      <li><a href="#" >date1</a></li>
	      <li><a href="#" >date2</a></li>
	   </ul>
	   <ul class="issues">
	      <li>
	         <p>Lorem ipsum.</p>
	      </li>
	      <li>
	         <p>Lorem ipsum.</p>
	      </li>
	   </ul>
	   <a href="#" id="next">+</a> <!-- optional -->
	   <a href="#" id="prev">-</a> <!-- optional -->
	</div>

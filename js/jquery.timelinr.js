(function($){
/* ----------------------------------
jQuery Timelinr 0.9.7
tested with jQuery v1.8

Copyright 2011, CSSLab.cl
Free under the MIT license.
http://www.opensource.org/licenses/mit-license.php

instructions: http://www.csslab.cl/2011/08/18/jquery-timelinr/
---------------------------------- */

$.fn.timelinr = function(options){
	var $this = this;
	// default plugin settings
	var s = $.extend({
		orientation: 				'horizontal',		// value: horizontal | vertical, default to horizontal
		container: 					'.timeline',		// value: any HTML tag or #id, default to #timeline
		dates: 						'.dates',			// value: any HTML tag or #id, default to #dates
		selectedClass: 				'selected',			// value: any class, default to selected
		datesSpeed: 				500,			// value: integer between 100 and 1000 (recommended) or 'slow', 'normal' or 'fast'; default to normal
		issues: 					'.issues',			// value: any HTML tag or #id, default to #issues
		issuesSpeed: 				'fast',				// value: integer between 100 and 1000 (recommended) or 'slow', 'normal' or 'fast'; default to fast
		issuesTransparency: 		0.2,				// value: integer between 0 and 1 (recommended), default to 0.2
		issuesTransparencySpeed: 	500,				// value: integer between 100 and 1000 (recommended), default to 500 (normal)
		startAt: 					1,					// value: integer, default to 1 (first)			// value: integer (1000 = 1 seg), default to 2000 (2segs)
		
	}, options);
	var $dates  = $this.find(s.dates);
	var $dateList = $dates.find('li');
	var $issues = $this.find(s.issues);
	var $issueList = $issues.find('li');
	var $container = $this;

	var c = {};
	// setting variables... many of them
	var numbers = {};
	numbers.date = $dateList.length;
	numbers.issue = $issueList.length
	c.container = 	{ width : $container.width(),	height : $container.height()};
	c.issues= 		{ width : $issues.width(),		height : $issues.height()};
	c.issueList = 	{ width : $issueList.width(),	height : $issueList.height()};
	c.dates = 		{ width : $dates.width(),		height : $dates.height()};
	c.dateList = 	{ width : $dateList.width(),	height : $dateList.height()}
	var attr = s.orientation == 'horizontal'? 'width':'height';
	var defaultPositionDates,currentIndex;
	//  初始化当前的 DOM
	//  
	function init(){
		
		// get dates and issues length
		c.issues[attr] = c.issues[attr]*numbers.issue;
		c.dates[attr] = c.dateList[attr]*numbers.date;
		
		// set dates and issues attr length
		$issues[attr](c.issues[attr]);
		$dates[attr](c.dates[attr]);
		
		// set initial position
		$dates.css(getTransform(c.dates[attr]/2-c.container[attr]/2));
		

		// set position;
		setTimeout(function(){
			$issues.css({'-webkit-transition':'-webkit-transform ease '+s.datesSpeed+'ms,opacity ease '+ s.datesSpeed+'ms'});
			$dates.css({'-webkit-transition':'-webkit-transform ease '+s.datesSpeed+'ms'});
		},10);

		defaultPositionDates = c.dates[attr]/2-c.container[attr]/2;
		$dateList.eq(s.startAt-1).find('a').trigger('click');
	}

	function getTransform(number){
		if (s.orientation == 'horizontal') {
			return {'-webkit-transform':'translate3d('+number+'px,0,0)'};
			
		}
		return {'-webkit-transform':'translate3d(0,'+number+'px,0)'};
	}



	
	$dates.find('a').on('click',function(event){
		event.preventDefault();
		var $this = $(this);
		if ($this.parent().hasClass(s.selectedClass)) {
			return ;
		};
		// first vars
		var whichIssue = this.dataset.target || this.text();

		currentIndex = $dateList.index($this.parent());
		// moving the elements

		$issues.css(getTransform(-c.issueList[attr]*currentIndex));
		$issueList.css({'opacity':s.issuesTransparency})
					.removeClass(s.selectedClass)
					.eq(currentIndex)
						.addClass(s.selectedClass)
						.fadeTo(s.issuesTransparencySpeed,1);
		
		// now moving the dates
		$dateList.removeClass(s.selectedClass);
		$this.parent().addClass(s.selectedClass);
		$dates.css(getTransform(defaultPositionDates - (c.dateList[attr]*currentIndex)));
	
	});
	$container.find('.button').on('click',function(event){
		event.preventDefault();
		event.stopPropagation();
		var action = this.dataset.action;
		var click = 0;
		if (action == 'next' && currentIndex != $dateList.length -1) {
			currentIndex += 1;
			click = 1;
		}

		if (action == 'prev' && currentIndex != 0) {
			currentIndex -= 1;
			click = 1;
		}

		click && $dateList.eq(currentIndex).find('a').click();
	})
	
	
	init();
};
})($);


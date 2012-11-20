// SEARCH
SearchBox = Backbone.View.extend(
{
    initialize: function()
    {
        this.render();
    },
    render: function()
    {    
    	// ADD SEARCH FEATURES
    	// - When Do I Feel [search], What Makes Me Feel [search]
    	// - How Do I Feel Between [hours]
    	// - How Do I Feel Between [dates]
    	// - How Do I Feel About [keyword search]
    	// - How Do I Feel At [location]
    	var search_data = {
	    	title: "How Do I Feel Between"
    	}
    	
    	// Load Controls
    	var search_template = _.template($('#visualize_search_box').html(), search_data);
    	
    	// Add to HTML
    	this.$el.html(search_template);
    },
    events:
    {
        "click #search_button": "doSearch"  
    },
    doSearch: function()
    {	    	
	    // Search Vars
	    var search_options = {
	    	start_hour	: determineHourStart($('#start_time').val(), $('#start_meridian').val()),
	    	end_hour	: determineHourEnd($('#end_time').val(), $('#end_meridian').val())
	    }
	    	
	    // Do Search
	    this.getHourSearch(search_options);
    },
	getHourSearch: function(options)
	{
		$("#search_visualization").html('');
			
		$.oauthAjax(
		{
			oauth 		: UserData,		
			url			: base_url + 'api/emoome/analyze/time/start/' + options.start_hour + '/end/' + options.end_hour,
			type		: 'GET',
			dataType	: 'json',
		  	success		: function(result)
		  	{
		  		// Yay Feelings
				if (result.status == 'success')
				{
					// New View
					$('#search_visualization_title').html(result.log_count + ' entries found during those hours').hide().delay(250).fadeIn();
					
					var NewSearch = new ResultSearch({ el: $("#search_visualization") });
			  		NewSearch.renderHourSearch(result);
				}				
				else
				{
					$('#search_visualization').append('<div id="search_visualization_none">' + result.message + '</div>');
				}
		  	}
		});
	}
});

ResultSearch = Backbone.View.extend(
{
    initialize: function()
    {
        this.render();
    },
    render: function() {},
    renderHourSearch: function(result)
    {   
    	$.each(result.moods, function(mood, mood_value)
	    {
	    	console.log(mood_value);
	    	    
	    	if (mood != 'undefined')
	    	{
	    		// TOPICS
	    		var topics_data = mood_value.topics;
	    		var topics      = '';
	    		var topics_count= _.values(mood_value.topics).length;
	    	
	    		for (var topic in topics_data)
	    		{
		    		if (topic != 'undecided')
		    		{
		    			if ((topics_count > 6) && (topics_data[topic] > 1))
		    			{
		    				topics += '<div class="search_topic_container"><div class="icons_topics icons_topics_' + topic + '"></div><span class="search_topic_count">' + topics_data[topic] + '</span> <span class="search_topic_text">' + topic + '</span></div>';
		    			}
		    			else if (topics_count < 6)
		    			{
		    				topics += '<div class="search_topic_container"><div class="icons_topics icons_topics_' + topic + '"></div><span class="search_topic_count">' + topics_data[topic] + '</span> <span class="search_topic_text">' + topic + '</span></div>';
		    			}
		    					
		    		}
	    		}

				// INJECT DATA
		        var mood_data = { 
		        	mood      	: mood,
		        	emoticon 	: '<img src="' + base_url + 'application/modules/emoome/assets/images/emoticons-' + mood  + '.png">',
		        	log_count   : mood_value.log_count,
		        	topics  	: topics + '<div class="clear"></div>'
		        };
	
		        var mood_item = _.template($("#search_hour_mood").html(), mood_data);
		        
		        // INJECT HTML
		        $('#search_visualization').append(mood_item).hide().delay(500).fadeIn();


		        // LANGUAGE PIE CHART
				var types 			= mood_value.language;		
				var types_colors	= new Array();
				var word_values		= new Array();
				var word_percents	= new Array();
			
				for (var type in types)
				{					
					if (type != 'undecided')
					{			
						word_values.push(types[type]);			
						word_percents.push("%% " + type);
						types_colors.push(EmoomeSettings.type_colors[type]);
					}
				}		        
		        
			    var r = Raphael('search_mood_language_' + mood, 190, 190);
			    pie = r.piechart(90, 90, 90, word_values,
			    {
			    	colors : types_colors,
			    });
			    

	    		// WORDS
	    		$search_mood_words = $('#search_mood_words_' + mood);
	    		var words_data = mood_value.words;

	    		for (var word in words_data)
	    		{
	    			if ($('#search_words_' + mood + '_' + words_data[word]).length)
	    			{	
	    				$search_words_mood_words = $('#search_words_' + mood + '_words_' + words_data[word]);
	    				var word_count = $search_words_mood_words.data('word_count');
	    				word_count = parseInt(word_count) + 1;

		    			// Add Word To Row	
	    				if (word_count <= 10)	
	    				{
		    				$search_words_mood_words.data('word_count', word_count);
		    				$search_words_mood_words.append(', ' + word);
		    			}
		    		}
		    		else
		    		{			    		
						// Create HTML Row
						$search_mood_words.append('<div id="search_words_' + mood + '_' + words_data[word] + '" class="search_words_row">\
							<div class="search_words_count">' + words_data[word] + '</div>\
							<div id="search_words_' + mood + '_words_' + words_data[word] + '" data-word_count="1" class="search_words_words">' + word + '</div>\
							<div class="clear"></div>\
						</div>\
						<div class="search_common_words_line"></div>');
		    		}
	    		}			    
			}
	    });

    }
});
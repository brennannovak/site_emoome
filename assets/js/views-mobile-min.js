console.log("MOBIEL SHITZ!!!!! The current value of myVariable is ");var LightboxView=Backbone.View.extend({initialize:function(){this.render()},render:function(){var e={lightbox_message:"Yo dog, sup?"},t=_.template($("#ligthbox_template").html(),e);this.$el.append(t)},requestMade:function(e){$("#lightbox_message").removeClass("lightbox_message_success lightbox_message_error").addClass("lightbox_message_normal").html(e);$("#request_lightbox").delay(250).fadeIn();if(UserData.get("source")=="mobile")var t=$("body").height()+150,n=$(window).scrollTop()+50;else var t=$("body").height()+100,n=$(window).scrollTop()+100;$("#lightbox_message").css("top",n);$("#request_lightbox").height(t)},requestComplete:function(e,t){$("#lightbox_message").html(e);if(t=="success"){$("#lightbox_message").addClass("lightbox_message_success");$("#request_lightbox").delay(150).fadeOut()}else{$("#lightbox_message").addClass("lightbox_message_error");$("#request_lightbox").delay(2e3).fadeOut()}},printUserMessage:function(e){$("#lightbox_message").removeClass("lightbox_message_success lightbox_message_error").addClass("lightbox_message_normal").html(e);$("#request_lightbox").delay(250).fadeIn();$("#request_lightbox").delay(1e3).fadeOut()},closeFast:function(){$("#request_lightbox").fadeOut("fast")}}),Lightbox=new LightboxView({el:$("body")}),NavigationView=Backbone.View.extend({initialize:function(){this.render()},render:function(){UserData.get("user_id")!=""?this.renderLogged():this.renderPublic()},renderPublic:function(){var e=_.template($("#header_public").html(),UserData.attributes);this.$el.html(e)},renderLogged:function(){var e=_.template($("#header_user").html(),UserData.attributes);this.$el.html(e)}}),ContentView=Backbone.View.extend({initialize:function(e){this.view=e},render:function(){var e=$(this.view).html();$(this.el).html(e).hide().delay(250).fadeIn();return this}}),AuthView=Backbone.View.extend({initialize:function(){this.render()},render:function(){},events:{"click #button_login":"processLogin","click #button_signup":"processSignup","click #button_signup_short":"processSignupShort","click #button_forgot_password":"processForgotPassword"},viewLogin:function(){var e=_.template($("#login").html());this.$el.html(e).hide().delay(250).fadeIn()},viewSignup:function(){var e=_.template($("#signup").html());this.$el.html(e).hide().delay(250).fadeIn()},viewForgotPassword:function(){var e=_.template($("#forgot_password").html());this.$el.html(e).hide().delay(250).fadeIn()},processLogin:function(){$.validator({elements:[{selector:"#login_email",rule:"email",field:"Please enter a valid Email",action:"label"},{selector:"#login_password",rule:"require",field:"Please enter your Password",action:"label"}],message:"",success:function(){var e=$("#user_login").serializeArray();e.push({name:"session",value:"1"});$.ajax({url:base_url+"api/users/login",type:"POST",dataType:"json",data:e,beforeSend:Lightbox.requestMade("Logging You In"),success:function(e){Lightbox.requestComplete(e.message,e.status);if(e.status=="success"){$("[name=email]").val("");$("[name=password]").val("");UserData.set({logged:"yes"});UserData.set(e.user);var t=new NavigationView({el:$("#header")});t.renderLogged();Backbone.history.navigate("#/record/feeling",!0)}}})}})},processSignup:function(){$.validator({elements:[{selector:"#signup_name",rule:"require",field:"Enter your name",action:"label"},{selector:"#signup_email",rule:"email",field:"Please enter a valid email",action:"label"},{selector:"#signup_password",rule:"require",field:"Please enter a password",action:"label"}],message:"",success:function(){var e=$("#user_signup").serializeArray();e.push({name:"session",value:"1"},{name:"password_confirm",value:$("#signup_password").val()});$.ajax({url:base_url+"api/users/signup",type:"POST",dataType:"json",data:e,beforeSend:Lightbox.requestMade("Creating Account"),success:function(e){Lightbox.requestComplete(e.message,e.status);if(e.status=="success"){$("[name=name]").val("");$("[name=email]").val("");$("[name=password]").val("");UserData.set({logged:"yes"});UserData.set(e.user);var t=new NavigationView({el:$("#header")});t.renderLogged();Backbone.history.navigate("#/record/feeling",!0)}}})}})},processSignupShort:function(e){e.preventDefault();$.validator({elements:[{selector:"#signup_name_short",rule:"require",field:"Enter your name",action:"label"},{selector:"#signup_email_short",rule:"email",field:"Please enter a valid email",action:"label"},{selector:"#signup_password_short",rule:"require",field:"Please enter a password",action:"label"}],message:"",success:function(){var e=$("#user_signup_short").serializeArray();e.push({name:"session",value:"1"},{name:"password_confirm",value:$("#signup_password_short").val()});$.ajax({url:base_url+"api/users/signup",type:"POST",dataType:"json",data:e,beforeSend:Lightbox.requestMade("Creating Account"),success:function(e){Lightbox.requestComplete(e.message,e.status);if(e.status=="success"){$("[name=name]").val("");$("[name=email]").val("");$("[name=password]").val("");UserData.set({logged:"yes"});UserData.set(e.user);var t=new NavigationView({el:$("#header")});t.renderLogged();Backbone.history.navigate("#/record/feeling",!0)}}})}})},processForgotPassword:function(){$.validator({elements:[{selector:"#forgot_email",rule:"email",field:"Please enter a valid email",action:"label"}],message:"",success:function(){$.ajax({url:base_url+"api/users/password_forgot",type:"POST",dataType:"json",data:$("#user_forgot_password").serializeArray(),beforeSend:Lightbox.requestMade("Resetting Password"),success:function(e){Lightbox.requestComplete(e.message,e.status);Backbone.history.navigate("#/login",!0)}})}})}}),RecordFeelingView=Backbone.View.extend({initialize:function(){this.render()},render:function(){},events:{"click #log_feeling_use_text":"viewFeelingText","click #log_feeling_use_emoticons":"viewFeelingEmoticons","click #log_feeling_use_audio":"viewFeelingAudio","click a.log_save_feeling":"processFeeling","click div.emoticon_item":"processFeelingEmoticons","click #log_feel_next":"processFeelingText","click #log_experience_next":"processExperience","click #log_describe_next":"processDescribe"},displayRecordType:function(e){UserData.set({default_feeling_type:e});$.each(["text","emoticons","audio"],function(t,n){n==e?$("#record_feeling_"+n).fadeIn():$("#record_feeling_"+n).hide();$("#log_feeling_use_"+n).addClass("icon_small_"+n)});$("div.left_control_links").removeClass("icon_small_text_select icon_small_emoticons_select icon_small_audio_select");$("#log_feeling_use_"+e).removeClass("icon_small_"+e).addClass("icon_small_"+e+"_select")},viewFeeling:function(){LogFeelingModel.startFeeling();if(navigator.geolocation){function e(e){LogFeelingModel.set({geo_lat:e.coords.latitude,geo_lon:e.coords.longitude})}navigator.geolocation.getCurrentPosition(e)}var t=_.template($("#record_feeling").html());this.$el.html(t).hide().delay(250).fadeIn();var n="",r=765;$.each(EmoomeSettings.core_emotions,function(e,t){n+='<div class="emoticon_item"><div class="record_feeling_emoticon"><span data-feeling="'+t+'" class="emoticons-'+t+'"></span></div><div class="record_feeling_emoticon_text">'+t+"</div></div>";r+=395});$("#emoticons").html(n).width(r);UserData.get("default_feeling_type")=="text"?this.viewFeelingText():UserData.get("default_feeling_type")=="emoticons"?this.viewFeelingEmoticons():UserData.get("default_feeling_type")=="audio"&&this.viewFeelingAudio()},viewFeelingText:function(){this.displayRecordType("text");$("#log_feeling_value").jkey("space, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0",function(e){Lightbox.printUserMessage("Enter only a single word (no spaces or numbers)")})},viewFeelingEmoticons:function(){this.displayRecordType("emoticons");$(".emoticon_item").live("mouseover",function(){$(this).css("background-color","#d6d6d6")}).live("mouseleave",function(){$(this).css("background-color","")})},viewFeelingAudio:function(){this.displayRecordType("audio")},processFeelingText:function(){$.validator({elements:[{selector:"#log_feeling_value",rule:"require",field:"Feeling"}],message:"Enter a ",success:function(){LogFeelingModel.processFeeling($("#log_feeling_value").val());Backbone.history.navigate("#/record/experience",!0)},failed:function(){Lightbox.printUserMessage("Please enter how you feel right now")}})},processFeelingEmoticons:function(e){LogFeelingModel.processFeeling($(e.target).data("feeling"));Backbone.history.navigate("#/record/experience",!0)},processFeeling:function(e){e.preventDefault();$.validator({elements:[{selector:"#log_feeling_value",rule:"require",field:"Experience"}],message:"Enter a ",success:function(){$.oauthAjax({oauth:UserData,url:base_url+"api/emoome/logs/create_feeling",type:"POST",dataType:"json",data:LogFeelingModel.returnData(),beforeSend:Lightbox.requestMade("Saving your feeling"),success:function(e){Lightbox.requestComplete(e.message,e.status);if(e.status=="success"){$("#log_completion_message").html(_.shuffle(UIMessages.log_feeling_complete)[0]);Backbone.history.navigate("#/record/thanks",!0)}}})},failed:function(){Lightbox.printUserMessage("Please enter how you feel right now")}})},viewExperience:function(){var e=_.template($("#record_experience").html());this.$el.html(e).hide().delay(250).fadeIn()},processExperience:function(){$.validator({elements:[{selector:"#log_experience_value",rule:"require",field:"Experience"}],message:"Enter a ",success:function(){LogFeelingModel.processExperience();Backbone.history.navigate("#/record/describe",!0)},failed:function(){Lightbox.printUserMessage("Please enter one thing you did today")}})},viewDescribe:function(){var e={describe_this:LogFeelingModel.get("experience")},t=_.template($("#record_describe").html(),e);this.$el.html(t).hide().delay(250).fadeIn();$("#log_describe_1_value, #log_describe_2_value, #log_describe_3_value").jkey("space, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0",function(){Lightbox.printUserMessage("Enter only a single word (no spaces or numbers)")})},processDescribe:function(){$.validator({elements:[{selector:"#log_describe_1_value",rule:"require",field:"Describe 1"},{selector:"#log_describe_2_value",rule:"require",field:"Describe 2"},{selector:"#log_describe_3_value",rule:"require",field:"Describe 3"}],message:"Enter a ",success:function(){LogFeelingModel.processDescribe();$.oauthAjax({oauth:UserData,url:base_url+"api/emoome/logs/create_experience",type:"POST",dataType:"json",data:LogFeelingModel.returnData(),beforeSend:Lightbox.requestMade("Saving your experience"),success:function(e){Lightbox.requestComplete(e.message,e.status);e.status=="success"&&Backbone.history.navigate("#/record/thanks",!0)}})},failed:function(){Lightbox.printUserMessage("Please enter three words to describe what you did today")}})},viewThanks:function(){this.clearInput();var e={describe_this:_.shuffle(UIMessages.log_feeling_complete)[0]},t=_.template($("#record_thanks").html(),e);this.$el.html(t).hide().delay(250).fadeIn()},clearInput:function(){this.$("#log_val_feeling").val("");this.$("#log_val_experience").val("");this.$("#log_val_describe_1").val("");this.$("#log_val_describe_2").val("");this.$("#log_val_describe_3").val("");this.$("#log_describe_this").html("")}}),SettingsView=Backbone.View.extend({initialize:function(){this.render()},render:function(){},events:{"click #settings_button_notifications":"processNotifications","click #settings_button_account":"processAccount","click #settings_button_password":"processPassword","click .settings_button_cancel":"processCancel"},viewNotifications:function(){var e={describe_this:LogFeelingModel.get("experience")},t=_.template($("#settings_notifications").html(),e);this.$el.html(t).hide().delay(250).fadeIn()},viewAccount:function(){var e=_.template($("#settings_account").html(),UserData.attributes);this.$el.html(e).hide().delay(250).fadeIn()},viewPassword:function(){var e=_.template($("#settings_password").html());this.$el.html(e).hide().delay(250).fadeIn()},processNotifications:function(){var e=$("#settings_notifications").serializeArray();e.push({name:"module",value:"notifications"});$.oauthAjax({oauth:UserData,url:base_url+"api/users/details/id/"+UserData.get("user_id"),type:"POST",dataType:"json",data:e,beforeSend:Lightbox.requestMade("Saving notification settings"),success:function(e){Lightbox.requestComplete(e.message,e.status)}})},processAccount:function(){$.validator({elements:[{selector:"#profile_name",rule:"require",field:"Name is required",action:"label"},{selector:"#profile_email",rule:"email",field:"Email is required",action:"label"}],message:"",success:function(){var e=$("#settings_account").serializeArray();e.push({name:"session",value:1});$.oauthAjax({oauth:UserData,url:base_url+"api/users/modify/id/"+UserData.get("user_id"),type:"POST",dataType:"json",data:e,beforeSend:Lightbox.requestMade("Saving account changes"),success:function(e){Lightbox.requestComplete(e.message,e.status);UserData.set(e.user)}})}})},processPassword:function(){$.validator({elements:[{selector:"#old_password",rule:"required",field:"Old Password is required",action:"label"},{selector:"#new_password",rule:"required",field:"New Password is required",action:"label"},{selector:"#new_password_confirm",rule:"confirm",field:"Needs to match New Password",action:"label"}],message:"",success:function(){$.oauthAjax({oauth:UserData,url:base_url+"api/users/password",type:"POST",dataType:"json",data:$("#settings_change_password").serializeArray(),beforeSend:Lightbox.requestMade("Changing your password"),success:function(e){Lightbox.requestComplete(e.message,e.status);$("#old_password").val("");$("#new_password").val("");$("#new_password_confirm").val("")}})}})},processLogout:function(){$.oauthAjax({oauth:UserData,url:base_url+"api/users/logout",type:"GET",dataType:"json",beforeSend:Lightbox.requestMade("Logging you out..."),success:function(e){Lightbox.closeFast();Backbone.history.navigate("#/logout",!0)}})},processCancel:function(e){e.preventDefault();Backbone.history.navigate("#/settings",!0)}}),VisualizeView=Backbone.View.extend({initialize:function(){this.render()},render:function(){var e={},t=_.template($("#visualize").html(),e);this.$el.html(t).hide().delay(250).fadeIn();VisualizeModel.get("logs_count")>5&&UserData.get("source")!=="mobile"&&$("#visualize_title").fadeIn();if(VisualizeModel.get("logs_count")<5){$("#logs_needed_count").html(5-VisualizeModel.get("logs_count"));$("#visualize_waiting").fadeIn("slow")}else{$("#visualize_summary").fadeIn();this.renderLastFive()}if(VisualizeModel.get("logs_count")>10){UserData.get("source")!=="mobile"&&$("#your_language_map").fadeIn();this.renderAllTime();this.renderCommonWords()}VisualizeModel.get("logs_count")>15&&this.renderStrongExperiences()},renderLastFive:function(){var e=VisualizeModel.get("last_five").language,t=[],n=[],r=[];for(var i in e)if(i!=="undecided"){n.push(e[i]);r.push("%% "+i);t.push(EmoomeSettings.type_colors[i])}this.renderPieChart("last_five",n,r,t)},renderAllTime:function(){var e=VisualizeModel.get("all_time").language,t=[],n=[],r=[];for(var i in e)if(i!=="undecided"){n.push(e[i]);r.push("%% "+i);t.push(EmoomeSettings.type_colors[i])}this.renderPieChart("all_time",n,r,t)},renderPieChart:function(e,t,n,r){var i=Raphael(e,575,375);pie=i.piechart(175,175,150,t,{colors:r});pie.hover(function(){this.sector.stop();this.sector.scale(1.1,1.1,this.cx,this.cy);if(this.label){this.label[0].stop();this.label[0].attr({r:15})}},function(){this.sector.animate({transform:"s1 1 "+this.cx+" "+this.cy},1e3,"bounce");this.label&&this.label[0].animate({r:10},750,"bounce")});return!0},renderCommonWords:function(){$visualize_common_words=$("#visualize_common_words");var e=0,t=VisualizeModel.get("all_time").words;$.each(t,function(t,n){if(e<10)if($("#word_count_"+n).length)$("#word_count_"+n+"_words").append(", "+t);else{$visualize_common_words.append('<div id="word_count_'+n+'" class="common_words">'+'<div class="common_words_count">'+n+"</div>"+'<div id="word_count_'+n+'_words" class="common_words_words">'+t+"</div>"+'<div class="clear"></div>'+"</div>"+'<div class="common_words_line"></div>');e++}});$("#visualize_common").delay(750).fadeIn()},renderStrongExperiences:function(){$strong_experiences=$("#strong_experiences");$.each(VisualizeModel.get("strong_experiences"),function(e,t){var n=EmoomeSettings.type_colors[t.type],r=t.count*10,i=80,s=i/2;$strong_experiences.append('<div class="strong_experience"><div class="strong_experience_circle" id="strong_experience_'+t.log_id+'"></div><div class="strong_experience_experience">"'+t.experience+'" <span class="strong_experience_date">'+mysqlDateParser(t.date).date("short")+"</span></div>"+'<div class="clear"></div></div>');var o=new Raphael(document.getElementById("strong_experience_"+t.log_id),i,i);o.circle(s,s,r).attr({fill:n,opacity:0,"stroke-width":1,stroke:"#c3c3c3"}).animate({opacity:1},1500)});$("#visualize_experiences").delay(1e3).fadeIn()}});
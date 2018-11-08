/***********************
Big Countdown
Author: Jan Skwara
version: 08.04.2014
***********************/

var hovered = false;

//variables
var w_width = $(window).width();
var w_height = $(window).height();
var $loader;
var $gallery_img;
var $gallery;
var $logo;
var $body;
var $left;
var $right;
var $desc_info;
var $content_wrapper;
var fullscreen;
var play;
var sound;
var myPlayer;

	var deviceAgent = navigator.userAgent.toLowerCase();
	var agentID = deviceAgent.match(/(iphone|ipod|ipad|android|blackberry|webos|windows phone)/);

$(document).ready(function() {


/***** INITIALIZATION *****/

	slideSize = 'width';	
	$body = $("body");
	$loader=$("#loader");
	$gallery=$("#gallery");
	$logo=$("#logo");
	$logo_shadow=$("#logo_shadow");
	$left=$("#left");
	$right=$("#right");
	$desc_info=$("#desc_info");
	$video_desc_info=$("#video_desc_info");
	$fullscreen=$("#fullscreen");
	$play=$("#play");
	$sound=$("#sound");
	$contact=$("#contact");
	$video_play=$("#video_play");
	$video_sound=$("#video_sound");
  $background_img=$("#background img");	
	$content_wrapper=$("#content_wrapper");
	
	
	//IPAD, IPOD, IPHONE DETECT

	
	if(agentID) { 
		videopattern=false; imgpattern=false; 
		autoplay=false;
		//$("html").css('overflow','visible'); $body.css('overflow','visible');
	}
	
	
	
	//LOADER ICON POSITION
	
	
	
	$loader.css("margin-left",(w_width - $loader.outerWidth(true))/2 + "px");
	$loader.css("margin-top",(w_height - $loader.outerHeight(true))/2 + "px");
	$loader.css("display","block");
	
	
 
 
 
	//SMALL RESOLUTION CSS FIX
		
  if(((w_height - 400)/2)<=$logo.innerHeight() + 10) {
		$('#logo_shadow').css('position','absolute');	
  $('#logo').css('position','absolute');	
  $('#video-pattern').css('position','fixed');	
  $('#img-pattern').css('position','fixed');	
  $('.slider').css('position','fixed');	
  $('body').css('overflow','visible');	
  $('html').css('overflow','visible');	
 }
 
 
	
	//POSITIONING LOGO & PAGE
	
	
	
	$logo.css("margin-left",(w_width- 506)/2 + "px");
	$logo.fadeTo('fast',1);
	$logo_shadow.css("margin-left",(w_width- 506)/2 + "px");
	
	$desc_info.css('left',(w_width - 506)/2  + $logo.innerWidth()  +20 + ($fullscreen.innerWidth() ? (20 + $fullscreen.innerWidth()): 0)  + ($play.innerWidth() ? (20+$play.innerWidth()) : 0)   + ($video_play.innerWidth() ? (20+$video_play.innerWidth()) : 0) + ($sound.innerWidth() ? (20+$sound.innerWidth()) : 0)   + ($video_sound.innerWidth() ? (20+$video_sound.innerWidth()) : 0) +  ($contact.innerWidth() ? (20 + $contact.innerWidth()): 0)  + 'px');
	$fullscreen.css('left',(w_width - 506)/2  + $logo.innerWidth() + 20 +'px');
	$play.css('left',(w_width - 506)/2  + $logo.innerWidth() + ($fullscreen.innerWidth() ? (20 + $fullscreen.innerWidth()): 0) + 20 +'px');
	$sound.css('left',(w_width - 506)/2  + $logo.innerWidth()  +20 + ($fullscreen.innerWidth() ? (20 + $fullscreen.innerWidth()): 0)  + ($play.innerWidth() ? (20+$play.innerWidth()) : 0) +'px');
	$contact.css('left',(w_width - 506)/2  + $logo.innerWidth()  +20 + ($fullscreen.innerWidth() ? (20 + $fullscreen.innerWidth()): 0)  + ($play.innerWidth() ? (20+$play.innerWidth()) : 0)   + ($video_play.innerWidth() ? (20+$video_play.innerWidth()) : 0) + ($sound.innerWidth() ? (20+$sound.innerWidth()) : 0)   + ($video_sound.innerWidth() ? (20+$video_sound.innerWidth()) : 0)  + 'px');
	$video_play.css('left',(w_width - 506)/2  + $logo.innerWidth() + ($fullscreen.innerWidth() ? (20 + $fullscreen.innerWidth()): 0) + 20 +'px');
	$video_sound.css('left',(w_width - 506)/2  + $logo.innerWidth() +  20 + ($fullscreen.innerWidth() ? (20 + $fullscreen.innerWidth()): 0)  + ($video_play.innerWidth() ? (20+$video_play.innerWidth()) : 0) +'px');
	$content_wrapper.css("margin-left",(w_width - 506)/2 + "px");
	$content_wrapper.css("margin-top",(((w_height - 400)/2)>$logo.innerHeight() + 10)?((w_height - 400)/2):($logo.innerHeight() + 10) + "px");
	$body.append('<div id="modal_shadow"></div>');
	$modal_shadow=$("#modal_shadow");
	$modal_shadow.css("margin-top",((((w_height - 400)/2)>$logo.innerHeight() + 10)?((w_height - 400)/2):($logo.innerHeight() + 10)) + $content_wrapper.innerHeight() + "px");
	$modal_shadow.css("margin-left",(w_width - 506)/2 + 2 + "px");
	$('#header').append('<img src="img/modal_shadow.png" class="shadow" />');
	$('#header').children(".shadow").css("width",$('#header').innerWidth());
	$('#header').children(".shadow").css("top", (w_height - 400)/2 + $('#header').innerHeight()  +'px');
	$('#dots').css('top',((((w_height - 400)/2)>$logo.innerHeight() + 10)?((w_height - 400)/2):($logo.innerHeight() + 10))+ $content_wrapper.innerHeight() + 'px');
	$('#dots').css('left',(w_width - 120)/2 + 'px');	

	
	
	//PATTERNS
	
	
	
	if(videopattern==true) $("#video-pattern").css("visibility","visible");
	if(imgpattern==true) $("#img-pattern").css("visibility","visible");
	
	

	//SETTING WIDTH AND HEIGHT OF GALLERY
	
	
	
	$gallery_img = $("#gallery img");
	$body.css("height",w_height + "px");	

	if(slideSize=='width')
	{  
		$gallery_img.each(function() {
			var gallery_w = parseInt($(this).css("width"));
			var gallery_h = parseInt($(this).css("height"));
			//alert(gallery_w + ' ' + gallery_h);
			$(this).css("width",w_width + "px"); 
			$(this).css("height",gallery_h*w_width/gallery_w +"px");
		});
	}

	
	
	//ADDING ATRIBUTES TO GALLERY ITEMS
	
	
	
	$gallery_img.each(function( num ) {
		$(this).attr( 'id', 'item_' + (num+1) );
		
	});	
});



$(window).load(function() {

 
 
			var img_prop =$background_img.width()/$background_img.height();
			var browser_prop = w_width/w_height;
			if(img_prop<browser_prop)
				$background_img.css("width",w_width + "px");
			else
			{
				$background_img.css("height",w_height + "px");
				$background_img.css("margin-left",-($background_img.width() - w_width)/2 + "px");
			}
			$background_img.css("visibility","visible");
			

/***** HIDE / SHOW ITEMS *****/



  $loader.fadeOut('slow');
	$fullscreen.css('visibility','visible');
	$play.css('visibility','visible');
	$sound.css('visibility','visible');
	$contact.css('visibility','visible');
	$video_play.css('visibility','visible');
	$video_sound.css('visibility','visible');
	$desc_info.css('visibility','visible');
	$logo_shadow.fadeTo('fast',1);
	$gallery_img.css('visibility','visible');
	$left.css('visibility','visible');
	$right.css('visibility','visible');

	
	
/***** MAIN CAROUSEL *****/


		
	var cfs = $gallery.carouFredSel({
		padding: 0,
		width: 8000,
		height: w_height,
		auto: {
				play: autoplay,
				pauseDuration: autoplaySpeed
		},
		scroll: {
				items: 1,
				duration:11,
				onBefore: function(oldItems,newItems) {						
						var old_margin = parseInt($('#slider div.caroufredsel_wrapper').css('margin-left'));					
						var margin = -$(newItems.get(0)).innerWidth() -$(newItems.get(1)).innerWidth() - $(newItems.get(2)).innerWidth()/2 + w_width/2;						
						$('#slider div.caroufredsel_wrapper').animate({marginLeft:margin},11);
						$(newItems.get(1)).stop().fadeTo(0,0.1);
						$(oldItems.get(2)).stop().fadeTo(0,0.1);						
						var margin_top = ( ( w_height - $(newItems.get(2)).innerHeight() ) / 2 );
						$('#slider div.caroufredsel_wrapper').css({'margin-top':margin_top+'px'});
						$gallery.css("height",w_height - margin_top + "px");
						$(newItems.get(2)).fadeTo(1500,1);
						$('#slider div.caroufredsel_wrapper').css("height",w_height - margin_top +'px');
						}
			},
		items: {
				visible: 3,
				start:-2,
				width: "variable"
		},
		prev: {	
				button: "#scroll_left",
				key: "left"
			},
		next: { 
				button: "#scroll_right",
				key: "right"
			}
	});
	

	
	//POSITIONING MAIN GALLERY ITEMS
	
	
	
	var obj = $("#gallery img");
	var l = obj.length;
 var $slider_wrapper = $('#slider div.caroufredsel_wrapper');
	
	// slide width
	var slide = $(obj.get(2)).innerWidth();
	var slide2 = $(obj.get(1)).innerWidth();
	var slide3 = $(obj.get(0)).innerWidth()
	
	// negative margin to apply
	var margin = ( ( w_width - slide ) / 2 ) - slide3 - slide2;
	var margin_top = ( ( w_height - $(obj.get(2)).innerHeight() ) / 2 );
	
	// apply negative margin
	$slider_wrapper.css({'overflow':'hidden'});
	$slider_wrapper.css({'margin-left':margin+'px'});
	$slider_wrapper.css({'height':w_height - margin_top+'px'});
	$gallery.css("height",w_height - margin_top + "px");
	//alert($slider_wrapper.css('height'));
	$slider_wrapper.css({'margin-top':margin_top+'px'});
  $(obj.get(2)).fadeTo('fast',1);
	
	$left.css("top",parseInt($content_wrapper.css('margin-top')) +  ($content_wrapper.innerHeight() - $left.innerHeight())/2);
	$left.css("left",(w_width-504)/2 - $left.innerWidth() + 'px');
	
	$right.css("top",parseInt($content_wrapper.css('margin-top')) +  ($content_wrapper.innerHeight() - $left.innerHeight())/2);
	$right.css("left",(w_width-506)/2  + 506 + 'px');
	


	
/***** START / STOP AUTOPLAY  *****/ 



	if(autoplay==true) { $("#play #play_icon").addClass("play_on");}
	else {$("#play #play_icon").addClass("play_off");}
	
	$play.click(function() {
		if($("#play_icon").hasClass("play_on"))
		{
		  var this_wrapper_h = 	$slider_wrapper.css('height');
			var this_gallery_h = 	$gallery.css('height');
			cfs.configuration("auto.play", false);
			$gallery.trigger("play", true);
			$slider_wrapper.css({'height':this_wrapper_h});
			$gallery.css({'height':this_gallery_h});
			$("#play_icon").removeClass("play_on");
			$("#play_icon").addClass("play_off");
		}
		else
		{
			cfs.configuration("auto.play", true);
			$gallery.trigger("play", true).trigger("next");
			$("#play_icon").removeClass("play_off");
			$("#play_icon").addClass("play_on");		
		}
	});
	
	
	
/*****MUSIC  *****/ 



if(sound_m4a || sound_oga)
{
 var commend="play";
 if(soundplay==true) { $("#sound_icon").addClass("sound_on"); }
	else {
		$("#sound_icon").addClass("sound_off"); 
		commend = "pause";
	}
	$("#jquery_jplayer_1").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            m4a: sound_m4a,
            oga: sound_oga
          }).jPlayer(commend);
        },
				ended: function() { // The $.jPlayer.event.ended event
					$(this).jPlayer("play"); // Repeat the media
				},
        swfPath: "js/jPlayer",
        supplied: "m4a, oga",
				wmode:"window"
      });
	
		$sound.click(function() {
		if($("#sound_icon").hasClass("sound_on"))
		{
			$("#jquery_jplayer_1").jPlayer("pause");
			$("#sound_icon").removeClass("sound_on");
			$("#sound_icon").addClass("sound_off");
		}
		else
		{
			$("#jquery_jplayer_1").jPlayer("play");
			$("#sound_icon").removeClass("sound_off");
			$("#sound_icon").addClass("sound_on");		
		}
	});	
}
else
{
	$sound.css('visibility','hidden');
}
	
	

/***** FULLSCREEN BUTTON  *****/ 



 $("#fullscreen_icon").addClass("full_on");
	var fullscreen_on = false;
		$fullscreen.click(function() {
		if($("#fullscreen_icon").hasClass("full_on"))
		{
							fullscreen_on = true;
							$left.fadeOut("fast");
							$right.fadeOut("fast");
							$desc_info.fadeOut("fast");
							$video_desc_info.fadeOut("fast");
							$play.fadeOut("fast");
							$sound.fadeOut("fast");
							$contact.fadeOut("fast");
							$logo.fadeOut("fast");
							$logo_shadow.fadeOut("fast");
							$video_sound.fadeOut("fast");
							$video_play.fadeOut("fast");
							$content_wrapper.fadeOut("fast");
							$modal_shadow.fadeOut("fast");
							$('#dots').fadeOut("fast");
			$("#fullscreen_icon").removeClass("full_on");
			$("#fullscreen_icon").addClass("full_off");
		}
		else
		{
					fullscreen_on = false;
					$logo.stop(true,true);
					$logo.fadeIn('fast');
					$logo_shadow.stop(true,true);
					$logo_shadow.fadeIn('fast');
					$left.stop(true,true);
					$left.fadeIn('fast');
					$right.stop(true,true);
					$right.fadeIn('fast');
					$desc_info.stop(true,true);
					$desc_info.fadeIn('fast');
					$video_desc_info.stop(true,true);
					$video_desc_info.fadeIn('fast');
					$fullscreen.stop(true,true);
					$play.stop(true,true);
					$play.fadeIn('fast');
					$sound.stop(true,true);
					$sound.fadeIn('fast');
					$contact.stop(true,true);
					$contact.fadeIn('fast');
					$video_play.stop(true,true);
					$video_play.fadeIn('fast');
					$video_sound.stop(true,true);
					$video_sound.fadeIn('fast');
					$content_wrapper.stop(true,true);
					$content_wrapper.fadeIn('fast');
					$modal_shadow.stop(true,true);
					$modal_shadow.fadeIn('fast');
					$('#dots').stop(true,true);
					$('#dots').fadeIn('fast');

			$("#fullscreen_icon").removeClass("full_off");
			$("#fullscreen_icon").addClass("full_on");		
		}
	});
		
		
		
/***** PAGES *****/		
		
	
	
$contact.click(function() {
		$('.content').each(
			function() {
				$(this).fadeOut('fast');
			});
		$('#content2').stop().fadeIn('fast');
		$("#close").stop().fadeIn('fast');
				$('#dots div').each(
			function() {
				$(this).removeClass('dot_active');
			});
		$("#dot2").addClass('dot_active');
				window.setTimeout(function() {
		 api.reinitialise();
		},300);
		loadForm();
});
	
$desc_info.click(function() {
		$('.content').each(
			function() {
				$(this).fadeOut('fast');
			});
		$('#content3').stop().fadeIn('fast');
		$("#close").stop().fadeIn('fast');
		$('#dots div').each(
			function() {
				$(this).removeClass('dot_active');
			});
		$("#dot3").addClass('dot_active');
				window.setTimeout(function() {
		 api.reinitialise();
		},300);
});

$("#close").click(function() {
		$('.content').each(
			function() {
				$(this).fadeOut('fast');
			});
		$('#content1').stop().fadeIn('fast');
		$("#close").css('display','none');
				$('#dots div').each(
			function() {
				$(this).removeClass('dot_active');
			});
		$("#dot1").addClass('dot_active');
		window.setTimeout(function() {
		 api.reinitialise();
		},300);
		document.getElementById("comment2").innerHTML="";
});

$("#dot2").click(function() {
		$('.content').each(
			function() {
				$(this).fadeOut('fast');
			});
		$('#content2').stop().fadeIn('fast');
		$("#close").stop().fadeIn('fast');
		$('#dots div').each(
			function() {
				$(this).removeClass('dot_active');
			});
		$("#dot2").addClass('dot_active');
		window.setTimeout(function() {
		 api.reinitialise();
		},300);
		loadForm();
});
	
$("#dot3").click(function() {
		$('.content').each(
			function() {
				$(this).fadeOut('fast');
			});
		$('#content3').stop().fadeIn('fast');
		$("#close").stop().fadeIn('fast');
		$('#dots div').each(
			function() {
				$(this).removeClass('dot_active');
			});
		$("#dot3").addClass('dot_active');
		window.setTimeout(function() {
		 api.reinitialise();
		},300);
});

$("#dot1").click(function() {
		$('.content').each(
			function() {
				$(this).fadeOut('fast');
			});
		$('#content1').stop().fadeIn('fast');
		$("#close").css('display','none');
		$('#dots div').each(
			function() {
				$(this).removeClass('dot_active');
			});
		$("#dot1").addClass('dot_active');
		window.setTimeout(function() {
		 api.reinitialise();
		},300);
		document.getElementById("comment2").innerHTML="";
});

	
		
/***** QTIP *****/



 if(($qtip=$('.qtip')).length)
 {
		$qtip.qtip({
		  position: { target: 'mouse', adjust: { x: 5, y:25} },
			hide: { effect: { type: 'slide', length: 0 } },
			show: { effect: { type: 'slide', length: 0 } },
			style: {	 
      'padding': '6px',
      'background': '#0c0c0c',
      'color': '#c0c0c0',
      'textAlign': 'center',
			width: { min: 100 },
      border: {
         width: 0,
         color: '#333333'
      },
      tip: { 
         corner: 'topLeft', // We declare our corner within the object using the corner sub-option
         color: '#0c0c0c',
         size: {
            x: 15, // Be careful that the x and y values refer to coordinates on screen, not height or width.
            y : 10 // Depending on which corner your tooltip is at, x and y could mean either height or width!
         }
  }, 
      name: 'dark' // Inherit the rest of the attributes from the preset dark style
   }	 
	});
}

			
			
/***** JSCROLLPANE  *****/  
			
			
			
	$('#content1').fadeIn('fast');
   //if(!agentID)
	 //{
  // $('.scroll-pane').css('height',200 +'px');
			var settings = {
		//showArrows: true,
		hijackInternalLinks: true
	};
		
	 var pane = $('.scroll-pane');
	pane.jScrollPane(settings);
	var api = pane.data('jsp');
	//}
	

		
/***** TWEETIE  *****/  



	if($('#ticker').length && twitterUsr) {
	        $('#ticker').twittie({
            username: twitterUsr,
            dateFormat: '%b. %d, %Y',
            template: '<strong class="date">{{date}}</strong> - {{screen_name}} {{tweet}}',
            count: 5,
			apiPath : 'js/tweetie/api/tweet.php'
        }, function () {
            setInterval(function() {
                var item = $('#ticker ul').find('li:first');

                item.animate( {marginTop: '-4em', 'opacity': '0'}, 500, function() {
                    $(this).detach().appendTo('#ticker ul').removeAttr('style');
                });
            }, 4000);
        });
	}

				
	
	/***** ICON HOVER  *****/  
		
		

	$("#scroll_left").css( {backgroundPosition: "0 0"} )
		.mouseover(function(){
			$("#arrow_left").stop().animate({backgroundPosition:"(0 -25px)"}, {duration:400});
			//$left.fadeTo('slow',0.9);
		})
		.mouseout(function(){
			$("#arrow_left").stop().animate({backgroundPosition:"(0 0)"}, {duration:400});
			//$left.fadeTo('slow',0.5);
		});
		
		$("#scroll_right").css( {backgroundPosition: "0 0"} )
		.mouseover(function(){
			$("#arrow_right").stop().animate({backgroundPosition:"(0 -25px)"}, {duration:400});
			//$right.fadeTo('slow',0.9);
		})
		.mouseout(function(){
			$("#arrow_right").stop().animate({backgroundPosition:"(0 0)"}, {duration:400});
			//$right.fadeTo('slow',0.5);
		});
		$("#desc_info").css( {backgroundPosition: "0 0"} )
		.mouseover(function(){
			$("#desc_info_icon").stop().animate({backgroundPosition:"(0 -25px)"}, {duration:400})
		})
		.mouseout(function(){
			$("#desc_info_icon").stop().animate({backgroundPosition:"(0 0)"}, {duration:400})
		});
		
		$("#video_desc_info").css( {backgroundPosition: "0 0"} )
		.mouseover(function(){
			$("#desc_info_icon").stop().animate({backgroundPosition:"(0 -25px)"}, {duration:400})
		})
		.mouseout(function(){
			$("#desc_info_icon").stop().animate({backgroundPosition:"(0 0)"}, {duration:400})
		});
		
				$("#contact").css( {backgroundPosition: "0 0"} )
		.mouseover(function(){
			$("#contact_icon").stop().animate({backgroundPosition:"(0 -25px)"}, {duration:400})
		})
		.mouseout(function(){
			$("#contact_icon").stop().animate({backgroundPosition:"(0 0)"}, {duration:400})
		});
		
		$("#video_desc_info").css( {backgroundPosition: "0 0"} )
		.mouseover(function(){
			$("#desc_info_icon").stop().animate({backgroundPosition:"(0 -25px)"}, {duration:400})
		})
		.mouseout(function(){
			$("#desc_info_icon").stop().animate({backgroundPosition:"(0 0)"}, {duration:400})
		});
	
		$("#fullscreen").css( {backgroundPosition: "0 0"} )
		.mouseover(function(){
			$("#fullscreen_icon").stop().animate({backgroundPosition:"(0 -25px)"}, {duration:400})
		})
		.mouseout(function(){
			$("#fullscreen_icon").stop().animate({backgroundPosition:"(0 0)"}, {duration:400})
		});

		$("#play").css( {backgroundPosition: "0 0"} )
		.mouseover(function(){
			$("#play_icon").stop().animate({backgroundPosition:"(0 -25px)"}, {duration:400})
		})
		.mouseout(function(){
			$("#play_icon").stop().animate({backgroundPosition:"(0 0)"}, {duration:400})
		});

		$("#sound")
		.mouseover(function(){
			$("#sound_icon").stop().animate({backgroundPosition:"(0 -25px)"}, {duration:400})
		})
		.mouseout(function(){
			$("#sound_icon").stop().animate({backgroundPosition:"(0 0)"}, {duration:400})
		});
		
		$("#video_play").css( {backgroundPosition: "0 0"} )
		.mouseover(function(){
			$("#play_icon").stop().animate({backgroundPosition:"(0 -25px)"}, {duration:400})
		})
		.mouseout(function(){
			$("#play_icon").stop().animate({backgroundPosition:"(0 0)"}, {duration:400})
		});

		$("#video_sound").css( {backgroundPosition: "0 0"} )
		.mouseover(function(){
			$("#sound_icon").stop().animate({backgroundPosition:"(0 -25px)"}, {duration:400})
		})
		.mouseout(function(){
			$("#sound_icon").stop().animate({backgroundPosition:"(0 0)"}, {duration:400})
		});


		$("#close")
		.mouseover(function(){
			$("#close").stop().animate({backgroundPosition:"(0 -25px)"}, {duration:400})
		})
		.mouseout(function(){
			$("#close").stop().animate({backgroundPosition:"(0 0)"}, {duration:400})
		});
			
		$(".follow li ul li a img")
		.mouseover(function(){
			$(this).stop().animate({"margin-top":"-20px"}, {duration:400})
		})
		.mouseout(function(){
			$(this).stop().animate({"margin-top":"0px"}, {duration:400})
		});
		
		$(".buy li ul li a img")
		.mouseover(function(){
			$(this).stop().animate({"margin-top":"-20px"}, {duration:400})
		})
		.mouseout(function(){
			$(this).stop().animate({"margin-top":"0px"}, {duration:400})
		});
		
		
	
	/***** VIDEO BACKGROUND  *****/  
	
	
	
	$("#video_play #play_icon").addClass("play_on");
	
	if($("#example_video").length)
	{
		if(videopattern==true) $("#video-pattern").css("visibility","visible");
		if(imgpattern==true) $("#img-pattern").css("visibility","visible");
		var myPlayer;
		var play = true;
		_V_("example_video").ready(function(){
			myPlayer = this;
			var player_width= myPlayer.width()
			var player_height = myPlayer.height();
			if(player_width/player_height>=w_width/w_height)
				myPlayer.size(player_width*w_height/player_height,w_height);
			else
				myPlayer.size(w_width,player_height*w_width/player_width);
				
      myPlayer.play();
			if($("#sound_icon").hasClass("sound_off"))  { myPlayer.volume(0);  }	
			});

	$video_sound.click(function() {
		if($("#sound_icon").hasClass("sound_on"))
		{
			myPlayer.volume(0);
			$("#sound_icon").removeClass("sound_on");
			$("#sound_icon").addClass("sound_off");
		}
		else
		{
			myPlayer.volume(1);
			$("#sound_icon").removeClass("sound_off");
			$("#sound_icon").addClass("sound_on");		
		}
	});
	
			$video_play.click(function() {
		if($("#play_icon").hasClass("play_on"))
		{
			myPlayer.pause();
			play=false;
			$("#play_icon").removeClass("play_on");
			$("#play_icon").addClass("play_off");
		}
		else
		{
			myPlayer.play();
			play=true;
			$("#play_icon").removeClass("play_off");
			$("#play_icon").addClass("play_on");		
		}
		});
	}
	
	
	
	/***** COUNTDOWN  *****/  
	
	
	
	var end_date=new Date("August 30, 2017 00:00:00"); //Set the date for the counter
		
		$("#counter").countdown({
		until:end_date,
		//layout:'<div id="days" class="one_four"><p class="label">{dl}</p><div id="days_num"><img src="img/circle.png" /><p>{dn}</p></div></div><div id="hours" class="one_four"><p class="label">{hl}</p><div id="hours_num"><img src="img/circle.png" /><p>{hn}</p></div></div><div id="minutes" class="one_four"><p class="label">{ml}</p><div id="minutes_num"><img src="img/circle.png" /><p>{mn}</p></div></div><div id="seconds" class="one_four_last"><p class="label">{sl}</p><div id="seconds_num"><img src="img/circle.png" /><p>{sn}</p></div></div>',
		layout:'<div id="days" class="one_four"><p class="label">{dl}</p><p class="digit">{dn}</p></div><div id="hours" class="one_four"><p class="label">{hl}</p><p class="digit">{hn}</p></div><div id="minutes" class="one_four"><p class="label">{ml}</p><p class="digit">{mn}</p></div><div id="seconds" class="one_four_last"><p class="label">{sl}</p><p class="digit">{sn}</p></div>',
		onTick: rotateDiv,
		tickInterval: 1
		});
});


function rotateDiv(period)
{
			//seconds
			$("#seconds_num img").css({ WebkitTransform: 'rotate(' + -6 * parseInt(period[6]) + 'deg)'});  
			$("#seconds_num img").css({ '-moz-transform': 'rotate(' + -6 * parseInt(period[6]) + 'deg)'}); 
			$("#seconds_num img").css({ '-o-transform': 'rotate(' + -6 * parseInt(period[6]) + 'deg)'}); 
			$("#seconds_num img").css({ '-ms-transform': 'rotate(' + -6 * parseInt(period[6]) + 'deg)'}); 
			
			//minutes
			$("#minutes_num img").css({ WebkitTransform: 'rotate(' + -6 * parseInt(period[5]) + 'deg)'});  
			$("#minutes_num img").css({ '-moz-transform': 'rotate(' + -6 * parseInt(period[5]) + 'deg)'}); 
			$("#minutes_num img").css({ '-o-transform': 'rotate(' + -6 * parseInt(period[5]) + 'deg)'}); 
			$("#minutes_num img").css({ '-ms-transform': 'rotate(' + -6 * parseInt(period[5]) + 'deg)'}); 
			
			//hours
			$("#hours_num img").css({ WebkitTransform: 'rotate(' + -15 * parseInt(period[4]) + 'deg)'});  
			$("#hours_num img").css({ '-moz-transform': 'rotate(' + -15 * parseInt(period[4]) + 'deg)'}); 
			$("#hours_num img").css({ '-o-transform': 'rotate(' + -15 * parseInt(period[4]) + 'deg)'}); 
			$("#hours_num img").css({ '-ms-transform': 'rotate(' + -15 * parseInt(period[4]) + 'deg)'}); 
			
			//days
			$("#days_num img").css({ WebkitTransform: 'rotate(' + -1 * parseInt(period[3]) + 'deg)'});  
			$("#days_num img").css({ '-moz-transform': 'rotate(' + -1 * parseInt(period[3]) + 'deg)'});
			$("#days_num img").css({ '-o-transform': 'rotate(' + -1 * parseInt(period[3]) + 'deg)'});
			$("#days_num img").css({ '-ms-transform': 'rotate(' + -1 * parseInt(period[3]) + 'deg)'});
}


/**
 * Background position animation
 * @author Alexander Farkas
 * v. 1.22
 */
 
 
(function($) {
		if(!deviceAgent.match(/(iphone|ipod|ipad|android|blackberry|webos|windows phone)/))
	 {
        
 
        var oldAnim = $.fn.animate;
        $.fn.animate = function(prop){
                if('background-position' in prop){
                        prop.backgroundPosition = prop['background-position'];
                        delete prop['background-position'];
                }
                if('backgroundPosition' in prop){
                        prop.backgroundPosition = '('+ prop.backgroundPosition;
                }
                return oldAnim.apply(this, arguments);
        };
 
        function toArray(strg){
                strg = strg.replace(/left|top/g,'0px');
                strg = strg.replace(/right|bottom/g,'100%');
                strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
                var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
                return [parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]];
        }
 
        $.fx.step. backgroundPosition = function(fx) {
                if (!fx.bgPosReady) {
                        var start = $.css(fx.elem,'backgroundPosition');
                        if(!start){//FF2 no inline-style fallback
                                start = '0px 0px';
                        }
 
                        start = toArray(start);
                        fx.start = [start[0],start[2]];
                        var end = toArray(fx.end);
                        fx.end = [end[0],end[2]];
 
                        fx.unit = [end[1],end[3]];
                        fx.bgPosReady = true;
                }
                //return;
                var nowPosX = [];
                nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
                nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];           
                fx.elem.style.backgroundPosition = nowPosX[0]+' '+nowPosX[1];
 
        };
			}
})(jQuery);
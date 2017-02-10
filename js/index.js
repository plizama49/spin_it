// The Wheel
// $('.alertbulb').addClass('rotateIn').css('display','block')

//set default degree (360*5)
var degree = 4200;
//number of clicks = 0
var clicks = 0;

$(document).ready(function(){
  $('#spinningarea').hide()
	$('#pick6').hide()
	$('#picksixbutton').on('click', showPickSix);
	$('#showspin').on('click', showWheelSpin)
	$('#gospin').on('click', showWheelSpinUpdate)

	$('#home').on('click', showHome)

	/*WHEEL SPIN FUNCTION*/
	$('#spin').click(function(){
		//add 1 every click
		clicks ++;
		/*multiply the degree by number of clicks
	  generate random number between 1 - 360,
    then add to the new degree*/
		var newDegree = degree*clicks;
		var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
		totalDegree = newDegree+extraDegree;
		/*let's make the spin btn to tilt every
		time the edge of the section hits
		the indicator*/
		$('#wheel .sec').each(function(){
			var t = $(this);
			var noY = 0;
			var c = 0;
			var n = 700;
			var interval = setInterval(function () {
				c++;
				if (c === n) {
					clearInterval(interval);
				}
				var aoY = t.offset().top;
				$("#txt").html(aoY);
				console.log(aoY);
				$('#spin').addClass('spin');
				setTimeout(function () {
					$('.alertbulb').addClass('rotateIn').css('display','block')
				}, 6000);
				/*23.7 is the minumum offset number that
				each section can get, in a 30 angle degree.
				So, if the offset reaches 23.7, then we know
				that it has a 30 degree angle and therefore,
				exactly aligned with the spin btn*/
				if(aoY < 23.89){
					console.log('<<<<<<<<');
					$('#spin').addClass('spin');
					setTimeout(function () {
						$('#spin').removeClass('spin');
					}, 100);
				}
			}, 10);
			$('#inner-wheel').css({
				'transform' : 'rotate(' + totalDegree + 'deg)'
			});
			noY = t.offset().top;
		});
	});

	function showPickSix(){
		$('#pick6').show()
		$('#landing, #spinningarea').hide()
	}
	function showWheelSpin(){
		$('#spinningarea').show()
		$('#landing, #pick6').hide()
	}
	function showHome(){
		$('#landing').show()
		$('#spinningarea, #pick6').hide()
	}
	function showWheelSpinUpdate(){
		$('#spinningarea').show()
		$('#landing, #pick6').hide()
		var part1 = $('#location1').val();
		var part2 = $('#location2').val();
		var part3 = $('#location3').val();
		var part4 = $('#location4').val();
		var part5 = $('#location5').val();
		var part6 = $('#location6').val();
		$('#1').text(part1)
		$('#2').text(part2)
		$('#3').text(part3)
		$('#4').text(part4)
		$('#5').text(part5)
		$('#6').text(part6)
	}






});

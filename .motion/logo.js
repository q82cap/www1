'use strict';

(function(){

	// defines some design constants
	const colors = {
		base: '#000',
		vibrant: '#00ffd3',
		contrast: '#fff',
		bright: '#5f5f5f',
		warning: '#f6cc00'
	};

	// creates the curve editor
	const curve = new MojsCurveEditor({
		name: 'custom'
	});

	// creates the timeline
	const timeline = new mojs.Timeline({
		speed: 1.0,
		delay: 0
	});

	// tween base time and delay
	let time = 500;
	let delay = 100;
	let delay2 = 30;

	// defines the base options
	const options = {
		fill: 'transparent',
		stroke: colors.base,
		duration: time,
		easing: mojs.easing.path('M0,100 C50,100 50,67.578125 50,50 C50,32.421875 50,0 100,0'),
		isForce3d: true
	};

	// motio "m" tween
	let motio_m_vertical = new mojs.Html(
		mojs.helpers.extend({
			el: '#motio-m-vertical',
			strokeDasharray: 80,
			strokeDashoffset: { '-80' : 0 }
		}, options)
	);

	let motio_m_arc_1 = new mojs.Html(
		mojs.helpers.extend({
			el: '#motio-m-arc-1',
			strokeDasharray: 98,
			strokeDashoffset: { 98 : 0 },
			delay: delay
		}, options)
	);

	let motio_m_arc_2 = new mojs.Html(
		mojs.helpers.extend({
			el: '#motio-m-arc-2',
			strokeDasharray: 119,
			strokeDashoffset: { 119 : 0 },
			delay: delay * 2
		}, options)
	);

	// motio "o" tween
	let motio_o_first = new mojs.Html(
		mojs.helpers.extend({
			el: '#motio-o-first',
			strokeDasharray: 138,
			strokeDashoffset: { 138 : 0 },
			angleZ: { 90 : 0 },
			transformOrigin: '50% 50%',
			delay: delay * 3
		}, options)
	);

	// motio "t" tween
	let motio_t_horizontal = new mojs.Html(
		mojs.helpers.extend({
			el: '#motio-t-horizontal',
			strokeDasharray: 54,
			strokeDashoffset: { 54 : 0 },
			delay: delay * 4
		}, options)
	);

	let motio_t_vertical = new mojs.Html(
		mojs.helpers.extend({
			el: '#motio-t-vertical',
			strokeDasharray: 113,
			strokeDashoffset: { '-113' : 0 },
			delay: delay * 5
		}, options)
	);

	// motio "i" tween
	let motio_i_vertical = new mojs.Html(
		mojs.helpers.extend({
			el: '#motio-i-vertical',
			strokeDasharray: 40,
			strokeDashoffset: { '-40' : 0 },
			delay: delay * 6
		}, options)
	);

	let motio_i_dot = new mojs.Html(
		mojs.helpers.extend({
			el: '#motio-i-dot',
			r: { 0 : 12.633 },
			delay: delay * 7,
			fill: '#000'
		}, options)
	);

	// motio "o" tween
	let motio_o_last = new mojs.Html(
		mojs.helpers.extend({
			el: '#motio-o-last',
			strokeDasharray: 138,
			strokeDashoffset: { '-138' : 0 },
			angleZ: { '-90' : 0 },
			transformOrigin: '50% 50%',
			delay: delay * 8
		}, options)
	);

	// studio "s" tween
	let studio_s = new mojs.Html(
		mojs.helpers.extend({
			el: '#studio-s',
			strokeDasharray: 56.3,
			strokeDashoffset: { '-56.3' : 0 },
			delay: delay * 7
		}, options)
	);

	// studio "t" tween
	let studio_t_horizontal = new mojs.Html(
		mojs.helpers.extend({
			el: '#studio-t-horizontal',
			strokeDasharray: 12,
			strokeDashoffset: { '12' : 0 },
			delay: delay * 8 + delay2
		}, options)
	);

	let studio_t_vertical = new mojs.Html(
		mojs.helpers.extend({
			el: '#studio-t-vertical',
			strokeDasharray: 34,
			strokeDashoffset: { '34' : 0 },
			delay: delay * 8 + delay2 * 2
		}, options)
	);

	// studio "u" tween
	let studio_u = new mojs.Html(
		mojs.helpers.extend({
			el: '#studio-u',
			strokeDasharray: 50.2,
			strokeDashoffset: { '-50.2' : 0 },
			delay: delay * 8 + delay2 * 3
		}, options)
	);

	let studio_u_vertical = new mojs.Html(
		mojs.helpers.extend({
			el: '#studio-u-vertical',
			strokeDasharray: 21.2,
			strokeDashoffset: { '-21.2' : 0 },
			delay: delay * 8 + delay2 * 4
		}, options)
	);

	// studio "d" tween
	let studio_d = new mojs.Html(
		mojs.helpers.extend({
			el: '#studio-d',
			strokeDasharray: 62,
			strokeDashoffset: { '62' : 0 },
			angleZ: { '-90' : 0 },
			transformOrigin: '50% 50%',
			delay: delay * 8 + delay2 * 5
		}, options)
	);

	let studio_d_vertical = new mojs.Html(
		mojs.helpers.extend({
			el: '#studio-d-vertical',
			strokeDasharray: 33,
			strokeDashoffset: { '33' : 0 },
			delay: delay * 8 + delay2 * 6
		}, options)
	);

	// studio "i" tween
	let studio_i_vertical = new mojs.Html(
		mojs.helpers.extend({
			el: '#studio-i-vertical',
			strokeDasharray: 21.2,
			strokeDashoffset: { '-21.2' : 0 },
			delay: delay * 8 + delay2 * 7
		}, options)
	);

	let studio_i_dot = new mojs.Html(
		mojs.helpers.extend({
			el: '#studio-i-dot',
			r: { 0 : 1.31 },
			stroke: 0,
			fill: colors.base,
			delay: delay * 8 + delay2 * 8
		}, options)
	);

	// studio "o" tween
	let studio_o = new mojs.Html(
		mojs.helpers.extend({
			el: '#studio-o',
			strokeDasharray: 63.3,
			strokeDashoffset: { '-63.3' : 0 },
			angleZ: { '280' : 0 },
			transformOrigin: '50% 50%',
			delay: delay * 8 + delay2 * 9
		}, options)
	);

	// adds shapes to the timeline
	timeline.add(
		motion_m_vertical,
		motion_m_arc_1,
		motion_m_arc_2,
		motion_o_first,
		motio_t_horizontal,
		motio_t_vertical,
		motio_i_vertical,
		motio_i_dot,
		motio_o_last,
		studio_s,
		studio_t_horizontal,
		studio_t_vertical,
		studio_u,
		studio_u_vertical,
		studio_d,
		studio_d_vertical,
		studio_i_vertical,
		studio_i_dot,
		studio_o
	);

	// creates the player
	new MojsPlayer({
		add: timeline,
		isSaveState: true,
		isPlaying: false,
		isRepeat: false,
		isHidden: false
	});
})();
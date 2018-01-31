$( document ).ready(function() {
	// open popup form login
   $( '.btn__login-js' ).click(function(event) {
       event.preventDefault();
       $( '.overlay' ).addClass( 'overlay_active' );
       $( '.popup-form__login' ).addClass( 'popup-form_active' );
   });
	// /open popup form login

	// open popup form forgot
	$( '.popup-form__link-forgot' ).click(function(event) {
		event.preventDefault();
		$( '.popup-form' ).removeClass( 'popup-form_active' );
		$( '.popup-form__forgot' ).addClass( 'popup-form_active' );
	});
	// /open popup form forgot

	// open popup form registr
	$( '.btn__registr-js' ).click(function(event) {
		event.preventDefault();
		$( '.overlay' ).addClass( 'overlay_active' );
		$( '.popup-form__registr' ).addClass( 'popup-form_active' );
	});
	// /open popup form registr

	// close popup form on click close
	$( '.popup-form__close' ).click(function(event) {
	    event.preventDefault();
		$( '.overlay' ).removeClass( 'overlay_active' );
		$( '.popup-form' ).removeClass( 'popup-form_active' );
	});
	// /close popup form on click close

	// close popup contact form on click outside
	$( '.overlay__content' ).click(function(event) {
		if ( $( '.overlay__content' ).has(event.target).length === 0 ){
            $('.overlay').removeClass('overlay_active');
            $('.popup-form').removeClass('popup-form_active');
    	}
	});
	// /close popup contact form on click outside

	// close popup on press Esc
	$(document).keyup(function(event) {
		if ( event.keyCode == 27 ) {
			$( '.overlay' ).removeClass( 'overlay_active' );
			$( '.popup-form' ).removeClass( 'popup-form_active' );
		}
	});
	// /close popup on press Esc

	// tabs
	if (document.querySelector('.tabs')) {
		var btn_tabs_node = document.querySelectorAll('.tabs-nav__li');
		var btn_tabs = [btn_tabs_node.length];
		var tab_items_node = document.querySelectorAll('.tabs-content__tab');
		var tab_items = [tab_items_node.length];

		for (var i = 0; i < btn_tabs_node.length; i++) {
			btn_tabs[i] = btn_tabs_node.item(i);
			tab_items[i] = tab_items_node.item(i);
		}

		btn_tabs[0].classList.add('tabs-nav__li_active');
		tab_items[0].classList.add('tabs-content__tab_active');

		btn_tabs.forEach(function (btn_tab, i, btn_tabs) {
			btn_tab.addEventListener('click', function (event) {
				if (!this.classList.contains('tabs-nav__li_active')) {
					event.preventDefault();
					for (var y = 0; y < btn_tabs.length; y++) {
						if (btn_tabs[y].classList.contains('tabs-nav__li_active')) {
							btn_tabs[y].classList.remove('tabs-nav__li_active');
							$(tab_items[y]).slideUp(250);
							tab_items[y].classList.remove('tabs-content__tab_active');
						}
					}
					btn_tab.classList.add('tabs-nav__li_active');
					$(tab_items[i]).slideDown(250);
					tab_items[i].classList.add('tabs-content__tab_active');
				}
			})
		})
	}
	// /tabs
});


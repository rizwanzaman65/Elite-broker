



//bottom popup script

$(document).ready(function () {
	if (!readCookie('hide')) {
		$('#fixedbottom').show();
	} else {
		$('#fixedbottom').hide();
	}
	$('#closefixedbottom').click(function () {
		$('#fixedbottom').hide();
		createCookie('hide', true, 1)
		return false;
	});
});

function createCookie(cname, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	}
	else var expires = "";
	document.cookie = cname + "=" + value + expires + "; path=/";
}

function readCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}


// Header Search
$(".search-trigger").click(function () {
    $('.search-bar').addClass("show");
});
$(".search-close").click(function () {
    $('.search-bar').removeClass("show");
});

// Tab to Accordions
$(".tab_content").hide();
$(".tab_content:first").show();

/* if in tab mode */
$("ul.tabs li").click(function () {

    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();

    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

});
/* if in drawer mode */
$(".tab_drawer_heading").click(function () {

    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel");
    $("#" + d_activeTab).fadeIn();

    $(".tab_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");

    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
});

/* Extra class "tab_last" to add border to right side of last tab */
$('ul.tabs li').last().addClass("tab_last");

/*$('.dropdown-menu').click(function (e) {
    e.stopPropagation();
});
$(".submenu-arrow").click(function () {
    $(this).parent().toggleClass("show");
    $(".submenu-arrow").not(this).parent().removeClass("show");
});
$(".drp-arrow").click(function () {
    $(this).parent().toggleClass("show");
})*/
//Dropdown
$('.dropdown-menu').click(function (e) {
    e.stopPropagation();
});
$(".drp-arrow").click(function () {
    $(this).parent().toggleClass("show-drop");
})
//Dropdown END
//Dropdown END

//webp-finder
$(window).on('load', function () {
    $("html.no-webp .webp-img-cont").each(function () {
        var isBackgroundImage = $(this).attr('data-background-image');
        isBackgroundImage = (isBackgroundImage == undefined || isBackgroundImage ==
            'undefined' ||
            isBackgroundImage == null || isBackgroundImage == 'null') ? '' :
            isBackgroundImage;
        if (isBackgroundImage != '') {
            $(this).css('background-image', 'url(' + isBackgroundImage + ')');
        }
    });
});
//webp-finder END

//Scroll to Top
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
        $('.scroll-to-top').addClass("in");
    } else {
        $('.scroll-to-top').removeClass("in");
    }
    if ($(this).scrollTop() + $(window).height() === $(document).height()) {
        $(".scroll-to-top").addClass("b-margin");
    } else {
        $('.scroll-to-top').removeClass("b-margin");
    }
});
$('.scroll-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});
//Scroll to Top END

//menu-fix
$(window).scroll(function (e) {
    var scroller_anchor = $(".scroller_anchor").offset().top;
    if ($(this).scrollTop() >= scroller_anchor && $('.scroller_anchor').css('position') != 'fixed') {
        $('.navigation-area').addClass('menu-fix').slideDown();
    } else if ($(this).scrollTop() < scroller_anchor && $('.scroller_anchor').css('position') != 'relative') {
        $('.navigation-area').removeClass('menu-fix');
    }
});
//menu-fix END

// custom wow
$(window).scroll(function () {
    inViewport();
});

$(window).resize(function () {
    inViewport();
});

$(window).load(function () {
    inViewport();
});

function inViewport() {
    $('.custom-wow').each(function () {
        var divPos = $(this).offset().top,
            topOfWindow = $(window).scrollTop();

        if (divPos < topOfWindow + 950) {
            $(this).addClass('animated');
        }
    });
}
// custom wow END

//Carrier
$('.carrier-carousel').owlCarousel({
    loop: true,
    margin: 50,
    autoplay: true,
    autoplayTimeout: 5000,
    nav: true,
    navText: false,
    dots: false,
    autoHeight: true,
    smartSpeed: 500,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1200: {
            items: 6
        },

    }
});
$('.recent_post_slide').owlCarousel({
    loop: true,
    margin: 15,
    autoplay: true,
    autoHeight: true,
    stagePadding: 1,
    autoplayTimeout: 4000,
    nav: false,
    dots: false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1200: {
            items: 3
        },

    }
});


$(document).on('submit', 'form', function (e) {
   event.preventDefault();
   var formData = new FormData($(this)[0]);
   const formDataObj = Object.fromEntries(formData.entries());
   delete formDataObj["g-recaptcha-response"];
   localStorage.setItem("formData", JSON.stringify(formDataObj));
});

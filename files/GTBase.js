
// GT namespace
var GT = GT || {};

GT.wHeight = 0,
GT.wWidth = 0;
GT.domContentLoadedFncList = [];
GT.windowResizeFncList = {};
GT.touchMoveFncList = {};
GT.bodyWidth = 0;
GT.disableDetectScrollUpOrDown = false;
GT.stickyHeaderOffsetTop = 0;
GT.triggerFnListAfterMainLogoLoaded = {};
GT.RecaptchaCallbackFnList = {};
GT.isScreenReader = false;

GT.breakPoints = {
	tablet_lg: 960,
	desktop: 1024,
	desktop_md: 1200,
	desktop_lg: 1300
}

GT.isMobileView = function(){
	return GT.wWidth < GT.breakPoints.tablet_lg;
}
GT.isTabletView = function(){
	return GT.wWidth >= GT.breakPoints.tablet_lg;
}
GT.isDesktopView = function(){
	return GT.wWidth >= GT.breakPoints.desktop;
}
GT.isMediumDesktopView = function(){
	return GT.wWidth >= GT.breakPoints.desktop_md;
}
GT.isLargeDesktopView = function(){
	return GT.wWidth >= GT.breakPoints.desktop_lg;
}

GT.queryStringFocusableElm = 'a[href]:not([hide-on-desktop]):not([tabindex="-1"]), button:not([disabled]):not([hide-on-desktop]):not([tabindex="-1"]), input:not([disabled]):not([type="hidden"]):not([tabindex="-1"]), textarea:not([tabindex="-1"]), select:not([disabled]):not([tabindex="-1"]), details:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])';

GT.isMobile = function(){return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)};
// GT.isMobile = function(){return typeof window.orientation !== 'undefined'};
GT.isIOS = function(){return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream};
GT.iOSversion = function() {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
        var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
        return parseInt(v[1], 10);
    }
};
GT.isMac = function(){return /Mac/.test(navigator.userAgent) && !window.MSStream};
GT.isIE = function(){return /MSIE|Trident/.test(navigator.userAgent)};
GT.isEdge = function(){return /Edge/.test(navigator.userAgent)};
GT.isChrome = function(){return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)};
GT.isSafari = function(){return /safari/i.test(navigator.userAgent) && /Chrome/.test(navigator.userAgent) == false};
GT.isTouchDevice = function(){
    return window.ontouchstart !== undefined;
}

GT.isMobileCached = GT.isMobile();

// Common function to execute a function only once within a 'wait' amount of time
// The purpose of this is to improve performance during frequently triggered events such as scrolling or window resizing
GT.debounce = function (func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


GT.throttleTimerList = [];
GT.throttle = (func, delay = 150) => {
    return function(...args) {

        GT.throttleTimerList.forEach((timerItem) => {
            clearTimeout(timerItem);
        })

        let context = this;        // store the context of the object that owns this function
        let timer = setTimeout(function() {
            func.apply(context,args) // execute the function with the context of the object that owns it
        }, delay);
        GT.throttleTimerList.push(timer)
    }
}

GT.isFunction = function (functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'; 
};
GT.isInteger = function (num) {
    // an alternative to Number.isInteger due to lack of support in IE10, 11
    // num must be a Number, not a string-number
    return (num ^ 0) === num;
};
// For scrollTop, $('body') works for IE and Firefox whereas $('html,body') works for Chrome and Safari
GT.scrollTop = function(top) {
	if (!top) {
		return $('body').scrollTop() || $('html,body').scrollTop();
	}

	var currentScrollTop = window.pageYOffset;
	if (currentScrollTop === top) return;
	$('body').scrollTop(top);
	if (currentScrollTop === window.pageYOffset);
	$('html,body').scrollTop(top);
};

GT.processSearchKeywordBeforeSubmit = function(_searchKeyword, _userPreviousSearches, _MAX_PREVIOUS_SEARCH_ITEMS) {
	
	if(!_searchKeyword) return;
	_searchKeyword = _searchKeyword.replace(/(<([^>]+)>)/gi, "");
	if(_userPreviousSearches == null) _userPreviousSearches = [];
	
	for(let i = 0; i < _userPreviousSearches.length; i++) {
		let _previousSearch = _userPreviousSearches[i];
		if(_searchKeyword.trim().toLowerCase() == _previousSearch.trim().toLowerCase()) {
			_userPreviousSearches.splice(i, 1);
			break;
		}
	}

	if(_userPreviousSearches.length >= _MAX_PREVIOUS_SEARCH_ITEMS) _userPreviousSearches.pop();

	_userPreviousSearches.unshift(_searchKeyword.trim().toLowerCase());

	localStorage.setItem('user_previous_searches', JSON.stringify(_userPreviousSearches));
}

//Prevent horizontal scroll in IOS

// //Prevent horizontal scroll in IOS
// if(GT.isIOS()) {
// 	function keepScrollX(){
// 		if(window.scrollX != 0)
// 			window.scrollTo(0, window.scrollY);
// 	}
// 	// window.addEventListener('scroll', keepScrollX, {passive: true});
// 	// window.addEventListener('touchstart', keepScrollX, {passive: true});
// 	// window.addEventListener('touchmove', keepScrollX, {passive: true});
// 	window.addEventListener('touchend', keepScrollX, {passive: true});
// }

// if(GT.isIOS()) {
// 	let startTouchX,
// 		startTouchY;
// 	document.addEventListener('touchstart', function(e){
// 		startTouchX = e.touches[0].clientX;
// 		startTouchY = e.touches[0].clientY;
// 	}, {passive: true});

// 	document.addEventListener('touchmove', function(e){
// 		let endTouchX = e.changedTouches[0].clientX;
// 		let endTouchY = e.changedTouches[0].clientY;
// 		if(Math.abs(startTouchX - endTouchX) / Math.abs(startTouchY - endTouchY) >= 0.4)
// 			e.preventDefault();

// 	// console.log(Math.abs(startTouchX - endTouchX) / Math.abs(startTouchY - endTouchY));
// 	}, {passive: false});
// }

// if(GT.isIE()) {
// 	let imgListIE = Array.prototype.slice.call(document.querySelectorAll(".banner-block--photograph .fixed-width__banner picture"));
// 	imgListIE = imgListIE.concat(Array.prototype.slice.call(document.querySelectorAll(".event-detail__banner--v2 picture")));
// 	imgListIE.forEach(function(elm) {
// 		let imgElm = elm.querySelector("img");
// 		if(!elm.parentElement.dataset.bgset) {
// 			elm.parentElement.style.background = "url("+ imgElm.src +") no-repeat center center";
// 			elm.parentElement.style.backgroundSize = "cover";
// 			elm.remove();
// 		}
// 	});
// }

// if(GT.isIOS()) {
// 	let startTouchX;
// 	document.addEventListener('touchstart', function(e){
// 		startTouchX = e.touches[0].clientX;
// 	}, {passive: true});

// 	document.addEventListener('touchmove', function(e){
// 		let endTouchX = e.changedTouches[0].clientX;
// 		if (startTouchX !== endTouchX) {
// 			window.scrollTo(0, window.scrollY);
// 		}
// 	}, {passive: false});
// }

//Fix issue in Jquery: Consider marking your touch and wheel event listeners as `passive` to improve your page's scroll performance.
jQuery.event.special.touchstart = {
	setup: function( _, ns, handle ){
	  this.addEventListener("touchstart", handle, { passive: true });
	}
};

(function ($) {
    $.fn.isBeforeElement = function (elem) {
        if (typeof(elem) == "string") elem = $(elem); //just in case of bad input
        return this.add(elem).index(elem) > 0;
    }
})(jQuery);


GT.listboxKeyboardHandle = function(listbox) {
    let list = document.querySelector(listbox); // targets the <ul>
    let first = list.firstChild, // targets the first <li>
        last = list.lastChild; // targets the first <li>
        
    if(!list.dataset.initedKeyboardHandler) {
        document.addEventListener("keydown", function(e){
            switch (e.keyCode) {
				case 38: // if the UP key is pressed
					if (document.activeElement == first){ break; } // stop the script if the focus is on the input or first element
					else { document.activeElement.previousSibling.focus(); } // select the element before the current, and focus it
					break;
				case 40: // if the DOWN key is pressed
					if (document.activeElement == last) { break; } // if the currently focused element is the main input --> focus the first <li>
					else { document.activeElement.nextSibling.focus(); } // target the currently focused element -> <a>, go up a node -> <li>, select the next node, go down a node and focus it
				break;
            }
        })

        list.dataset.initedKeyboardHandler = true;
    }
}

GT.waitForElmRendering = function(selector, timeout) {
	return new Promise(function(resolve) {
		if (document.querySelector(selector)) {
			return resolve(document.querySelector(selector));
		}

		if(!timeout) {
			timeout = 15000;
		}

		if(timeout) {
			setTimeout(function(){
				if(observer)
					observer.disconnect();
			}, timeout)
		}

		let observer = new MutationObserver(function() {
			if (document.querySelector(selector)) {
				resolve(document.querySelector(selector));
				observer.disconnect();
			}
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true
		});
	});
}

GT.checkElmVisible = function (selector, callback, recheck, threshold) {
	const observer = new IntersectionObserver((entries) => {
		for (const entry of entries) {
			if (entry.isIntersecting) {
				callback(entry);
				if(!recheck)
					observer.unobserve(entry.target);
			}
		}
	}, {
		root: null,
		rootMargin: "0px",
		threshold: threshold || 0.5, // set offset 0.1 means trigger if atleast 10% of element in viewport
	});

	if(typeof selector == "object")
		observer.observe(selector);
	else
		document.querySelectorAll(selector).forEach(function (item) {
			observer.observe(item);
		})
}

GT.lockScrollBehindOverlay = function(queryStr){
	let _overlay = document.querySelector(queryStr),
		_clientY = null;

	if(_overlay.dataset.lockedScroll)
		return;

	_overlay.style.webkitOverflowScrolling = "touch";
	_overlay.dataset.lockedScroll = true;
	
	_overlay.addEventListener('touchstart', function (event) {
		if (event.targetTouches.length === 1) {
			// detect single touch
			_clientY = event.targetTouches[0].clientY;
		}
	}, false);
	
	_overlay.addEventListener('touchmove', function (event) {
		if (event.targetTouches.length === 1) {
			// detect single touch
			disableRubberBand(event);
		}
	}, false);
	
	function disableRubberBand(event) {
		let clientY = event.targetTouches[0].clientY - _clientY;
	
		if (_overlay.scrollTop === 0 && clientY > 0) {
			// element is at the top of its scroll
			event.preventDefault();
		}
	
		if (isOverlayTotallyScrolled() && clientY < 0) {
			//element is at the top of its scroll
			event.preventDefault();
		}
	}
	
	function isOverlayTotallyScrolled() {
		// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
		return _overlay.scrollHeight - _overlay.scrollTop <= _overlay.clientHeight;
	}
}

//===========Trigger window.onscroll Evt
GT.listFunctionsTriggerInScrollEvent = {};
GT.lastScrollTop = 0;
GT.isScrollingUp = false;

//waiting for animation is complete
GT.preventHeaderFromFlickeringWhileBodyHeightIsChanging = function(time){
	GT.disableDetectScrollUpOrDown = true;
	setTimeout(function(){
		GT.disableDetectScrollUpOrDown = false;
	}, time ? time : 500)
}

GT.preventOpeningMenu = (timeout) => {
	document.firstElementChild.classList.add("animating");
	setTimeout(() => {
		document.firstElementChild.classList.remove("animating");
	}, timeout ? timeout : 600);
}

window.addEventListener('scroll', function(e) {
	if(GT.isNav2 && !GT.disableDetectScrollUpOrDown) {
		if(document.firstElementChild.classList.contains("global-reach--opening"))
			return;

		if(GT.headerElm && !GT.stickyHeaderOffsetTop)
			GT.stickyHeaderOffsetTop = GT.headerElm.firstElementChild.offsetHeight - (GT.isMobileView() ? 64 : 88);
	}

    const st = window.pageYOffset || document.documentElement.scrollTop;
	let isScrollDown = false;

	if(!GT.disableDetectScrollUpOrDown) {
		if(st + GT.wHeight < document.body.scrollHeight - 50) {
			if (st > GT.lastScrollTop){
			// downscroll code
				isScrollDown = true;
				document.body.classList.remove("scroll-up");
				document.body.classList.add("scroll-down");
				GT.isScrollingUp = false;
				// if(GT.isNav2 && st >= 0) {
				// 	if(st < GT.stickyHeaderOffsetTop) {
				// 		// window.scrollTo(0, GT.stickyHeaderOffsetTop + 100);
				// 	}
				// }
				
			} else {
			// upscroll code
				document.body.classList.remove("scroll-down");
				document.body.classList.add("scroll-up");
				GT.isScrollingUp = true;
			}
		}

		if(st > 10) {
			document.body.classList.add("scrolling");
		} else {
			document.body.classList.remove("scrolling");
		}
    
		GT.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
	}

	Object.keys(GT.listFunctionsTriggerInScrollEvent).forEach(function(k) {
		GT.listFunctionsTriggerInScrollEvent[k] && GT.listFunctionsTriggerInScrollEvent[k](e, isScrollDown);
	})
}, {passive: true})


CallbackGReCaptchaInited = function(){
	Object.keys(GT.RecaptchaCallbackFnList).forEach(function(key){
		let recaptchaItem = GT.RecaptchaCallbackFnList[key];
		if(recaptchaItem && !recaptchaItem.isExecuted) {
			recaptchaItem.fnc();
			recaptchaItem.isExecuted = true;
		}
	})
}

GT.observeElement = function(element, property, callback, delay = 0) {
    let elementPrototype = Object.getPrototypeOf(element);
    if (elementPrototype.hasOwnProperty(property)) {
        let descriptor = Object.getOwnPropertyDescriptor(elementPrototype, property);
        Object.defineProperty(element, property, {
            get: function() {
                return descriptor.get.apply(this, arguments);
            },
            set: function () {
                let oldValue = this[property];
                descriptor.set.apply(this, arguments);
                let newValue = this[property];
                if (typeof callback == "function") {
                    setTimeout(callback.bind(this, oldValue, newValue), delay);
                }
                return newValue;
            }
        });
    }
}

GT.canFocus = function (element) {
	return element.closest(GT.queryStringFocusableElm);
}

GT.getListFocusableElms = function (element) {
	let arrElms = element.querySelectorAll(GT.queryStringFocusableElm),
		outputLst = [];

	for (const element of arrElms) {
		if (GT.isElementVisible(element)) {
			outputLst.push(element);
		}
	}
	return outputLst;
}


GT.getElementOffset = function(element){
	let offsetLeft = 0;
	let offsetTop  = 0;
	
	while (element)
	{
		offsetLeft += element.offsetLeft;
		offsetTop  += element.offsetTop;
	
		element = element.offsetParent;
	}
	
	return {
		top: offsetTop,
		left: offsetLeft
	};
}

// Avoid Reflow / Performance issue. Instead of using the innerWidth/offsetWidth, use this one
// return {x, y, top, left, bottom, height, width}
GT.getElementBounds = (elm) => {
    return new Promise((resolveInner) => {
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                resolveInner(entry.boundingClientRect);
            }
            // Disconnect the observer to stop from running in the background
            observer.disconnect();
        });
        observer.observe(elm);
    })
}

GT.firstFocusableElmKeyHandler = function(e) {
	if(e.key == "Tab" && !e.shiftKey) {
		e.preventDefault();
		GT.firstFocusableElm.focus();
	}
}

GT.lastFocusableElmKeyHandler = function(e) {
	if(e.key == "Tab" && e.shiftKey) {
		e.preventDefault();
		GT.lastFocusableElm.focus();
	}
}

GT.loopFocus = function(targetPanel, listFocusableElms, onlyLoopFocus) {
	let tmpListFocusableElms = listFocusableElms ? listFocusableElms : GT.getListFocusableElms(targetPanel),
		tmpListFocusableElmsLength = tmpListFocusableElms.length;

	if(tmpListFocusableElmsLength) {
		tmpListFocusableElms.forEach((item, indx) => {
			tmpListFocusableElms[indx]?.removeEventListener("keydown", GT.firstFocusableElmKeyHandler);
			tmpListFocusableElms[indx]?.removeEventListener("keydown", GT.lastFocusableElmKeyHandler);
		})

		GT.firstFocusableElm = tmpListFocusableElms[0],
		GT.lastFocusableElm = tmpListFocusableElmsLength > 1 ? tmpListFocusableElms[tmpListFocusableElmsLength - 1] : GT.firstFocusableElm;
		
		if(!onlyLoopFocus)
			GT.firstFocusableElm.focus();

		if(GT.firstFocusableElm) {
			GT.lastFocusableElm.addEventListener("keydown", GT.firstFocusableElmKeyHandler);
			GT.firstFocusableElm.addEventListener("keydown", GT.lastFocusableElmKeyHandler);
		}

		return {
			firstFocusableElm: GT.firstFocusableElm,
			lastFocusableElm: GT.lastFocusableElm
		}
	}
}

GT.pageAccessedByReload = () => {
	return (
	(window.performance.navigation && window.performance.navigation.type === 1) ||
	  window.performance
		.getEntriesByType('navigation')
		.map((nav) => nav.type)
		.includes('reload')
)};

GT.domContentLoadedFncList.push(() => {
	window.addEventListener("keydown", e => {
		if(e.key == "Tab") {
			GT.isScreenReader = true;
		}
	})

	if(GT.isMobileView())
		GT.isScreenReader = true;

	//This solution cannot resolve the case: cursor in the middle page after loading page completely
	// document.querySelector(".desktop-logo")?.addEventListener("focus", () => {
	// 	GT.isScreenReader = true;
	// 	alert("OK");
	// })

	//isReload
	if(GT.pageAccessedByReload()) {
		if(window.scrollY >= 10) document.body.classList.add("scrolling");
		GT.lastScrollTop = window.scrollY;
		console.log("Access by reload function")
	}
})

GT.clickEvt = (elm, callback) => {
	["click", "keydown"].forEach(evt => {
		elm.addEventListener(evt, (e) => {
			if(e.type == "click" || e.key == "Enter") {
				callback.call(e.target || e.currentTarget, e);
			}
		})
	})
}

GT.isElementVisible = (element, forceInMainPage) => {
	//Element.checkVisibility() => still not support Safari
	//https://caniuse.com/mdn-api_element_checkvisibility
	let isVisible;
	if(element.checkVisibility) 
		isVisible = element.checkVisibility({checkOpacity: true, checkVisibilityCSS: true}) && element.offsetWidth > 0 && element.offsetHeight > 0;
	else {
		const style = window.getComputedStyle(element);
		isVisible = style.visibility !== 'hidden' && style.display !== 'none' && style.opacity != 0 && element.offsetWidth > 0 && element.offsetHeight > 0;
	}

	let isInMainPage = true;
	if(forceInMainPage) {
		const computed = element.getBoundingClientRect();
		if(computed.left < 0 || computed.right < 0)
			isInMainPage = false;
	}

	return isVisible && isInMainPage;
}

GT.getFirstFocusableVisible = () => {
	function getFirstFocusableVisibleElement() {
		const focusableElements = document.querySelector(".gt-wrapper").querySelectorAll(GT.queryStringFocusableElm);
		for (const element of focusableElements) {
			if (GT.isElementVisible(element, true)) {
				return element;
			}
		}
		return null;
	}
	
	return getFirstFocusableVisibleElement();
}

GT.setInertWhileOpeningDialog = function(isLock) {
	let wrapperElm = document.querySelector(".gt-wrapper");
	let shortcutElm = document.querySelector(".shortcuts");
	if(isLock) {
		GT.headerElm?.setAttribute("inert", true);
		wrapperElm?.setAttribute("inert", true);
		shortcutElm?.setAttribute("inert", true);
	} else {
		GT.headerElm?.removeAttribute("inert");
		wrapperElm?.removeAttribute("inert");
		shortcutElm?.removeAttribute("inert");
	}
}

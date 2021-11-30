(function( window, undefined ) {

var
	// Refer�ncia � raiz jQuery(document)
	rootjQuery,

	// Usa o documento correto de acordo com a chamada (sandbox)
	document = window.document,
	location = window.location,
	core_version = "a.0.0",
	jQuery = function( selector, context ) {
		// O objeto jQuery � realmente o construtor init 'melhorado'
		return new jQuery.fn.init( selector, context, rootjQuery );
		}
// Prot�tipo do objeto -IN�CIO
jQuery.fn = jQuery.prototype = {
	// Vers�o corrente do jQuery
	jquery: core_version,
	seletor: null,
	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;
		this.seletor = selector;
		// Manipula: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
			}
		},
	size: function() {
		return this.length;
		},
	version: function() {
		return this.jquery;
		},
	sele: function() {
		return this.seletort;
		}

	}
// Prot�tipo do objeto -FIM	
window.jQuery = window.$ = jQuery;
jQuery.fn.init.prototype = jQuery.fn;

})( window );

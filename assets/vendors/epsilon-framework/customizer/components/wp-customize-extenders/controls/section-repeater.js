/**
 * Epsilon Section Repeater Constructor
 */
wp.customize.controlConstructor[ 'epsilon-section-repeater' ] = wp.customize.Control.extend( {
  ready: function() {
    var control = this,
        settingValue = this.params.value,
        newSection, limit, temp;

    /**
     * We need to move this element to the bottom of the page so it renders properly
     */
    jQuery( '#sections-left-' + this.params.id ).appendTo( jQuery( '.wp-full-overlay' ) );

    /**
     * Initiate search functionality
     */
    this.initSearch( control, jQuery( '#sections-left-' + this.params.id ) );
    this.settingField = this.container.find( '[data-customize-setting-link]' ).first();
    this.repeaterContainer = this.container.find( '.repeater-sections' ).first();
    this.currentIndex = 0;
    /**
     * Start saving rows
     * @type {Array}
     */
    this.sections = [];
    /**
     * Setup Limit
     *
     * @type {boolean}
     */
    if ( ! _.isUndefined( this.params.choices.limit ) ) {
      limit = ( 0 >= this.params.choices.limit ) ? false : parseInt( this.params.choices.limit );
    }
    /**
     * Set an initial value to the repeater field
     */
    EpsilonFramework.sectionRepeater.base.setValue( this, [], false );

    /**
     * Add new repeater section handler
     */
    EpsilonFramework.sectionRepeater.base.handleAddButton( this );

    /**
     * Addition of sections
     */
    jQuery( '#sections-left-' + this.params.id ).on( 'click', '.epsilon-section', function( e ) {
      e.preventDefault();
      if ( ! limit || control.currentIndex < limit ) {
        newSection = EpsilonFramework.sectionRepeater.base.add( control, jQuery( this ).attr( 'data-id' ) );
        /**
         * init range sliders, color pickers
         */
        EpsilonFramework.rangeSliders.init( newSection.container );
        EpsilonFramework.colorPickers.init( newSection.container.find( '.epsilon-color-picker' ) );
        EpsilonFramework.iconPickers.init( newSection, true );
        EpsilonFramework.textEditor.init( newSection.container );
      } else {
        jQuery( control.selector + ' .limit' ).addClass( 'highlight' );
      }
    } );

    /**
     * 3. Image controls - Upload
     */
    this.container.on( 'click keypress', '.epsilon-controller-image-container .image-upload-button', function( e ) {
      e.preventDefault();

      if ( wp.customize.utils.isKeydownButNotEnterEvent( e ) ) {
        return;
      }
      temp = jQuery( this ).parents( '.epsilon-controller-image-container' );

      EpsilonFramework.sectionRepeater.base.handleImageUpload( control, temp );
    } );

    /**
     * 4 Image Controls - Removal
     */
    this.container.on( 'click keypress', '.epsilon-controller-image-container .image-upload-remove-button', function( e ) {
      e.preventDefault();

      if ( wp.customize.utils.isKeydownButNotEnterEvent( e ) ) {
        return;
      }

      temp = jQuery( this ).parents( '.epsilon-controller-image-container' );
      EpsilonFramework.sectionRepeater.base.handleImageRemoval( control, temp );
    } );

    /**
     * If we have saved rows, we need to display them
     */
    if ( settingValue.length ) {
      _.each( settingValue, function( subValue ) {
        newSection = EpsilonFramework.sectionRepeater.base.add( control, subValue[ 'type' ], subValue );
        EpsilonFramework.rangeSliders.init( newSection.container );
        EpsilonFramework.colorPickers.init( newSection.container.find( '.epsilon-color-picker' ) );
        EpsilonFramework.iconPickers.init( newSection, true );
        EpsilonFramework.textEditor.init( newSection.container );
      } );
    }

    /**
     * After display fields, clean the setting
     */
    EpsilonFramework.sectionRepeater.base.setValue( this, settingValue, true, true );

    /**
     * Add sortable functionality
     */
    this.repeaterContainer.sortable( {
      handle: '.repeater-row-header',
      axis: 'y',
      update: function() {
        EpsilonFramework.sectionRepeater.base.sort( control );
      }
    } );
  },
  /**
   * Search functionality in the sections library
   *
   * @param instance
   * @param selector
   */
  initSearch: function( instance, selector ) {
    var input = selector.find( '.sections-search-input' ),
        val, collection, id,
        self = this;

    input.on( 'keyup change', _.debounce( function( e ) {
      val = input.val().toLowerCase();
      collection = selector.find( '.epsilon-section' );

      jQuery.each( collection, function() {
        id = jQuery( this ).attr( 'data-id' ).toLowerCase();
        jQuery( this )[ id.indexOf( val ) !== - 1 ? 'show' : 'hide' ]();
      } );

    }, 1000 ) );
  },

} );
CKEDITOR.plugins.add( 'blankify',
{
  init: function( editor )
  {

    var style = new CKEDITOR.style({
      element : 'span', 
      attributes : { 'class' : 'blankify',
                      'id': Math.round(new Date().getTime() + (Math.random() * 100)) 
                    },
      styles: {'background-color' : '#A8A8A8'}
    });

    editor.attachStyleStateChange( style, function( state ) {
      editor.getCommand( 'insertBlankify' ).setState( state );
    } );

    editor.addCommand( 'insertBlankify', new CKEDITOR.styleCommand(style,
      {
        exec : function( editor )
          {  
            alert('hello');
          }
      }) );
    editor.ui.addButton( 'blankify',
    {
      label: 'blankify text',
      command: 'insertBlankify',
      icon: this.path + 'images/blankify.png'
    } );
  }
} );
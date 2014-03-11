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
    alert('hi');
    var cf = [
      'b',
       'i',
      ['span' , function(el){
        alert('hi');
        el.styles['id'] = Math.round(new Date().getTime() + (Math.random() * 100));
        return el.styles; 
      }]
    ];

    editor.addCommand( 'insertBlankify', new CKEDITOR.styleCommand(style,
      {
        contentForms: cf
      }) );
    editor.ui.addButton( 'blankify',
    {
      label: 'blankify text',
      command: 'insertBlankify',
      icon: this.path + 'images/blankify.png'
    } );
  }
} );
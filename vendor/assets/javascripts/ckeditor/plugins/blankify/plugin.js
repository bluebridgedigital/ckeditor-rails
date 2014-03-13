CKEDITOR.plugins.add( 'blankify',
{
  init: function( editor )
  {
    // function initBlankify(editor){
    //   var style = new CKEDITOR.style({
    //     element : 'span', 
    //     attributes : { 'class' : 'blankify',
    //                     'id': Math.round(new Date().getTime() + (Math.random() * 100)) 
    //                   },
    //     styles: {'background-color' : '#A8A8A8'}
    //   });

    //   editor.attachStyleStateChange( style, function( state ) {
    //     editor.getCommand( 'insertBlankify' ).setState( state );
    //   } );

    //   editor.addCommand( 'insertBlankify', new CKEDITOR.styleCommand(style,
    //     {
    //     }) );
    // }
    // initBlankify(editor);

    // editor.on('afterCommandExec', handleAfterCommandExec);
    // function handleAfterCommandExec(event)
    // {
    //   var commandName = event.data.name;

    //   // For 'bold' commmand
    //   if (commandName == 'insertBlankify'){
    //    //event.editor.getCommand('insertBlankify').disable();
    //    //initBlankify(event.editor);
    //    event.data.command.style = new CKEDITOR.style({
    //     element : 'span', 
    //     attributes : { 'class' : 'blankify',
    //                     'id': Math.round(new Date().getTime() + (Math.random() * 100)) 
    //                   },
    //     styles: {'background-color' : '#A8A8A8'}

    //   });

    //    event.editor.attachStyleStateChange(event.data.command.style, function(state){
    //       event.editor.getCommand('insertBlankify').setState(state);
    //     });

    //   }
    // }

    // ----------------------------------
    editor.addCommand( 'insertBlankify', {
        exec: function( editor ) {
          var style = new CKEDITOR.style({
          element : 'span', 
          attributes : { 'class' : 'blankify',
                          'id': Math.round(new Date().getTime() + (Math.random() * 100)) 
                        },
          styles: {'background-color' : '#A8A8A8'}
        });

          var selection = editor.document.getSelection();
          var ele = selection.getStartElement();
          if(style.checkElementMatch(ele,false)){
            //alert('with false');
            editor.removeStyle(style);
            var eles = editor.document.getElementsByTag('span');
            for(var i=0; i<eles.count(); i++){
              var node = eles.getItem(i);
              if(!node.hasAttribute('id'))
                node.setAttribute('id', Math.round(new Date().getTime() + (Math.random() * 100)))
            }

          }
          else{ 
            editor.applyStyle(style);
          }

          var body = editor.document.getBody().getHtml();
          body.replace('</span><span class="blankify".*?>', '');
          editor.document.getBody.setHtml(body);
          var z=3;


        }
    } );
    editor.ui.addButton( 'blankify',
    {
      label: 'blankify text',
      command: 'insertBlankify',
      icon: this.path + 'images/blankify.png'
    } );
  }
} );
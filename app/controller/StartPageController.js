Ext.define('GK.controller.StartPageController', {
    extend : 'Ext.app.Controller',
    config : {
        refs : {
        },
     
        control : {
         
            'button[action=back]' : {
                tap : function(){
                    LR.BackButton = true;
                    LR.Viewport.setActiveItem(0)
                    window.scrollTo(0, 1);
                    this.redirectTo('') 
                    window.scrollTo(0, 1);
                }
            },
            'startpagelist' : {
                select : 'menuTap'
            }
       
        }
    
    },
    
    menuTap : function(comp, record){
          this.redirectTo(record.data.menuItem)
    },
    
    launch : function(){
        var backButton =  Ext.ComponentQuery.query('[action=back]')[0]
        if(backButton){
            backButton.on('tap', function(){
                alert('Back')
            })
        }
    }
   

})


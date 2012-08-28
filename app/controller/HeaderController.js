Ext.define('GK.controller.HeaderController', {
    extend : 'Ext.app.Controller',
    config : {
        refs : {
        },
        routes : {     
            '/results/:id/' : 'showResults'
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
            }
       
        }
    
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


Ext.define('GK.controller.RoutingController', {
    extend : 'Ext.app.Controller',
    config : {
        refs : {
            resultPage : 'results toolbar',
            textField : 'textfield[name=startno]'
        },
        routes : {     
            
            '' : 'showStartPage',
            'sponsors' : 'showSponsors'
        }, 
        control : {
         
            '[action=back]' : {
                tap : function(){
                    window.scrollTo(0, 1);
                    window.scrollTo(0, 1);
                    history.back()
                }
            }
       
        }
    
    },
     showStartPage : function(){
        GK.Viewport.setActiveItem({xtype : 'startpage'})
    },
    showSponsors : function(){
        GK.Viewport.setActiveItem({xtype : 'sponsors'})
    },
    init : function(){
   // this.id = null;
        
    }
   
    
 
    
   

})


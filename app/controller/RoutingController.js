Ext.define('GK.controller.RoutingController', {
    extend : 'Ext.app.Controller',
    config : {
        refs : {
            resultPage : 'results toolbar',
            textField : 'textfield[name=startno]'
        },
        routes : {     
            
            '' : 'showStartPage',
            'sponsors/' : 'showSponsors',
            'speakers/' : 'showSpeakers',
            'news/' : 'showNews'
        }, 
        control : {
         
            '[action=back]' : {
                tap : function(){
                    history.back()
                    window.scrollTo(0, 1);
                }
            }
       
        }
    
    },
    showStartPage : function(){
        GK.Viewport.setActiveItem(0)
    },
    showSponsors : function(){
        GK.Viewport.setActiveItem(1)
        window.scrollTo(0, 1);
    },
    showNews : function(){
        window.scrollTo(0, 1);
        GK.Viewport.setActiveItem(2)
    },    
    showSpeakers : function(){
        GK.Viewport.setActiveItem(3)
    },
    
    init : function(){
    // this.id = null;
        
    }
   
    
 
    
   

})


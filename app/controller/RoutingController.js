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
            'news/' : 'showNews',
           // 'tickets/' : 'redirectToTickets',
            'party/' : 'showParty',
            'about/': 'showAbout',
            'workshops/': 'showWorkshops',
            'schedule/' : 'showSchedule'
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
    },
    showNews : function(){
        GK.Viewport.setActiveItem(2)
    },    
    showSpeakers : function(){
        GK.Viewport.setActiveItem(3)
    },
   
    showParty : function(){
        GK.Viewport.setActiveItem(6)
    },
    showAbout : function(){
        GK.Viewport.setActiveItem(7)
    },
     showWorkshops : function(){
        
        GK.Viewport.setActiveItem(8)
    },
      showSchedule : function(){
        GK.Viewport.setActiveItem(9)
    },
    
    
    init : function(){
    // this.id = null;
        
    }
   
    
 
    
   

})


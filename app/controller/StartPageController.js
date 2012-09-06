Ext.define('GK.controller.StartPageController', {
    extend : 'Ext.app.Controller',
    config : {
        refs : {
        },
     
        control : {
         
            
            'startpagelist' : {
                itemtap : 'menuTap'
            }
        }
    },
    menuTap : function(comp, index, target, record){
     window.scrollTo(0, 1);
        if(record.data.menuItem == 'schedule')
            alert("Informacija ruošiama")
        else if(record.data.menuItem == 'tickets')
             window.location = "http://www.bilietupasaulis.lt/lit/bilietai/visi/?concert=110509";
        else if(record.data.menuItem == 'facebook')
             window.location = "http://www.facebook.com/takeme.lt";
        
        
        else  
            this.redirectTo(record.data.menuItem + '/')
         
    }
    
     
   

})


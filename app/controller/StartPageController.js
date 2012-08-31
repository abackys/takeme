Ext.define('GK.controller.StartPageController', {
    extend : 'Ext.app.Controller',
    config : {
        refs : {
        },
     
        control : {
         
            
            'startpagelist' : {
                select : 'menuTap'
            }
        }
    },
    menuTap : function(comp, record){
          this.redirectTo(record.data.menuItem + '/')
    }
     
   

})


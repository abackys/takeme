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
          this.redirectTo(record.data.menuItem + '/')
    }
     
   

})


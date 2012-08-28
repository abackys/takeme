Ext.define('GK.controller.NewsController', {
    extend : 'Ext.app.Controller',
    config : {
        refs : {
        //    newListItem : 'newslist'
        },
      
        control : {
            'newslist' : {
                itemtap : 'onItemTap'
            }
       
        }
    
    },
    init : function(){
     
     // Using for ItemTap CSS
    var oldSelectedItem = null;

    },
    
    onItemTap : function(list, index, comp, record){
      this.ItemTapCSS(comp, this.oldSelectedItem )
      this.oldSelectedItem = comp; 
    },
    
    
         // Using for ItemTap CSS'ing'
    ItemTapCSS : function(newComp, oldComp){
        
        if(oldComp)
           this.oldSelectedItem.removeCls('news-list-item-selected')
        newComp.addCls('news-list-item-selected')
       
        
    }
    
   

})


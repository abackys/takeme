Ext.define('GK.controller.NewsController', {
    extend : 'Ext.app.Controller',
    config : {
        refs : {
            details : 'details'
        },
      
        control : {
            'newslist' : {
                itemtap : 'newsItemTap'
            }

        },
        routes : {     
            'news/:id' : 'showDetails'
        }
    },
    init : function(){
     
     // Using for ItemTap CSS
    this.oldSelectedItem = null;

    },
    newsItemTap : function(list, index, comp, record){
       this.ItemTapCSS(comp, this.oldSelectedItem )
      this.oldSelectedItem = comp; 
       this.redirectTo('news/'+ record.data.xindex)
    },
         // Using for ItemTap CSS'ing'
    ItemTapCSS : function(newComp, oldComp){
        
        if(oldComp){
           oldComp.removeCls('my-list-item-selected')
           
       }
        newComp.addCls('my-list-item-selected')
       
        
    },
    showDetails : function(id){
         var record = Ext.getStore('News').getAt(id-1)
         console.log(record)
        if(record){
            record = record.data
                     

        var comp = this.getDetails().getItems();
        console.log(comp)
        var img = comp.items[0]
        var title = comp.items[2]
        var text = comp.items[3]

        title.setData({ title : record.newsTitle})
        text.setData({ main_text : record.newsText})
        img.setData({promo_img :record.promo_img})
        GK.Viewport.setActiveItem(5)
    }
        else{
            // Debug
            GK.Viewport.setActiveItem(4)
    
    //        GK.Viewport.setActiveItem(2)
         
         }
      
         
    }
   
    
   

})


Ext.define('GK.controller.NewsController', {
    extend : 'Ext.app.Controller',
    config : {
        refs : {
            details : 'details',
            detailspage : 'detailspage'
        },
      
        control : {
            'newslist' : {
                itemtap : 'newsItemTap'
            },
             'scheduleworkshopslist' : {
                itemtap : 'newsItemTap'
            }
            
            


        },
        routes : {     
            'news/:id' : 'showNewsDetails',
            'workshops/:id' : 'showNewsDetails'
        }
    },
    init : function(){
     
        // Using for ItemTap CSS
        this.oldSelectedItem = null;

    },
    newsItemTap : function(list, index, comp, record){
        
       console.log(list._itemId)
        this.ItemTapCSS(comp, this.oldSelectedItem )
        this.oldSelectedItem = comp; 
        this.redirectTo(list._itemId +'/'+ record.data.xindex)
    },
  
        
    // Using for ItemTap CSS'ing'
    ItemTapCSS : function(newComp, oldComp){
        
        if(oldComp){
            oldComp.removeCls('my-list-item-selected')
           
        }
        newComp.addCls('my-list-item-selected')
       
        
    },
 
    showNewsDetails : function(id){
        var url = window.location.href;
        var storeName = url.substring(url.indexOf('#') + 1, url.indexOf('/', url.indexOf('#')))
        storeName = storeName.replace(storeName.charAt(0),storeName.charAt(0).toUpperCase())
        var store = Ext.getStore(storeName)  
        if(store.getAt(id-1))
        {
            this.updateNewsData(store.getAt(id-1).data)
        }
        else   {
            Ext.getStore(storeName).load({
                callback: function(records, operation, success) {
                    this.updateNewsData(records[id-1].data)
                },
                scope: this
            });
        }
  
         
    },
    updateNewsData : function(record){
        var comp = this.getDetails();
        // NEeed to see how to change the title
        
        this.getDetailspage().down('header').setTitle(record.newsTitle)
        var img = comp.down('#promo_img')
        var title = comp.down('#details_title')
        var text = comp.down('#details_text') 
        title.setData({
            title : record.newsTitle
            })
        text.setData({
            main_text : record.newsText
            })
        img.setHtml('<img src="'+record.promo_img+'">')
        GK.Viewport.setActiveItem(5)

    }
    
   
    
   

})


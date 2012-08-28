Ext.define('GK.store.NewsStore', {
    extend: 'Ext.data.Store',
   
    config: {
        fields : ['text', 'texta','url'],
          data: [
        { text: 'Menu Item aa1', texta: 'Menu Item aa1', url : 'images/news_thumb.jpg' },
        { text: 'Menu Item 2', texta: 'Menu Item aa1', url : 'images/news_thumb.jpg' },
        { text: 'Menu Item 3', texta: 'Menu Item aa1', url : 'images/news_thumb.jpg' },
        { text: 'Menu Item 4', texta: 'Menu Item aa1', url : 'images/news_thumb.jpg' },
        { text: 'Menu Iaaatem 1', texta: 'Menu Item aa1', url : 'images/news_thumb.jpg' },
        { text: 'Menu Itqqqem 2', texta: 'Menu Item aa1', url : 'images/news_thumb.jpg' },
        { text: 'Menu Item lorem 3', texta: 'Menu Item aa1', url : 'images/news_thumb.jpg' },
        { text: 'Menu Item Burem 4', texta: 'Menu Item aa1', url : 'images/news_thumb.jpg' }
    ]
       // autoLoad : true,
        
            
        }
      
         
    }
    
 
);
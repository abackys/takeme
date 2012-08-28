Ext.define('GK.view.NewsView', {
    extend: 'Ext.dataview.DataView',
    xtype  : 'news',
      requires: [
        'GK.view.news.NewsListItem'
    ],
 
   config : {
        layout : 'vbox',
        items : [ 
        
        {
            xtype : 'header',
            
         //   flex : 1
        },
         {
            xtype : 'newslist',
            flex : 1
        },
        {
            xtype : 'footer',
         //   flex : 1
        },
           
        
        
        ]

    }
  
}
)
        


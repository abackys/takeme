Ext.define('GK.view.NewsView', {
    extend: 'Ext.Container',
    xtype  : 'news',
    requires: [
    'GK.view.news.NewsList'
    ],
    config : {
        scrollable : false,

        layout : 'vbox',
        items : [ 
        {
            xtype : 'header',
            title : 'Naujienos'
        },
        {
            xtype : 'newslist',
            itemId : 'news',
            flex : 1
        },
        {
            xtype : 'footer'
        },
           
        
        
        ]

    }
  
}
)
        


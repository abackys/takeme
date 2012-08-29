Ext.define('GK.view.NewsView', {
    extend: 'Ext.dataview.DataView',
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
            title : 'Naujienos',
        },
        {
            xtype : 'newslist',
            flex : 1
        },
        {
            xtype : 'footer',
        },
           
        
        
        ]

    }
  
}
)
        


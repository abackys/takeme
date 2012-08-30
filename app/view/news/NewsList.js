Ext.define('GK.view.news.NewsList', {
    extend: 'Ext.dataview.DataView',
    xtype  : 'newslist',
    requires: [
    'GK.view.news.NewsListItem'
    ],
    config : {
        store : 'News' , 
        useComponents: true,
        defaultType: 'newslistitem'
    }
}
)
        


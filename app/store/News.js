Ext.define('GK.store.News', {
    extend : 'Ext.data.Store',
    config : {
        fields : ['newsItem', 'thumb_url', 'newsShortText' ],
        autoLoad : true,
        proxy : {
            type: 'ajax',
            url : './json/news.json',
            reader: {
                type: 'json',
                rootProperty: 'news'
            }  
        }
    }
})
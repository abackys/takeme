Ext.define('GK.store.News', {
    extend : 'Ext.data.Store',
    config : {
        fields : ['newsTitle', 'newsText', 'promo_thumb', 'promo_img' ],
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
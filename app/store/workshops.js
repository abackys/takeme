Ext.define('GK.store.Workshops', {
    extend : 'Ext.data.Store',
    config : {
        // Using news data model / views
        fields : ['newsTitle', 'newsText', 'promo_thumb', 'promo_img' ],
        autoLoad : true,
        proxy : {
            type: 'ajax',
            url : './json/workshop.json',
            reader: {
                type: 'json',
                rootProperty: 'workshop'
            }  
        }
    }
})
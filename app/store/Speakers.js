Ext.define('GK.store.Speakers', {
          extend : 'Ext.data.Store',
          config : {
          fields : ['name', 'about_speaker',  'conference_name', 'promo_thumb', 'promo_img', 'event_time' , 'event_time_img'],
          autoLoad : true,
          proxy : {
            type: 'ajax',
            url : './json/speakers.json',
            reader: {
                type: 'json',
                rootProperty: 'speakers'
            }  
        }
    }
      })
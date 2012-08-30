Ext.define('GK.store.Speakers', {
          extend : 'Ext.data.Store',
          config : {
          fields : ['name', 'newstexta', 'speaker_img' ],
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
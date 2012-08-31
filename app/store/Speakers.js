Ext.define('GK.store.Speakers', {
          extend : 'Ext.data.Store',
          config : {
          fields : ['name', 'about_speaker',  'conference_name', 'speaker_img', 'speaker_foto' ],
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
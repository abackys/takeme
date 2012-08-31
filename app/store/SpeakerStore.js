Ext.define('GK.store.SpeakerStore', {
    extend: 'Ext.data.Store',
   
    config: {
         model: "GK.model.SpeakerModel",
      // fields : ['id', 'speaker', 'title', 'text'],
          data: 
                   {id:'1', speaker: 'Ciuvas', title: 'apie belenka', text : 'belenkoks textas' }
                   
            }      
    }
    
 
);
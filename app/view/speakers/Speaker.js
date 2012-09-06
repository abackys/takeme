Ext.define('GK.view.speakers.Speaker', {
    extend: 'Ext.Container',
    xtype  : 'speakertitle',

    config : {
        layout : 'vbox',
        items : [
        {
            xtype : 'container',
            itemId : 'speaker_name',
            cls : 'speakers-conference-name'
            

            
           
        },
        {
            xtype : 'container',
            itemId : 'conference_title',
            cls : 'speakers-conference-title',
        }
        
        ],
        listeners : {
            updatedata : function(dataItem, newData){
                
                var conference_title = dataItem.down('container[itemId=conference_title]')
                var speaker_name = dataItem.down('container[itemId=speaker_name]')
                var data = Ext.getStore('Speakers').getAt(newData - 1).data
                
                conference_title.setHtml(Ext.String.ellipsis(data.conference_name, GK.listTextWidth*2))
                speaker_name.setHtml(Ext.String.ellipsis(data.name, GK.listTextWidth))
              //  console.log(newData)
            }
        }
    }
    
}
)
        
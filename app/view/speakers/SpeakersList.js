Ext.define('GK.view.speakers.SpeakersList', {
    extend: 'Ext.dataview.DataView',
    xtype  : 'speakerslist',
    requires: [
    'GK.view.speakers.SpeakersListItem'
    ],
    config : {
        store :   'Speakers',
        useComponents: true,
        defaultType: 'speakerslistitem'
      
    }
}
)
        


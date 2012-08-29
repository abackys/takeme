Ext.define("GK.model.SpeakerModel", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'speaker', type: 'string' },
            { name: 'title', type: 'string' },
            { name: 'text', type: 'string' }
        ]
    }
});
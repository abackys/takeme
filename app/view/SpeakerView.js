Ext.define('GK.view.SpeakerView', {
    extend: 'Ext.Container',
    xtype : 'speaker',
    config: {
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'container',  // reikia pakeist i panel ir padaryt su itemTpl <img src={img_url}> ir model/store
                flex: 1,
                docked: 'top',
                scrollable: false,  // Kam sitas ? Jeigu nera listo ar dataView componentu nebuna ir scrollo
                items: [   // Iskelti vienu leveliu auksciau i itemTpl kur parasiau auksciau
                    {
                        xtype: 'image',
                        docked: 'top',
                        height: 201,
                        ui: 'light',  // Kam Sitas?
                        src: 'http://s4.mangareader.net/cover/love-so-life/love-so-life-m0.jpg'
                    }
                ]
            },
            
            // SUjungti i viena konteineri nes vistiek visada salia buna
            {
                xtype: 'container',
                flex: 2,
                items : [],
             //   docked: 'top', // Kam sitas?
                html: 'Vardas pavarde',
                styleHtmlContent: true
            },
            {
                xtype: 'container',
           //     flex: 2,
           //     docked: 'top', // Kam sitas?
                html: 'Pranesimo pavadinimas',
                styleHtmlContent: true
            },
            {
                xtype: 'container',
                flex: 2,
           //     docked: 'top', // Kam sitas?
                html: 'Teaxtas Teaxtas Teaxtas Teaxtas Teaxtas Teaxtas Teaxtas',
                styleHtmlContent: true,
                layout: {
                    type: 'fit'   // Kam sita naudoji, nzn ar gerai ar blogai bet galetum paaiskint
                },
            }
        ]
    }
 
});
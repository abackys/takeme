Ext.define('GK.view.HeaderView', {
    extend: 'Ext.Toolbar',
    xtype  : 'header',
    config : {
        layout: {
            type: 'hbox'
         //   align: 'center',
         //   pack : 'center'
        },
        docked : 'top',
        items : [ 
        {
            xtype : 'image',
            src : './images/back_ico.jpg',
            width : 50,
            docked : 'left',
            cls : 'header-back-img',
            action : 'back'
        },
       
        {
            html: '<img src="./images/header_logo.png">',
      //  cls : 'startpage-header-image',
            xtype : 'panel',
            cls : ['image-max-height'],
         //   src : './images/header_logo.jpg',
        //    width : 88,
         //   height : 51,
      //   style : 'max-height: 100%;',
            docked : 'right',
            flex : 1,
        }
        ]

    }
}
)
        

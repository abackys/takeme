Ext.define('GK.view.FooterView', {
    extend: 'Ext.Container',
    xtype  : 'footer',
    config : {
      
        docked : 'bottom',
        padding : 5,
        items : [ 
        {
            xtype : 'container',
            html : 'Mobile Web Solution - CrazyImp Studio',
            cls : 'footer-text'
        },
       
        ]

    }
}
)
        


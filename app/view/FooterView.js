Ext.define('GK.view.FooterView', {
    extend: 'Ext.Container',
    xtype  : 'footer',
    config : {
      
        docked : 'bottom',
        padding : 5,
        items : [ 
        {
            xtype : 'container',
            html : 'Mobile Web Solution made by <a href="http://www.crazyimp.com"><b>Crazyimp.com</b></a>',
            cls : 'footer-text'
        },
       
        ]

    }
}
)
        


Ext.define('GK.view.startpage.StartPageHeader', {
    extend: 'Ext.Panel',
    xtype  : 'startpageheader',
    config : {
        layout : 'hbox',
        items : [
        {
            flex : 1
        },
        {
            html: '<img src="./images/startpage_header.png">',
            cls : 'image-max-width'
        },
        {
            flex : 1
        }
        ],
      
    }
}
)
        


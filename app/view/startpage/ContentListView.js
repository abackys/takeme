Ext.define('GK.view.startpage.ContentListView', {
    extend: 'Ext.List',
    xtype  : 'contentlist',
    
    config : {
        
    itemTpl: '<span>{menuItem}<span>',
    data: [
        { menuItem: 'BILIETAI' },
        { menuItem: 'APIE' },
        { menuItem: 'PRANEŠĖJAI' },
        { menuItem: 'PROGRAMA' },
        { menuItem: 'NAUJIENOS' },
        { menuItem: 'DIRBTUVĖS' },
        { menuItem: 'VAKARĖLIS' },
        { menuItem: 'DIRBTUVĖS' }
    ],
    style : 'margin-top: -5px;',
      disclosure: true,


            //set the function when a user taps on a disclsoure icon
            onItemDisclosure: function(record, item, index, e) {
                //show a messagebox alert which shows the persons firstName
                e.stopEvent();
          //      Ext.Msg.alert('Disclose', 'Disclose more info for ' + record.get('firstName'));
            }
      

    }
}
)
        


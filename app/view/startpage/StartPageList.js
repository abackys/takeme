Ext.define('GK.view.startpage.StartPageList', {
    extend: 'Ext.List',
    xtype  : 'startpagelist',
    
    config : {
        
    itemTpl: '<span>{menuItemText}<span>',
    data: [
        { menuItemText: 'BILIETAI', menuItem : 'tickets' },
        { menuItemText: 'APIE', menuItem : 'about' },
        { menuItemText: 'PRANEŠĖJAI', menuItem : 'speakers' },
        { menuItemText: 'PROGRAMA', menuItem : 'schedule' },
        { menuItemText: 'NAUJIENOS', menuItem : 'news' },
        { menuItemText: 'DIRBTUVĖS', menuItem : 'workshops' },
        { menuItemText: 'VAKARĖLIS', menuItem : 'party' },
        { menuItemText: 'REMĖJAI', menuItem : 'sponsors' }
     
    ], 
    scrollable : false,
    style : 'margin-top: -5px;',
      disclosure: true,


            //set the function when a user taps on a disclsoure icon
            onItemDisclosure: function(record, item, index, e) {
                //show a messagebox alert which shows the persons firstName
            //    e.stopEvent();
          //      Ext.Msg.alert('Disclose', 'Disclose more info for ' + record.get('firstName'));
            }
      

    }
}
)
        


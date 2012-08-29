Ext.define('GK.view.sponsors.Sponsors', {
    extend: 'Ext.Panel',
    xtype  : 'sponsorsgrid',
    config : {
        
    scrollable : true,
    html: '<img src="./images/sponsors/sponsors.png">',
   // tpl :  '<img src="./images/sponsors/{[Ext.Viewport.getOrientation() === "landscape" ? "sponsors_land.png" : "sponsors.png"]}">',
    cls : ['image-max-width', 'sponsors-image']
    }
}
)
        


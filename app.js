
Ext.Loader.setConfig(
    {
        disableCaching : true,
        enabled:true
       
    }
    );
Ext.application({
    name: 'GK',
    viewport: {autoMaximize: true},
  //  util :[ 'Date' ],
    models: [],
    stores: ['NewsStore'],
    views : ['Viewport' ,  'SpeakersView', 'StartPageView', 'HeaderView',  'FooterView' , 'NewsView' , 'SponsorsView'],
    controllers : ['StartPageController', 'RoutingController', 'HeaderController', 'NewsController'],
  
  launch: function() {
      
  GK.Viewport = Ext.create('GK.view.Viewport')
  
    }
});



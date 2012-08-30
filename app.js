
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
    stores: ['Speakers', 'News'],
    views : ['Viewport' ,  'StartPageView', 'HeaderView',  'FooterView' , 'NewsView' , 'SponsorsView', 'SpeakersView'],
    controllers : ['StartPageController', 'RoutingController', 'HeaderController', 'NewsController'],
  
  launch: function() {
      
  GK.Viewport = Ext.create('GK.view.Viewport')
  console.log(Ext.getStore('News'))
  
    }
});



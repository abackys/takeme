
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
    controllers : ['StartPageController', 'SpeakersController', 'RoutingController', 'NewsController'],
    views : ['Viewport' ,  'StartPageView', 'HeaderView',  'FooterView' , 'NewsView' , 'SponsorsView', 'SpeakersView'],
  
  launch: function() {
      
  GK.Viewport = Ext.create('GK.view.Viewport')
 // console.log(Ext.getStore('News'))
 
  
    }
});



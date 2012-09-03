
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
    stores: ['Speakers', 'News', 'Workshops'],
    controllers : ['StartPageController', 'SpeakersController', 'RoutingController', 'NewsController'],
    views : ['Viewport' ,  'StartPageView', 'HeaderView',  'FooterView' , 'NewsView' , 'SponsorsView', 'WorkshopsView', 'SpeakersView', 'DetailsView', 'PartyView', 'AboutView'],
  
  launch: function() {
      
  GK.Viewport = Ext.create('GK.view.Viewport')
//  
  // Ext.create('Ext.Button', { text : 'aaaaa'})
 // console.log(Ext.getStore('News'))
 
  
    }
});



Ext.define('GK.view.details.PartyDetails', {
    extend: 'GK.view.details.Details',
    xtype  : 'partydetails',
    
    config : {    
             
        items : [
        {  
            xtype : 'panel',
            layout : 'hbox',
            items : [
            {
                flex : 1
            } ,
{
                tpl: '<img src=images/promo/party.png>',
                cls : 'image-max-width',
                data : {    promo_img : 'images/speaker.jpg'   },
            } ,
{
                flex : 1
            }  
            ]
           
        },
      {
            xtype: 'sharebutton',
        },
        {
            cls : 'details-title',
            xtype: 'container',
            html : '<p><b>Take Me Deep</b></p><p>Mario / Vidiz / Jazzu / Speciali Programa</p>'
                       
        },
        {
            cls :['details-text'],
            xtype: 'container',
             styleHtmlContent : true,
            html : '„Take Me DEEP“ kviečia visus kauniečius ir miesto svečius pasinerti į KITOKĮ vakarėlį, kupiną kokybiškos muzikos ir pagardinto ypatinga programa. </p><p> Į laikinąją sostinę grįš gilesnės elektroninės muzikos kūrėjai Mario Bassanov, Vidis bei tylos balsas - Jazzu. Atlikėjai, kurių muzika džiugina ne tik Lietuvos, bet ir išrankiausius Europos klausytojus, pristatys naujus, specialiai rudenėjančiam Kaunui skirtus garsus.  </p><p> Vakaro muzikai akomponuos netradicinė EVENTUS programa su šokių projekto „Girls only“ pasirodymais, svečių fotosesijomis, Jagermeister promo shot‘ais bei įvairiausiomis kitomis atrakcijomis. Išskirtinio dėmesio sulauks dailiosios lyties atstovės , kurioms organizatoriai prižada nemažai būčinių ir dovanų.'
           

        }
       
        ]
    }
}
)
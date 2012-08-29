Ext.define('GK.view.news.NewsListItem', {
    extend: 'Ext.dataview.component.DataItem',
    xtype  : 'newslistitem',
    requires: ['Ext.Img'],

  

    config: {
        /**
         * A custom cls for each item
         */
    
        cls: [Ext.baseCSSPrefix + 'list-item', 'my-list-item'],
        //  cls : ,
        height : 81,
        /**
         * setup the dataMap. each property is a method in 'this' class, and then
         * inside that config, it will call the method you pass with the value you
         * want, form the record
         */
        dataMap: {
            //this will call: this.getImage()
            getImage: {
                //and then this will call: this.getImage().setSrc() with the
                //'image' field value form the record
                setSrc: 'promo_thumb'
                
            },

            getNewstext: {
                setHtml: 'newsTitle'
            }

         
        },

        image: {
            height : 80,
            width :80,
            cls : 'image-max-height',
        },

        newstext: {
            cls: 'my-list-item-text',
            flex: 1,
        },
        
        disclosure : {
        
            cls :[ 'disclosure-green', 'disclosure-white', 'disclosure']
        },

        layout: {
            type: 'hbox',
            align: 'center'
        }
    },

    applyDisclosure: function(config) {
        return Ext.factory(config, Ext.Container, this.getDisclosure());
    },

    updateDisclosure: function(newDisclosure, oldDisclosure) {
        if (newDisclosure) {
            this.add(newDisclosure);
        }

        if (oldDisclosure) {
            this.remove(oldDisclosure);
        }
    },
    
    applyImage: function(config) {
        return Ext.factory(config, Ext.Img, this.getImage());
    },

    updateImage: function(newImage, oldImage) {
        if (newImage) {
            this.add(newImage);
        }

        if (oldImage) {
            this.remove(oldImage);
        }
    },


    applyNewstext: function(config) {
        return Ext.factory(config, Ext.Component, this.getNewstext());
    },

    updateNewstext: function(newnewstext, oldnewstext) {
        if (newnewstext) {
            this.add(newnewstext);
        }

        if (oldnewstext) {
            this.remove(oldnewstext);
        }
    }

    
}
)
        


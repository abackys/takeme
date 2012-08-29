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
                setSrc: 'url'
                
            },

            getNewstext: {
                setHtml: 'newstext'
            }

         
        },

        /**
         * @cfg {Boolean/Object/Ext.Img} image
         * The config for the image component used in this dataitem.
         * In this case, we just pass true, because we just want it to create
         * a new Ext.Img.
         */
        image: {
            height : 80,
            width :80,
            cls : 'image-max-height',
        },
        
       

        /**
         * @cfg {Boolean/Object/Ext.Component} newstext
         * The component used to show an image. It is an Ext.Component, so we
         * just want to add a cls so we can style it, and add some flex so it
         * looks good.
         */
        newstext: {
            cls: 'my-list-item-text',
            flex: 1,
        },
        
          disclosure : {
            height : 50,
            width : 50,
            cls :[ 'disclosure-pink', 'disclosure-white', 'disclosure']
        },

        /**
         * We give it a hbox layout so the items are horizontally displayed, and then
         * give it an align of center so they are vertically centered.
         */
        layout: {
            type: 'hbox',
            align: 'center'
        }
    },

    /**
     * Called when you set the {@link #image} configuration.
     *
     * Uses Ext.factory to return a proper instance using the configuration passed, the
     * default component, and the existing instance (if it exists).
     *
     * This should *never* be called manually. It will be called when you call {@link #setImage}.
     */
    applyDisclosure: function(config) {
        return Ext.factory(config, Ext.Container, this.getDisclosure());
    },

    /**
     * Called when you set the {@link #image} configuration, and is passed both the new value
     * (from applyImage) and the old value.
     *
     * This should *never* be called manually. It will be called when you call {@link #setImage}.
     * @private
     */
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

    /**
     * Called when you set the {@link #image} configuration, and is passed both the new value
     * (from applyImage) and the old value.
     *
     * This should *never* be called manually. It will be called when you call {@link #setImage}.
     * @private
     */
    updateImage: function(newImage, oldImage) {
        if (newImage) {
            this.add(newImage);
        }

        if (oldImage) {
            this.remove(oldImage);
        }
    },

    /**
     * Called when you set the {@link #newstext} configuration.
     *
     * Uses Ext.factory to return a proper instance using the configuration passed, the
     * default component, and the existing instance (if it exists).
     *
     * This should *never* be called manually. It will be called when you call {@link #setnewstext}.
     * @private
     */ 
    applyNewstext: function(config) {
        return Ext.factory(config, Ext.Component, this.getNewstext());
    },

    /**
     * Called when you set the {@link #newstext} configuration, and is passed both the new value
     * (from applynewstext) and the old value.
     *
     * This should *never* be called manually. It will be called when you call {@link #setnewstext}.
     * @private
     */
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
        


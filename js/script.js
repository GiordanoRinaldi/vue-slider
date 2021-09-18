const app = new Vue({
    el: "#root",
    data: {
        images: [
            "https://www.vaporwaveitalia.it/wp-content/uploads/2018/05/cosa-%C3%A8-vaporwave-videogiochi-anni-80-90-aesthetics.png",
            "https://www.newvibesinmusic.it/wp-content/uploads/maxresdefault.jpg",
            "https://www.wallpaperuse.com/wallp/88-884241_m.jpg",
            "img/img-4.jpg",
            "img/img-5.jpg",
        ],

        currentImg: 0,

        
    },
    methods : {
        imgPrima: function() {
            this.currentImg--;
            if (this.currentImg == -1 ) {
                this.currentImg = this.images.length - 1;
            }
        },
        imgDopo: function() {
            this.currentImg++;
            if (this.currentImg >= this.images.length ) {
                this.currentImg = 0;
            }
        },
        cambiaCurrent: function(index) {
            this.currentImg = index;
            return index;
        }

    }
});
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

        autoplayID: null,

        
    },
    methods: {
        imgPrima: function() {
            this.currentImg--;
            if (this.currentImg == -1 ) {
                this.currentImg = this.images.length - 1;
            };
        },
        imgDopo: function() {
            this.currentImg++;
            if (this.currentImg >= this.images.length ) {
                this.currentImg = 0;
            };
        },
        cambiaCurrent: function(index) {
            this.currentImg = index;
            return index;
        }, 
        stopAutoplay: function() {
           clearInterval(this.autoplayID);
        },
        startAutoplay: function() {
            this.autoplayID = setInterval(this.imgDopo, 3000)
        }
    },
    mounted: function() {
        this.startAutoplay();

        document.addEventListener("keydown", 
            (event) => {
                if (event.key == "ArrowRight") {
                    this.imgDopo();
                }else if (event.key == "ArrowRight") {
                    this.imgPrima();
                }
            }
        );
    },
});
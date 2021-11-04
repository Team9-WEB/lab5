jQuery(document).ready(function(){
					
    jQuery("#videoslider").unitegallery({
        gallery_theme: "slider",
        gallery_width: 900,
        gallery_height: 500,
        slider_transition_speed:1000,
    });

    jQuery("#gallery").unitegallery({
        gallery_theme: "tiles",
        tiles_space_between_cols:25,
	    tiles_justified_space_between:25,
	    tiles_col_width:220,
	    tile_enable_shadow:true,
	    theme_gallery_padding:25,
	    tiles_type: "justified",
    });

    jQuery("#slider1").unitegallery({
        gallery_theme: "slider",
        gallery_width: 450,
        gallery_height: 300,
        gallery_play_interval: 9000,
        slider_transition_speed:1000,
    });

    jQuery("#slider2").unitegallery({
        gallery_theme: "slider",
        gallery_width: 450,
        gallery_height: 300,
        gallery_play_interval: 8000,
        slider_transition_speed:1000,
    });

    jQuery("#slider3").unitegallery({
        gallery_theme: "slider",
        gallery_width: 450,
        gallery_height: 300,
        gallery_play_interval: 10000,
        slider_transition_speed:1000,
    });
});
<?php

//Add our widget location
function ourWidgetsInit(){
    //register widget loction
    register_sidebar( array(
        'name' => 'Sidebar',
        'id' => 'sidebar1',
        'before_widget' => '<div class="widget-item">',
        'after_widget' => '</div>',
        'before_title' => '<h4 class="my-special-class">',
        'after_title' => '</h4>'
    ));

    register_sidebar( array(
        'name' => 'Footer Area 1',
        'id' => 'footer1'
    ));

    register_sidebar( array(
        'name' => 'Footer Area 2',
        'id' => 'footer2'
    ));

    register_sidebar( array(
        'name' => 'Footer Area 3',
        'id' => 'footer3'
    ));

    register_sidebar( array(
        'name' => 'Footer Area 4',
        'id' => 'footer4'
    ));
}

add_action('widgets_init', 'ourWidgetsInit');
//Theme setup
function stephenesketzis_setup(){

    //Navigation Menu
    register_nav_menus(array(
        'primary' => __( 'Primary Menu'),
        'footer' => __( 'Footer Menu'),
    ));
    //Add featured image support
    add_theme_support('post-thumbnails');
    add_image_size('small-thumbnail', 180,120, true);
    add_image_size('banner-image', 920, 210, array('left','top'));

    //Add post format support
    //add_theme_support('post-formats', array('aside', 'gallery', 'link'));
}

add_action('after_setup_theme', 'stephenesketzis_setup');
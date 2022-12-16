<?php
if ( ! defined( 'ABSPATH' ) )
  exit;

function bugloos_init_theme_settings_page ()
{
  if ( function_exists( 'acf_add_options_page' ) )
  {
    acf_add_options_page( [
      'page_title' => __( 'Theme Settings' ),
      'menu_title' => __( 'Theme Settings' ),
      'menu_slug'  => 'theme-settings',
      'capability' => 'edit_posts',
      'icon_url'   => 'dashicons-admin-customizer',
      'position'   => 24,
      'redirect'   => true
    ] );

    acf_add_options_sub_page( [
      'page_title'  => __( 'General', 'bugloos' ),
      'menu_title'  => __( 'General', 'bugloos' ),
      'parent_slug' => 'theme-settings',
      'menu_slug'   => 'theme-settings-general'
    ] );

    acf_add_options_sub_page( [
      'page_title'  => __( 'Staff Augmentation', 'bugloos' ),
      'menu_title'  => __( 'Staff Augmentation', 'bugloos' ),
      'parent_slug' => 'theme-settings',
      'menu_slug'   => 'theme-settings-staff-augmentation'
    ] );

    acf_add_options_sub_page( [
      'page_title'  => __( 'Home Page', 'bugloos' ),
      'menu_title'  => __( 'Home Page', 'bugloos' ),
      'parent_slug' => 'theme-settings',
      'menu_slug'   => 'theme-settings-home'
    ] );

    acf_add_options_sub_page( [
      'page_title'  => __( 'Header', 'bugloos' ),
      'menu_title'  => __( 'Header', 'bugloos' ),
      'parent_slug' => 'theme-settings',
      'menu_slug'   => 'theme-settings-header'
    ] );

    acf_add_options_sub_page( [
      'page_title'  => __( 'Footer', 'bugloos' ),
      'menu_title'  => __( 'Footer', 'bugloos' ),
      'parent_slug' => 'theme-settings',
      'menu_slug'   => 'theme-settings-footer'
    ] );
  }
}

add_action( 'acf/init', 'bugloos_init_theme_settings_page' );

function bugloos_add_span_to_nav_menu ( $item_output, $item, $depth, $args ): string
{
  if ( $args->menu == 'primary-menu' )
    return '<a href="' . $item->url . '">' . $item->post_title . '</a><span></span >';

  return $item_output;
}

add_filter( 'walker_nav_menu_start_el', 'bugloos_add_span_to_nav_menu', 10, 4 );

function bugloos_upload_mime_types ( $mimes )
{
  $mimes[ 'svg' ] = 'image/svg+xml';

  return $mimes;
}

add_filter( 'upload_mimes', 'bugloos_upload_mime_types' );

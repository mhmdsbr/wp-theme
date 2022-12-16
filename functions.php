<?php
if ( ! defined( 'ABSPATH' ) )
  exit;

/**
 * Bugloos functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Bugloos
 */

const BUGLOOS_THEME_VERSION = '1.0.0';
define( 'BUGLOOS_THEME_URI', get_template_directory_uri() );
define( 'BUGLOOS_THEME_DIR', get_template_directory() );

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
if ( ! function_exists( 'bugloos_setup' ) )
{
  function bugloos_setup ()
  {
    // Add default posts and comments RSS feed links to head.
    add_theme_support( 'automatic-feed-links' );

    /*
     * Let WordPress manage the document title.
     * By adding theme support, we declare that this theme does not use a
     * hard-coded <title> tag in the document head, and expect WordPress to
     * provide it for us.
     */
    add_theme_support( 'title-tag' );

    /*
     * Enable support for Post Thumbnails on posts and pages.
     *
     * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
     */
    add_theme_support( 'post-thumbnails' );

    add_theme_support( 'post-formats', [
      'gallery',
      'quote',
      'video',
      'aside',
      'image',
      'link',
      'status',
      'audio',
      'chat',
      'promotion'
    ] );

    // This theme uses wp_nav_menu() in one location.
    register_nav_menus( [
      'primary-menu'   => __( 'Primary Menu', 'bugloos' ),
      'secondary-menu' => __( 'Secondary Menu', 'bugloos' ),
      'footer-menu'    => __( 'Footer Menu', 'bugloos' )
    ] );

    /*
     * Switch default core markup for search form, comment form, and comments
     * to output valid HTML5.
     */
    add_theme_support( 'html5', [
      'search-form',
      'comment-form',
      'comment-list',
      'gallery',
      'caption',
      'style',
      'script',
    ] );

    // Add theme support for selective refresh for widgets.
    add_theme_support( 'customize-selective-refresh-widgets' );

    add_theme_support( 'editor-styles' );
    add_theme_support( 'responsive-embeds' );

    add_image_size( 'bugloos_blog_thumbnail', 310, 108, true );
    add_image_size( 'bugloos_blog_small', 310, 228, true );
    add_image_size( 'bugloos_blog_large', 640, 352, true );
  }

  add_action( 'after_setup_theme', 'bugloos_setup' );
}

/**
 * Enqueue scripts and styles.
 */
function bugloos_scripts ()
{
  $object = [
    'particleJsonURL' => BUGLOOS_THEME_URI . '/src/particle.json'
  ];

  wp_enqueue_style( 'main-style', BUGLOOS_THEME_URI . '/assets/styles/main.min.css', [], BUGLOOS_THEME_VERSION );
  wp_enqueue_style( 'vendor-style', BUGLOOS_THEME_URI . '/assets/styles/vendor.min.css', [], BUGLOOS_THEME_VERSION );

  if ( is_home() )
  {
    $vendor_js_file = 'vendor';
    $main_js_file   = 'main';

    $object[ 'projects' ] = bugloos_get_footprint_projects();
  }
  elseif ( is_singular( 'job' ) )
  {
    $vendor_js_file = 'job-position-vendor';
    $main_js_file   = 'job-position';

    if ( isset( $_GET[ 'send' ] ) && $_GET[ 'send' ] == 'resume' )
    {
      $vendor_js_file = 'apply-job-vendor';
      $main_js_file   = 'apply-job';
    }
  }
  elseif ( is_page_template( 'templates/page-job-positions.php' ) )
  {
    $vendor_js_file = 'job-positions-vendor';
    $main_js_file   = 'job-positions';
  }
  elseif ( is_singular( [
    'service',
    'project'
  ] ) )
  {
    $vendor_js_file = 'single-page-project-vendor';
    $main_js_file   = 'services';
  }
  elseif ( is_page_template( 'templates/page-team-members.php' ) )
  {
    $vendor_js_file = 'team-members-vendor';
    $main_js_file   = 'team-members';
  }
  elseif ( is_page_template( 'templates/page-mix-match.php' ) )
  {
    $vendor_js_file = 'mix-match-vendor';
    $main_js_file   = 'mix-match';

    $object[ 'serviceTags' ] = bugloos_get_project_parameters();
    $object[ 'allProjects' ] = bugloos_get_all_projects();
  }
  elseif ( is_page_template( 'templates/page-project-discovery.php' ) )
  {
    $vendor_js_file = 'project-discovery-vendor';
    $main_js_file   = 'project-discovery';
  }
  elseif ( is_singular( 'post' ) || is_page_template( 'templates/page-blog.php' ) )
  {
    $vendor_js_file = 'blog-vendor';
    $main_js_file   = 'blog';
  }
  elseif ( is_page_template( 'templates/page-staff.php' ) )
  {
    $vendor_js_file = 'staff-single-page-vendor';
    $main_js_file   = 'services';
  }
  else
  {
    $vendor_js_file = 'vendor';
    $main_js_file   = 'main';
  }

  $vendor_js = BUGLOOS_THEME_URI . '/assets/scripts/' . $vendor_js_file . '.min.js';
  $main_js   = BUGLOOS_THEME_URI . '/assets/scripts/' . $main_js_file . '.min.js';

  //    $main_js = BUGLOOS_THEME_URI . '/src/scripts/' . $main_js_file . '.js';

  wp_enqueue_script( 'vendor-js', $vendor_js, [
    'jquery'
  ], BUGLOOS_THEME_VERSION, true );

  wp_enqueue_script( 'main-js', $main_js, [
    'jquery',
    'vendor-js'
  ], BUGLOOS_THEME_VERSION, true );


  wp_localize_script( 'main-js', 'bugloosJS', $object );
}

add_action( 'wp_enqueue_scripts', 'bugloos_scripts' );

require BUGLOOS_THEME_DIR . '/inc/helpers.php';
require BUGLOOS_THEME_DIR . '/inc/template-functions.php';
require BUGLOOS_THEME_DIR . '/inc/post-types.php';

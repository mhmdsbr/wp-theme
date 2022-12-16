<?php
if ( ! defined( 'ABSPATH' ) )
  exit;

if ( ! function_exists( 'bugloos_get_content' ) )
{
  function bugloos_get_content ( $count = 10, $show_dots = false ): string
  {
    return wp_trim_words( has_excerpt() ? get_the_excerpt() : get_the_content(), $count, $show_dots ? ' ...' : '' );
  }
}

if ( ! function_exists( 'bugloos_get_footprint_projects' ) )
{
  function bugloos_get_footprint_projects (): array
  {
    $projects = get_posts( [
      'post_type'      => 'project',
      'posts_per_page' => - 1,
      'post_status'    => 'publish'
    ] );

    $items = [];

    global $post;

    foreach ( $projects as $post )
    {
      setup_postdata( $post );

      $post_id = get_the_ID();

      $country = get_the_terms( $post_id, 'project_country' );
      $year    = get_the_terms( $post_id, 'project_year' );

      $items [] = [
        'title'   => get_the_title(),
        'id'      => 'poland_1',
        //sprintf( '%s_%d', $country[ 0 ]->name ?? '', $post_id ),
        'country' => $country[ 0 ]->name ?? '',
        'time'    => $year[ 0 ]->name ?? '',
        'img'     => 'https://www.urbanbarn.com/dw/image/v2/BCKH_PRD/on/demandware.static/-/Sites-masterCatalog_Urban_Barn/default/dwd46ac910/images/original/200738-full.jpg?sw=1490&sh=1060&q=70',
        'active'  => true,
        'link'    => get_field( 'website_url' )
      ];
    }

    wp_reset_postdata();

    return $items;
  }
}

if ( ! function_exists( 'bugloos_get_project_parameters' ) )
{
  function bugloos_get_project_parameters (): array
  {
    $categories = get_terms( [
      'taxonomy'   => 'project_category',
      'hide_empty' => false
    ] );

    $items = [];

    foreach ( $categories as $category )
    {
      $prepare_tags = [];

      $parameters = get_field( 'parameters', $category->taxonomy . '_' . $category->term_id );

      if ( $parameters )
      {
        foreach ( $parameters as $parameter )
          $prepare_tags[] = $parameter->name;
      }

      $items [] = [
        'id'   => $category->slug,
        'tags' => $prepare_tags
      ];
    }

    wp_reset_postdata();

    return $items;
  }
}

if ( ! function_exists( 'bugloos_get_all_projects' ) )
{
  function bugloos_get_all_projects (): array
  {
    $items = [];

    $projects = get_posts( [
      'post_type'      => 'project',
      'posts_per_page' => - 1,
      'post_status'    => 'publish'
    ] );

    global $post;

    foreach ( $projects as $post )
    {
      setup_postdata( $post );

      $prepare_tags = [];
      $image_urls   = [];

      $tags = get_the_terms( get_the_ID(), 'project_parameter' );

      if ( $tags )
      {
        foreach ( $tags as $tag )
          $prepare_tags[] = $tag->name;
      }

      $mix_and_match_images = get_field( 'mix_and_match_images' );
      if ( $mix_and_match_images )
      {
        foreach ( $mix_and_match_images as $mix_and_match_image )
          $image_urls[] = $mix_and_match_image[ 'image' ][ 'url' ];
      }

      $items [] = [
        'name'    => get_the_title(),
        'imagUrl' => $image_urls,
        'tags'    => $prepare_tags
      ];
    }

    wp_reset_postdata();

    return $items;
  }
}

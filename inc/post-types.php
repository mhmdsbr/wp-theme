<?php
if ( ! defined( 'ABSPATH' ) )
  exit;

function bugloos_testimonials ()
{
  $labels = [
    'name'           => __( 'Testimonials', 'bugloos' ),
    'singular_name'  => __( 'Testimonial', 'bugloos' ),
    'menu_name'      => __( 'Testimonials', 'bugloos' ),
    'name_admin_bar' => __( 'Testimonial', 'bugloos' ),
    'add_new'        => __( 'Add new', 'bugloos' ),
    'add_new_item'   => __( 'Add new item', 'bugloos' ),
    'new_item'       => __( 'New item', 'bugloos' ),
    'edit_item'      => __( 'Edit item', 'bugloos' ),
    'view_item'      => __( 'View item', 'bugloos' ),
    'all_items'      => __( 'All testimonials', 'bugloos' ),
    'search_items'   => __( 'Search testimonials', 'bugloos' )
  ];

  $args = [
    'labels'              => $labels,
    'public'              => false,
    'publicly_queryable'  => true,
    'show_ui'             => true,
    'show_in_menu'        => true,
    'query_var'           => true,
    'exclude_from_search' => true,
    'rewrite'             => false,
    'capability_type'     => 'post',
    'has_archive'         => false,
    'hierarchical'        => false,
    'menu_position'       => 20,
    'supports'            => [
      'title'
    ],
    'show_in_rest'        => false,
    'menu_icon'           => 'dashicons-format-quote'
  ];

  register_post_type( 'testimonial', $args );
}

function bugloos_jobs ()
{
  $labels = [
    'name'           => __( 'Job', 'bugloos' ),
    'singular_name'  => __( 'Job', 'bugloos' ),
    'menu_name'      => __( 'Jobs', 'bugloos' ),
    'name_admin_bar' => __( 'Job', 'bugloos' ),
    'add_new'        => __( 'Add new', 'bugloos' ),
    'add_new_item'   => __( 'Add new item', 'bugloos' ),
    'new_item'       => __( 'New item', 'bugloos' ),
    'edit_item'      => __( 'Edit item', 'bugloos' ),
    'view_item'      => __( 'View item', 'bugloos' ),
    'all_items'      => __( 'All Jobs', 'bugloos' ),
    'search_items'   => __( 'Search jobs', 'bugloos' )
  ];

  $args = [
    'labels'             => $labels,
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'query_var'          => true,
    'rewrite'            => [ 'slug' => 'job' ],
    'capability_type'    => 'post',
    'has_archive'        => false,
    'hierarchical'       => false,
    'menu_position'      => 20,
    'supports'           => [
      'title',
      'editor',
      'thumbnail'
    ],
    'show_in_rest'       => true,
    'menu_icon'          => 'dashicons-portfolio'
  ];

  register_post_type( 'job', $args );
}

function bugloos_projects ()
{
  $labels = [
    'name'           => __( 'Project', 'bugloos' ),
    'singular_name'  => __( 'Project', 'bugloos' ),
    'menu_name'      => __( 'Projects', 'bugloos' ),
    'name_admin_bar' => __( 'Project', 'bugloos' ),
    'add_new'        => __( 'Add new', 'bugloos' ),
    'add_new_item'   => __( 'Add new item', 'bugloos' ),
    'new_item'       => __( 'New item', 'bugloos' ),
    'edit_item'      => __( 'Edit item', 'bugloos' ),
    'view_item'      => __( 'View item', 'bugloos' ),
    'all_items'      => __( 'All Projects', 'bugloos' ),
    'search_items'   => __( 'Search Projects', 'bugloos' )
  ];

  $args = [
    'labels'             => $labels,
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'query_var'          => true,
    'rewrite'            => [ 'slug' => 'project' ],
    'capability_type'    => 'post',
    'has_archive'        => false,
    'hierarchical'       => false,
    'menu_position'      => 20,
    'supports'           => [
      'title',
      'editor',
      'thumbnail'
    ],
    'show_in_rest'       => true,
    'menu_icon'          => 'dashicons-art'
  ];

  register_post_type( 'project', $args );

  $labels = [
    'name'              => __( 'Category', 'bugloos' ),
    'singular_name'     => __( 'Category', 'bugloos' ),
    'search_items'      => __( 'Search Categories', 'bugloos' ),
    'all_items'         => __( 'All Categories', 'bugloos' ),
    'parent_item'       => __( 'Parent Category', 'bugloos' ),
    'parent_item_colon' => __( 'Parent Category:', 'bugloos' ),
    'edit_item'         => __( 'Edit Category', 'bugloos' ),
    'update_item'       => __( 'Update Category', 'bugloos' ),
    'add_new_item'      => __( 'Add New Category', 'bugloos' ),
    'new_item_name'     => __( 'New category Name', 'bugloos' ),
    'menu_name'         => __( 'Categories', 'bugloos' ),
  ];

  $args = [
    'public'            => false,
    'hierarchical'      => true,
    'labels'            => $labels,
    'show_ui'           => true,
    'show_admin_column' => true,
    'query_var'         => false,
    'rewrite'           => false,
    'show_in_rest'      => true
  ];

  register_taxonomy( 'project_category', 'project', $args );

  $labels = [
    'name'                       => __( 'Tag', 'bugloos' ),
    'singular_name'              => __( 'Tag', 'bugloos' ),
    'search_items'               => __( 'Search Tags', 'bugloos' ),
    'popular_items'              => __( 'Popular Tags', 'bugloos' ),
    'all_items'                  => __( 'All Tags', 'bugloos' ),
    'parent_item'                => null,
    'parent_item_colon'          => null,
    'edit_item'                  => __( 'Edit category tag', 'bugloos' ),
    'update_item'                => __( 'Update category tag', 'bugloos' ),
    'add_new_item'               => __( 'Add New category tag', 'bugloos' ),
    'new_item_name'              => __( 'New category tag Name', 'bugloos' ),
    'separate_items_with_commas' => __( 'Separate category tags with commas', 'bugloos' ),
    'add_or_remove_items'        => __( 'Add or remove category tags', 'bugloos' ),
    'choose_from_most_used'      => __( 'Choose from the most used category tags', 'bugloos' ),
    'not_found'                  => __( 'No category tags.', 'bugloos' ),
    'menu_name'                  => __( 'Category Tags', 'bugloos' )
  ];

  $args = [
    'public'            => false,
    'hierarchical'      => false,
    'labels'            => $labels,
    'show_ui'           => true,
    'show_admin_column' => false,
    'query_var'         => false,
    'rewrite'           => false,
    'show_in_rest'      => false
  ];

  register_taxonomy( 'project_category_tag', 'project', $args );

  $labels = [
    'name'                       => __( 'Country', 'bugloos' ),
    'singular_name'              => __( 'Country', 'bugloos' ),
    'search_items'               => __( 'Search Countries', 'bugloos' ),
    'popular_items'              => __( 'Popular Countries', 'bugloos' ),
    'all_items'                  => __( 'All Countries', 'bugloos' ),
    'parent_item'                => null,
    'parent_item_colon'          => null,
    'edit_item'                  => __( 'Edit Country', 'bugloos' ),
    'update_item'                => __( 'Update Country', 'bugloos' ),
    'add_new_item'               => __( 'Add New Country', 'bugloos' ),
    'new_item_name'              => __( 'New Country Name', 'bugloos' ),
    'separate_items_with_commas' => __( 'Separate countries with commas', 'bugloos' ),
    'add_or_remove_items'        => __( 'Add or remove countries', 'bugloos' ),
    'choose_from_most_used'      => __( 'Choose from the most used countries', 'bugloos' ),
    'not_found'                  => __( 'No countries.', 'bugloos' ),
    'menu_name'                  => __( 'Countries', 'bugloos' )
  ];

  $args = [
    'hierarchical'      => false,
    'labels'            => $labels,
    'show_ui'           => true,
    'show_admin_column' => true,
    'query_var'         => false,
    'rewrite'           => [ 'slug' => 'project-country' ],
    'show_in_rest'      => true
  ];

  register_taxonomy( 'project_country', 'project', $args );

  $labels = [
    'name'                       => __( 'Year', 'bugloos' ),
    'singular_name'              => __( 'Year', 'bugloos' ),
    'search_items'               => __( 'Search Years', 'bugloos' ),
    'popular_items'              => __( 'Popular Years', 'bugloos' ),
    'all_items'                  => __( 'All Years', 'bugloos' ),
    'parent_item'                => null,
    'parent_item_colon'          => null,
    'edit_item'                  => __( 'Edit year', 'bugloos' ),
    'update_item'                => __( 'Update year', 'bugloos' ),
    'add_new_item'               => __( 'Add New Year ', 'bugloos' ),
    'new_item_name'              => __( 'New year Name', 'bugloos' ),
    'separate_items_with_commas' => __( 'Separate years with commas', 'bugloos' ),
    'add_or_remove_items'        => __( 'Add or remove years', 'bugloos' ),
    'choose_from_most_used'      => __( 'Choose from the most used years', 'bugloos' ),
    'not_found'                  => __( 'No years.', 'bugloos' ),
    'menu_name'                  => __( 'Years', 'bugloos' )
  ];

  $args = [
    'public'            => false,
    'hierarchical'      => false,
    'labels'            => $labels,
    'show_ui'           => true,
    'show_admin_column' => true,
    'query_var'         => false,
    'rewrite'           => false,
    'show_in_rest'      => true
  ];

  register_taxonomy( 'project_year', 'project', $args );

  $labels = [
    'name'                       => __( 'Parameter', 'bugloos' ),
    'singular_name'              => __( 'Parameter', 'bugloos' ),
    'search_items'               => __( 'Search Parameters', 'bugloos' ),
    'popular_items'              => __( 'Popular Parameters', 'bugloos' ),
    'all_items'                  => __( 'All Parameters', 'bugloos' ),
    'parent_item'                => null,
    'parent_item_colon'          => null,
    'edit_item'                  => __( 'Edit Parameter', 'bugloos' ),
    'update_item'                => __( 'Update Parameter', 'bugloos' ),
    'add_new_item'               => __( 'Add New Parameter', 'bugloos' ),
    'new_item_name'              => __( 'New Parameter Name', 'bugloos' ),
    'separate_items_with_commas' => __( 'Separate parameters with commas', 'bugloos' ),
    'add_or_remove_items'        => __( 'Add or remove parameters', 'bugloos' ),
    'choose_from_most_used'      => __( 'Choose from the most used parameters', 'bugloos' ),
    'not_found'                  => __( 'No parameters found.', 'bugloos' ),
    'menu_name'                  => __( 'Parameters', 'bugloos' ),
  ];

  $args = [
    'public'            => false,
    'hierarchical'      => false,
    'labels'            => $labels,
    'show_ui'           => true,
    'show_admin_column' => true,
    'query_var'         => false,
    'rewrite'           => false,
    'show_in_rest'      => true
  ];

  register_taxonomy( 'project_parameter', 'project', $args );
}

function bugloos_services ()
{
  $labels = [
    'name'           => __( 'Service', 'bugloos' ),
    'singular_name'  => __( 'Service', 'bugloos' ),
    'menu_name'      => __( 'Services', 'bugloos' ),
    'name_admin_bar' => __( 'Service', 'bugloos' ),
    'add_new'        => __( 'Add new', 'bugloos' ),
    'add_new_item'   => __( 'Add new item', 'bugloos' ),
    'new_item'       => __( 'New item', 'bugloos' ),
    'edit_item'      => __( 'Edit item', 'bugloos' ),
    'view_item'      => __( 'View item', 'bugloos' ),
    'all_items'      => __( 'All Services', 'bugloos' ),
    'search_items'   => __( 'Search Services', 'bugloos' )
  ];

  $args = [
    'labels'             => $labels,
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'query_var'          => true,
    'rewrite'            => [ 'slug' => 'service' ],
    'capability_type'    => 'post',
    'has_archive'        => false,
    'hierarchical'       => false,
    'menu_position'      => 20,
    'supports'           => [
      'title',
      'editor',
      'thumbnail'
    ],
    'show_in_rest'       => true,
    'menu_icon'          => 'dashicons-screenoptions'
  ];

  register_post_type( 'service', $args );
}

function bugloos_staff ()
{
  $labels = [
    'name'           => __( 'Staff', 'bugloos' ),
    'singular_name'  => __( 'Staff', 'bugloos' ),
    'menu_name'      => __( 'Staff', 'bugloos' ),
    'name_admin_bar' => __( 'Staff', 'bugloos' ),
    'add_new'        => __( 'Add new', 'bugloos' ),
    'add_new_item'   => __( 'Add new item', 'bugloos' ),
    'new_item'       => __( 'New item', 'bugloos' ),
    'edit_item'      => __( 'Edit item', 'bugloos' ),
    'view_item'      => __( 'View item', 'bugloos' ),
    'all_items'      => __( 'All Staff', 'bugloos' ),
    'search_items'   => __( 'Search Staff', 'bugloos' )
  ];

  $args = [
    'labels'              => $labels,
    'public'              => false,
    'publicly_queryable'  => true,
    'show_ui'             => true,
    'show_in_menu'        => true,
    'show_in_nav_menus'   => false,
    'query_var'           => true,
    'rewrite'             => false,
    'has_archive'         => false,
    'hierarchical'        => false,
    'exclude_from_search' => true,
    'menu_position'       => 20,
    'supports'            => [
      'title'
    ],
    'show_in_rest'        => false,
    'menu_icon'           => 'dashicons-groups'
  ];

  register_post_type( 'staff', $args );

  $labels = [
    'name'                       => __( 'Job Position', 'bugloos' ),
    'singular_name'              => __( 'Job Positions', 'bugloos' ),
    'search_items'               => __( 'Search Job Positions', 'bugloos' ),
    'popular_items'              => __( 'Popular Job Positions', 'bugloos' ),
    'all_items'                  => __( 'All Job Positions', 'bugloos' ),
    'parent_item'                => null,
    'parent_item_colon'          => null,
    'edit_item'                  => __( 'Edit Job Position', 'bugloos' ),
    'update_item'                => __( 'Update Job Position', 'bugloos' ),
    'add_new_item'               => __( 'Add New Job Position', 'bugloos' ),
    'new_item_name'              => __( 'New Job Position Name', 'bugloos' ),
    'separate_items_with_commas' => __( 'Separate Job Positions with commas', 'bugloos' ),
    'add_or_remove_items'        => __( 'Add or remove Job Positions', 'bugloos' ),
    'choose_from_most_used'      => __( 'Choose from the most used Job Positions', 'bugloos' ),
    'not_found'                  => __( 'No Job Positions found.', 'bugloos' ),
    'menu_name'                  => __( 'Job Positions', 'bugloos' ),
  ];

  $args = [
    'hierarchical'      => false,
    'labels'            => $labels,
    'show_ui'           => true,
    'show_admin_column' => true,
    'query_var'         => true,
    'show_in_rest'      => true
  ];

  register_taxonomy( 'job-position', 'staff', $args );

  $labels = [
    'name'              => __( 'Departments', 'bugloos' ),
    'singular_name'     => __( 'Department', 'bugloos' ),
    'search_items'      => __( 'Search Department', 'bugloos' ),
    'all_items'         => __( 'All Department', 'bugloos' ),
    'parent_item'       => __( 'Parent Department', 'bugloos' ),
    'parent_item_colon' => __( 'Parent Department:', 'bugloos' ),
    'edit_item'         => __( 'Edit Department', 'bugloos' ),
    'update_item'       => __( 'Update Department', 'bugloos' ),
    'add_new_item'      => __( 'Add New Department', 'bugloos' ),
    'new_item_name'     => __( 'New department Name', 'bugloos' ),
    'menu_name'         => __( 'Departments', 'bugloos' ),
  ];

  $args = [
    'public'            => false,
    'hierarchical'      => false,
    'labels'            => $labels,
    'show_ui'           => true,
    'show_admin_column' => true,
    'query_var'         => true,
    'show_in_rest'      => true
  ];

  register_taxonomy( 'department', 'staff', $args );
}

function bugloos_job_post_type_init ()
{
  bugloos_staff();
  bugloos_projects();
  bugloos_services();
  bugloos_testimonials();
  bugloos_jobs();
}

add_action( 'init', 'bugloos_job_post_type_init' );

function bugloos_add_testimonials_columns ( $columns )
{
  unset( $columns[ 'date' ] );
  $columns[ 'service' ] = __( 'Service', 'bugloos' );
  $columns[ 'project' ] = __( 'Project', 'bugloos' );
  $columns[ 'date' ]    = __( 'Date' );

  return $columns;
}

add_filter( 'manage_testimonial_posts_columns', 'bugloos_add_testimonials_columns' );

function bugloos_set_testimonials_columns ( $column, $post_id )
{
  switch ( $column )
  {

    case 'service' :
      $service = get_field( 'service', $post_id );
      echo $service ? $service->post_title : '&mdash;';
      break;
    case 'project' :
      $project = get_field( 'project', $post_id );
      echo $project ? $project->post_title : '&mdash;';
      break;

  }
}

add_action( 'manage_testimonial_posts_custom_column', 'bugloos_set_testimonials_columns', 10, 2 );

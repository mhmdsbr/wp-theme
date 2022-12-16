<?php
$posts_per_page = $args[ 'count' ] ?? 3;

$testimonials = get_posts( [
  'post_type'      => 'testimonial',
  'posts_per_page' => $posts_per_page,
  'post_status'    => 'publish',
  'meta_query'     => [
    'relation' => 'AND',
    [
      'key'     => 'project',
      'value'   => '',
      'compare' => '='
    ],
    [
      'key'     => 'service',
      'value'   => '',
      'compare' => '='
    ]
  ]
] );

if ( $testimonials )
{
  $project_discovery_url = get_field( 'project_discovery_url', 'option' )
  ?>
  <section class="c-page-sections--js c-companies">
    <div id="particles-js-2"></div>
    <div class="u-flex u-flex--column o-title">
      <h1 class="e-default-title"><?php echo nl2br( get_field( 'testimonials_title', 'option' ) ); ?></h1>
      <p><?php echo nl2br( get_field( 'testimonials_description', 'option' ) ); ?></p>
    </div>
    <div class="u-flex u-flex--row u-flex--center c-companies__slider-wrapper">
      <?php
      foreach ( $testimonials as $post )
      {
        setup_postdata( $post );
        ?>
        <div class="u-flex u-flex--column c-companies__slider_items">
          <div class="u-flex u-flex--row c-companies__desc-container flex-nowrap">
            <div class="c-companies__desc col-12">
              <h4><?php the_title(); ?></h4>
              <p><?php echo get_field( 'job_position' ); ?></p>
              <p><?php echo nl2br( get_field( 'description' ) ); ?></p>
            </div>
            <?php
            $image = get_field( 'image' );
            if ( $image )
            {
              ?>
              <div class="c-companies__img">
                <img src="<?php echo esc_url( $image[ 'url' ] ); ?>" alt="<?php echo esc_attr( $image[ 'alt' ] ); ?>">
              </div>
              <?php
            }
            ?>
          </div>
          <?php
          if ( $project_discovery_url )
          {
            ?>
            <div class="u-flex u-flex--center c-button-module-2">
              <a href="<?php echo esc_url( $project_discovery_url ); ?>" target="_blank">
                <em class="button-circle"></em>
                <span aria-label="hidden"><?php _e( 'Discover More', 'bugloos' ); ?></span> </a>
            </div>
            <?php
          }
          ?>
        </div>
        <?php
      }
      ?>
    </div>
    <section class="sections__fixed-icons u-flex justify-content-center align-items-end no-gutters col">
      <div class="u-flex justify-content-center">
        <article class="e-icons__theme col-10">
          <label class="switch-label" for="theme-switch"></label>
        </article>
        <article id="howler-play4" class="c-icons__sound col-2">
          <div>
            <span></span> <span></span> <span></span> <span></span> <span></span>
          </div>
        </article>
      </div>
    </section>
  </section>
  <?php
}
wp_reset_postdata();

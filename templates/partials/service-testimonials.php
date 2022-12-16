<?php
$testimonials = get_posts( [
  'post_type'      => 'testimonial',
  'posts_per_page' => $args[ 'count' ] ?? - 1,
  'post_status'    => 'publish',
  'meta_key'       => 'service',
  'meta_value'     => get_the_ID()
] );

if ( $testimonials )
{
  ?>
  <section id="contact">
    <div class="u-flex u-flex--column o-title">
      <h1 class="e-default-title"><?php echo get_field( 'service_testimonial_title' ); ?></h1>
      <p><?php echo nl2br( get_field( 'service_testimonial_description' ) ); ?></p>
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
              <p>
                <span><?php echo get_field( 'extra_title' ); ?></span>
                <span><?php echo get_field( 'job_position' ); ?></span>
              </p>
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
        </div>
        <?php
      }
      ?>
    </div>
  </section>
  <?php
}
wp_reset_postdata();

<?php
$testimonials = get_posts( [
  'post_type'      => 'testimonial',
  'posts_per_page' => 1,
  'post_status'    => 'publish',
  'meta_key'       => 'project',
  'meta_value'     => get_the_ID()
] );

foreach ( $testimonials as $post )
{
  setup_postdata( $post );
  ?>
  <div class="testimonial-container">
    <em>"<?php echo nl2br( get_field( 'description' ) ); ?>"</em>
    <div class="u-flex owner-info">
      <?php
      $image = get_field( 'image' );
      if ( $image )
      {
        ?>
        <img src="<?php echo esc_url( $image[ 'url' ] ); ?>" alt="<?php echo esc_attr( $image[ 'alt' ] ); ?>">
        <?php
      }
      ?>
      <div class="u-flex u-flex--column">
        <span class="owner-name"><?php the_title(); ?></span>
        <span class="company-name"><?php echo get_field( 'job_position' ); ?></span>
      </div>
    </div>
  </div>
  <?php
}
wp_reset_postdata();

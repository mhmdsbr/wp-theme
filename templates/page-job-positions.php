<?php
/**
 * The template for job positions page
 * @package Bugloos
 *
 * Template Name: Job Positions
 */
get_header();
?>
<div class="main-container container-fluid g-0">
  <?php get_template_part( 'templates/partials/header-menu' ); ?>
  <div class="u-home__bg--secondary">
    <div id="particles-js-9"></div>
  </div>
  <div class="u-flex u-flex--column o-title">
    <h1 class="e-default-title"><?php _e( 'Job Positions', 'bugloos' ); ?></h1>
  </div>
  <section class="c-job-positions u-flex u-flex--column">
    <?php
    $jobs = get_posts( [
      'post_type'      => 'job',
      'posts_per_page' => - 1,
      'post_status'    => 'publish'
    ] );

    foreach ( $jobs as $post )
    {
      setup_postdata( $post );
      ?>
      <a href="<?php echo esc_url( get_the_permalink() ); ?>" class="job-positions__item u-flex u-flex--row u-flex--center">
        <h4><?php the_title(); ?></h4>
        <p><?php echo sprintf( '%s - %s', get_field( 'work_field' ), get_field( 'work_city' ) ); ?></p>
      </a>
      <?php
    }

    wp_reset_postdata();
    ?>
  </section>
  <?php get_template_part( 'templates/partials/footer-socials' ); ?>
</div>
<?php get_footer(); ?>
